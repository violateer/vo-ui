<demo>
常规用法
</demo>
<template>
<Switch v-model:value="init" />
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
