import React from 'react';
import { useCart } from './ContextCart/CartContext.jsx';

export default function Cart()
{
  const { cartItems, removeFromCart } = useCart();
  return (
    <section>

      <h2>Your Cart</h2>
      {
        cartItems === 0 ? (<p>Cart is empty</p>) : (

          <div>
            {cartItems.map((item , i) => (
              <div key={i}>
                <img src={item.img} alt={item.title} width={100} />
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
        )
      }



    </section>
  );
}

