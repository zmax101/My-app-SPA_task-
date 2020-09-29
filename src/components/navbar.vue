<template>
  <nav class="indigo darken-4">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">
        <i class="material-icons">edit_location</i>#My-App
      </router-link>
      <ul class="right hide-on-med-and-down">
        <li>
          <router-link to="./create">
            <i class="material-icons pulse">control_point</i>
          </router-link>
        </li>
        <li>
          <a href="/"><i class="material-icons">view_module</i></a>
        </li>
        <li>
          <a href="mobile.html"><i class="material-icons">info</i></a>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {};
</script>

<style scoped lang="scss">
nav {
  padding: 0 10%;
}
</style>