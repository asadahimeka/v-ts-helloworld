import Vue, { CreateElement } from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class World extends Vue {
  public render(h: CreateElement) {
    return <p>This is rendered via TSX...</p>;
  }
}
