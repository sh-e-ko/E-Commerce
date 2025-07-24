import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../../../Api/Products';
import MainLayouts from '../../../Components/layouts/MainLayouts/MainLayouts'

export default function SingleProduct()
{
    const { productid } = useParams();


    const [Pro, setPro] = useState([]);

    useEffect(() =>
    {

        products.get(`/products/${productid}`)
            .then((res) =>
            {
                console.log("3f", res.data)
                setPro(res.data);
            })
            .catch((err) => console.error(err));
    }, [productid]);
    return (
        <MainLayouts>
            <img src={Pro.img} alt={Pro.title} width='250px' height='250px' />
            <div>
                <h3 >{Pro.title}</h3>
                <p >{Pro.price}$</p>
                <p>{Pro.rating}</p>
                {/* {Pro.sizes.map((size) => (

                    <p>{size}</p>

                ))} */}

            </div>
        </MainLayouts>
    )
}
