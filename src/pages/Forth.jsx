import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import MainContent from "../comp/MainContent";

const Forth = () => {

    return (
      <>
        <Helmet>
          <title>Forth</title>

        
        </Helmet>
        <Header />
        <MainContent/>

        <Footer />
      </>
    );
  }


export default Forth;

 
