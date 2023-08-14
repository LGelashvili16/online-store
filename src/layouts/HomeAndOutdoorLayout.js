import { Outlet } from 'react-router-dom';
import HomeAndOutdoorPage from '../pages/home-and-outdoor/HomeAndOutdoorPage';

const HomeAndOutdoorLayout = () => {
  return (
    <>
      <HomeAndOutdoorPage />
      {/* <Outlet /> */}
    </>
  );
};

export default HomeAndOutdoorLayout;
