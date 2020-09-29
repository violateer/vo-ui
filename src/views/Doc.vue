<template>
<div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
        <aside v-if="menuVisible">
            <h2>文档</h2>
            <ol>
                <li>
                    <router-link to="/doc/intro">介绍</router-link>
                </li>
                <li>
                    <router-link to="/doc/install">安装</router-link>
                </li>
                <li>
                    <router-link to="/doc/get-start">开始</router-link>
                </li>
            </ol>
            <h2>组件列表</h2>
            <ol>
                <li>
                    <router-link to="/doc/switch">Switch 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/button">Button 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/dialog">Dialog 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/tabs">Tabs 组件</router-link>
                </li>
            </ol>
        </aside>
        <main>
            <router-view />
        </main>
    </div>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue'
import Topnav from "../components/Topnav.vue"
export default {
    components: {
        Topnav
    },
    setup() {
        const menuVisible = inject < Ref < boolean > > ('xxx')
        return {
            menuVisible
        }
    }
}
</script>

<style lang="less" scoped>
@purple: #36018c;

.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    .nav {
        flex-shrink: 0;
    }

    .content {
        flex-grow: 1;
        padding-top: 60px;
        padding-left: 156px;

        @media (max-width: 500px) {
            padding-left: 0;
        }
    }
}

.content {
    display: flex;
    color: white;
    -o-user-select: none;
    /*火狐 firefox*/
    -moz-user-select: none;
    /*webkit浏览器*/
    -webkit-user-select: none;
    /*IE10+*/
    -ms-user-select: none;
    /*早期的浏览器*/
    -khtml-user-select: none;
    user-select: none;

    aside {
        flex-shrink: 0;

        ol {
            li {
                overflow: hidden;

                a {
                    transition: all 250ms;

                    &:hover {
                        background: white;
                        color: @purple;
                        transform: translateX(8px);
                    }

                }
            }
        }
    }

    main {
        flex-grow: 1;
        padding: 16px;
        background: #fff;
    }
}

aside {
    background: @purple;
    width: 150px;
    padding: 16px 0;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    z-index: 10;

    h2 {
        margin-bottom: 4px;
        padding: 0 16px;
    }

    ol {
        li {
            a {
                display: block;
                padding: 4px 16px;
                text-decoration: none;
            }

            .router-link-active {
                background: white;
                color: @purple;
                transform: translateX(8px);
            }
        }
    }
}

main {
    overflow: auto;
}
</style>
