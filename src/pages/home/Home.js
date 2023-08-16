import Newsletter from '../../components/newsletter/Newsletter';
import UserAndCategories from './UserAndCategories';
import Section2 from './section2/Section2';
import Section3 from './Section3';
import Section4 from './section4/Section4';
import Section5 from './section5/Section5';

const Home = () => {
  return (
    <>
      <UserAndCategories />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Newsletter />
    </>
  );
};

export default Home;
