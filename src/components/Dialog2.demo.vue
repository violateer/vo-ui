<demo>
绑定openDialog函数使用
</demo>
<template>
<Button @click="showDialog">点击打开对话框</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {
    ref
} from 'vue'
import {
    openDialog
} from '../lib/openDialog'
export default {
    components: {
        Button
    },
    setup() {
        const showDialog = () => {
            openDialog({
                title: '标题',
                content: '你好',
                ok() {
                    console.log('ok')
                },
                cancel() {
                    console.log('cancel')
                }
            })
        }

        return {
            showDialog
        }
    }
}
</script>
