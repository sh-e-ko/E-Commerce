import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../Api/Products'
import WishlistBtn from '../Wishlist/WishlistBtn'
import style from './Compare.module.css'
export default function Compare()
{
    const [searchTerm1, setSearchTerm1] = useState('')
    const [searchTerm2, setSearchTerm2] = useState('')
    const [product1, setProduct1] = useState(null)
    const [product2, setProduct2] = useState(null)
    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [error1, setError1] = useState('')
    const [error2, setError2] = useState('')

    const fetchProduct1 = async () =>
    {
        if (!searchTerm1) return;
        setLoading1(true);
        setError1('');
        try
        {
            const response = await products.get("/products");
            console.log(response.data);
            const allProducts = response.data;

            const found = allProducts.find(p =>
                p.title.toLowerCase().includes(searchTerm1.toLowerCase())
            );

            if (found)
            {
                setProduct1(found);
            } else
            {
                setProduct1(null);
                setError1("Product not found");
            }
        } catch (err)
        {
            setError1('Error fetching product');
        } finally
        {
            setLoading1(false);
        }

    };

    const fetchProduct2 = async () =>
    {
        if (!searchTerm2) return;
        setLoading2(true);
        setError2('');
        try
        {
            const response = await products.get("/products");
            const allProducts = response.data;

            const found = allProducts.find(p =>
                p.title.toLowerCase().includes(searchTerm2.toLowerCase())
            );

            if (found)
            {
                setProduct2(found);
            } else
            {
                setProduct2(null);
                setError2("Product not found");
            }
        } catch (err)
        {
            setError2('Error fetching product');
        } finally
        {
            setLoading2(false);
        }
    };

    useEffect(() => { fetchProduct1(); }, [searchTerm1]);
    useEffect(() => { fetchProduct2(); }, [searchTerm2]);

    return (
        <section>
            <div className={style.container} >


                <div >
                    <h3 className={style.text}>First Product</h3>
                    <input
                        type="text"
                        placeholder="Search for first product"
                        value={searchTerm1}
                        onChange={(e) => setSearchTerm1(e.target.value)}
                        className={style.input}
                    />

                    {loading1 && <div>Loading...</div>}
                    {error1 && <div style={{ color: 'red' }}>{error1}</div>}

                    {product1 && !loading1 && (
                        <div className={style.card}>
                            <img src={product1.img} loading="lazy" alt={product1.title} width="250px" height='250px' />
                            <p>{product1.price} EGP</p>
                            <p>{product1.title}</p>
                            <p>{product1.rating}</p>
                            <p>{product1.sizes}</p>
                            <WishlistBtn className={style.WishlistBtn} product={product2} />
                        </div>
                    )}
                </div>

                <div>
                    <h3 className={style.text}>Second Product</h3>
                    <input
                        type="text"
                        placeholder="Search for second product"
                        value={searchTerm2}
                        onChange={(e) => setSearchTerm2(e.target.value)}
                        className={style.input}
                    />
                    {loading2 && <div>Loading...</div>}
                    {error2 && <div style={{ color: 'red' }}>{error2}</div>}

                    {product2 && !loading2 && (
                        <div className={style.card}>
                            <img src={product2.img} loading="lazy" alt={product1.title} width="250px" height='250px' />
                            <p>{product2.price} EGP</p>
                            <p>{product2.title}</p>
                            <p>{product2.rating}</p>
                            <p>{product2.sizes}</p>
                            <WishlistBtn className={style.WishlistBtn} product={product2} />
                         
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}






