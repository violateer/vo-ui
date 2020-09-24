<template>
<div class="demo" id="test">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
        <component :is="component" />
    </div>
    <div id="toggleCodeButton" class="demo-actions" @click="toggleCode($event)">
        显示代码
    </div>
    <div class="demo-code" v-if="codeVisible">
        <pre v-html="html" />
    </div>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
import 'prismjs'
import 'prismjs/themes/prism-coy.css'
import {
    computed,
    ref
} from 'vue'
const Prism = (window as any).Prism
export default {
    props: {
        component: Object
    },
    components: {
        Button
    },
    setup(props) {
        const html = computed(() => {
            return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
        })
        const codeVisible = ref(false)
        const toggleFlag = ref(false)
        const toggleCode = (e) => {
            codeVisible.value = !codeVisible.value
            if (toggleFlag.value === false) {
                e.target.innerText = '隐藏代码'
                toggleFlag.value = true
            } else {
                e.target.innerText = '显示代码'
                toggleFlag.value = false
            }
        }

        return {
            Prism,
            html,
            codeVisible,
            toggleCode
        }
    }
}
</script>

<style lang="less" scoped>
@border-color: #d9d9d9;
@purple: #36018c;

.demo {
    border: 1px solid @border-color;
    margin: 16px 0 32px;
    color: @purple;

    h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid @border-color;
    }

    &-component {
        padding: 16px;
    }

    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed @border-color;
        text-align: center;
        cursor: pointer;
        transition: all 250ms linear;

        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
            color: rgba(@purple, 0.8);
        }
    }

    &-code {
        padding: 8px 16px;
        border-top: 1px dashed @border-color;

        pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }
}
</style>
