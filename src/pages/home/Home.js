import UserAndCategories from './UserAndCategories';
import DealsAndCategories from './dealsAndCategories/DealsAndCategories';
import Inquiry from './Inquiry';
import RecommendedItems from './recommendedItems/RecommendedItems';
import ExtraServices from './extraServices/ExtraServices';
import Newsletter from '../../components/newsletter/Newsletter';

const Home = () => {
  return (
    <>
      <UserAndCategories />
      <DealsAndCategories />
      <Inquiry />
      <RecommendedItems />
      <ExtraServices />
      <Newsletter />
    </>
  );
};

export default Home;
