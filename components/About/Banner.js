const AboutBanner = () => {
    return (
        <>
             <section className="banner-section-three">
        <div className="pattern-layer-two" style={{backgroundImage: 'url(images/background/pattern-21.png)'}} />
        <div className="auto-container">
          {/* Page Breadcrumb */}
          <ul className="page-breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li>About</li>
          </ul>
          <div className="row clearfix">
            {/* Content Column */}
            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="pattern-layer-one" style={{backgroundImage: 'url(/assets/images/main-slider/pattern-1.png)'}} />
                <div className="icon-layer" style={{backgroundImage: 'url(/assets/images/icons/icon-2.png)'}} />
                <div className="icon-layer-two" style={{backgroundImage: 'url(/assets/images/icons/icon-5.png)'}} />
                <h2>Our mission is to provide <br /> a free Online <br /> Courses and Class</h2>
              </div>
            </div>
            {/* Images Column */}
            <div className="image-column col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="icon-layer-three" style={{backgroundImage: 'url(/assets/images/icons/icon-3.png)'}} />
                <div className="icon-layer-four" style={{backgroundImage: 'url(/assets/images/icons/icon-2.png)'}} />
                <div className="icon-layer-five" style={{backgroundImage: 'url(/assets/images/icons/icon-4.png)'}} />
                <div className="image">
                  <img src="/assets/images/resource/page-title-1.jpg" alt="" />
                </div>
                <div className="image-two">
                  <img src="/assets/images/resource/page-title-2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default AboutBanner