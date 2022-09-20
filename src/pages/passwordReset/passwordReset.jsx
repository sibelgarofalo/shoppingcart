import {useState} from 'react';
import {useNavigate} from 'react-router-dom'

import './passwordReset.scss';

function PasswordReset() {
  // email
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  
  const navigate = useNavigate();

  const onResetClick = (e) => {
    e.preventDefault();
    if (email.length < 1) {
      setErrorMessage('The email address is mandatory');
      return;
    }
    setErrorMessage('');
    
  
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
        <div className="input-group">
          <label>Email address</label>
          <input
            type="Email" placeholder='Insert your Email'
            value={email}
            onChange={(args) => setEmail(args.target.value)} />
        </div>
        
        <div className='buttons-group'>
          <button onClick={onLoginClick} className='ghost'>Login</button>
          <button onClick={onCancelClick} className='cancel' type='button'>Cancel</button>
          <button className='positive' type='submit'>Reset</button>
        </div>
      </form>
    </div>

  );
}

export default PasswordReset;