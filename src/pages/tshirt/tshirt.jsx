import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import './tshirt.scss';

function Tshirt() {

  const { id } = useParams();
  const state = useSelector((state) => state.shopping);
  const [tshirt, setTshirt] = useState({});

  /**
   * Every time the component load with a new ID
   */
  useEffect(() => {
    // find a tshirt in the state.tshirts with the ID
    const findTshirt = state.tshirts.filter(x => x.id.toString() === id.toString());

    // update the local state
    if (findTshirt && findTshirt.length > 0) {
      setTshirt(findTshirt[0]);
    }
  }, [...id]);

  return (
    <div className="tshirt">
      Tshirt is {id} <br />
      The Tshirt name is {tshirt.name}
    </div>
  );
}

export default Tshirt;