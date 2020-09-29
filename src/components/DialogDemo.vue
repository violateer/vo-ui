<template>
<div class="container">
    <h1>Dialog示例</h1>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
</div>
</template>

<script lang="ts">
import Dialog1Demo from './Dialog1.demo.vue'
import Dialog2Demo from './Dialog2.demo.vue'
import Demo from './Demo.vue'
export default {
    components: {
        Demo
    },
    setup() {
        return {
            Dialog1Demo,
            Dialog2Demo,
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
