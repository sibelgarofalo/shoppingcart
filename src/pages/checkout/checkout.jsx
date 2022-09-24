import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/header/header';

import './checkout.scss';

function Checkout() {

  const reduxShoppingState = useSelector(state => state.shopping);

  const prepareCart = () => {
    let items = [];
    for (let i = 0; i < reduxShoppingState.shoppingCart.items.length; i++) {
      const item = reduxShoppingState.shoppingCart.items[i];
      // do I have it already??
      if (items.findIndex(x => x.id === item.id) > -1) {
        const index = items.findIndex(x => x.id === item.id);
        items[index].qty += 1;
      } else {
        items.push({ ...item, qty: 1 });
      }
    }
    return items;
  }

  return (
    <div className="checkout">
      <Header />
      <div className='container'>
        <h1>Your items are</h1>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Name</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              prepareCart().map((item, index) =>
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.price} $</td>
                  <td><strong>{(item.price * item.qty).toFixed(2)} $</strong></td>
                  <td>
                    <button>+</button>
                    <button>-</button>
                  </td>
                </tr>
              )
            }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5">Total is <strong>{(reduxShoppingState.shoppingCart.total).toFixed(2)} $</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Checkout;