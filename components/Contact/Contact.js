const ContactSection = () => {
    return (
        <>
            {/* Contact Banner Section */}
        <section className="contact-banner-section">
          <div className="pattern-layer-one" style={{backgroundImage: 'url(/assets/images/icons/icon-5.png)'}} />
          <div className="pattern-layer-two" style={{backgroundImage: 'url(/assets/images/icons/icon-6.png)'}} />
          <div className="pattern-layer-three" style={{backgroundImage: 'url(/assets/images/icons/icon-4.png)'}} />
          <div className="auto-container">
            {/* Page Breadcrumb */}
            <ul className="page-breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li>Contact us</li>
            </ul>
            <div className="content-box">
              <h2>Contact Now</h2>
              <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Duis aute irure dolor in reprehenderit in </div>
            </div>
          </div>
        </section>
        {/* End Contact Banner Section */}
        {/* Contact Page Section */}
        <section className="contact-page-section">
          <div className="pattern-layer-three" style={{backgroundImage: 'url(/assets/images/icons/icon-8.png)'}} />
          <div className="auto-container">
            <div className="row clearfix">
              {/* Info Column */}
              <div className="info-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="title">GET IN TOUCH</div>
                  <h2>Visit one of our agency locations <br /> or contact us today</h2>
                  <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </div>
                  <ul>
                    <li><span>Address</span>56 Glassford Street Glasgow G1 1UL New York</li>
                    <li><span>Our Phone</span>Telephone : 028577101<br />Mobile : 01781648101</li>
                    <li><span>Our Email</span>Telephone : 028577101<br />Mobile : 01781648101</li>
                    <li><span>Opening Hours</span>Monday to Saturday: 9.00am to 16.pm</li>
                  </ul>
                </div>
              </div>
              {/* Form Column */}
              <div className="form-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="circle-layer" />
                  <div className="pattern-layer-one" style={{backgroundImage: 'url(/assets/images/icons/icon-7.png)'}} />
                  <div className="pattern-layer-two" style={{backgroundImage: 'url(/assets/images/icons/icon-9.png)'}} />
                  <h2>Leave a message</h2>
                  <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> blandit arcu in pretium.</div>
                  {/* Contact Form */}
                  <div className="contact-form">
                    <form method="post" action="sendemail.php" id="contact-form">
                      <div className="form-group">
                        <input type="text" name="username" placeholder="Name" required />
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" placeholder="Email" required />
                      </div>
                      <div className="form-group">
                        <input type="text" name="phone" placeholder="Phone" required />
                      </div>
                      <div className="form-group">
                        <textarea className name="message" placeholder="Comment" defaultValue={""} />
                      </div>
                      <div className="form-group">
                        <button className="theme-btn btn-style-five" type="submit" name="submit-form">Send Message</button>
                      </div>
                    </form>
                  </div>	
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Page Section */}
        </>
    )
}

export default ContactSection;