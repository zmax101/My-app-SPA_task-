<template>
  <nav class="indigo darken-4">
    <div class="container">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">
          <i class="material-icons">edit_location</i
          ><a class="logo-text">#My-App</a>
        </router-link>
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link to="./create">
              <i class="material-icons pulse">control_point</i>
            </router-link>
          </li>
          <li>
            <router-link to="/"
              ><i class="material-icons">view_module</i></router-link
            >
          </li>
          <li>
            <router-link to="#"
              ><i class="material-icons">info</i></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
nav {
  padding: 0 10px;
}
@media screen and (max-width: 480px) {
  .logo-text {
    font-size: 20px;
  }
}
</style>