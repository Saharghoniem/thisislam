import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import MainContent from "../comp/MainContent";

const First = () => {
  return (
    
      <div>
      <Helmet>
          <title>First</title>

        </Helmet>
      <Header/>
        
        <MainContent/>
      <Footer/>
    </div>
    
  );
}

export default First;
