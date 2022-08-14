//import Vue from 'vue';
/*import home from './components/home.vue';
import escena from './components/escena.vue';

export default {
  components: {
    home,
    escena
  },
}*/

Vue.component("escena",{
  name: "Escena",
  template: "<p>El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial</p>"
});

Vue.component("home",{
  name: "Home",
  template: '<escena />'
});

new Vue({
    el: "#app",
    template: '<home />'
  });