import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
// import { Link } from "react-router-dom";
import MainContent from "../comp/MainContent";
import video from "../images/islam.mp4";
import img1 from "../images/11.png";
import img2 from "../images/22.png";


const Logo = () => {
  return (
    <>
      <Helmet>
        <title>مرحبا</title>
      </Helmet>
      
    <Header />
    <h3 className="mrh">مرحبا بك فى موقع هذا الأسلام </h3>
    
    <video src={video} loop autoPlay muted></video>
    <br/> 
    <h3>
    إخواني وأخواتي في العالم الإسلامي وغيره .. السلام عليكم ورحمة الله وبركاته.. أما بعد فهذه هي البطاقة الشخصية لموقعنا هذا الإسلام .. أما بعد هدفنا إرضاء الله عز وجل بإحياء الدين كله، في جميع شعب الحياة، في العالم كله ,على طريقة النبي صلى الله عليه وسلم في نيته وأقواله وأعماله وأخلاقه، وأن يدخل التوحيد والإيمان والسنن النبوية في حياة كل إنسان، ويصل إلى كل بيت، وكل دولة، وكل قارة من خلال هذا الموقع وغيره.



    </h3>
    <div className="im">
      <img src={img1} alt="#"/>
      <img src={img2} alt="#"/>

    </div>

      <MainContent/>
 
      <Footer />
      </>
    );
  }
  

export default Logo;
