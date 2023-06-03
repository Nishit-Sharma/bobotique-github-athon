import React, { useState } from 'react';
import './Global.css';
import Layout from './Layout.js';
import {useSpring, animated} from 'react-spring'
import { Mall1, Mall2, Mall3, Mall4, total } from './MallScript.js';

function Cart() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const [cartItems, setCartItems] = useState([]);

  const removeItem = (item) => {
    const malls = [Mall1, Mall2, Mall3, Mall4];
    malls.forEach(mall => {
      const index = mall.itemList.indexOf(item);
      if (index !== -1) {
        mall.removeItem(index);
      }
    });
    const newCartItems = cartItems.filter(cartItem => cartItem !== item);
    setCartItems(newCartItems);
    total -= item.getPrice();
  }

  const findStore = (item) => {
    const malls = [Mall1, Mall2, Mall3, Mall4];
    for (let i = 0; i < malls.length; i++) {
      const index = malls[i].itemList.indexOf(item);
      if (index !== -1) {
        return malls[i].getMallName();
      }
    }
  }

  const displayItems = () => {
    const malls = [Mall1, Mall2, Mall3, Mall4];
    const items = malls.flatMap(mall => mall.itemList);
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <img src={`product${index + 1}.png`} alt={`Product ${index + 1}`} />
            <h3>{item.getName()}</h3>
            <p>${item.getPrice().toFixed(2)}</p>
            <p>Store: {findStore(item)}</p>
             <button onClick={() => removeItem(item)}>Remove Item</button>
           </li>
        ))}
      </ul>
    );
  }


  return (
    <animated.div style={props}>
      <Layout>
        <div className="Cart">
          <h2>Shopping Cart</h2>
          <ul>
            {displayItems()}
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
          <button>Checkout</button>
        </div>
      </Layout>
    </animated.div>
  );
}

export default Cart;