import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Third = () => {
  return (
    <div>
      <Helmet>
          <title>Third</title>

        </Helmet>
      <Header/>
        <MainContent/>
      <Footer/>
    </div>
  );
}

export default Third;
