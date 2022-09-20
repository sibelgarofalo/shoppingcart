import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
  }

  const onLoginClick = () => {

  }

  return (
    <div className="login">
      <form>
        <h3>Login user</h3>
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
          <button onClick={onCancelClick} className='cancel'>Cancel</button>
          <button onClick={onLoginClick} className='positive'>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;