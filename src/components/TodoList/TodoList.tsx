import React, { FC, Dispatch, SetStateAction } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../../model';
import SingleTodo from './SingleTodo/SingleTodo';

interface Props {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  complitedTodos: Todo[];
  setComplitedTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TodoList: FC<Props> = ({
  todos,
  setTodos,
  complitedTodos,
  setComplitedTodos,
}) => {
  return (
    <div className='container'>
      <Droppable droppableId='TodosList'>
        {(provided) => (
          <div
            className='todos'
            ref={provided.innerRef}
            {...provided.droppableProps}>
            <span className='todos__header'>Active Tasks</span>
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId='TodosRemove'>
        {(provided) => (
          <div
            className='todos remove'
            ref={provided.innerRef}
            {...provided.droppableProps}>
            <span className='todos__header'>Complited Tasks</span>
            {complitedTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={complitedTodos}
                setTodos={setComplitedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
