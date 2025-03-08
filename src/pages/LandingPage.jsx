import { Link } from "react-router-dom";
import Home from "../components/hero"
import AboutUs from "../components/aboutus"
import Team from "../components/team"
import Services from "../components/services"
import ContactUs from "../components/contact"
import Header from "../components/Header"
const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <Header />
      <Home />
      <AboutUs />
      <Team />
      <Services />
      {/* <Projects /> */}
      <ContactUs />
    </div>
  );
};

export default LandingPage;
