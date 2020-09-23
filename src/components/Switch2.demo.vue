<template>
<Switch v-model="init" disabled />
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {
    ref
} from 'vue'
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
