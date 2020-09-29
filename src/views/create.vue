<template>
  <div class="container">
    <div class="row">
      <div class="create-title-page">
        <h1>Создать задачу</h1>
        <h1><i class="material-icons">control_point</i></h1>
      </div>

      <hr />
      <!-- fomr --- form --- form -->
      <form @submit.prevent="submitHandler">
        <!-- tags --- tags --- tags -->
        <div class="chips" ref="chips"></div>
        <!-- /tags --- /tags --- /tags -->
        <!-- title --- title --- title -->
        <div class="col s6">
          <div class="input-field">
            <input
              v-model="title"
              id="title"
              type="text"
              class="validate"
              required
            />
            <label for="title">Название</label>
            <span class="helper-text" data-error="ВВЕДИТЕ НАЗВАНИЕ"></span>
          </div>
        </div>
        <!-- /title --- /title --- /title -->
        <!-- subtitle --- subtitle --- subtitle -->
        <div class="input-field col s6">
          <input
            v-model="subtitle"
            id="subtitle"
            type="text"
            class="validate"
          />
          <label for="subtitle">Доп.название</label>
        </div>
        <!-- /subtitle --- /subtitle --- /subtitle -->
        <!-- описание --- описание --- описание  -->
        <div class="input-field col s12">
          <textarea
            v-model="desc"
            id="desc"
            class="materialize-textarea"
          ></textarea>
          <label for="textarea1">Описание</label>
        </div>
        <!-- /описание --- /описание --- /описание -->
        <!-- datepick --- datepick --- datepick -->
        <input class="datepicker-text" type="text" ref="datepicker" />
        <!-- /datepick --- /datepick --- /datepick -->
        <!-- buttonSend --- buttonSend --- buttonSend -->
        <button class="btn indigo darken-4" type="submit" name="action">
          сохранить
          <i class="material-icons right">send</i>
        </button>
        <!-- /buttonSend --- /buttonSend --- /buttonSend -->
      </form>
      <!-- /fomr --- /form --- /form -->
    </div>
  </div>
</template>

<script>
export default {
  name: "create",
  data: () => ({
    title: "",
    subtitle: "",
    desc: "",
    chips: null,
    date: null,
  }),
  mounted() {
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: "task tags",
    });
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: "dd.mm.yyyy",
      defaultDate: new Date(),
      setDefaultDate: true,
    });
  },
  methods: {
    submitHandler() {
      const task = {
        title: this.title,
        subtitle: this.subtitle,
        desc: this.desc,
        id: Date.now(),
        status: "active",
        tags: this.chips.chipsData,
        date: this.date.date,
      };

      this.$store.dispatch('createTask', task);
      this.$router.push('/');
    },
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
.create-title-page {
  display: flex;
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
</style>