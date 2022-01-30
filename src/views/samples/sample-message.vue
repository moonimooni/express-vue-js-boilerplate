<template>
  <div>
    <h1>Sample Page</h1>
    <message-input v-model="message" />
    <div>
      <h3>👇🏻 API Response</h3>
    </div>
  </div>
</template>

<script>
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
};
</script>
