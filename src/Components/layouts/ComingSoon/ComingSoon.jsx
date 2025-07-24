import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import soon from '../../../assets/soon.json'
import LottiePage from '../LottiePage';
export default function ComingSoon()
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
      <LottiePage name={soon} />
    </>
  )
}
