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

//Global State
import { GlobalStateProvider } from './contexts/Context';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/online-store/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="mobile-accessory/" element={<MobileAccessories />} />
    </Route>
  )
);

function App() {
  return (
    <GlobalStateProvider>
      <RouterProvider router={router} />
    </GlobalStateProvider>
  );
}

export default App;
