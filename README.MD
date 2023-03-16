- .babelrc 설정
  리액트에서 MobX-decorator를 사용하기 위해 설정합니다.
  [Babel7](https://ko.mobx.js.org/enabling-decorators.html)



#### Error Note
- 다음 오류내용은 바벨을 실행하는 여러가지 방법 중 웹팩에서 babel-loader로 실행하는데 생긴 오류입니다.오류는 다음과 같은데, JSX의 <> 태그 문법이 변환이 되지 않아 에러가 나는 상황입니다.  
  ```jsx
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
  ```jsx
  ! Experimental support for decorators is a feature that is subject to change in a future release.
  ```  
  [해결방법](https://blog.ddark.kr/Experimental-support-for-decorators-is-a-feature-that-is-subject-to-change-in-a-future-release/)