const HomeBanner = () => {
    return (
     
        <section className="banner-section">
		<div className="auto-container">
            <div className="pattern-layer-six" style={{backgroundImage: 'url(/assets/images/main-slider/pattern-4.png)'}}></div>
			<div className="pattern-layer-seven" style={{backgroundImage: 'url(/assets/images/main-slider/pattern-5.png)'}}></div>
			<div className="pattern-layer-eight" style={{backgroundImage: 'url(/assets/images/main-slider/icon-2.png)'}}></div>
			<div className="row clearfix">
				<div className="image-column col-lg-6 col-md-12 col-sm-12">
					<div className="inner-column">
						<div className="pattern-layer-one" style={{backgroundImage: 'url(/assets/images/main-slider/pattern-1.png)'}}></div>
						<div className="pattern-layer-two" style={{backgroundImage: 'url(/assets/images/main-slider/pattern-2.png)'}}></div>
						<div className="pattern-layer-three" style={{backgroundImage: 'url(/assets/images/main-slider/icon-1.png)'}}></div>
						<div className="pattern-layer-four" style={{backgroundImage: 'url(/assets/images/main-slider/pattern-3.png)'}}></div>
						<div className="pattern-layer-five" style={{backgroundImage: 'url(/assets/images/main-slider/icon-2.png)'}}></div>
						<div className="image">
							<img src="/assets/images/main-slider/image-1.png" alt="" />
						</div>
						<div className="image-two">
							<img src="/assets/images/main-slider/image-4.png" alt="" />
						</div>
						<div className="image-content" style={{backgroundImage: 'url(/assets/images/main-slider/pattern-6.png)'}}>
							<p>87% of people <br/> learning</p>
						</div>
					</div>
				</div>
				
				<div className="content-column col-lg-6 col-md-12 col-sm-12">
					<div className="inner-column">
						<div className="title">Invest in your mental health training</div>
						<h1>For a better mental health and a better life</h1>
						<div className="btns-box">
							<a href="about.html" className="theme-btn btn-style-one"><span className="txt">Browse courses </span></a>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
   
    )
}

export default HomeBanner 