// import router
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { useSelector } from 'react-redux';

// import pages to be routed
import * as Pages from '../../pages';

// SCSS
import './routing.scss';

function Routing() {

  const reduxState = useSelector(state => state.auth);

  return (
    <div className="routing">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/login" element={<Pages.Login />} />
          <Route path="/register" element={<Pages.Register />} />
          <Route path="/password-reset" element={<Pages.PasswordReset />} />
          <Route path="/checkout" element={reduxState.isUserLoggedIn ? <Pages.Checkout /> : <Navigate to="/login" />} />
          <Route path="/tshirt/:id" element={<Pages.Tshirt />} />
          <Route path="/register-validation" element={<Pages.RegisterValidation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;