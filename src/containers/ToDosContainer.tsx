import { useState } from 'react';
import styled from 'styled-components';
import { Todo } from '../modules/todos';
import { useForm } from 'react-hook-form';
import ToDos from '../components/ToDos';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { addTodo, delTodo } from '../modules/todos';
import TodoList from '../components/TodoList';
import TodoInsert from '../components/TodoInsert';

const Wrapper = styled.div`
  max-width: 480px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30pt;
  font-weight: bold;
`;

function ToDosContainer() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const onAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  const onDelTodo = (id: number) => {
    dispatch(delTodo(id));
  };

  return (
    <>
      <Wrapper>
        <Header>
          <Title>Todo List</Title>
        </Header>
        <TodoInsert onInsert={onAddTodo} />
        <TodoList onDelTodo={onDelTodo} todos={todos} />
      </Wrapper>
    </>
  );
}

export default ToDosContainer;
