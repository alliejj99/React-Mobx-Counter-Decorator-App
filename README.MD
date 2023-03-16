### React Counter App - MobX: Decorator
  리액트 구성부터 바벨과 웹팩을 함께 작성해보고,
  카운터 앱을 mobX로 상태관리하는 스토어 생성과 호출하기를
  Decorator 문법으로 사용해 보았습니다.
    
    
#### 데코레이터를 사용해서 카운터 앱 만든 순서
  1. npm init -y (npm 기본 구성 설정)
  2. .babelrc 설정
    리액트에서 MobX-decorator를 사용하기 위해 설정합니다.  
    [Babel7](https://ko.mobx.js.org/enabling-decorators.html) 
  3. webpack.config 구성
  4. 필요한 모듈 다운  
    package.json  
  ```javascript
    "devDependencies": {
      "@babel/core": "^7.18.6",
      "@babel/plugin-proposal-class-properties": "^7.18.6",
      "@babel/plugin-proposal-decorators": "^7.21.0",
      "@babel/preset-env": "^7.18.6",
      "@babel/preset-react": "^7.18.6",
      "babel-loader": "^8.2.5",
      "babel-plugin-transform-decorators-legacy": "^1.3.5",
      "html-webpack-plugin": "^5.5.0",
      "webpack": "^5.73.0",
      "webpack-cli": "^4.10.0",
      "webpack-dev-server": "^4.9.3"
    },
    "dependencies": {
      "mobx": "^6.6.1",
      "mobx-react": "^7.5.2",
      "mobx-react-devtools": "^6.0.1",
      "react": "^18.2.0",
      "react-dom": "^18.2.0"
    },
  ```
    5. index.html 가상돔 사용할 페이지 구성
    6. index.js 생성 후 싱글페이지 구성
    7. 렌더링할 페이지 기본 구성 App.js 후 index.js에서 호출
    8. CounterStore.js 만들어서 mobX-Decorator 문법에 따라 커스텀 스토어 생성
    9. index.js에서 CounterStore.js를 store로 App.js에 넘겨주기  
      ```jsx
        import React from "react";
        import ReactDOM from "react-dom/client";
        import CounterStore from "./CounterStore";
        import App from "./App";

        const store = new CounterStore();

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(<App counter={store} />);
      ```
    10. App.js UI생성 및 CounterStore에서 정의한 함수 및 State값 호출하기
    11. npm start로 구동하여 확인하기  
---
#### npm installs
```bash
$ npm i --save-dev @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators 
```
---
#### Error Note
- 다음 오류내용은 바벨을 실행하는 여러가지 방법 중 웹팩에서 babel-loader로 실행하는데 생긴 오류입니다.오류는 다음과 같은데, JSX의 <> 태그 문법이 변환이 되지 않아 에러가 나는 상황입니다.  
  ```bash
  Module build failed (from ./node_modules/babel-loader/lib/index.js):
  SyntaxError: C:\Users\dkfma\Documents\GitHub\mobx-counter-app.2\src\index.js: Support for the experimental syntax 'jsx' isn't currently enabled (6:3):

    4 |
    5 | render(
  > 6 |   <div>
      |   ^
    7 |     <App />
    8 |   </div>,
    9 |
  ```  
  해결방법: .babelrc 파일 내에 "plugins"전에 다음과 같은 코드를 추가합니다.  
  ```jsx
  { 
    "presets": [
      "@babel/preset-env",  
      "@babel/preset-react" 
    ],
  }
  ```  

- 다음 오류 내용은 Visual Studio Code가 내보내는 오류로, TypeScript에서 ES7의 Decorator를 추가적인 설정을 하지 않고 사용할 경우 발생하는 오류입니다.  
  ```bash
  ! Experimental support for decorators is a feature that is subject to change in a future release.
  ```  
  [해결방법](https://blog.ddark.kr/Experimental-support-for-decorators-is-a-feature-that-is-subject-to-change-in-a-future-release/)
  

- 다음 오류 내용은 mobX의 @observer를 사용할때 생기는 에러입니다.
  ```bash
  useObserver.js:132 Uncaught TypeError: Cannot call a class as a function
    at _classCallCheck (App.js:10:99)
  ```  
  해결방법:  
  ```jsx
  import { observer } from "mobx-react-lite";
  @observer
  class App extends React.Component {
    render(){...}
  }
  export default App;
  ```
  위와 같이 코드를 작성했다면 라이브러리를 잘못 호출 한것으로 다음과 같이 변경하면 해결됩니다.
  ```jsx
  import { observer } from "mobx-react";

  @observer
  class App extends React.Component {
    render(){...}
  }
  export default App;
  ```
