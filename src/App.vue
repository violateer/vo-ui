<template>
<h2>导航栏 | <router-link to="/">Frank</router-link> | <router-link to="/xxx">Frank2</router-link>
</h2>
<hr>
<router-view />
</template>

<script>
export default {
    name: 'App'
}
</script>
