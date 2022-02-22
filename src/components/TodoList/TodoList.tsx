import React, {FC, Dispatch, SetStateAction} from 'react';
import {Todo} from '../../model';
import SingleTodo from './SingleTodo/SingleTodo'

interface Props {
  todos: Todo[];
  setTodos:Dispatch<SetStateAction<Todo[]>>;
};

const TodoList:FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
      {
      todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))
      }
    </div>
  )
}

export default TodoList