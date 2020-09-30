<template>
<div class="vo-collapse-item">
    <div class="header" @click="toggleContentVisible">
        <h2>{{title}}</h2>
    </div>
    <div class="content" v-show="isVisible">
        <slot />
    </div>
</div>
</template>

<script>
import {
    computed,
    inject
} from 'vue'
export default {
    props: {
        title: {
            type: String
        },
        name: {
            type: [String, Number]
        }
    },
    setup(props) {
        const value = inject('value')
        console.log(value)
        const isVisible = props.name.indexOf(value) > -1
        console.log(props.name)
        console.log(isVisible)
        const toggleContentVisible = () => {
            isVisible.value = !isVisible.value
        }
        return {
            isVisible,
            toggleContentVisible
        }
    }
}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;

.vo-collapse-item {
    color: purple;
}
</style>
