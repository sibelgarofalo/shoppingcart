import {useState} from 'react';
import {useNavigate} from 'react-router-dom'

import './register.scss';


function Register() {
  // email
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const onResetClick = () => {
    navigate('/password-reset');
  }
  
  const onCancelClick = () => {
    setEmail('');
   
  }
  const onRegisterClick = () => {

  }

  return (
    <div className="register">
      <form>
        <h3>Register</h3>
        <div className="input-group">
          <label>Email address</label>
          <input
            type="Email" placeholder='Insert your Email'
            value={email}
            onChange={(args) => setEmail(args.target.value)} />
        </div>
        
        <div className='buttons-group'>
          <button onClick={onResetClick} className='ghost'>Reset</button>
          <button onClick={onCancelClick} className='cancel'>Cancel</button>
          <button onClick={onRegisterClick} className='positive'>Register</button>
     
        </div>
      </form>
    </div>
    
  );
}

export default Register;