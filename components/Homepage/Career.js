const HomeCareer = () => {
    return (
        <>
           <section className="career-section">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title">
            <h2>Find the best suited <br/> career for you.</h2>
          </div>
          <div className="row clearfix">
            {/* Image Column */}
            <div className="image-column col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image titlt" data-tilt data-tilt-max={4}>
                  <img src="/assets/images/resource/career.png" alt="" />
                </div>
              </div>
            </div>
            {/* Content Column */}
            <div className="content-column col-lg-7 col-md-12 col-sm-12">
              <div className="inner-column">
                <h5>The International Admissions Bulletin</h5>
                <div className="text">
                  <p>Take our free quiz. Answer a few questions about your ambitions and interests to learn about the most fitted career for you Start here.</p>
                </div>
                <a href="about.html" className="theme-btn btn-style-three">Read it now <span className="fa fa-caret-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </section> 
        </>
    )
}

export default HomeCareer