import './header.scss';
function Header() {

  return (
    <div className="header">
      <h3>T-shirt online store</h3>
      <div className='buttons-group'>
        <button type='button' className='ghost'>LOGOUT</button>
        <button type='button' className='positive'>LOGIN</button>
      </div>
    </div>
  );
}

export default Header;