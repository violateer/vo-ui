<demo>
level
</demo>
<template>
<div>
    <Button level="main">主要按钮</Button>
    <Button level="warning">警告按钮</Button>
    <Button level="danger">危险按钮</Button>
</div>
<div>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link" level="warning">警告链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
</div>
<div>
    <Button theme="circle" level="main">主要文字按钮</Button>
    <Button theme="circle" level="warning">警告文字按钮</Button>
    <Button theme="circle" level="danger">危险文字按钮</Button>
</div>
</template>

<script>
import Button from '../lib/Button.vue'
export default {
    components: {
        Button
    }
}
</script>
