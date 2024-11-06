import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import Roots from './component/Roots/Roots';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Home from './component/children/Home/Home';
import Dashboard from './component/Dashboard/Dashboard';
import Statistics from './component/Statistics/Statistics';
import ProductDetails from './component/children/Product details/ProductDetails';
import Support from './component/Support/Support';
import Contact from './component/Support/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'GadgetsData/:product_id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/public/GadgetData.json')
      },
      {
        path: 'Statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'Dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/public/GadgetData.json')
      },
      {
        path: 'Support',
        element: <Support></Support>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
