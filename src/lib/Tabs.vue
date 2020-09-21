<template>
<div class="vo-tabs">
    <div class="vo-tabs-nav" ref="container">
        <div class="vo-tabs-nav-item" @click="select(title)" :class="{selected: title===selected}" v-for="(title,index) in titles" :ref="el => { if(title === selected) selectedItem = el }" :key="index">{{title}}</div>
        <div class="vo-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="vo-tabs-content">
        <component class="vo-tabs-content-item" :is="current" :key="current.props.title" />
    </div>
</div>
</template>

<script lang="ts">
import {
    computed,
    onMounted,
    onUpdated,
    ref,
    watchEffect
} from 'vue'
import Tab from "./Tab.vue"
export default {
    props: {
        selected: String
    },
    setup(props, context) {
        const selectedItem = ref < HTMLDivElement[] > (null)
        const indicator = ref < HTMLDivElement[] > (null)
        const container = ref < HTMLDivElement[] > (null)

        const moveIndicator = () => {
            const {
                width
            } = selectedItem.value.getBoundingClientRect()
            indicator.value.style.width = width + 'px'

            const {
                left: left1
            } = container.value.getBoundingClientRect()
            const {
                left: left2
            } = selectedItem.value.getBoundingClientRect()
            const left = left2 - left1
            indicator.value.style.left = left + 'px'
        }

        onMounted(moveIndicator)

        onUpdated(moveIndicator)

        const defaults = context.slots.default()
        defaults.forEach(tag => {
            if (tag.type !== Tab) {
                throw new Error('Tabs子标签必须是Tab')
            }
        })
        const current = computed(() => {
            return defaults.find(tag => tag.props.title === props.selected)
        })
        const titles = defaults.map(tag => tag.props.title)
        const select = (title: string) => {
            context.emit("update:selected", title)
        }
        return {
            defaults,
            titles,
            current,
            select,
            selectedItem,
            indicator,
            container
        }
    }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.vo-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $blue;
            }
        }

        &-indicator {
            position: absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms;
        }
    }

    &-content {
        padding: 8px 0;
    }
}
</style>
