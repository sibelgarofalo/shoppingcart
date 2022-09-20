import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import './register.scss';


function Register() {
  // email
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const onResetClick = () => {
    navigate('/password-reset');
  }

  const onCancelClick = () => {
    setEmail('');
    setErrorMessage('');

  }
  const onRegisterClick = (e) => {
    e.preventDefault();
    if (email.length < 1) {
      setErrorMessage('The email address is mandatory');
      return;
    }
    setErrorMessage('');
  }
  return (
    <div className="register">
      <form onSubmit={onRegisterClick}>
        <h3>Register</h3>
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

        <div className='buttons-group'>
          <button onClick={onResetClick} className='ghost'>Reset</button>
          <button onClick={onCancelClick} className='cancel' type='button'>Cancel</button>
          <button className='positive' type='submit'>Register</button>

        </div>
      </form>
    </div>

  );
}

export default Register;