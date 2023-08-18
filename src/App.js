import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import './App.css';

// Pages
import Home from './pages/home/Home';
import MobileAccessories from './pages/mobile-accessories/MobileAccessories';
import ProductPage from './pages/product/ProductPage';

// Layouts
import RootLayout from './layouts/RootLayout';

//Global State
import { GlobalStateProvider } from './contexts/Context';
import ProductLayout from './layouts/ProductLayout';
import { CartStateProvider } from './contexts/CartContext';
import Cart from './pages/cart/Cart';
import { SaveForLaterStateProvider } from './contexts/SaveForLaterContext';
import { ProductsProvider } from './contexts/ProductsContext';
import NotFound from './pages/error/NotFound';
import Saved from './pages/saved/Saved';
import HomeAndOutdoorPage from './pages/home-and-outdoor/HomeAndOutdoorPage';
import ConsumerElectronicsPage from './pages/consumerElectronics/ConsumerElectronicsPage';
import HomeAndOutdoorCategory from './pages/home-and-outdoor/HomeAndOutdoorCategory';
import ConsumerElectronicsCategory from './pages/consumerElectronics/ConsumerElectronicsCategory';

import Login from './pages/user/login/Login';
import Registration from './pages/user/registration/Registration';
import { UserProvider } from './contexts/UserContext';
import Profile from './pages/user/profile/Profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/online-store/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="mobile-accessory" element={<MobileAccessories />} />
      <Route path="home-and-outdoor" element={<HomeAndOutdoorPage />} />
      <Route
        path="consumer-electronics"
        element={<ConsumerElectronicsPage />}
      />

      <Route
        path="home-and-outdoor/:name"
        element={<HomeAndOutdoorCategory />}
      />

      <Route
        path="consumer-electronics/:name"
        element={<ConsumerElectronicsCategory />}
      />

      <Route path="product" element={<ProductLayout />}>
        <Route path=":from/:id" element={<ProductPage />} />
      </Route>

      <Route path="cart" element={<Cart />} />
      <Route path="saved" element={<Saved />} />

      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="profile" element={<Profile />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <GlobalStateProvider>
      <UserProvider>
        <SaveForLaterStateProvider>
          <ProductsProvider>
            <CartStateProvider>
              <RouterProvider router={router} />
            </CartStateProvider>
          </ProductsProvider>
        </SaveForLaterStateProvider>
      </UserProvider>
    </GlobalStateProvider>
  );
}

export default App;
