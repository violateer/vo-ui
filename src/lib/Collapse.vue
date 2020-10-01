<template>
<div class="vo-collapse">
    <div class="vo-collapse-content">
        <slot />
    </div>
</div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
$purple:#36018c;
$border-radius: 4px;

.vo-collapse {
    display: inline-block;
    margin-top: 10px;
    background-color: transparent;
    color: $purple;
    overflow: hidden;

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

    &-content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        transition: all 250ms;
        height: 100%;

    }
}
</style>
