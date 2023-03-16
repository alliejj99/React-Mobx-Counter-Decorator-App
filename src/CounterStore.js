import { action, computed, makeObservable, observable } from "mobx";

// 기존과 달리 mobX 6버전의 문법을 사용합니다.

export default class CounterStore {
  @observable count = 0; // 초기값을 정의 합니다.

  constructor() {
    makeObservable(this);
  }

  @computed get isNegative() {
    return this.count < 0 ? "Yes" : "No"; // action의 내용에 따라 state값을 업데이트 합니다.
  }

  @action increase() {
    // actions의 increase함수를 실행하면 카운트값이 1 증가합니다.
    this.count++;
  }

  @action decrease() {
    // actions의 decrease함수를 실행하면 카운트값이 1 감소합니다.
    this.count--;
  }
}
