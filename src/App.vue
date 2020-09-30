<template>
  <div id="app">
    <navbar />
    <div class="conteiner">
        <router-view />
    </div>
  </div>
</template>

<script>
    import navbar from '@/components/navbar'
    import mobileNav from '@/components/mobileNav'
    export default {
        components: {navbar, mobileNav}
    };
</script>

<style lang="scss" scoped>
    @import "~materialize-css/dist/css/materialize.min.css";
</style>
