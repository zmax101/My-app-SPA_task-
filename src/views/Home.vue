<template>
  <div class="row">
    <div class="col s8 offset-s2">
      <h1>Добро пожаловать, {{userName}} </h1>

      <hr />

      <h2>Текущие задачи:</h2>
      <p class="tasks-counter">количество задач: {{tasks.length}}</p>

      <div class="row">
        <div
          v-for="(task, idx) of displayTasks"
          :key="task.id"
          class="content col s12 m4 l4"
        >
          <div class="card indigo darken-4">
            <div class="card-content white-text">
              <span class="card-title">{{ task.title }}</span>
              <p>
                {{ task.desc }}
              </p>
              <div class="date">
                <p>{{ new Date(task.date).toLocaleDateString() }}</p>
                <p>{{ task.status }}</p>
              </div>
            </div>
            <div class="card-action">
              <router-link
                tag="button"
                class="btn btn-small"
                :to="'/task/' + task.id"
                >подробнее</router-link
              >
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
  components: {
  },
};
</script>

<style lang="scss" scoped>
h1,
h2 {
  text-align: center;
  color: white;
  font-weight: 600;
}
.row {
  justify-content: space-between;
}
.tasks-counter {
  color: white;
  font-size: 24px;
}
.card {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.54);
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.54);
  transition: 0.5s;
}
.card:hover {
  transform: scale(1.2);
}
.date {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
}
.card-action {
  display: flex;
  justify-content: space-around;
}
.card-action button {
  background: #04202c;
}
.btn-comp {
  background: green;
  margin-left: 10px;
}
.btn-comp:hover {
  background: rgb(28, 146, 28);
  transition: 0.5s;
}
.btn-del {
  background: red;
  margin-left: 10px;
}
.btn-del:hover {
  background: rgb(199, 56, 56);
  transition: 0.5s;
}
</style>