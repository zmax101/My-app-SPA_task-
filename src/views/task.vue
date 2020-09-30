<template>
  <div class="container">
    <div class="row">
      <div v-if="task">
        <div class="create-title-page">
          <h1>{{ task.title }}</h1>
          <h4>{{ task.subtitle }}</h4>
        </div>

        <hr />
        <!-- fomr --- form --- form -->
        <form @submit.prevent="submitHandler">
          <!-- tags --- tags --- tags -->
          <div class="chips" ref="chips"></div>
          <!-- /tags --- /tags --- /tags -->
          <!-- описание --- описание --- описание  -->
          <div class="input-field col s12">
            <textarea
              style="min-height: 100px"
              v-model="desc"
              id="desc"
              class="materialize-textarea"
              required
            ></textarea>
            <label for="desc">Описание</label>
          </div>
          <!-- /описание --- /описание --- /описание -->
          <!-- datepick --- datepick --- datepick -->
          <input class="datepicker-text" type="text" ref="datepicker" />
          <!-- /datepick --- /datepick --- /datepick -->
          <!-- buttonSend --- buttonSend --- buttonSend -->
          <div class="buttons col s12 m12 l12">
            <button class="send btn indigo darken-4 col s12" type="submit">
              изменить
              <i class="material-icons right">send</i>
            </button>
            <button
              class="compl btn green darken-4 col s12"
              type="submit"
              @click="completeTask()"
            >
              выполнено
            </button>
            <button
              class="removet btn red darken-4 col s12"
              type="submit"
              @click="removeTask(task)"
            >
              удалить
            </button>
          </div>
          <!-- /buttonSend --- /buttonSend --- /buttonSend -->
        </form>
        <!-- /fomr --- /form --- /form -->
      </div>
      <div v-else class="notFound">
        <h1>Такой задачи не найдено :с</h1>
        <br />
        <h2>или вы удалили все задачи :)</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id);
    },
  },
  data: () => ({
    desc: "",
    chips: null,
    date: null,
  }),
  mounted() {
    this.desc = this.task.desc;
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: "Task tags",
      data: this.task.tags,
    });
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: "dd.mm.yyyy",
      defaultDate: new Date(this.task.date),
      setDefaultDate: true,
    });
    setTimeout(() => {
      M.updateTextFields();
    }, 0);
  },
  methods: {
    submitHandler() {
      this.$store.dispatch("updateTask", {
        id: this.task.id,
        desc: this.desc,
        date: this.date.date,
      });
      this.$router.push("/");
    },
    completeTask() {
      this.$store.dispatch("completeTask", this.task.id);
      this.$router.push("/");
    },
    destroyed() {
      if (this.date && this.date.destroy) {
        this.date.destroy();
      }

      if (this.chips && this.chips.destroy) {
        this.chips.destroy();
      }
    },
    removeTask(task) {
      this.$store.commit("removeTask", task);
    },
  },
};
</script>

<style lang="scss" scoped>
h1,
h2,
h4 {
  text-align: center;
  color: white;
  font-weight: 600;
}
.create-title-page {
  justify-content: center;
}
.create-title-page i {
  font-size: 50px;
  vertical-align: bottom;
  margin-left: 15px;
}
form {
  background: #e8eaf6;
  padding: 15px;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
}
.btn-del {
  background: red;
}
.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}
.notFound {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media screen and (max-width: 480px) {
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 24px;
  }
  button {
    margin-top: 25px;
  }
  .buttons {
    display: block;
    margin-top: 5px;
  }
}
</style>