<template>
  <nav class="indigo darken-4">
    <div class="container">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">
          <i class="material-icons">edit_location</i
          ><a class="logo-text">#My-App</a>
        </router-link>

        <ul class="right">
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
            <router-link to="./info"><i class="material-icons">info</i></router-link>
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
  padding: 0 10px 70px;
}
.burger {
  display: none;
}
@media screen and (max-width: 992px) {
  .brand-logo {
    left: 0;
    transform: translateX(0);
  }
}
@media screen and (max-width: 480px) {
  .logo-text {
    display: none;
  }
  .burger {
    display: block;
    float: right;
  }
}
</style>

