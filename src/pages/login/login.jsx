import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/auth/actions';

import './login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const reduxState = useSelector(state => state.auth);

  const navigate = useNavigate();

  const onResetClick = () => {
    navigate('/password-reset');
  }

  const onRegisterClick = () => {
    navigate('/register');
  }

  const onCancelClick = () => {
    setEmail('');
    setPassword('');
    setErrorMessage('');
  }

  const onLoginClick = (e) => {
    e.preventDefault();
    if (email.length < 1) {
      setErrorMessage('The email address is mandatory');
      return;
    }
    if (password.length < 1) {
      setErrorMessage('The password is mandatory');
      return;
    }
    setErrorMessage('');
    // call redux/axios
    dispatch(login({
      email: email,
      password: password
    }));
  }

  return (
    <div className="login">
      <form onSubmit={onLoginClick}>
        <h3>Login user</h3>
        {/* Form validation error */}
        {
          errorMessage.length > 0 &&
          <div className='error-panel'>
            <h6>There are some errors</h6>
            <p>{errorMessage}</p>
          </div>
        }
        {/* Login API error */}
        {
          reduxState.error.length > 0 &&
          <div className='error-panel'>
            <h6>Authentication error</h6>
            <p>{reduxState.error}</p>
          </div>
        }
        {
          reduxState.isSuccess &&
          <div className='success-panel'>
            <h6>Welcome</h6>
            <p>Hello {reduxState.user.first_name}, {reduxState.user.last_name}</p>
            <p>You can now go to <Link to="/">our Store</Link></p>
          </div>
        }
        <div className="input-group">
          <label>Email address</label>
          <input
            type="Email" placeholder='Insert your Email'
            value={email}
            onChange={(args) => setEmail(args.target.value)} />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="Password"
            placeholder='Insert your Password'
            value={password}
            onChange={(args) => setPassword(args.target.value)} />
        </div>
        <div className='buttons-group'>
          <button onClick={onResetClick} className='ghost'>Reset</button>
          <button onClick={onRegisterClick} className='ghost'>Register</button>
          <button onClick={onCancelClick} className='cancel' type="button">Cancel</button>
          <button className='positive' type='submit'>Login</button>
        </div>
      </form>
    </div >
  );
}

export default Login;