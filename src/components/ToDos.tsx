import { useState } from 'react';
import styled from 'styled-components';
import { Todo } from '../modules/todos';
import { useForm } from 'react-hook-form';

const Title = styled.h1`
  font-size: 30pt;
  font-weight: bold;
`;

const Items = styled.ul`
  font-size: 10pt;
  color: blue;
`;

const Item = styled.li``;

const TodoInput = styled.input``;

const AddBtn = styled.button`
  border-radius: 10px;
  border: 0px;
  background-color: red;
  opacity: 0.4;
`;

const DelBtn = styled.button`
  border-radius: 10px;
  border: 0px;
  background-color: blue;
  opacity: 0.4;
`;

interface ITodosProps {
  todos: Todo[];
  addTodo: (text: string, id: number) => void;
  delTodo: (id: number) => void;
}

interface IForm {
  todo: string;
}

function ToDos({ todos, addTodo, delTodo }: ITodosProps) {
  const { register, handleSubmit, setValue, getValues } = useForm<IForm>();
  console.log(getValues);
  return (
    <>
      <Title>ToDo List</Title>
      <TodoInput {...register('todo', { required: true })}></TodoInput>
      <AddBtn>Todo Add</AddBtn>
      <hr />
      <Items>
        {todos?.map((todo) => (
          <>
            <Item key={todo.id}>{todo.text}</Item>
            <DelBtn onClick={() => delTodo(todo.id)}>Del</DelBtn>
          </>
        ))}
      </Items>
    </>
  );
}

export default ToDos;
