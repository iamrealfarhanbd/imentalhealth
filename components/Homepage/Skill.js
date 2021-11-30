const HomeSKill = () => {
    return (
        <>
      <section className="skill-section">
        <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/background/pattern-8.png)'}} />
        <div className="auto-container">
          <div className="row clearfix">
            {/* Skill Column */}
            <div className="skill-column col-lg-7 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Sec Title */}
                <div className="sec-title">
                  <div className="title">Our Status valu</div>
                  <h2>Explore the hacks of starting a rewarding mental health career</h2>
                  <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
                </div>
                {/* Skills */}
                <div className="skills">
                  {/* Skill Item */}
                  <div className="skill-item">
                    <div className="skill-header clearfix">
                      <div className="skill-title">Joyful</div>
                      <div className="skill-percentage">
                        <div className="count-box">
                          <span className="count-text" data-speed={2000} data-stop={90}>0</span>%
                        </div>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div className="bar-inner"><div className="bar progress-line" data-width={90} /></div>
                    </div>
                  </div>
                  {/* Skill Item */}
                  <div className="skill-item">
                    <div className="skill-header clearfix">
                      <div className="skill-title">Case Study success </div>
                      <div className="skill-percentage"><div className="count-box"><span className="count-text" data-speed={2000} data-stop={95}>0</span>%</div></div>
                    </div>
                    <div className="skill-bar">
                      <div className="bar-inner"><div className="bar progress-line" data-width={95} /></div>
                    </div>
                  </div>
                  {/* Skill Item */}
                  <div className="skill-item">
                    <div className="skill-header clearfix">
                      <div className="skill-title">Engaging</div>
                      <div className="skill-percentage"><div className="count-box"><span className="count-text" data-speed={2000} data-stop={75}>0</span>%</div></div>
                    </div>
                    <div className="skill-bar">
                      <div className="bar-inner"><div className="bar progress-line" data-width={75} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="circle-one" />
                <div className="circle-two" />
                <div className="image titlt" data-tilt data-tilt-max={4}>
                  <img src="/assets/images/resource/skill.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default HomeSKill