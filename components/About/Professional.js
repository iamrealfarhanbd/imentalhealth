const AboutProfessional = () => {
    return (
        <>
            <section className="professional-section style-two">
        <div className="background-layer-one" style={{backgroundImage: 'url(/assets/images/background/pattern-5.png)'}} />
        <div className="auto-container">
          <div className="row clearfix">
            {/* Images Column */}
            <div className="images-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/background/pattern-3.png)'}} />
                <div className="pattern-layer-two" style={{backgroundImage: 'url(/assets/images/background/pattern-4.png)'}} />
                <div className="color-layer" />
                <div className="color-layer-two" />
                <div className="image wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <img src="/assets/images/resource/professional.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="pattern-layer-three" style={{backgroundImage: 'url(/assets/images/background/pattern-16.png)'}} />
                <div className="sec-title">
                  <div className="title">Learn anything</div>
                  <h2>Take online courses Earn <br /> professional</h2>
                </div>
                <div className="bold-text">Position yourself for success with a variety of collegeclasses including general education courses</div>
                <p>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className="btn-box">
                  <a href="course-detail.html" className="theme-btn btn-style-four"><span className="txt">Short courses</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default AboutProfessional;