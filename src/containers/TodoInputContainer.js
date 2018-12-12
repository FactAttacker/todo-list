import React, { Component } from 'react'
import TodoInput from '../components/TodoInput'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


//액션 생성 함수들을 한꺼번에 불러온다.
import * as  inputAction from '../modules/input';
import * as  todosAction from '../modules/todos';

class TodoInputContainer extends Component {

  id = 1
  getId = () =>{
      return ++this.id;
  }   

  handleChange = (e) =>{
      const {value} = e.target;
      const {InputActions} = this.props;
      InputActions.setInput(value);
  }

  handleInsert = () =>{
      const {InputActions, TodosActions, value} = this.props;
      const todo = {
          id: this.getId(),
          text : value,
          done : false
      };
      TodosActions.insert(todo);
      InputActions.setInput('');
  }

  render() {
      const {value} = this.props;
      const {handleChange, handleInsert} = this;
    return (
      <TodoInput
      onChange={handleChange}
      onInsert={handleInsert}
      value={value}
      />
    );
  }
}

export default connect(
    (state) => ({
        value : state.input.get('value')
    }),
    (dispatch) => ({
        /*
         bindActionCreators를 사용하면 자동으로 다음 작업들을 합니다.
         {
             actionCreator: (...params) => dispatch(actionCreator(...params))
         } 
         그래서 이전에 우리가 했던 것처럼 일일이 dispatch할 필요가 없습니다.
         예를 들어 InputAcrtions에는 다음 작ㅇ버이 되어 있는 것이죠.
         InputActions:{
             setInput : (value) => dispatch(inputActions.setInput(value)) 
         }
         나중에 이를 호출할 때는 this.props.InputACtions.setInput을 호출하면 됩니다.
         */
        InputActions : bindActionCreators(inputAction, dispatch),
        TodosActions : bindActionCreators(todosAction, dispatch)
    }),
)(TodoInputContainer)