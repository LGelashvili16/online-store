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
        <link rel="canonical" href="/online-store/" />

        <meta property="og:title" content="Electronics store, online store" />
        <meta
          property="og:description"
          content="laptops, smartphones, supplies, online store"
        />

        <meta property="og:site_name" content="Electornics store" />
        <meta property="og:locale" content="en_US" />
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
