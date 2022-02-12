interface ICounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

function Counter({ count, onIncrease, onDecrease }: ICounterProps) {
  return (
    <div>
      <button onClick={onIncrease}>+1</button>
      {count}
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
