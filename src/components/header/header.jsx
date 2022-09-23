import { useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';

import './header.scss';

function Header() {

  const reduxState = useSelector(state => state.auth);
  const reduxShoppingState = useSelector((state) => state.shopping);
  const navigate = useNavigate();
  
  const onLoginClick = () => {
    navigate('/login');
  }


  return (
    <div className="header">
      <h3>T-shirt online store</h3>
      <div>
        Welcome <strong>{reduxState.user.first_name} {reduxState.user.last_name}</strong>
      </div>
      <div>
        {
          reduxState.isUserLoggedIn &&
          <NavLink to="/checkout">
            You have: <strong>{reduxShoppingState.shoppingCart.items.length} items</strong>, total is: <strong>{(reduxShoppingState.total)} $</strong>
          </NavLink>
        }
      </div>
      <div className='buttons-group'>
        {reduxState.isUserLoggedIn &&
          <button type='button' className='ghost' onClick={onLoginClick}>LOGOUT</button>
        }
        {!reduxState.isUserLoggedIn &&
          <button type='button' className='positive' onClick={onLoginClick}>LOGIN</button>
        }
      </div>
    </div>
  );
}

export default Header;