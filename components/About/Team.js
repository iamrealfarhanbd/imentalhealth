const AboutTeam = () => {
    return (
        <>
            <section className="team-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="color-layer" />
            <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/background/pattern-18.png)'}} />
            <div className="row clearfix">
              {/* Title Column */}
              <div className="title-column col-lg-4 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title">
                    <div className="title">Teacher</div>
                    <h2>Our best online Techer</h2>
                    <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
                  </div>
                  <a href="profile.html" className="theme-btn btn-style-one"><span className="txt">View More</span></a>
                </div>
              </div>
              {/* Blocks Column */}
              <div className="blocks-column col-lg-8 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="row clearfix">
                    {/* Team Block */}
                    <div className="team-block col-lg-6 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image">
                          <a href="course-detail.html"><img src="/assets/images/resource/team-1.jpg" alt="" /></a>
                        </div>
                        <div className="lower-content">
                          <h5><a href="course-detail.html">Mahfuz Riad</a></h5>
                          <div className="designation">- Designer, themeforest</div>
                        </div>
                      </div>
                    </div>
                    {/* Team Block */}
                    <div className="team-block col-lg-6 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image">
                          <a href="course-detail.html"><img src="/assets/images/resource/team-2.jpg" alt="" /></a>
                        </div>
                        <div className="lower-content">
                          <h5><a href="course-detail.html">Tamim megh</a></h5>
                          <div className="designation">- Designer, themeforest</div>
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

export default AboutTeam;
