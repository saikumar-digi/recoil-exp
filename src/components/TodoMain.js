import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListAtoms } from '../recoil/atoms/todoListAtom'
import TodoItem from './TodoItem';
import TodoItemCreater from './TodoItemCreater';
import FilterDropdown from './FilterDropdown';
import { filteredTodoSelector } from '../recoil/selectors/filteredTodoSelector';

function TodoMain() {

  const todoList = useRecoilValue(todoListAtoms)
  const filteredTodoList = useRecoilValue(filteredTodoSelector)
  console.log(filteredTodoList,"filteredTodoList");

  return (
    <div>
    <h1>
      TodoMain
    </h1>
    <div style={{margin:"20px"}}>
    <TodoItemCreater />
    </div>
    <div style={{margin:"20px"}}>
    <FilterDropdown />
    </div>
    {
      filteredTodoList.map((todo)=> (
        <TodoItem  key={todo.id} item={todo} />
      ))
    }
    </div>
  )
}

export default TodoMain

