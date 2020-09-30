import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import CollapseDemo from './components/CollapseDemo.vue'

import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import getStart from './markdown/get-start.md'
import install from './markdown/install.md'
import { h } from 'vue'

const loadMarkdown = string => h(Markdown, {content: string, key: string})

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc, children: [
            {path: '', redirect: '/doc/intro'},
            {path: 'intro', component: loadMarkdown(intro)},
            {path: 'get-start', component: loadMarkdown(getStart)},
            {path: 'install', component: loadMarkdown(install)},
            {path: 'switch', component: SwitchDemo},
            {path: 'button', component: ButtonDemo},
            {path: 'dialog', component: DialogDemo},
            {path: 'tabs', component: TabsDemo},
            {path: 'collapse', component: CollapseDemo}
        ]}
    ]
})
