<template>
<div>
    <Switch v-model:value="init" />
</div>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
import Switch from "../lib/Switch.vue"
export default {
    components: {
        Switch
    },
    setup() {
        const init = ref(false)
        return {
            init
        }
    }
}
</script>

<style scoped>

</style>
