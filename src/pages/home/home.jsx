/** Import redux */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadTshirts } from '../../redux/shopping/slice';

/** Import components */
import Header from '../../components/header/header';

import './home.scss';
import TshirtDetails from '../../components/tshirtDetails/tshirtDetails';

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
      <Header />
      <div className="tshirtGrid">
        {
          state.tshirts.map((item, index) => <TshirtDetails key={index} tshirt={item} />)
        }
      </div>
    </div>
  );
}


export default Home;