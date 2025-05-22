import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import FeaturedGroups from "./FeaturedGroups";
import HobbyQuiz from "../Components/HobbyQuiz";
import WeeklyChallenge from "../Components/WeeklyChallenge";
import HobbyHoroscope from "../Components/HobbyHoroscope";
import WallOfFame from "../Components/WallOfFame";
import HobbyPairing from "../Components/HobbyPairing";



const Home = () => {
  useEffect(() => {
    document.title = "Home | Hubby Hub";
  }, []);
  return (
    <div>
    <Banner></Banner>
    <FeaturedGroups></FeaturedGroups>
    {/* <HobbyQuiz></HobbyQuiz> */}
    {/* <WeeklyChallenge></WeeklyChallenge> */}
{/* <HobbyHoroscope></HobbyHoroscope> */}
<WallOfFame></WallOfFame>
<HobbyPairing></HobbyPairing>

    </div>
  );
};

export default Home;
