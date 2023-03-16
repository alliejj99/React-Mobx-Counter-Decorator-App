//  rce로 기본 구조 생성
import React from "react";
import { observer } from "mobx-react";

@observer
class App extends React.Component {
  render() {
    const myCounter = this.props.counter;

    return (
      <div style={{ textAlign: "center", padding: "16px" }}>
        카운트: {myCounter.count}
        <br />
        <br />
        마이너스?: {myCounter.isNegative}
        <br />
        <br />
        <button onClick={() => myCounter.increase()}>+</button>
        <button onClick={() => myCounter.decrease()}>-</button>
      </div>
    );
  }
}

export default App;
