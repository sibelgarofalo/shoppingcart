import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
  }

  return (
    <div className="login">
      <form onSubmit={onLoginClick}>
        <h3>Login user</h3>
        {
          errorMessage.length > 0 &&
          <div className='error-panel'>
            <h6>There are some errors</h6>
            <p>{errorMessage}</p>
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