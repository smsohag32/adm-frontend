import { Helmet } from "react-helmet";
import Hero from "../../../components/Hero/Hero";
import Opportunity from "../Opportunity/Opportunity";

const Home = () => {
  return (
    <div>
      {/* <Helmet>
        <title>ADM | Home</title>
      </Helmet> */}
      <Hero />
      <Opportunity />
    </div>
  );
};

export default Home;
