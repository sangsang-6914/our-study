// 1. 액션함수 타입 지정
export const INCREASE = 'counter/INCREASE';
export const DECREASE = 'counter/DECREASE';

// 2. 액션함수 생성
export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

type CounterState = {
  count: number;
};

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

const initialState: CounterState = {
  count: 0,
};

// 3. 리듀서 생성
const counter = (state: CounterState = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counter;
