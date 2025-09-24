import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HomeCard from "./components/homeCard";
import Listings from "./components/listings";
import ViewAll from "./components/viewAll";

const App = () => {
  return (
    <>
      <Navbar />

      {/* <!-- Hero --> */}
      <Hero />

      {/* <!-- Developers and Employers --> */}

      <HomeCard />

      {/* <!-- Browse Jobs --> */}
      <Listings />

      <ViewAll />
    </>
  );
};

export default App;
