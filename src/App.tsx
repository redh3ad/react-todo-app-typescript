import React, { FC, FormEvent, useState } from 'react';
import './App.scss';
import Input from './components/Input/Input';
import { Todo } from './model';
import TodoList from './components/TodoList/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App: FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, todo: 'Task 1 < Drag and Drop Tasks >', isDone: false },
    {
      id: 2,
      todo: 'Task 2 < Add ToDo, Change ToDo, remove and change status >',
      isDone: false,
    },
    { id: 3, todo: 'Task 3 < Completed Task >', isDone: true },
  ]);
  const [complitedTodos, setComplitedTodos] = useState<Todo[]>([
    { id: 4, todo: 'Task 4 < Uncompleted Task >', isDone: false },
    { id: 5, todo: 'Task 5 < Completed Task >', isDone: true },
  ]);

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = todos,
      complite = complitedTodos;

    if (source.droppableId === 'TodosList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complite[source.index];
      complite.splice(source.index, 1);
    }

    if (destination.droppableId === 'TodosList') {
      active.splice(destination.index, 0, add);
    } else {
      complite.splice(destination.index, 0, add);
    }

    setComplitedTodos(complite);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='App'>
        <span className='header'>Taskify</span>
        <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          complitedTodos={complitedTodos}
          setComplitedTodos={setComplitedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
