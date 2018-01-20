<template>
    <div id="app">
        <nav-bar/>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style lang="scss">
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>

<style lang="css">
    @import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
</style>
