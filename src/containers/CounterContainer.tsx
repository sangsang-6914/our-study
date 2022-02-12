import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { RootState } from '../modules';
import { decrease, increase } from '../modules/counter';

function CounterContainer() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  return (
    <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
