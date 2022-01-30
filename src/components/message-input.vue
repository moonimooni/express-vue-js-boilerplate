<template>
  <div>
    <form>
      <input type="text" v-model="message" />
      <button type="button" @click.prevent="onSendMessage">SEND MESSAGE</button>
    </form>
  </div>
</template>

<script>
import api from '../plugins/api';

export default {
  name: 'message-input',
  props: ['value'],
  data() {
    return {
      apiResponse: '',
    };
  },
  computed: {
    params() {
      return {
        message: this.message,
      };
    },
    message: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    async onSendMessage() {
      try {
        const apiResponse = await api.sample.get(this.params);
        console.log(apiResponse);
        this.apiResponse = apiResponse;
      } catch (err) {
        console.error(err);
      }
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
