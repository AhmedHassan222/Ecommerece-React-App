import { RouterProvider,  createHashRouter } from 'react-router-dom';
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
import Airconditioner from './Components/Airconditioner/Airconditioner';
import Accessories from './Components/Accessories/Accessories';
import Cameras from './Components/Cameras/Cameras';
import HeadPhones from './Components/Headphones/Headphones';
import Laptop from './Components/Laptop/Laptop';
import Microwave from './Components/Microwave/Microwave';
import Shaver from './Components/Shaver/Shaver';
import Tablets from './Components/Tablets/Tablets';
import Televesions from "./Components/Televisions/Televisions"
import Cart from './Components/Cart/Cart';
import Productdetails from './Components/Productdetails/Productdetails';
import Checkout from './Components/Checkout/Checkout';
import Asidebar from './Components/Asidebar/Asidebar';

function App() {



  const routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'favarite', element: <Favarite /> },
        { path: 'airconditioner', element: <Airconditioner /> },
        { path: 'accessories', element: <Accessories /> },
        { path: 'cameras', element: <Cameras /> },
        { path: 'laptop', element: <Laptop /> },
        { path: 'microwave', element: <Microwave /> },
        { path: 'shaver', element: <Shaver /> },
        { path: 'tablets', element: <Tablets /> },
        { path: 'televisions', element: <Televesions /> },
        { path: 'headphones', element: <HeadPhones /> },
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
        <FavariteContextProvide>
          <SearchContextProvide>
            <RouterProvider router={routers} />
          </SearchContextProvide>
        </FavariteContextProvide>


      </Online>
      <Offline>
        <Noconnected />
      </Offline>
    </div>

  </>
}

export default App;
