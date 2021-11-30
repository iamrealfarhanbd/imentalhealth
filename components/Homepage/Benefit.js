const HomeBenefit = () => {
    return (
        <>
     <section className="benefit-section">
		<div className="background-layer-one" style={{backgroundImage:'url(/assets/images/background/pattern-5.png)'}}></div>
		<div className="background-layer-two" style={{backgroundImage:'url(/assets/images/background/pattern-6.png)'}}></div>
		<div className="auto-container">
			<div className="row clearfix">
				
				<div className="images-column col-lg-7 col-md-12 col-sm-12">
					<div className="inner-column">
						<div className="pattern-layer" style={{backgroundImage:'url(/assets/images/background/pattern-3.png)'}}></div>
						<div className="pattern-layer-two" style={{backgroundImage:'url(/assets/images/background/pattern-4.png)'}}></div>
						<div className="color-layer"></div>
						<div className="image">
							<img src="/assets/images/resource/benefit-1.jpg" alt="" />
						</div>
						<div className="image-two">
							<img src="/assets/images/resource/benefit-3.jpg" alt="" />
						</div>
						<div className="image-three">
							<img src="/assets/images/resource/benefit-2.jpg" alt="" />
						</div>
					</div>
				</div>
				
				<div className="content-column col-lg-5 col-md-12 col-sm-12">
					<div className="inner-column">
						<div className="sec-title">
							<div className="title">Learn anything</div>
							<h2>Some of the benefits <br/>you will take from this engaging and interactive platform</h2>
						</div>
						<ul className="list-style-one">
							<li><span className="icon flaticon-double-check"></span><strong>Accessible and Flexible courses </strong>Vendors, suppliers and companies with online access to your technology can be your weakest link</li>
							<li><span className="icon flaticon-double-check"></span><strong>Unlimited Care Skills</strong>Vendors, suppliers and companies with online access to your technology can be your weakest link</li>
							<li><span className="icon flaticon-double-check"></span><strong>Instant e-certificates</strong>Vendors, suppliers and companies with online access to your technology can be your weakest link</li>
							<li><span className="icon flaticon-double-check"></span><strong>24/7 Student Support</strong>Vendors, suppliers and companies with online access to your technology can be your weakest link</li>
						</ul>
						<div className="btn-box">
							<a href="about.html" className="theme-btn btn-style-two"><span className="txt">Browse courses</span></a>
						</div>
					</div>
				</div>
				
			</div>
			
			<div className="lower-text">
				<p>Lebari is built for people like you. With useful features, your dream and idea can <br/> become a reality. Lebari helps you to achieve big things!</p>
			</div>
			
		</div>
	</section>
        </>
    )
}

export default HomeBenefit