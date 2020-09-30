<template>
  <div class="mobile-nav">
    <ul id="slide-out" class="sidenav">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="images/office.jpg" />
          </div>
          <a href="#user" class="sidenav-close"
            ><img class="circle" src="images/yuna.jpg"
          /></a>
          <a href="#name"><span class="white-text name">John Doe</span></a>
          <a href="#email"
            ><span class="white-text email">jdandturk@gmail.com</span></a
          >
        </div>
      </li>
      <li>
        <a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a>
      </li>
      <li><a href="#!">Second Link</a></li>
      <li><div class="divider"></div></li>
      <li><a class="subheader">Subheader</a></li>
      <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
    </ul>
    <a href="#" data-target="slide-out" class="sidenav-trigger"
      ><i class="material-icons">меню</i></a
    >
  </div>
</template>

<script>
export default {
  mounted() {
    this.sidenav = M.Sidenav.init(this.$refs.sidenav, {
        edge: "left",
    });
  },
};
</script>

<style lang="scss" scoped>
</style>