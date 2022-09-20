import {useState} from 'react';
import {useNavigate} from 'react-router-dom'

import './passwordReset.scss';
function PasswordReset() {
  // email
  const [email, setEmail] = useState('');
  

  const navigate = useNavigate();

  const onResetClick = () => {
    
  }
  
  const onCancelClick = () => {
    setEmail('');
   
  }
  const onLoginClick = () => {
    navigate('/login');
  }

  return (
    <div className="passwordReset">
      <form>
        <h3>Password Reset</h3>
        <div className="input-group">
          <label>Email address</label>
          <input
            type="Email" placeholder='Insert your Email'
            value={email}
            onChange={(args) => setEmail(args.target.value)} />
        </div>
        
        <div className='buttons-group'>
          <button onClick={onLoginClick} className='ghost'>Login</button>
          <button onClick={onCancelClick} className='cancel'>Cancel</button>
          <button onClick={onResetClick} className='positive'>Reset</button>
        </div>
      </form>
    </div>

  );
}

export default PasswordReset;