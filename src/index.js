import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  /*
    StricMode : 리액트에서 제공하는 검사도구 (배포 후 문제가 될만한 이슈들을 미리 집아줌)
    이 태그로 App을 감싸면 개발모드에서 오류를 잡기 위해 두번씩 렌더링 된다.
   */
);