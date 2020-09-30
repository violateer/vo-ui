<template>
<div class="container">
    <h1>collapse组件</h1>
    <hr />
    <Collapse title="手风琴下拉菜单">
        <CollapseItem>菜单1</CollapseItem>
        <CollapseItem>菜单2</CollapseItem>
        <CollapseItem>菜单3</CollapseItem>
    </Collapse>
</div>
</template>

<script>
import Collapse from '../lib/Collapse.vue'
import CollapseItem from '../lib/CollapseItem.vue'
export default {
    components: {
        Collapse,
        CollapseItem
    }
}
</script>

<style lang="scss" scoped>
$purple: #36018c;

.container {
    color: $purple;
}
</style>
