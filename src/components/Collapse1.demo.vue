<demo>
Collapse
</demo>
<template>
<Collapse>
    <CollapseItem title="菜单1" name="1">
        <p>内容1.0</p>
        <p>内容1.1</p>
        <p>内容1.3</p>
    </CollapseItem>
    <CollapseItem title="菜单2" name="2">
        <span>内容2</span>
    </CollapseItem>
    <CollapseItem title="菜单3" name="3">
        <span>内容3</span>
    </CollapseItem>
</Collapse>
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
