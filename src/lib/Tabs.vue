<template>
<div class="vo-tabs">
    <div class="vo-tabs-nav">
        <div class="vo-tabs-nav-item" :class="{selected: title===selected}" v-for="(title,index) in titles" :key="index">{{title}}</div>
    </div>
    <div class="vo-tabs-content">
        <component class="vo-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index" />
    </div>
</div>
</template>

<script lang="ts">
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
        const titles = defaults.map(tag => tag.props.title)
        return {
            defaults,
            titles
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
