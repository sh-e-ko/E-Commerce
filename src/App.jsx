import React from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRoutes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import SecondLoad from './Components/layouts/SecondLoad/SecondLoad'
const Payment = lazy(() => import('./Pages/Payment/Payment'))
const NotFound = lazy(() => import('./Components/layouts/NotFound/NotFound'))
const Load = lazy(() => import('./Components/layouts/Loading/Load'))
const ComingSoon = lazy(() => import('./Components/layouts/ComingSoon/ComingSoon'))
const Home = lazy(() => import('./Pages/Home/Home'))
const Man = lazy(() => import('./Pages/Product/Man/Man'))
const Woman = lazy(() => import('./Pages/Product/Woman/Woman'))
const Wishlist = lazy(() => import('./Pages/Wishlist/Wishlist'))
const Boy = lazy(() => import('./Pages/Product/Boy/Boy'))
const Girl = lazy(() => import('./Pages/Product/Girls/Girl'))
const SingleProMan = lazy(() => import('./Pages/Product/Man/SingleProMan'))
const SingleProWoman = lazy(() => import('./Pages/Product/Woman/SingleProWoman'))
const SingleProBoy = lazy(() => import('./Pages/Product/Boy/SingelProBoy'))
const SingleProGirl = lazy(() => import('./Pages/Product/Girls/SingelProGirl'))
const Faq = lazy(() => import('./Pages/FAQ/Faq'))
const Cart = lazy(() => import('./Pages/Cart/Cart'))
const ContactUS = lazy(() => import('./Pages/ContactUS/ContactUS'))
const Login = lazy(() => import('./Pages/Auth/Login/Login'))
const Register = lazy(() => import('./Pages/Auth/Register/Register'))
const Compare = lazy(() => import('./Pages/Compare/Compare'))
const About = lazy(() => import('./Pages/About/About'))

function App()
{
  const routes = useRoutes([
    {
      path: "/Home",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/man",
      element: <Man />
    },
    {
      path: "/women",
      element: <Woman />
    },
    {
      path: "/girl",
      element: <Girl />
    },
    {
      path: "/boy",
      element: <Boy />
    },
    {
      path: "/man/:productid",
      element: <SingleProMan />
    },
    {
      path: "/women/:productid",
      element: <SingleProWoman />
    },
    {
      path: "/girl/:productid",
      element: <SingleProGirl />
    },
    {
      path: "/boy/:productid",
      element: <SingleProBoy />
    },

    {
      path: "/",
      element: <Load />
    },
    {
      path: "/soon",
      element: <ComingSoon />
    },
    {
      path: "/Wishlist",
      element: <Wishlist />
    },
    {
      path: "/faq",
      element: <Faq />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/contact",
      element: <ContactUS />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/compare",
      element: <Compare />
    },

    {
      path: "/payment",
      element: <Payment />
    },

    {
      path: "/*",
      element: <NotFound />
    }
  ])

  return (
    <Suspense fallback={<SecondLoad />}>
      {routes}
      <ToastContainer position="top-right" autoClose={3000} />
    </Suspense>


  )
}

export default App
