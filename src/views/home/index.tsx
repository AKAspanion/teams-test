import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment } from '../../redux/actions';
import { selectCount } from '../../redux/selectors';

const Home = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCount);

  return (
    <section>
      <h2>Spanion Template 2021</h2>
      {JSON.stringify(counter)}
      <div>
        <button onClick={() => dispatch(increment())}>Increase</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
      </div>
    </section>
  );
};

export default Home;
