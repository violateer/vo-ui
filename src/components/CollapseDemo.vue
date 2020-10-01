<template>
<div class="container">
    <h1>collapse组件</h1>
    <Demo :component="Collapse1Demo" />
</div>
</template>

<script lang="ts">
import Collapse1Demo from "./Collapse1.demo.vue"
import Demo from "./Demo.vue"
export default {
    components: {
        Demo,
        Collapse1Demo
    },
    setup() {
        return {
            Collapse1Demo
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
