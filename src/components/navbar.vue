<template>
  <nav class="indigo darken-4">
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">
        <i class="material-icons">edit_location</i>#My-App
      </a>
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
          <a href="collapsible.html"><i class="material-icons">refresh</i></a>
        </li>
        <li>
          <a href="mobile.html"><i class="material-icons">more_vert</i></a>
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
  padding: 0 30%;
}
</style>