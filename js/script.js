const appData = {
  currentStep: 1,
  message: 'Привет, Vue!',
};

const app = new Vue({
  el: '#app',
  data: appData,
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    },
  },
});
