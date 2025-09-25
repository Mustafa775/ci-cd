import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HomeCard from "./components/homeCard";
import Listings from "./components/listings";
import ViewAll from "./components/viewAll";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCard />
      <Listings />
      <ViewAll />
    </>
  );
};

export default App;
