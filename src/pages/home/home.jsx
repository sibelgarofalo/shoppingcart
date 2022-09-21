import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadTshirts } from '../../redux/shopping/slice';

import './home.scss';

function Home() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.shopping);

  /**
   * Component did mount
   */
  useEffect(() => {
    dispatch(loadTshirts());
  }, []);

  return (
    <div className="home">
      {
        state.tshirts.map((tshirt, index) => {
          return <p>
            {tshirt.name}
            <img src={tshirt.image} alt={tshirt.name} width="150" />
          </p>
        })
      }
    </div>
  );
}


export default Home;