import React, { useEffect, useState } from 'react';
import { products } from '../../Api/Products';
import Stars from '../../Components/layouts/star/Stars';
import BtnCart from '../Cart/ContextCart/BtnCart';
import WishlistBtn from '../Wishlist/WishlistBtn';
import style from './Compare.module.css';
import { TbArrowsExchange } from 'react-icons/tb';
import MainLayouts from '../../Components/layouts/MainLayouts/MainLayouts';

export default function Compare()
{
    const [searchTerm1, setSearchTerm1] = useState('');
    const [searchTerm2, setSearchTerm2] = useState('');
    const [product1, setProduct1] = useState(null);
    const [product2, setProduct2] = useState(null);
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');

    const fetchProduct = async (term, setProduct, setError, setLoading) =>
    {
        if (!term) return;
        setLoading(true);
        setError('');
        try
        {
            const response = await products.get("/products");
            const found = response.data.find(p =>
                p.title.toLowerCase().includes(term.toLowerCase())
            );
            if (found)
            {
                setProduct(found);
            } else
            {
                setProduct(null);
                setError("Product not found");
            }
        } catch (err)
        {
            setError('Error fetching product');
        } finally
        {
            setLoading(false);
        }
    };

    useEffect(() =>
    {
        fetchProduct(searchTerm1, setProduct1, setError1, setLoading1);
    }, [searchTerm1]);

    useEffect(() =>
    {
        fetchProduct(searchTerm2, setProduct2, setError2, setLoading2);
    }, [searchTerm2]);

    const ProductCard = ({ product, loading, error }) =>
    {
        if (loading) return <div>Loading...</div>;
        if (error) return <div style={{ color: 'red' }}>{error}</div>;
        if (!product) return null;

        return (
            <div className={style.card}>
                <div className={style.cardicons}>
                    <BtnCart product={product} />
                    <WishlistBtn className={style.WishlistBtn} product={product} />
                </div>
                <div className={style.cardimg}>
                    <img src={product.img} loading="lazy" alt={product.title} width="250px" height='250px' />
                </div>
                <div className={style.cardtext}>
                    <p>{product.title}</p>
                    <p><span>price : </span> {product.price} $</p>
                    {product.sizes && (
                        <p><span>Sizes :</span> {product.sizes.join(', ')}</p>
                    )}
                    <p className={style.inStock}><span>inStock :</span> {product.inStock}</p>
                    {product.rating && <Stars rating={product.rating} />}
                </div>
            </div>
        );
    };

    return (
        <MainLayouts>
        <section>
            <div className={style.container}>
                <div className={style.div}>
                    <h3 className={style.text}>First Product</h3>
                    <input
                        type="text"
                        placeholder="Search for first product"
                        value={searchTerm1}
                        onChange={(e) => setSearchTerm1(e.target.value)}
                        className={style.input}
                    />
                    <ProductCard product={product1} loading={loading1} error={error1} />
                </div>

                <div className={style.Compareicon}>
                    <TbArrowsExchange />
                </div>

                <div className={style.div}>
                    <h3 className={style.text}>Second Product</h3>
                    <input
                        type="text"
                        placeholder="Search for second product"
                        value={searchTerm2}
                        onChange={(e) => setSearchTerm2(e.target.value)}
                        className={style.input}
                    />
                    <ProductCard product={product2} loading={loading2} error={error2} />
                </div>
            </div>
        </section>
        </MainLayouts>
    );
}






