<demo>
size
</demo>
<template>
<div>
    <Button size="big">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
</div>
<div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普通</Button>
    <Button size="small" theme="link">小小小</Button>
</div>
<div>
    <Button size="big" theme="circle">大大大</Button>
    <Button theme="circle">普普通</Button>
    <Button size="small" theme="circle">小小小</Button>
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
