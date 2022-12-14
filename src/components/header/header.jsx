import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { logout } from '../../redux/auth/slice';

import './header.scss';

function Header() {

  const reduxState = useSelector(state => state.auth);
  const reduxShoppingState = useSelector((state) => state.shopping);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLoginClick = () => {
    navigate('/login');
  }

  const onLogoutClick = () => {
    dispatch(logout());
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
            You have: <strong>{reduxShoppingState.shoppingCart.items.length} items</strong>, total is: <strong>{(reduxShoppingState.shoppingCart.total).toFixed(2)} $</strong>
          </NavLink>
        }
      </div>
      <div className='buttons-group'>
        {reduxState.isUserLoggedIn &&
          <button type='button' className='ghost' onClick={onLogoutClick}>LOGOUT</button>
        }
        {!reduxState.isUserLoggedIn &&
          <button type='button' className='positive' onClick={onLoginClick}>LOGIN</button>
        }
      </div>
    </div>
  );
}

export default Header;