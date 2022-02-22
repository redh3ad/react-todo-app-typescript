import React, {FC, Dispatch, SetStateAction} from 'react'
import {Todo} from '../../../model';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import {MdDoneOutline} from 'react-icons/md'

interface Props{
  todo: Todo;
  todos: Todo[];
  setTodos:Dispatch<SetStateAction<Todo[]>>;
}

const SingleTodo:FC<Props> = ({todo, todos, setTodos}) => {

  const handleDone = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone}: todo))
  }

  return (
    <form className='todos__single'>
        {
          todo.isDone ? (
          <s className="todos__single-text">{todo.todo}</s>
          ) : (
          <span className="todos__single-text">{todo.todo}</span>
          )
        }
      
      <div className='todos__single-icons'>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete/>
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDoneOutline/>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo