import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './data.css';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Data = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  const hierarchyData = {
    company: "شركة النفع العام",
    branches: [
      {
        name: "الإدارة التنفيذية",
        details: "تختص بإدارة العمليات اليومية وضمان تحقيق أهداف الشركة.",
        subBranches: [
          { name: "قسم التسويق", details: "مسؤول عن الترويج للمنتجات والخدمات." },
          { name: "قسم المبيعات", details: "يهتم بإدارة العلاقات مع العملاء وزيادة المبيعات." },
          { name: "قسم الموارد البشرية", details: "يختص بإدارة الموظفين وتحفيزهم." },
        ],
      },
      {
        name: "الإدارة المالية",
        details: "مسؤولة عن التخطيط المالي وإدارة الموارد المالية.",
        subBranches: [
          { name: "قسم المحاسبة", details: "يهتم بتسجيل وتحليل البيانات المالية." },
          { name: "قسم المراجعة", details: "يضمن الشفافية في التقارير المالية." },
        ],
      },
      {
        name: "إدارة تقنية المعلومات",
        details: "تدعم الشركة بالحلول التقنية لضمان الكفاءة.",
        subBranches: [
          { name: "قسم الدعم الفني", details: "يقدم خدمات الدعم للأنظمة التقنية." },
          { name: "قسم البرمجيات", details: "مسؤول عن تطوير وصيانة البرمجيات." },
        ],
      },
    ],
  };

  const boardMembers = [
    {
      id: 1,
      name: "محمد أحمد",
      role: "رئيس مجلس الإدارة",
      image: "img-1.jpg",
      message: "أتطلع إلى تعزيز التأثير الإيجابي للشركة في المجتمع وتحقيق أهدافنا المشتركة.",
    },
    {
      id: 2,
      name: "ياسر إبراهيم",
      role: "المدير التنفيذي",
      image: "img-2.jpg",
      message: "أؤمن بقوة الابتكار والعمل الجماعي لتحقيق النجاح المستدام.",
    },
    {
      id: 3,
      name: "أحمد علي",
      role: "مدير التسويق",
      image: "img-3.jpg",
      message: "هدفي هو بناء علامة تجارية قوية تخدم رؤية الشركة ورسالتها.",
    },
    {
      id: 4,
      name: "ليل حسن",
      role: "مدير الموارد البشرية",
      image: "img-4.jpg",
      message: "أسعى لخلق بيئة عمل تُمكّن موظفينا من الإبداع والتطور المستمر.",
    },
    {
      id: 5,
      name: "خالد يوسف",
      role: "المدير المالي",
      image: "img-5.webp",
      message: "أعمل على ضمان استدامة مالية قوية لدعم نمو الشركة وأهدافها.",
    },
    {
      id: 6,
      name: "ادم جمال",
      role: "مدير تقنية المعلومات",
      image: "img-6.jpg",
      message: "هدفي هو تمكين الشركة من خلال الحلول التقنية المبتكرة لتحقيق رؤيتنا.",
    },
  ];

  const executiveBoard = [
    {
      id: 1,
      name: "علي يوسف",
      role: "المدير العام",
      image: "img-10.jpg",
      message: "نعمل على تحقيق الاستدامة والنمو من خلال استراتيجيات مبتكرة وفعالة.",
    },
    {
      id: 2,
      name: "فهيم خالد",
      role: "مدير العمليات",
      image: "img-9.jpg",
      message: "أركز على تحسين الكفاءة التشغيلية لتحقيق أفضل أداء ممكن.",
    },
    {
      id: 3,
      name: "يوسف سليمان",
      role: "مدير التسويق",
      image: "img-8.jpeg",
      message: "نعمل على تعزيز العلامة التجارية وزيادة التفاعل مع عملائنا.",
    },
    {
      id: 4,
      name: "جلال عبد الرحمن",
      role: "مدير الموارد البشرية",
      image: "img-7.jpg",
      message: "هدفي هو بناء فريق عمل قوي يدعم رؤيتنا المستقبلية.",
    },
    {
      id: 5,
      name: "سامر إبراهيم",
      role: "مدير المشاريع",
      image: "img-6.jpg",
      message: "نسعى لضمان تنفيذ المشاريع بجودة عالية وفي الوقت المحدد.",
    },
    {
      id: 6,
      name: "فهد جمال",
      role: "مدير الابتكار",
      image: "img-5.webp",
      message: "نعمل على تطوير أفكار جديدة لتحسين منتجاتنا وخدماتنا.",
    },
  ];
  
  const integrationData = {
    title: "تكامل الشركات مع الشركة الأم",
    description:
      "نعمل على تعزيز التعاون بين الشركات الفرعية والشركة الأم لتحقيق أهداف مشتركة تشمل التنمية المستدامة، الابتكار، والنمو المتكامل.",
    keyPoints: [
      "تعزيز التعاون بين الفرق والإدارات المختلفة.",
      "تحقيق المنافع المشتركة من خلال توحيد الجهود.",
      "تنفيذ مشاريع مشتركة تدعم التنمية المستدامة.",
      "تعزيز الابتكار لتحقيق رؤية طويلة الأجل.",
    ],
    projects: [
      {
        title: "مشروع الطاقة النظيفة",
        description:
          "تعاونت الشركة الأم مع الشركات الفرعية لتنفيذ مشاريع طاقة شمسية تخدم المجتمعات المحلية.",
        icon: "solar-battery-1-svgrepo-com.svg",
      },
      {
        title: "برنامج التدريب القيادي",
        description:
          "تم إطلاق برنامج تدريب داخلي لتحسين مهارات الإدارة بين قادة الشركات الفرعية.",
        icon: "leadership-svgrepo-com.svg",
      },
      {
        title: "رقمنة العمليات",
        description:
          "عملت الشركات الفرعية معًا على رقمنة العمليات التشغيلية لتحسين الكفاءة.",
        icon: "digital.svg",
      },
    ],
  };
  




  return (
    <div dir="rtl">
      {/* <div
        className="company"
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
            الهيكل التنظيمي لمجموعة النفع العام
          </h1>
          <p style={{ fontSize: '1.2rem', margin: '0 auto' }}>
            تعرف على طريقة تنظيم إدارتنا لتحقيق أثر أكبر في خدمة المجتمع.
          </p>
        </div>
      </div> */}

      {/* قسم الهيكل التنظيمي */}
      <section className="hierarchy-section" >
  <h2 className="hierarchy-title">الهيكل التنظيمي العام</h2>
  <div className="hierarchy-container" style={{ flexDirection:'column' }}>
    <div className="branches">
      {hierarchyData.branches.map((branch, index) => (
        <div key={index} className="branch-node">
          <h4
            className="branch-title"
            onClick={() => setSelectedNode(branch.details)}
          >
            {branch.name}
          </h4>
          <div className="sub-branches">
            {branch.subBranches.map((subBranch, idx) => (
              <p
                key={idx}
                className="sub-branch-item"
                onClick={() => setSelectedNode(subBranch.details)}
              >
                {subBranch.name}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  {selectedNode && (
    <div className="details-box">
      <p>{selectedNode}</p>
    </div>
  )}
</section>



      {/* أعضاء مجلس الادارة*/}
      <section className="board-section my-5" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}> مجلس الإدارة</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            1200: { slidesPerView: 4, spaceBetween: 30 },
            992: { slidesPerView: 3, spaceBetween: 20 },
            700: { slidesPerView: 2, spaceBetween: 15 },
            699: { slidesPerView: 1, spaceBetween: 10 },
            200: { slidesPerView: 1, spaceBetween: 5 },
          }}
          className="mySwiper"
        >
          {boardMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="member" style={{ textAlign: 'center', padding: '20px' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    borderRadius: '50%',
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    marginBottom: '15px',
                  }}
                />
                <h3 style={{ fontSize: '1.2rem', margin: '10px 0' }}>{member.name}</h3>
                <p style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '10px' }}>{member.role}</p>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>{member.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      
      {/* الإدارات التنفيذية */}
      <section className="hierarchy-section my-5" style={{ textAlign: 'center', padding: '40px 20px',  }}>
  <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>الهيكل التنظيمي العام</h2>
  <div
    className="hierarchy-container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}
  >
    {hierarchyData.branches.map((branch, index) => (
      <div
        key={index}
        className="member"
        style={{
          maxWidth: '300px',
          textAlign: 'center',
          padding: '20px',
          background: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease',
        }}
      >
        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>{branch.name}</h3>
        <p style={{ fontSize: '1rem', marginBottom: '15px', color: '#666' }}>{branch.details}</p>
        <div
          className="sub-branches"
          style={{
            background: '#f9f9f9',
            borderRadius: '8px',
            padding: '10px',
            textAlign: 'left',
          }}
        >
          <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#555' }}>الأقسام الفرعية:</h4>
          <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
            {branch.subBranches.map((subBranch, idx) => (
              <li
                key={idx}
                style={{
                  fontSize: '0.9rem',
                  color: '#333',
                  marginBottom: '8px',
                  padding: '5px 10px',
                  background: '#fff',
                  borderRadius: '5px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                <strong>{subBranch.name}</strong>: {subBranch.details}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
      </section>
      
      {/* الإدارات التنفيذية */}
      <section
  className="executive-board-section my-5"
  style={{ padding: "40px 20px", textAlign: "center" }}
>
  <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>الإدارة التنفيذية</h2>
  <Swiper
    slidesPerView={4}
    spaceBetween={30}
    loop={true}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    breakpoints={{
      1200: { slidesPerView: 4, spaceBetween: 30 },
      992: { slidesPerView: 3, spaceBetween: 20 },
      700: { slidesPerView: 2, spaceBetween: 15 },
      699: { slidesPerView: 1, spaceBetween: 10 },
      200: { slidesPerView: 1, spaceBetween: 5 },
    }}
    className="mySwiper"
  >
    {executiveBoard.map((member) => (
      <SwiperSlide key={member.id}>
        <div className="member" style={{ textAlign: "center", padding: "20px" }}>
          <img
            src={member.image}
            alt={member.name}
            style={{
              borderRadius: "50%",
              width: "150px",
              height: "150px",
              objectFit: "cover",
              marginBottom: "15px",
            }}
          />
          <h3 style={{ fontSize: "1.2rem", margin: "10px 0" }}>{member.name}</h3>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            {member.role}
          </p>
          <p style={{ fontSize: "0.9rem", color: "#555" }}>{member.message}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>
{/* تكامل الشركات */}
<section
  className="integration-section my-5"
  style={{
    padding: "50px 20px",
    textAlign: "center",
    background: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }}
>
  <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#333" }}>
    {integrationData.title}
  </h2>
  <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "40px" }}>
    {integrationData.description}
  </p>
  <div
    className="key-points"
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "20px",
      marginBottom: "40px",
    }}
  >
    {integrationData.keyPoints.map((point, index) => (
      <div
        key={index}
        style={{
          width: "calc(25% - 20px)",
          minWidth: "200px",
          background: "#fff",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1rem", color: "#333" }}>{point}</p>
      </div>
    ))}
  </div>
  <div
    className="projects"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
    }}
  >
    {integrationData.projects.map((project, index) => (
      <div
        key={index}
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <img
          src={project.icon}
          alt={project.title}
          style={{ width: "80px", height: "80px", marginBottom: "15px" }}
        />
        <h4 style={{ fontSize: "1.2rem", color: "#0047ab" }}>
          {project.title}
        </h4>
        <p style={{ fontSize: "1rem", color: "#666" }}>{project.description}</p>
      </div>
    ))}
  </div>
</section>



    </div>
  );
};

export default Data;
