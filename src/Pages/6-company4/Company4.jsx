import React from 'react';
import CardComponent from '/src/Pages/6-company4/CardComponent';
const Company4 = () => {
  return (
    <div dir="rtl">
      <div className='company'
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0.5)), url(bg6.jpeg)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          padding: '20px'
        }}
      >
        <div
          style={{
            color: '#fff',
            padding: '20px',
            textAlign: 'center',
            maxWidth: '600px'
          }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
            ريادة للاستشارات والتطوير
          </h1>
          <p style={{ fontSize: '1.2rem', margin: '0 auto' }}>
            ريادة للاستشارات والتطوير هي شركة رائدة تقدم حلولاً استشارية مبتكرة ومتوافقة مع أحدث المعايير العالمية، 
            وتهدف إلى تحقيق النمو المستدام لعملائها.
          </p>
        </div>
      </div>
      {/* من نحن */}
      <div className="home-about row my-5 container mx-auto">
      <div className="col-lg-7">
        <h2 className=" m-3" ><b><ins> من نحن :</ins></b></h2>
          <p style={{fontVariant:"caps"}}>نحن في ريادة للاستشارات والتطوير نسعى لتحقيق التميز من خلال تقديم خدمات استشارية عالية الجودة. 
          نسعى لتلبية احتياجات عملائنا مع الالتزام بمبادئ الشفافية والمصداقية.</p>
      </div>
        <div className="col-lg-5">
          <img src="bg6.jpeg" width={"100%"} alt="" />
        </div>
      </div>
      {/* رؤية - رسالة - أهداف */}
      <section className="container row justify-content-around mx-auto gap-5" style={{ margin: "100px auto" }}>
        <CardComponent 
          img="compass.svg" 
          title="رؤيتنا في ريادة للاستشارات والتطوير" 
          description="نسعى لأن نكون الشركة الرائدة في تقديم حلول استشارية مبتكرة ومستدامة، تساهم في تحقيق رضا العملاء ودعم المجتمع." 
        />
        <CardComponent 
          img="hand.svg" 
          title="رسالتنا" 
          description="نلتزم بتقديم خدمات ومنتجات استشارية متوافقة مع القيم الأخلاقية، مع الابتكار المستمر لتحقيق أثر إيجابي في حياة عملائنا ومجتمعنا." 
        />
        <CardComponent 
          img="graph.svg" 
          title="أهدافنا" 
          description="- تقديم خدمات استشارية تحقق توقعات العملاء. - تعزيز الابتكار في جميع المجالات. - دعم الاستدامة في العمليات. - بناء شراكات استراتيجية لتحقيق النجاح." 
        />
      </section>
      {/* خدماتنا */}
      <section className="bg-wight text-center p-3 container my-5 ">
        <h2 style={{ fontSize: "40px" }}> <strong> خدماتنا </strong> </h2>
        <p>نقدم مجموعة مميزة من الخدمات الاستشارية التي تهدف إلى دعم عملائنا وتحقيق تطلعاتهم.</p>
        <div className="row gap-5 my-5 justify-content-around mx-auto">
          <CardComponent 
            img={"briefcase.svg"} 
            title={"إدارة المشاريع"} 
            description={"نوفر خدمات إدارة المشاريع بمهنية عالية لتحقيق أهداف عملائنا."} 
          />
          <CardComponent 
            img={"gear.svg"} 
            title={"الاستشارات الاستراتيجية"} 
            description={"نقدم استشارات متخصصة تساعد في اتخاذ قرارات استراتيجية ناجحة ومبنية على دراسات دقيقة."} 
          />
          <CardComponent 
            img={"light.svg"} 
            title={"الابتكار في الاستشارات"} 
            description={"نعمل على تقديم حلول استشارية مبتكرة تلبي احتياجات السوق المتغيرة وتعزز من تنافسية عملائنا."} 
          />
        </div>
      </section>
    </div>
  );
};

export default Company4;
