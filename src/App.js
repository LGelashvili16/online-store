import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import './App.css';

// Pages
import Home from './pages/home/Home';

// Layouts
import RootLayout from './layouts/RootLayout';
import MobileAccessories from './pages/mobile-accessories/MobileAccessories';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/online-store/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="mobile-accessories/" element={<MobileAccessories />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
