import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import FeaturedGroups from "./FeaturedGroups";
import HobbyHoroscope from "../Components/HobbyHoroscope";
import WallOfFame from "../Components/WallOfFame";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Hubby Hub";
  }, []);
  return (
    <div className=" space-y-20 ">
      <Banner></Banner>
      <FeaturedGroups></FeaturedGroups>

      <HobbyHoroscope></HobbyHoroscope>
      <WallOfFame></WallOfFame>
    </div>
  );
};

export default Home;
