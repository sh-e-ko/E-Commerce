import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import notfound from "../../../assets/spider.json";
import LottiePage from '../LottiePage'
export default function NotFound()
{

    const navigate = useNavigate();

    useEffect(() =>
    {
        const timer = setTimeout(() =>
        {
            navigate("/home", { replace: true });
        }, 4000);

        return () => clearTimeout(timer);
    }, [navigate]);
    return (
       <>
            <LottiePage name={notfound}/>
       </>
    )
}
