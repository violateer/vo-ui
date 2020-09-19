<template>
<div>
    <Switch :value="init" @input="init = $event" />
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
        const init = ref(true)
        return {
            init
        }
    }
}
</script>

<style scoped>

</style>
