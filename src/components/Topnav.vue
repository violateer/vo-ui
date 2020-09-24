<template>
<div class="topnav">
    <router-link to="/" class="logo">
        <svg class="icon">
            <use xlink:href="#icon-v"></use>
        </svg>
    </router-link>
    <ul class="menu">
        <li>
            <router-link to="/doc">文档</router-link>
        </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
        <use xlink:href="#icon-menu"></use>
    </svg>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue'
export default {
    props: {
        toggleMenuButtonVisible: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const menuVisible = inject < Ref < boolean > > ('xxx')
        const toggleMenu = () => {
            menuVisible.value = !menuVisible.value
        }
        return {
            toggleMenu
        }
    }
}
</script>

<style lang="less" scoped>
@color: #36018c;

.topnav {
    color: @color;
    display: flex;
    padding: 4px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
    justify-content: center;
    align-items: center;
    // background: rgba(0, 0, 0, 0.1);
    background: @color;

    >.logo {
        max-width: 6em;
        margin-right: auto;

        >svg {
            padding: 5px 0 0 5px;
            width: 32px;
            height: 32px;
            color: white;
        }
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
            color: white;

            >a {
                text-decoration: none;
                transition: all 0.5s;

                &:hover {
                    color: #c09dff;
                }
            }

        }
    }

    >.toggleAside {
        display: inline-block;
        width: 24px;
        height: 24px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
    }

    @media (max-width:500px) {
        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }

        >.toggleAside {
            display: inline-block;
        }
    }
}
</style>
