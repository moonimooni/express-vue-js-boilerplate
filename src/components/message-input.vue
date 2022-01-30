<template>
  <div>
    <form>
      <input type="text" v-model="message" />
      <button>SEND MESSAGE</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'message-input',
  props: ['value'],
  computed: {
    message: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
