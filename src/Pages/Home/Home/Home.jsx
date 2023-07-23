import { Helmet } from "react-helmet";
import Hero from "../../../components/Hero/Hero";
import Opportunity from "../Opportunity/Opportunity";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      {/* <Helmet>
        <title>ADM | Home</title>
      </Helmet> */}
      <Hero />
      <Opportunity />
      <Gallery />
    </div>
  );
};

export default Home;
