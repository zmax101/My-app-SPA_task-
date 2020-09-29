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
    export default {
        components: {navbar}
    }
</script>

<style lang="scss" scoped>
    @import "~materialize-css/dist/css/materialize.min.css";
</style>
