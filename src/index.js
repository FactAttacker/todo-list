import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

//리덕스 관련 불러오기
import { createStore } from 'redux';
import modules from './modules'; 
import { Provider } from 'react-redux';//Provider : 리액트 애플리케이션에 손쉽게 스토어를 연동할수 있도록 도와주는 컴포넌트



/*
- 엔트로 포인트 index.js - 
엔트리 : 시작점을 웹팩에서는 엔트리(entry)라고 한다. http://blog.jeonghwan.net/js/2017/05/15/webpack.html*/

//스토어 생성 (스토어 : 애플리케이션의 상태 값들을 내장하고 있다.)
const store = createStore(modules , window.devToolsExtension && window.devToolsExtension()); //createStore를 불러와 해당 함수에 직접 만든 리듀서를 넣어서 생성
//store에 state를 넣어 공유 하는 개념


ReactDOM.render(
    <Provider store={store}>{/*Provider : 스토어에 state를 갖고 있는 리듀서 넣게 해준다*/}
       <App />
    </Provider>
    , document.getElementById('root')
    );
