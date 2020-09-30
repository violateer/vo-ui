<template>
<div class="container">
    <h1>collapse组件</h1>
    <hr />
    <Collapse :value="activeName">
        <CollapseItem title="菜单1" name="1">内容1</CollapseItem>
        <CollapseItem title="菜单2" name="2">内容2</CollapseItem>
        <CollapseItem title="菜单3" name="3">内容3</CollapseItem>
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
    },
    setup() {
        const activeName = ["1", "2", "3"]
        return {
            activeName
        }
    }
}
</script>

<style lang="scss" scoped>
$purple: #36018c;

.container {
    color: $purple;
}
</style>
