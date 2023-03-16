import { computed, makeObservable, observable } from "mobx";

// 기존과 달리 mobX 6버전의 문법을 사용합니다.
export default class CounterStore {
  @observable count = 0;

  constructor() {
    makeObservable(this);
  }

  @computed get isNegative() {
    return this.count < 0 ? "Yes" : "No";
  }
}
