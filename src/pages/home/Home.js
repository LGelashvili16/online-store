import UserAndCategories from './UserAndCategories';
import DealsAndCategories from './dealsAndCategories/DealsAndCategories';
import Inquiry from './Inquiry';
import RecommendedItems from './recommendedItems/RecommendedItems';
import ExtraServices from './extraServices/ExtraServices';
import Newsletter from '../../components/newsletter/Newsletter';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Online Store - Home</title>
        <meta name="description" content="shop latest electronics" />
        <link rel="canonical" href="/online-store" />
      </Helmet>
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
