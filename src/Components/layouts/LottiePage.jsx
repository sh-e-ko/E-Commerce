import React from 'react'
import Lottie from 'lottie-react';


export default function LottiePage({ name })
{
    return (
        <section style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{ width: 600, height: 600 }}>
                <Lottie
                    animationData={name}
                    loop
                    autoplay
                />
            </div>
        </section>
    )
}
