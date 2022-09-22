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
      <img src={tshirt.image} alt={tshirt.name} />
      <div className="details">
        <h3>Name</h3>
        <h4>{tshirt.name}</h4>
        <h3>Price</h3>
        <h4>{tshirt.price} $</h4>
        <h3>Sizes</h3>
        <div className='sizes'>
          {
            tshirt.sizes
              .map((item, index) =>
                <button className="ghost" key={index}>{item}</button>)
          }
        </div>
        <div className='buttons-group'>
          <button className='ghost'>Back to List</button>
          <button className='positive'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Tshirt;