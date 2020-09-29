<demo>
Tabs
</demo>
<template>
<Tabs v-model:selected="selectedInit">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
    <Tab title="导航3">内容3</Tab>
</Tabs>
</template>

<script>
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import {
    ref
} from 'vue'
export default {
    components: {
        Tabs,
        Tab
    },
    setup() {
        const selectedInit = ref('导航1')
        return {
            selectedInit
        }
    }
}
</script>
