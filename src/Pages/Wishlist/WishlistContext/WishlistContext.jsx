import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. إنشاء الكونتكست
const WishlistContext = createContext();

// 2. مزود الكونتكست
export function WishlistProvider({ children })
{
    // ✅ تحميل البيانات من localStorage عند أول تحميل
    const [wishlist, setWishlist] = useState(() =>
    {
        const stored = localStorage.getItem("wishlist");
        return stored ? JSON.parse(stored) : [];
    });

    // ✅ حفظ البيانات تلقائيًا في localStorage عند أي تعديل
    useEffect(() =>
    {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    // ✅ دالة الإضافة
    const addToWishlist = (product) =>
    {
        const exists = wishlist.find((item) => item.id === product.id);
        if (!exists)
        {
            setWishlist([...wishlist, product]);
        }
    };

    // ✅ دالة الحذف
    const removeFromWishlist = (id) =>
    {
        setWishlist(wishlist.filter((item) => item.id !== id));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
}

// 3. هوك سهل الاستخدام
export const useWishlist = () => useContext(WishlistContext);
