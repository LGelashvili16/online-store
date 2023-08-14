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
import Category from './pages/home-and-outdoor/Category';
import HomeAndOutdoorLayout from './layouts/HomeAndOutdoorLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/online-store/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="mobile-accessory" element={<MobileAccessories />} />
      <Route path="home-and-outdoor" element={<HomeAndOutdoorPage />} />

      <Route path="home-and-outdoor/category/:name" element={<Category />} />

      <Route path="product" element={<ProductLayout />}>
        <Route path=":from/:id" element={<ProductPage />} />
      </Route>

      <Route path="cart" element={<Cart />} />
      <Route path="saved" element={<Saved />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <GlobalStateProvider>
      <SaveForLaterStateProvider>
        <ProductsProvider>
          <CartStateProvider>
            <RouterProvider router={router} />
          </CartStateProvider>
        </ProductsProvider>
      </SaveForLaterStateProvider>
    </GlobalStateProvider>
  );
}

export default App;
