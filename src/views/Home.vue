<template>
  <div class="home">
    <input v-model="msg">
    <p>msg: {{ msg }}</p>
    <p>helloMsg: {{ helloMsg }}</p>
    <p>computed msg: {{ computedMsg }}</p>
    <hr>
    <Hello ref="helloComponent" msg="Welcome! Again!" />
    <World />
    <hr>
    <p><button @click="greet">Greet</button></p>
    <p>
      Clicked: {{ count }} times
      <button @click="increment">+</button>
    </p>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Hello from '@/components/HelloWorld.vue'; // @ is an alias to /src
import World from '@/components/World'; // @ is an alias to /src
import { mapState, mapMutations } from 'vuex';

@Component({
  components: {
    Hello,
    World,
  },
  // Vuex's component binding helper can use here
  computed: mapState(['count']),
  methods: mapMutations(['increment']),
})
export default class Home extends Vue {
  // annotate refs type
  public $refs!: {
    helloComponent: Hello;
  };
  // additional declaration is needed
  // when you declare some properties in `Component` decorator
  public count!: number;
  public increment!: () => void;
  // inital data
  private msg: number = 123;
  // use prop values for initial data
  private helloMsg: string = 'Hello, ' + this.msg;
  // lifecycle hook
  private mounted() {
    this.greet();
  }
  // computed
  get computedMsg() {
    return 'computed ' + this.msg;
  }
  // method
  private greet() {
    this.$refs.helloComponent.sayHello();
  }
  // direct dispatch example
  private incrementIfOdd() {
    this.$store.dispatch('incrementIfOdd');
  }
}
</script>
