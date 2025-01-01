import React from 'react'

const Contact = () => {
  return (
    <section>
        {/* <img src="bg4.jpeg" width={"100%"}  alt="" /> */}
    <div className="contact_section layout_padding" dir='rtl'>
          <div className="container pt-5">
            <div className="row">
              <div className="col-md-12">
                <h1 className="contact_taital text-center m-3">تواصل معنا</h1>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="contact_section_2">
              <div className="row">
                <div className="col-md-6">
                  <form action="">
                    <div className="mail_section_1">
                      <input
                        type="text"
                        className="mail_text"
                        placeholder="الاسم"
                        name="Name"
                      />
                      <input
                        type="text"
                        className="mail_text"
                        placeholder="رقم الهاتف"
                        name="Phone Number"
                      />
                      <input
                        type="text"
                        className="mail_text"
                        placeholder="البريد الإلكتروني"
                        name="Email"
                      />
                      <textarea
                        className="massage-bt"
                        placeholder="الرسالة"
                        rows="5"
                        id="comment"
                        name="Massage"
                      ></textarea>
                      <div className="send_bt d-flex">
                        <button className="btn2 my-3 mx-auto" href="#">إرسال</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-6 padding_left_15">
                  <div className="contact_img">
                    <img src="bg3.jpeg " className="mb-3 mx-auto" width={"100%"}  alt="تواصل معنا" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="map_main">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                width="600"
                height="600"
                frameBorder="0"
                style={{ border: 0, width: '100%' }}
                allowFullScreen
                title="خريطة الموقع"
              ></iframe>
            </div>
          </div>
        </div>
    
    </section>
  )
}

export default Contact
