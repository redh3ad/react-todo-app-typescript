import React,{FC, FormEvent, useState} from 'react';
import './App.scss';
import Input from './components/Input/Input';
import {Todo} from "./model";
import TodoList from './components/TodoList/TodoList';


const App:FC = () => {

const [todo, setTodo] = useState<string>('');
const [todos, setTodos] = useState<Todo[]>([]);

const handleAdd = (e:FormEvent) =>{
  e.preventDefault();
  if(todo){
    setTodos([...todos,{ id:Date.now(), todo, isDone: false}]);
    setTodo('');
  }
}
  return (
    <div className="App">
      <span className='header'>Taskify</span>
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
