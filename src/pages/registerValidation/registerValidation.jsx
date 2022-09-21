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

  const onValidateClick = (e) => {
    e.preventDefault();
    if (email.length < 1) {
      setErrorMessage('The email address is mandatory');
      return;
    }
    if (userName.length < 1) {
      setErrorMessage('The user name is mandatory');
      return;
    }
    if (code.length < 1) {
      setErrorMessage('The code is mandatory');
      return;
    }
    if (password.length < 1) {
      setErrorMessage('The password is mandatory');
      return;
    }
    if (passwordRepeat.length < 1) {
      setErrorMessage('The password is mandatory');
      return;
    }
    if (firstName.length < 1) {
      setErrorMessage('The first name is mandatory');
      return;
    }
    if (lastName.length < 1) {
      setErrorMessage('The last name is mandatory');
      return;
    }
    setErrorMessage('');
  }

  return (
    <div className="registerValidation">
      <form onSubmit={onValidateClick}>
        <h3>Registration Validation</h3>
        {
          errorMessage.length > 0 &&
          <div className='error-panel'>
            <h6>There are some errors</h6>
            <p>{errorMessage}</p>
          </div>
        }

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
          <button onClick={onCancelClick} className='cancel' type='button'>Cancel</button>
          <button className='positive' type='submit'>Validate</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterValidation;