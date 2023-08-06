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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/online-store/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="mobile-accessory/" element={<MobileAccessories />} />

      <Route path="product" element={<ProductLayout />}>
        <Route path=":from/:id" element={<ProductPage />} />
      </Route>

      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return (
    <GlobalStateProvider>
      <ProductsProvider>
        <CartStateProvider>
          <SaveForLaterStateProvider>
            <RouterProvider router={router} />
          </SaveForLaterStateProvider>
        </CartStateProvider>
      </ProductsProvider>
    </GlobalStateProvider>
  );
}

export default App;
