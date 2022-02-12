import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';

interface ITodoListProps {
  todos: Todo[];
  onDelTodo: (id: number) => void;
}

function TodoList({ todos, onDelTodo }: ITodoListProps) {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelTodo} />
      ))}
    </>
  );
}

export default TodoList;
