import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import Register from './Components/Register/Register';
import Favarite from './Components/Favarite/Favarite';
import FavariteContextProvide from './Context/Favaritestore';
import { Offline, Online } from "react-detect-offline";
import Noconnected from './Components/Noconnected/Noconnected';
import SearchContextProvide from './Context/Searchstore';
import Cart from './Components/Cart/Cart';
import Productdetails from './Components/Productdetails/Productdetails';
import Checkout from './Components/Checkout/Checkout';
import Asidebar from './Components/Asidebar/Asidebar';
import Products from './Components/Products/Products';
import GetDataContextProvide from './Context/Getdatastore';
import CartContextProvide from './Context/Cartstore';

function App() {
  const routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'favarite', element: <Favarite /> },
        { path: 'products/:category', element: <Products /> },
        { path: 'productdetails/:type/:id', element: <Productdetails /> },
        { path: 'cart', element: <Cart /> },
        { path: 'checkout', element: <Checkout /> },
        { path: 'asidebar', element: <Asidebar /> },
        { path: '*', element: <Notfound /> }
      ]
    }
  ])
  return <>
    <div>
      <Online>
      <CartContextProvide>
        <GetDataContextProvide>
            <FavariteContextProvide>
                <SearchContextProvide>
                    <RouterProvider router={routers} />
                </SearchContextProvide>
            </FavariteContextProvide>
        </GetDataContextProvide>
    </CartContextProvide>
      </Online>
      <Offline>
        <Noconnected />
      </Offline>
    </div>
  </>
}
export default App;
