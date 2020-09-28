<template>
<div class="container">
    <h1 class="title">Switch 组件示例 </h1>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Demo :component="Button5Demo" />
</div>
</template>

<script lang="js">
import Button1Demo from "./Button1.demo.vue"
import Button2Demo from "./Button2.demo.vue"
import Button3Demo from "./Button3.demo.vue"
import Button4Demo from "./Button4.demo.vue"
import Button5Demo from "./Button5.demo.vue"
import Demo from "./Demo.vue"
export default {
    components: {
        Demo
    },
    setup() {
        const onClick = () => {
            console.log('Hi')
        }
        return {
            onClick,
            Button1Demo,
            Button2Demo,
            Button3Demo,
            Button4Demo,
            Button5Demo,
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
