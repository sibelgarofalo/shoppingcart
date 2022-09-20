import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './registerValidation.scss';

function RegisterValidation() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


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

  const onValidateClick = () => {

  }

  return (
    <div className="registrationValidation">
      <form>
        <h3>Registration Validation</h3>
        <div className="input-group">
          <label>Email</label>
          <input
            type="Email" placeholder='Insert your Email'
            value={email}
            onChange={(args) => setEmail(args.target.value)} />
        </div>
        <div className="input-group">
          <label>Username</label>
          <input 
          type="text" 
          placeholder='Insert your User Name' 
          value={userName} 
          onChange={(args) => setUserName(args.target.value)} />
        </div>
        <div className="input-group">
          <label>Code</label>
          <input 
          type="text" 
          placeholder='Insert your Code' 
          value={code} 
          onChange={(args) => setCode(args.target.value)} />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input 
          type="Password" 
          placeholder='Insert your Password' 
          value={password} 
          onChange={(args) => setPassword(args.target.value)} />
        </div>
        <div className="input-group">
          <label>Password Repeat</label>
          <input 
          type="Password" 
          placeholder='Repeat your Password' 
          value={passwordRepeat} 
          onChange={(args) => setPasswordRepeat(args.target.value)} />
        </div>
        <div className="input-group">
          <label>First Name</label>
          <input 
          type="text" 
          placeholder='Insert your First Name' 
          value={firstName} 
          onChange={(args) => setFirstName(args.target.value)} />
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input 
          type="text" 
          placeholder='Insert your Last Name' 
          value={lastName} 
          onChange={(args) => setLastName(args.target.value)} />
        </div>
        <div className='buttons-group'>
          <button onClick={onResetClick} className='ghost'>Reset</button>
          <button onClick={onRegisterClick} className='ghost'>Register</button>
          <button onClick={onCancelClick} className='cancel'>Cancel</button>
          <button onClick={onValidateClick} className='positive'>Validate</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterValidation;