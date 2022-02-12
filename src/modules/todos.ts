const ADD_TODO = 'todos/ADD_TODO' as const;
const DEL_TODO = 'todos/DEL_TODO' as const;

let nextId: number = 1;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text: text,
  },
});

export const delTodo = (id: number) => ({
  type: DEL_TODO,
  payload: {
    id: id,
  },
});

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodoState = Todo[];

export type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof delTodo>;

const initialState: TodoState = [];

const todos = (state: TodoState = initialState, action: TodosAction) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    case DEL_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default todos;
