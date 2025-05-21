import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import FeaturedGroups from "./FeaturedGroups";



const Home = () => {
  useEffect(() => {
    document.title = "Home | Hubby Hub";
  }, []);
  return (
    <div>
    <Banner></Banner>
    <FeaturedGroups></FeaturedGroups>

    </div>
  );
};

export default Home;
