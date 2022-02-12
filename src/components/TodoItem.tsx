import styled from 'styled-components';
import { Todo } from '../modules/todos';

const Item = styled.li``;

interface ITodoProps {
  todo: Todo;
  onDelete: (id: number) => void;
}

function TodoItem({ todo, onDelete }: ITodoProps) {
  return (
    <>
      <Item>
        {todo.text} <button onClick={() => onDelete(todo.id)}>Del Todo</button>
      </Item>
    </>
  );
}

export default TodoItem;
