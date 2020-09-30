<template>
<div class="vo-collapse">
    <div class="title" @click="toggleContentVisible">{{title}}</div>
    <ul class="content" v-if="isVisible">
        <li>菜单1</li>
        <li>菜单2</li>
        <li>菜单3</li>
        <li>菜单4</li>
        <li>菜单5</li>
    </ul>
</div>
</template>

<script>
import {
    ref
} from 'vue'
export default {
    props: {
        title: {
            type: String,
            default: "标题"
        }
    },
    setup(props) {
        const title = props.title
        const isVisible = ref(false)
        const toggleContentVisible = () => {
            isVisible.value = !isVisible.value
        }
        return {
            title,
            isVisible,
            toggleContentVisible
        }
    }
}
</script>

<style lang="scss" scoped>
$purple:#36018c;
$border-radius: 4px;

.vo-collapse {
    width: 10em;
    text-align: center;
    background-color: skyblue;
    color: $purple;
    -o-user-select: none;
    /*火狐 firefox*/
    -moz-user-select: none;
    /*webkit浏览器*/
    -webkit-user-select: none;
    /*IE10+*/
    -ms-user-select: none;
    /*早期的浏览器*/
    -khtml-user-select: none;
    user-select: none;
}
</style>
