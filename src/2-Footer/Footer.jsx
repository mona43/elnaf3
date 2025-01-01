import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer dir='rtl' className=' p-3 mt-5 text-light'  style={{backgroundColor:" #07092f "}}>
  <section >
  <div className="footer_section layout_padding" >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="location_text">
              <ul className="list-unstyled d-flex justify-content-around flex-wrap gap-3">
                <li>
                  <a href="#">
                    <span className="padding_15">
                      <i className="fa fa-mobile" aria-hidden="true"></i>
                    </span>
                    <br />
                    اتصل بنا: +01 1234567890
                  </a>
                </li>
                <li className="active">
                  <a href="#">
                    <span className="padding_15">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    <br />
                    demo@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="padding_15">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    <br />
                    الموقع
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_section_2">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h2 className="useful_text">روابط سريعة</h2>
              <div className="footer_menu">
                <ul className="list-unstyled">
                  <li><a href="index.html">الرئيسية</a></li>
                  <li><a href="about.html">من نحن</a></li>
                  <li><a href="services.html">الخدمات</a></li>
                  <li><a href="projects.html">المشاريع</a></li>
                  <li><a href="testimonial.html">الشهادات</a></li>
                  <li><a href="blog.html">المدونة</a></li>
                  <li><a href="contact.html">تواصل معنا</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <h2 className="useful_text">أعمالنا</h2>
              <p className="lorem_text">
                النصوص المستخدمة في التصميم ليست نهائية وتستعمل كعينة فقط لمعاينة الشكل النهائي.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h2 className="useful_text">اشترك في النشرة الإخبارية</h2>
              <div className="form-group">
                <textarea
                  className="form-control update_mail"
                  placeholder="أدخل بريدك الإلكتروني"
                  rows="3"
                ></textarea>
                <div className="subscribe_bt mt-2 d-flex ">
                  <button  className="btn1 mx-auto my-3">اشترك</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social_icon mt-4">
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="mx-2">
              <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            </li>
            <li className="mx-2">
              <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </li>
            <li className="mx-2">
              <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            </li>
            <li className="mx-2">
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
      <hr className='text-light'/>
      <p className='opacity-50 text-light text-center p-3 '>© 2024 جميع الحقوق محفوظة لشركتنا</p>
    </footer>
  )
}

export default Footer
