import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer'
import Nav from '../../../Components/NavBar/Nav/Nav'
import WishlistBtn from '../../Wishlist/WishlistBtn';
import style from './Product.module.css'
export default function Product({ endpoint = "/products", apiInstance, category })
{
    const [Products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    const filteredPro = Products.filter((pro) =>
        pro.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    useEffect(() =>
    {
        if (!apiInstance) return;

        apiInstance
            .get(endpoint)
            .then((res) =>
            {

                setProducts(res.data);
            })
            .catch((err) => console.error(err));
    }, [endpoint, apiInstance]);
    return (
        <section className={style.Container}>
            <Nav />

            <div className={style.input}>
                <input type="search" placeholder='search' onChange={(e) => setSearchTerm(e.target.value)} />
            </div>

            <div className={style.product}>
                {
                    filteredPro ? (filteredPro.map((pro) => (

                        <div key={pro.id} className={style.card}>
                            <img src={pro.img} alt={pro.title} width='250px' height='250px' />
                            <div>
                                <h3 >{pro.title}</h3>
                                <p >{pro.price}$</p>
                                <p>{pro.rating}</p>
                                <p>{pro.sizes}</p>
                                <WishlistBtn product={pro} />
                                <Link to={`/${category}/${pro.id}`}>Show more</Link>

                            </div>
                        </div>

                    )
                    )) : (<span>Loading...</span>)
                }
            </div>

            {/* <Footer /> */}
        </section>
    )
}




