import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const TodoInput = styled.input`
  margin-bottom: 10px;
`;

interface ITodoProps {
  onInsert: (text: string) => void;
}

interface IForm {
  todo: string;
}

function TodoInsert({ onInsert }: ITodoProps) {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ todo }: IForm) => {
    onInsert(todo);
    setValue('todo', '');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TodoInput {...register('todo', { required: true, minLength: 5 })} />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
}

export default TodoInsert;
