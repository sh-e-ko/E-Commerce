import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children })
{
    const [cartItems, setCartItems] = useState(() =>
    {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() =>
    {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) =>
    {
        setCartItems(prev =>
        {
            const exist = prev.find(item => item.id === product.id);
            if (exist)
            {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else
            {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) =>
    {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const clearCart = () =>
    {
        setCartItems([]);
    };

    const increaseQuantity = (id) =>
    {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) =>
    {
        setCartItems(prev =>
            prev.map(item =>
            {
                if (item.id === id)
                {
                    return item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item;
                }
                return item;
            })
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
