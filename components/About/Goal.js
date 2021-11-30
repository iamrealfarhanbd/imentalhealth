const AboutGoal = () => {
    return (
        <>
            <section className="goal-section style-two">
        <div className="pattern-layer-four" style={{backgroundImage: 'url(/assets/images/background/pattern-18.png)'}} />
        <div className="auto-container">
          <div className="row clearfix">
            {/* Images Column */}
            <div className="images-column col-lg-6 col-md-12 col-sm-12">
              <div className="color-layer" />
              <div className="inner-column">
                <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/background/pattern-4.png)'}} />
                <div className="pattern-layer-two" style={{backgroundImage: 'url(/assets/images/background/pattern-17.png)'}} />
                <div className="image">
                  <img src="/assets/images/resource/goal-1.jpg" alt="" />
                </div>
                <div className="image-two">
                  <img src="/assets/images/resource/goal-2.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="pattern-layer-three" style={{backgroundImage: 'url(/assets/images/background/pattern-13.png)'}} />
                <div className="sec-title">
                  <div className="title">Achieve Goals</div>
                  <h2>Start To Success</h2>
                  <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Duis aute irure dolor in</div>
                </div>
                {/* Fact Counter */}
                <div className="fact-counter">
                  <div className="row clearfix">
                    {/* Column */}
                    <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                      <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="content">
                          <div className="count-outer count-box">
                            <span className="count-text" data-speed={3000} data-stop={36}>0</span>+
                          </div>
                          <h4 className="counter-title">Over 35 Free Courses</h4>
                        </div>
                      </div>
                    </div>
                    {/* Column */}
                    <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                      <div className="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="content">
                          <div className="count-outer count-box alternate">
                            <span className="count-text" data-speed={5000} data-stop={34}>0</span>
                          </div>
                          <h4 className="counter-title">Member State Associations</h4>
                        </div>
                      </div>
                    </div>
                    {/* Column */}
                    <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                      <div className="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="content">
                          <div className="count-outer count-box">
                            <span className="count-text" data-speed={2000} data-stop={15}>0</span>k
                          </div>
                          <h4 className="counter-title">Over 19,000 High Schools</h4>
                        </div>
                      </div>
                    </div>
                    {/* Column */}
                    <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                      <div className="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                        <div className="content">
                          <div className="count-outer count-box">
                            <span className="count-text" data-speed={3500} data-stop={20}>0</span>m
                          </div>
                          <h4 className="counter-title">Over 11 million Students</h4>
                        </div>
                      </div>
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


export default AboutGoal;