import React, { useState } from 'react';
import '../Global.css';
import {useSpring, animated} from 'react-spring'
import Layout from '../Layout.js'; 
import { Mall1, Item, total, totalItems } from '../MallScript';

import GucciShoesImage from '../static/Gucci_Shoes.png';

function S1Product3() {
  const props = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 300,
  });

  const [cart, setCart] = useState([]);


  const handleAddToCart = () => {
    const product = new Item("Gucci Shoes", 75.00); 
    Mall1.addItem(product);
    total += 75;
    totalItems += 1;
    console.log("Item added to cart!");
    setCart([...cart, product]);
  }

  return (
    <animated.div style = {props}>
      <Layout>
      <div className="Product">
        <h2>Gucci Shoes</h2>
        <img src={GucciShoesImage} alt="Product" />
        <p>The Gucci Shoe is the epitome of luxury footwear, showcasing impeccable Italian craftsmanship, distinctive designs, and premium materials that exude elegance and style.</p>
        <p>$75.00</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </Layout>
    </animated.div>
  );
}

export default S1Product3;