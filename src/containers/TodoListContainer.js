import React, { Component } from 'react';
import TodoList from '../components/TodoList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todosActions from '../modules/todos';

class TodoListContainer extends Component {
  
  handleToggle = (id) =>{
      const {TodosAction} = this.props;
      TodosAction.toggle(id);
  }
  handleRemove = (id) =>{
      const {TodosAction} = this.props;
      TodosAction.remove(id);
  }

  render() {
    const {todos}= this.props;
    const {handleToggle, handleRemove} = this;

    return (
      <TodoList
      todos={todos}
      onToggle = {handleToggle}
      onRemove = {handleRemove}
      />
    )
  };
}

export default connect(
    (state) => ({todos : state.todos}),
    (dispatch) => ({TodosAction:bindActionCreators(todosActions,dispatch)})
)(TodoListContainer);