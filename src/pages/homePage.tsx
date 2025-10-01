import Hero from '../components/hero'
import Homecard from "../components/homeCard";
import Listings from "../components/listings";
import Viewall from "../components/viewAll";

const homePage = () => {
  return (
    <>
     <Hero/>
     <Homecard />
     <Listings/>
     <Viewall/>
    </>
  )
}

export default homePage