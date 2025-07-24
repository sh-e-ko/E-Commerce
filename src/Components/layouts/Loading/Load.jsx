import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import load from '../../../assets/Animation - 1751851904359.json';
import LottiePage from '../LottiePage';

export default function Load()
{

    const navigate = useNavigate();

    useEffect(() =>
    {
        const timer = setTimeout(() =>
        {
            navigate("/home", { replace: true });
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <>
            <LottiePage name={load} />
        </>
    )
}
