<template>
  <div class="row">
    <div class="col s8 offset-s2">
      <h1>Добро пожаловать в #My-App!</h1>

      <hr />

      <h2>Текущие задачи:</h2>

      <div class="row">
        <div
          v-for="(task, idx) of displayTasks"
          :key="task.id"
          class="col s12 m3"
        >
          <div class="card indigo darken-4">
            <div class="card-content white-text">
              <span class="card-title">{{ task.title }}</span>
              <p>
                {{ task.desc }}
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
    displayTasks() {
      return this.tasks.filter((t) => {
        if (!this.filter) {
          return true;
        }
        return t.status === this.filter;
      });
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
h1,
h2 {
  text-align: center;
  color: white;
  font-weight: 600;
}
.card {
  -webkit-box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.54);
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.54);
  transition: .5s;
}
.card:hover {
  transform: scale(1.2);
}
.card p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 500px;
}
</style>