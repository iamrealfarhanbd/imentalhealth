const HomeInstructor = () => {
    return (
        <>
        <section className="instructor-section">
		<div className="background-layer" style={{backgroundImage:'url(/assets/images/background/1.png)'}}></div>
		<div className="background-layer-one" style={{backgroundImage:'url(/assets/images/background/pattern-1.png)'}}></div>
		<div className="background-layer-two" style={{backgroundImage:'url(/assets/images/background/pattern-2.png)'}}></div>
		<div className="auto-container">
			<div className="row clearfix">
				<div className="blocks-column col-lg-8 col-md-12 col-sm-12">
					<div className="inner-column">
						<div className="row clearfix">
							<div className="service-block col-lg-6 col-md-6 col-sm-12">
								<div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
									<div className="border-layer"></div>
									<div className="icon-box">
										<div className="icon flaticon-verify"></div>
									</div>
									<h4><a href="course-detail.html">Trusted content</a></h4>
									<div className="text">Online learning is as easy and natural as chatting with a group of friends.</div>
								</div>
							</div>
							<div className="service-block col-lg-6 col-md-6 col-sm-12">
								<div className="inner-box wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
									<div className="border-layer"></div>
									<div className="icon-box">
										<div className="icon flaticon-heart-box"></div>
									</div>
									<h4><a href="course-detail.html">Flexible courses</a></h4>
									<div className="text">We provide online learning solutions for secondary education, from structured content to courses fully taught </div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
				<div className="instructor-column col-lg-4 col-md-12 col-sm-12">
					<div className="inner-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
						<h4>Become an instructor</h4>
						<p>Institute of Mental Health promotes positive mental health in riveting ways</p>
						<a className="click-here" href="membership.html">Click here for apply</a>
						<div className="image titlt" data-tilt data-tilt-max="4">
							<img src="/assets/images/resource/instructor.png" alt="" />
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
        </>
    )
}

export default HomeInstructor