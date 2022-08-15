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
  props: ["title"],
  template: `
    <div>
      <p>{{ title }}</p>  
    </div>
  `,
});

Vue.component("home",{
  name: "Home",
 
});

new Vue({
  el: "#app",
  data: {
    movies: [
      {
        title: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
      },
      {
        title: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
      },
      {
        title: "L'heroi va decidir travessar la porta que el portava a casa",
      },
      {
        title: "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ...",
      },
    ],
  },
  template: `
    <div>
      <escena v-for="(movie, index) in movies"
        :key="index"
        :title="movie.title">
      </escena>
    </div>
  `,
});