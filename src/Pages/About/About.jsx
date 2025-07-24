import React from 'react'
import MainLayouts from '../../Components/layouts/MainLayouts/MainLayouts'
import BannerAbout from '../Home/Components/Banner About/BannerAbout'
import ClientSay from '../Home/Components/Client Say/ClientSay'
import Ourmission from './Components/Ourmission'
import WhatWeOffer from './Components/WhatWeOffer'
import Whoareyou from './Components/Whoareyou'

export default function About()
{
    return (
        <section>
            <MainLayouts>

                <div>
                    <Whoareyou />
                </div>
                <div>
                    <WhatWeOffer />
                </div>
                <div>
                    <Ourmission/>
                </div>
                <div>
                    <ClientSay />
                </div>
                <div>
                    <BannerAbout />
                </div>
                <div>

                </div>
            </MainLayouts>
        </section>
    )
}
