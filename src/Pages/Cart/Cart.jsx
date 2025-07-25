import React from 'react';
import { Link } from 'react-router-dom';
import Stars from '../../Components/layouts/star/Stars.jsx';
import { useCart } from './ContextCart/CartContext.jsx';
import { RiShoppingCart2Fill } from "react-icons/ri";
import style from './Cart.module.css';

export default function Cart()
{
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((acc, item) =>
  {
    return acc + item.quantity * item.price;
  }, 0);

  return (
    <section>
      <h2 className={style.carttext}>
        Your Cart <span><RiShoppingCart2Fill /></span>
      </h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <div className={style.container} >
            {cartItems.map((item, i) => (
              <div className={style.cartcard} key={i}>
                <img src={item.img} alt={item.title} width={100} />
                <p>Price: ${item.price}</p>

                {item.sizes && (
                  <p>
                    <span>Sizes :</span> {item.sizes.join(', ')}
                  </p>
                )}

                {item.rating && <Stars rating={item.rating} />}

                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                <p><span>Total:</span> {item.quantity * item.price} $</p>
              </div>
            ))}
          </div>

          <div>
            <h3>Total: ${total.toFixed(2)}</h3>
            <Link to='/payment'>Checkout</Link>
          </div>
        </>
      )}
    </section>
  );
}
