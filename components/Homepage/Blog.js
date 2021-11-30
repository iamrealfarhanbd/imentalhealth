const HomeBlog = () => {
    return (
        <>
            <section className="news-section">
        <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/background/pattern-11.png)'}} />
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="title">Our Blogs</div>
            <h2>Stay updated with the latest news and insights </h2>
            <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur Duis aute irure dolor in reprehenderit in</div>
          </div>
          <div className="inner-container">
            <div className="icon-layer-one" style={{backgroundImage: 'url(/assets/images/icons/icon-1.png)'}} />
            <div className="icon-layer-two" style={{backgroundImage: 'url(/assets/images/icons/icon-2.png)'}} />
            <div className="icon-layer-three" style={{backgroundImage: 'url(/assets/images/icons/icon-2.png)'}} />
            <div className="row clearfix">
              {/* News Block */}
              <div className="news-block col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="image">
                    <a href="#"><img src="/assets/images/resource/news-1.jpg" alt="" /></a>
                  </div>
                  <div className="lower-content">
                    <div className="border-layer" />
                    <ul className="post-info">
                      <li>Technology</li>
                      <li>Updated  Sep 26, 2020</li>
                    </ul>
                    <h4><a href="#">All The Security &amp; Privacy <br /> Updates From Amazon’s</a></h4>
                    <a href="#" className="more">More <span className="fa fa-angle-double-right" /></a>
                  </div>
                </div>
              </div>
              {/* News Block */}
              <div className="news-block col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="image">
                    <a href="#"><img src="/assets/images/resource/news-2.jpg" alt="" /></a>
                  </div>
                  <div className="lower-content">
                    <div className="border-layer" />
                    <ul className="post-info">
                      <li>Education</li>
                      <li>Updated  Sep 26, 2020</li>
                    </ul>
                    <h4><a href="#">All The Security &amp; Privacy Updates From Amazon’s</a></h4>
                    <a href="#" className="more">More <span className="fa fa-angle-double-right" /></a>
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

export default HomeBlog