import { Helmet } from "react-helmet";
import Hero from "../../../components/Hero/Hero";
import Opportunity from "../Opportunity/Opportunity";
import Gallery from "../Gallery/Gallery";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Hero />
      <Opportunity />
      <Gallery />
      <Reviews />
    </div>
  );
};

export default Home;
