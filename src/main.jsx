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
        element: <Dashboard></Dashboard>
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
