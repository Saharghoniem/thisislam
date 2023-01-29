import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
// import { useNavigate } from "react-router-dom";
// import {  NavLink } from "react-router-dom";

const Second = () => {
    return (
      <>
        <Helmet>
          <title>Second</title>

        </Helmet>
        <Header />
        <MainContent/>

        <Footer />
      </>
    );
  }
  

export default Second;
