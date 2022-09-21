import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../redux/auth/actions';

import './passwordReset.scss';

function PasswordReset() {
  // email
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const onResetClick = (e) => {
    e.preventDefault();
    if (email.length < 1) {
      setErrorMessage('The email address is mandatory');
      return;
    }
    setErrorMessage('');
    // redux call reset function
    dispatch(resetPassword(email));
  }

  const onCancelClick = () => {
    setEmail('');
    setErrorMessage('');

  }
  const onLoginClick = () => {
    navigate('/login');
  }

  return (
    <div className="passwordReset">
      <form onSubmit={onResetClick}>
        <h3>Password Reset</h3>
        {
          errorMessage.length > 0 &&
          <div className='error-panel'>
            <h6>There are some errors</h6>
            <p>{errorMessage}</p>
          </div>
        }
        {
          reduxState.error.length > 0 &&
          <div className='error-panel'>
            <h6>There are some errors</h6>
            <p>{reduxState.error}</p>
          </div>
        }
        {
          reduxState.isSuccess &&
          <div className='success-panel'>
            <h6>Password reset complete</h6>
            <p>You can now go to the Login Page</p>
          </div>
        }

        <div className="input-group">
          <label>Email address</label>
          <input
            disabled={reduxState.isLoading}
            type="Email" placeholder='Insert your Email'
            value={email}
            onChange={(args) => setEmail(args.target.value)} />
        </div>

        <div className='buttons-group'>
          <button onClick={onLoginClick} className='ghost' disabled={reduxState.isLoading}>Login</button>
          <button onClick={onCancelClick} className='cancel' type='button' disabled={reduxState.isLoading}>Cancel</button>
          <button className='positive' type='submit' disabled={reduxState.isLoading}>Reset</button>
        </div>
      </form>
    </div>

  );
}

export default PasswordReset;