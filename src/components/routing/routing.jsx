// import router
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

// import pages to be routed
import * as Pages from '../../pages';

// SCSS
import './routing.scss';

function Routing() {

  return (
    <div className="routing">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/login" element={<Pages.Login />} />
          <Route path="/register" element={<Pages.Register />} />
          <Route path="/password-reset" element={<Pages.PasswordReset />} />
          <Route path="/checkout" element={<Pages.Checkout />} />
          <Route path="/tshirt/:id" element={<Pages.Tshirt />} />
          <Route path="/register-validation" element={<Pages.RegisterValidation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;