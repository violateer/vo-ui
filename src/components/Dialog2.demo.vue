<demo>
调用openDialog函数使用
</demo>
<template>
<Button @click="showDialog">show</Button>
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
