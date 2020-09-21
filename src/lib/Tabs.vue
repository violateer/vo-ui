<template>
<div class="vo-tabs">
    <div class="vo-tabs-nav">
        <div class="vo-tabs-nav-item" @click="select(title)" :class="{selected: title===selected}" v-for="(title,index) in titles" :key="index">{{title}}</div>
    </div>
    <div class="vo-tabs-content">
        <component class="vo-tabs-content-item" :is="current" />
    </div>
</div>
</template>

<script lang="ts">
import {
    computed
} from 'vue'
import Tab from "./Tab.vue"
export default {
    props: {
        selected: String
    },
    setup(props, context) {
        const defaults = context.slots.default()
        defaults.forEach(tag => {
            if (tag.type !== Tab) {
                throw new Error('Tabs子标签必须是Tab')
            }
        })
        const current = computed(() => {
            return defaults.filter((tag) => {
                return tag.props.title === props.selected
            })[0]
        })
        const titles = defaults.map(tag => tag.props.title)
        const select = (title: string) => {
            context.emit("update:selected", title)
        }
        return {
            defaults,
            titles,
            current,
            select
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
    }

    &-content {
        padding: 8px 0;
    }
}
</style>
