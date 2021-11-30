const HomeCourse = () => {
    return (
        <>
          <section className="courses-section">
        <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/background/pattern-2.png)'}} />
        <div className="circle-one paroller" data-paroller-factor="-0.20" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="horizontal" />
        <div className="circle-two paroller" data-paroller-factor="0.20" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="horizontal" />
        <div className="auto-container">
          <div className="sec-title centered">
            <h2>Discover the perfect course for you.</h2>
            <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur Duis aute irure dolor in reprehenderit in</div>
          </div>
          <div className="row clearfix">
            {/* Course Column */}
            <div className="course-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="image">
                  <a href="course-detail.html"><img src="/assets/images/resource/course-1.jpg" alt="" /></a>
                </div>
                <div className="lower-content">
                  <h4><a href="course-detail.html">Growth Mindsets for Teachers and Learners</a></h4>
                  <div className="uni-name">University of Roehampton</div>
                  <div className="rating">
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star-o" />
                    <strong>4.9</strong>
                    <i>(70 Review)</i>
                  </div>
                  <div className="price">$12 <span>$100.99</span></div>
                  <div className="clearfix">
                    <div className="pull-left">
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="pull-right">
                      <a href="course-detail.html" className="enroll-now">ENROL NOW</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Course Column */}
            <div className="course-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="image">
                  <a href="course-detail.html"><img src="/assets/images/resource/course-2.jpg" alt="" /></a>
                </div>
                <div className="lower-content">
                  <h4><a href="course-detail.html">Programming for Everybody Getting Started with Python</a></h4>
                  <div className="uni-name">University of Roehampton</div>
                  <div className="rating">
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star-o" />
                    <strong>4.9</strong>
                    <i>(70 Review)</i>
                  </div>
                  <div className="price">$12 <span>$100.99</span></div>
                  <div className="clearfix">
                    <div className="pull-left">
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="pull-right">
                      <a href="course-detail.html" className="enroll-now">ENROL NOW</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Course Column */}
            <div className="course-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="image">
                  <a href="course-detail.html"><img src="/assets/images/resource/course-3.jpg" alt="" /></a>
                </div>
                <div className="lower-content">
                  <h4><a href="course-detail.html">Introduction to Forensic Science</a></h4>
                  <div className="uni-name">University of Roehampton</div>
                  <div className="rating">
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star-o" />
                    <strong>4.9</strong>
                    <i>(70 Review)</i>
                  </div>
                  <div className="price">$12 <span>$100.99</span></div>
                  <div className="clearfix">
                    <div className="pull-left">
                      <div className="hovers">11.5 total hours . All Levels</div>
                    </div>
                    <div className="pull-right">
                      <a href="course-detail.html" className="enroll-now">ENROL NOW</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default HomeCourse