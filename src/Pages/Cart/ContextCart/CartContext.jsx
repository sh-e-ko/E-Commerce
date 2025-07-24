import React, { createContext, useContext, useEffect, useState } from 'react';

// 1. إنشاء الـ context
const CartContext = createContext();

// 2. Provider اللي هنلف بيه التطبيق
export function CartProvider({ children })
{
    const [cartItems, setCartItems] = useState(() =>
    {
        // أول مرة يفتح يجيب الداتا من localStorage
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    // 3. كل ما cartItems يتغير ➝ نحدث localStorage
    useEffect(() =>
    {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // 4. دالة الإضافة
    const addToCart = (product) =>
    {
        setCartItems(prev =>
        {
            const exist = prev.find(item => item.id === product.id);
            if (exist)
            {
                // لو المنتج موجود ➝ زود الكمية
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else
            {
                // لو أول مرة يضاف ➝ نحطه بكميه = 1
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    // 5. دالة المسح
    const removeFromCart = (id) =>
    {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);

