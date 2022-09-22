import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addItemToShoppingCart } from '../../redux/shopping/slice';

/** Import components */
import Header from '../../components/header/header';

import './tshirt.scss';

function Tshirt() {
  /** hooks */
  const { id } = useParams();
  const reduxShoppingState = useSelector((state) => state.shopping);
  const reduxAuthState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /** states */
  const [tshirt, setTshirt] = useState({});
  const [size, setSize] = useState('S');

  /**
   * When the user click back
   */
  const onNavigateBack = () => {
    navigate('/');
  }

  const onChangeSize = (size) => {
    setSize(size);
  }

  /**
   * When the user add an item
   */
  const onAddToCart = () => {
    if (!reduxAuthState.isUserLoggedIn) {
      alert('In order to add an Item, you must be authenticated!');
      return;
    }
    // dispatch add to store
    //tshirt.selectedSize = size;
    dispatch(addItemToShoppingCart({
      ...tshirt, size
    }));

    // redirect to checkout
  }

  /**
   * Every time the component load with a new ID
   */
  useEffect(() => {
    // find a tshirt in the reduxShoppingState.tshirts with the ID
    const findTshirt = reduxShoppingState.tshirts.filter(x => x.id.toString() === id.toString());
    // update the local state
    if (findTshirt && findTshirt.length > 0) {
      setTshirt(findTshirt[0]);
    } else {
      navigate('/'); // go back home because the tshirt doesn't exist
    }
  }, [...id]);

  return (
    <div className="tshirt">
      <Header />
      <div className="container">
        <img src={tshirt.image} alt={tshirt.name} />
        <div className="details">
          <h3>Name</h3>
          <h4>{tshirt.name}</h4>
          <h3>Price</h3>
          <h4>{tshirt.price} $</h4>
          <h3>Sizes</h3>
          <div className='sizes'>
            {
              tshirt.sizes && tshirt.sizes.map((item) =>
                <button
                  onClick={() => onChangeSize(item)}
                  className="ghost" key={item}
                  data-selected={item === size}>{item}</button>)
            }
          </div>
          <div className='buttons-group'>
            <button className='ghost' onClick={onNavigateBack}>Back to List</button>
            <button className='positive' onClick={onAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tshirt;