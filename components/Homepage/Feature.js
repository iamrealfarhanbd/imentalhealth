
const HomeFeature = () => {
    return (
        <>
        <section className="feature-section">
		<div className="pattern-layer" style={{backgroundImage:'url(/assets/images/background/pattern-7.png'}}></div>
		<div className="auto-container">
			<div className="row clearfix">
				<div className="content-column col-lg-7 col-md-12 col-sm-12">
					<div className="inner-column">
						<div className="sec-title">
							<div className="title">Explore featured courses</div>
							<h2>Fundamentals of Digital <br/> Health in Hospitals National <br/> University</h2>
							<div className="text">Dolor sit amet, consectetur adipiscing elit, sed do eiusmod but laboris incididunt ut labore et dolore magna <br/> aliqua.sed do eiusmod but laboris incididunt ut labore et dolore magna aliqua.</div>
						</div>
						<div className="btn-box">
							<a href="about.html" className="theme-btn btn-style-two"><span className="txt">Short courses</span></a>
						</div>
					</div>
				</div>
			
				<div className="image-column col-lg-5 col-md-12 col-sm-12">
					<div className="inner-column">
						<div className="color-layer"></div>
						<div className="image wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
							<img src="/assets/images/resource/feature.jpg" alt="" />
							<div className="overlay-box">
								<div className="content">
									<h2>How a degree on <br/> FutureLearn <br/> works</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod but laboris incididunt ut labore et dolore magna </p>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
									<a href="#" className="learn">Learn 3 className</a>
								</div>
							</div>
						</div>
						<div className="feature-icon wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
							<img src="/assets/images/resource/feature-icon.png" alt="" />
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
        </>
    )
}

export default HomeFeature