const AboutContactForm = () => {
    return (
        <>
        <section className="contact-section">
        <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/background/pattern-19.png)'}} />
        <div className="pattern-layer-two" style={{backgroundImage: 'url(/assets/images/background/pattern-20.png)'}} />
        <div className="icon-layer-two" style={{backgroundImage: 'url(/assets/images/icons/icon-2.png)'}} />
        <div className="icon-layer-three" style={{backgroundImage: 'url(/assets/images/icons/icon-2.png)'}} />
        <div className="auto-container">
          <div className="row clearfix">
            {/* Info Column */}
            <div className="info-column col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="icon-layer" style={{backgroundImage: 'url(/assets/images/icons/icon-2.png)'}} />
                <div className="image">
                  <img src="/assets/images/resource/contact.png" alt="" />
                </div>
                <h5>Contact us</h5>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page </p>
                <ul className="contact-list">
                  <li>
                    <strong>Phone:</strong>
                    <a href="tel:+88-01682648101">+88 01682648101</a>
                  </li>
                  <li>
                    <strong>Email:</strong>
                    <a href="mailo:hello@lebari.com">hello@lebari.com</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Form Column */}
            <div className="form-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="color-layer" />
                {/* Sec Title */}
                <div className="sec-title">
                  <h2> Visit us <br /> for Free Resources</h2>
                  <div className="text">These leading universities are currently offering online degree courses on FutureLearn:</div>
                </div>
                {/* Default Form */}
                <div className="default-form">
                  <form method="post" action="contact.html">
                    <div className="row clearfix">
                      {/* Form Group */}
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input type="text" name="username" defaultValue placeholder="First Name" required />
                      </div>
                      {/* Form Group */}
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input type="text" name="lastname" defaultValue placeholder="Last Name" required />
                      </div>
                      {/* Form Group */}
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <input type="email" name="email" defaultValue placeholder="Email" required />
                      </div>
                      {/* Form Group */}
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <select name="country" className="custom-select-box">
                          <option>When you want to start courses</option>
                          <option>courses 01</option>
                          <option>courses 02</option>
                          <option>courses 03</option>
                          <option>courses 04</option>
                        </select>
                      </div>
                      {/* Form Group */}
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input type="text" name="date" defaultValue placeholder="Date" required />
                      </div>
                      {/* Form Group */}
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input type="text" name="time" defaultValue placeholder="Time" required />
                      </div>
                      {/* Form Group */}
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <textarea placeholder="Type you comment here" defaultValue={""} />
                      </div>
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <button type="submit" className="theme-btn btn-style-one"><span className="txt">Submit</span></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default AboutContactForm;