<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="onClick">{{ testStr }}</h2>
    <p>hello times: {{ helloTimes }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop(String) private msg!: string;
  private testStr: string = 'test_str ' + this.msg;
  private helloTimes: number = 0;

  public sayHello() {
    this.helloTimes++;
  }

  public onClick() {
    alert(this.testStr + this.computedMsg);
    this.testStr = 'str change';
  }

  private mounted() {
    'do nothing';
  }

  get computedMsg() {
    return ' computed_' + this.testStr;
  }

  @Watch('testStr')
  private onStrChange(val: string) {
    alert(val);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
