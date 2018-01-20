<template>
    <b-nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <b-navbar-brand v-on:click="$router.push({ name: 'index' })">Home</b-navbar-brand>
        <b-navbar-toggle target="main_nav"></b-navbar-toggle>

        <b-collapse is-nav id="main_nav">

            <b-navbar-nav>
                <b-nav-item v-on:click="$router.push({ name: 'login' })">Login</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                    <!-- Using button-content slot -->
                    <template slot="button-content">
                        User
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Signout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-nav>
</template>

<script>

</script>

<style scoped>
    .navbar-brand:not(:disabled):not(.disabled), .nav-link:not(:disabled):not(.disabled) {
        cursor: pointer;
    }
</style>