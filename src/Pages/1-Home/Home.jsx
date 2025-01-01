// import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom"
import CardComponent from "./CardComponent"
import CompanyComponentsCards from "./CompanyComponentsCards"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div dir="rtl"> 
 {/* Start Home-Slide  */}  

    <Carousel activeIndex={index} onSelect={handleSelect} style={{position:"relative" }} >
      <Carousel.Item>
        <img src="bg2.jpeg" width={"100%"}  alt="" className="img" />
        <div className="bgHeader"></div>
        <Carousel.Caption  className="custom-caption">
          <h3> شركه النفع العام </h3>
          <br /> 
          <p > نسعى لبناء مستقبل أفضل من خلال خدمات مبتكره ورؤيه واضحه.</p>
           <button className="btn1 m-2"> تواصل معنا</button>
           <button className="btn1 m-2">  من نحن </button>
    
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="bg4.jpeg" width={"100%"} alt=""  className="img" />

        <div className="bgHeader"></div>
        <Carousel.Caption className="custom-caption">
        <h3> شركه النفع العام </h3>
       
          <br />
        <p > نسعى لبناء مستقبل أفضل من خلال خدمات مبتكره ورؤيه واضحه.</p>
        <button className="btn1 m-2"> تواصل معنا</button>
        <button className="btn1 m-2">  من نحن </button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="bg5.jpeg" width={"100%"} alt="" className="img"  />
        <div className="bgHeader"></div>
        
        <Carousel.Caption  className="custom-caption">
        <h3> شركه النفع العام </h3>
       
              <br />
        <p > نسعى لبناء مستقبل أفضل من خلال خدمات مبتكره ورؤيه واضحه.</p>
  <button className="btn1  m-2"> تواصل معنا</button>
           <button className=" btn1 m-2">  من نحن </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>






  {/* <div className="header Home-slide">
      <div className="inner-header flex">
    <div>
          <h1 className='text-light'> شركه النفع العام </h1>
          <p style={{fontVariant:"caps"}} className='text-light'> 
            <b> 
            نسعى لبناء مستقبل أفضل من خلال خدمات مبتكرة ورؤية واضحة.              
              </b>
          </p>
    </div>
      </div>

      <div>
        <svg
          className="waves"
 
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div> */}






{/* Start Home-About */}
     <div className="home-about row my-5 container mx-auto">
      <div className="col-lg-7">
         <h2 className=" m-3" ><b><ins> من نحن :</ins></b></h2>
          <p style={{fontVariant:"caps"}}> نحن شركة رائدة متخصصة في تقديم حلول مبتكرة ومتكاملة لتحقيق أهداف عملائنا. 
           نؤمن بأهمية الابتكار والاستدامة لبناء مستقبل أفضل. 
           تأسست شركتنا برؤية واضحة لتعزيز تأثيرنا الإيجابي في مختلف القطاعات</p>
        

           {/* <h4> <b><ins>بيانات التواصل :</ins></b></h4> */}
        {/* <address>
            123 شارع الخير، مدينة البركة<br />
            البريد الإلكتروني: <Link className="link text-primary" to="mailto:info@naf3.com">info@naf3.com</Link><br />
            الهاتف: <Link className="link text-primary" to="tel:+123456789">+123 456 789</Link><br />
            الموقع الإلكتروني: <Link className="link text-primary" to="https://www.naf3.com">www.naf3.com</Link>
        </address> */}
        {/* <div className="social-media d-flex gap-3">
            <p>تابعنا على وسائل التواصل:</p>
            <Link className="link text-primary" to="https://www.facebook.com/naf3" target="_blank">فيسبوك</Link>
            <Link className="link text-primary" to="https://www.twitter.com/naf3" target="_blank">تويتر</Link>
            <Link className="link text-primary" to="https://www.instagram.com/naf3" target="_blank">إنستجرام</Link>
            <Link className="link text-primary" to="https://www.linkedin.com/company/naf3" target="_blank">لينكدإن</Link>
        </div> */}

      </div>

        <div className="col-lg-5">
          <img src="bg1.jpeg" width={"100%"} height={"550px"} alt="" />
          {/* <video src="v1.crdownload" muted loop autoPlay width={"100%"} height={""}></video> */}
          {/* <img src="about.webp" alt="" className="" style={{boxShadow:"10px 15px 15px 10px #000 "}}  width={"100%"}/> */}
        </div>
     </div>
{/* End Home-About */}

{/* رؤيه - رساله - اهداف  */}
<section className="container row justify-content-around mx-auto  gap-5" style={{margin:"100px auto"}}>
 <CardComponent img={"compass.svg"} title={"الرؤيه"} description={"نسعى لأن نكون الشركة الرائدة في مجال العمل الرئيسي من خلال تقديم حلول مبتكرة ومستدامة تحقق رضا العملاء وتساهم فى تطوير المجتمع "}/>
 <CardComponent img={"hand.svg"} title={"الرسالة"} description={"رسالتنا هي تقديم خدمات ومنتجات ذات جودة عالية تلبي احتياجات عملائنا، مع الالتزام بالقيم الأخلاقية والابتكار المستمر لتحقيق الأثر الإيجابي على المجتمع والبيئة"}  />
 <CardComponent img={"graph.svg"} title={"الأهداف"} description={"- تقديم خدمات متميزة تلبي توقعات العملاء -  تعزيز الابتكار في جميع عملياتنا -  دعم الاستدامة وتحقيق تأثير إيجابي على المجتمع -  بناء شراكات قوية مع العملاء والشركات الأخرى -  تحقيق التوسع والنمو في الأسواق المحلية والعالمية"} />
</section>



{/* خدماتنا  */}
<section className="bg-wight text-center p-3 container my-5 ">
  <h2 style={{fontSize:"40px"}} > <strong> خدماتنا </strong> </h2>
  <p>نقدم مجموعة متنوعة من الخدمات المصممة لتلبية احتياجات عملائنا وتحقيق أهدافهم بكفاءة وجودة.</p>

  <div className="row gap-5 my-5 justify-content-around mx-auto">
    <CardComponent    img={"briefcase.svg"}  title={"الاستشارات الإدارية"} description={"وفر حلولًا متكاملة لدعم نمو أعمالكم وتحقيق أهدافكم الاستراتيجية"} />
    <CardComponent  img={"gear.svg"}  title={"الدعم الفني"}description={"نقدم خدمات دعم تقني على مدار الساعة لضمان سير أعمالك بسلاسة"} />
    <CardComponent img={"light.svg"}   title={"الابتكار والتطوير"} description={"نبتكر حلولًا إبداعية لتطوير أعمالك وجعلها أكثر تنافسية"}/>
  </div>
</section>


{/* شركاتنا */}
<section className="bg-wight text-center  p-3 container my-5 ">
  <h2 style={{fontSize:"40px"}}> شركاتنا </h2>
<p>نحن نفخر بشبكة متميزة من الشركات التابعة التي تعمل معنا لتحقيق رؤية مشتركة وتقديم خدمات متنوعة تلبي احتياجات عملائنا.</p>
  
  <div className="row gap-5 my-5 justify-content-around mx-auto">
    <CompanyComponentsCards   img={"bg3.jpeg"} url={"company1"} title={"الخير للاستثمار"}  description={"متخصصة في إدارة الاستثمارات والمشاريع المربحة ذات الأثر الاجتماعي."} />
    <CompanyComponentsCards  img={"bg4.jpeg"}  url={"company2"} title={"أمان للخدمات المالية"}  description={"متخصصة في تقديم الحلول المالية والاستشارات للشركات والأفراد."} />
    <CompanyComponentsCards  img={"bg5.jpeg"}  url={"company3"} title={"إحسان للتكنولوجيا"} description={"متخصصة في تطوير البرمجيات والتكنولوجيا لخدمة المجتمعات ."}/>
    <CompanyComponentsCards  img={"bg6.jpeg"}  url={"company4"}  title={"ريادة للاستشارات والتطوير"} description={"متخصصة في تقديم الاستشارات الاستراتيجية وبرامج التنمية المستدامة ."}/>
  </div>
</section>






</div>
  )
}

export default Home
