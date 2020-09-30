<template>
<div class="vo-collapse-item">
    <div class="vo-collapse-item-header" @click="toggleContentVisible" @mouseover="showContent($event)" @mouseleave="hideContent($event)">
        <span>{{title}}</span>
    </div>
    <div class="vo-collapse-item-content" v-show="isVisible">
        <slot />
    </div>
</div>
</template>

<script lang="ts">
import {
    computed,
    inject
} from 'vue'
export default {
    props: {
        title: {
            type: String
        },
        name: {
            type: [String, Number]
        }
    },
    setup(props) {
        const value = < any[] > inject('value')
        let isVisible = value.indexOf(props.name) > -1
        const toggleContentVisible = () => {
            isVisible = !isVisible
        }
        const toggleContent = (e, height) => {
            const count = e.currentTarget.nextElementSibling.children.length
            const voContent = e.currentTarget.nextElementSibling
            voContent.style.height = height * count + 'px';
        }
        const showContent = (e) => {
            toggleContent(e, 24)

        }
        const hideContent = (e) => {
            toggleContent(e, 0)
        }
        return {
            isVisible,
            toggleContentVisible,
            showContent,
            hideContent
        }
    }
}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
$purple: #36018c;

.vo-collapse-item {
    color: purple;
    background-color: $purple;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 5px 0 5px;
    border: 5px solid transparent;
    overflow: hidden;

    &-header {
        >span {
            display: block;
            text-align: center;
            width: 5em;
            font-size: 16px;
            color: #fff;
        }
    }

    &-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 0;
        color: #fff;
        font-size: 14px;
        text-align: center;
        transition: all 250ms;
        overflow: hidden;

    }
}
</style>
