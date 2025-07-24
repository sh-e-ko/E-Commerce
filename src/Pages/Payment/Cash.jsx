import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Cash()
{

    const navigate = useNavigate();

    useEffect(() =>
    {
        const timer = setTimeout(() =>
        {
            navigate("/home", { replace: true });
        }, 8000);

        return () => clearTimeout(timer);
    }, [navigate]);
    return (
        <section>
            <p>
                thak you for choosing to pay with cash! we truly appreciate your visit.
                whether you're shopping for yourself or you loved ones , we hope you 
                enjoyed the experience. looking forward to seeing you again soon!
            </p>
        </section>
    )
}
