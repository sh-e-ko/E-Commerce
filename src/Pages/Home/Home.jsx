import React from 'react'
import MainLayouts from '../../Components/layouts/MainLayouts/MainLayouts'
import BannerProducts from './Components/Banner shop/BannerProducts'
import Banner from './Components/Banner/Banner'
import BannerAbout from './Components/Banner About/BannerAbout'
import Trends from './Components/Trends/Trends'
import ClientSay from './Components/Client Say/ClientSay'
import BannermanPro from './Components/Products/Man/Banner Man/BannermanPro'
import BannerGirlPro from './Components/Products/Children/Girls/Banner Girl/BannerGirlPro'
import BannerWomanPro from './Components/Products/Woman/Banner Woman/BannerWomanPro'
import BannerBoyPro from './Components/Products/Children/Boy/Banner Boy/BannerBoyPro'
import FeaturedMan from './Components/Products/Man/Featured Man/FeaturedMan'
import FeaturedWoman from './Components/Products/Woman/Featured Woman/FeaturedWoman'
import FeaturedGirl from './Components/Products/Children/Girls/Featured Girl/FeaturedGirl'
import FeaturedBoy from './Components/Products/Children/Boy/Featured Boy/FeaturedBoy'

export default function Home()
{


  return (
    <MainLayouts>
      <Banner />
      <Trends />
      <BannerProducts />
      <BannermanPro />
      <FeaturedMan />
      <BannerGirlPro />
      <FeaturedGirl />
      <BannerWomanPro />
      <FeaturedWoman />
      <BannerBoyPro />
      <FeaturedBoy />
      <ClientSay />
      <BannerAbout />
    </MainLayouts>

  )
}
