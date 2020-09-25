<template>
<button class="vo-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="vo-loadingIndicator"></span>
    <slot />
</button>
</template>

<script lang="ts">
import {
    computed
} from 'vue'
export default {
    props: {
        theme: {
            type: String,
            default: 'button'
        },
        size: {
            type: String,
            default: 'normal'
        },
        level: {
            type: String,
            default: "normal",
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const {
            theme,
            size,
            level
        } = props
        const classes = computed(() => {
            return {
                [`vo-theme-${theme}`]: theme,
                [`vo-size-${size}`]: size,
                [`vo-level-${level}`]: level,
            }
        })
        return {
            classes
        }
    }
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$purple: #36018c;
$radius: 4px;
$red: red;
$grey: grey;

.vo-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;

    &+& {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        color: $purple;
        border-color: $purple;
    }

    &:focus {
        outline: none;
    }

    &::-moz-focus-inner {
        border: 0;
    }

    &.vo-theme-link {
        border-color: transparent;
        box-shadow: none;
        color: $purple;

        &:hover,
        &:focus {
            color: lighten($purple, 10%);
        }
    }

    &.vo-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: red;

        &:hover,
        &:focus {
            background: darken(white, 5%);
            ;
        }
    }

    &.vo-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px
    }

    &.vo-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }

    &.vo-theme-button {
        &.vo-level-main {
            background: $purple;
            color: white;
            border-color: $purple;

            &:hover,
            &:focus {
                background: darken($purple, 10%);
                border-color: darken($purple, 10%);
            }
        }

        &.vo-level-danger {
            background: $red;
            border-color: $red;
            color: white;

            &:hover,
            &:focus {
                background: darken($red, 10%);
                border-color: darken($red, 10%);
            }
        }
    }

    &.vo-theme-link {
        &.vo-level-danger {
            color: $red;

            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }

    &.vo-theme-text {
        &.vo-level-main {
            color: $purple;

            &:hover,
            &:focus {
                color: darken($purple, 10%);
            }
        }

        &.vo-level-danger {
            color: $red;

            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }

    &.vo-theme-button {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;

            &:hover {
                border-color: $grey;
            }
        }
    }

    &.vo-theme-link,
    &.vo-theme-text {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;
        }
    }

    >.vo-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: $purple $purple $purple transparent;
        border-style: solid;
        border-width: 2px;
        animation: vo-spin 1s infinite linear;
    }
}

@keyframes vo-spin {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}
</style>
