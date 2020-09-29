<demo>
调用Dialog组件使用
</demo>
<template>
<Button @click="toggle">toggle</Button>
<Dialog v-model:visible="DialogVisible" :closeOnClickOverlay="true" :ok="ok" :cancel="cancel">
    <template v-slot:content>
        <p>内容</p>
    </template>
    <template v-slot:title>
        <strong>加粗的标题</strong>
    </template>
</Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {
    ref
} from 'vue'
export default {
    components: {
        Dialog,
        Button
    },
    setup() {
        const DialogVisible = ref(false)
        const toggle = () => {
            DialogVisible.value = !DialogVisible.value
        }
        const ok = () => {
            console.log('ok');
        }
        const cancel = () => {
            console.log('cancel');
        }

        return {
            DialogVisible,
            toggle,
            ok,
            cancel
        }
    }
}
</script>
