<template>
  <div>
    <h1>Sample Page</h1>
    <message-input @click="onClick" v-model="message" />
    <div>
      <h3>👇🏻 API Response</h3>
      <input type="text" v-model="apiResponse" />
    </div>
  </div>
</template>

<script>
import api from '../../plugins/api';
import MessageInput from '../../components/message-input';

export default {
  name: 'sample-message',
  components: {
    MessageInput,
  },
  data() {
    return {
      message: '',
    };
  },
  computed: {
    apiResponse() {
      return '';
    },
    params() {
      return {
        message: this.message,
      };
    },
  },
  methods: {
    async onClick() {
      try {
        const apiResponse = await api.sample.get(params);
        console.log(apiResponse);
        this.apiResponse = apiResponse;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
