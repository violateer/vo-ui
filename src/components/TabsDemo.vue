<template>
<div class="container">
    <h1>Tabs示例</h1>
    <Demo :component="Tabs1Demo" />
</div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
export default {
    components: {
        Demo
    },
    setup() {
        return {
            Tabs1Demo
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
