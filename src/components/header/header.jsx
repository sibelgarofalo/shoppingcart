import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './header.scss';

function Header() {

  const reduxState = useSelector(state => state.auth);
  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate('/login');
  }

  return (
    <div className="header">
      <h3>T-shirt online store</h3>
      <div>
        Welcome {reduxState.user.first_name} {reduxState.user.last_name}
      </div>
      <div className='buttons-group'>
        {reduxState.isUserLoggedIn &&
          <button type='button' className='ghost'>LOGOUT</button>
        }
        {!reduxState.isUserLoggedIn &&
          <button type='button' className='positive' onClick={onLoginClick}>LOGIN</button>
        }
      </div>
    </div>
  );
}

export default Header;