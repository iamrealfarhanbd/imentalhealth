const Footer = () => {
    return (
        <>
        <footer className="main-footer">
		<div className="circle-layer"></div>
		<div className="pattern-layer-one" style={{backgroundImage: 'url(images/background/pattern-12.png)'}}></div>
		<div className="pattern-layer-two" style={{backgroundImage: 'url(images/background/pattern-13.png)'}}></div>
		<div className="pattern-layer-three" style={{backgroundImage: 'url(images/background/pattern-14.png)'}}></div>
		<div className="pattern-layer-four" style={{backgroundIimage: 'url(images/background/pattern-13.png)'}}></div>
    	<div className="auto-container">
            <div className="widgets-section">
            	<div className="row clearfix">
					<div className="footer-column col-lg-5 col-md-12 col-sm-12">
						<div className="footer-widget logo-widget">
							<div className="logo">
								<a href="index.html"><img src="/assets/images/logo.png" alt="" /></a>
							</div>
							<ul className="info-list">
								<li>Tel:<a href="tel:+0845-371-02-02"> 0845 371 02 02</a></li>
								<li>Email:<a href="mailto:info@yoursite.co.uk"> info@yoursite.co.uk</a></li>
							</ul>
							<ul className="social-box">
								<li className="twitter"><a target="_blank" href="http://twitter.com/" className="fa fa-twitter"></a></li>
								<li className="pinterest"><a target="_blank" href="http://pinterest.com/" className="fa fa-pinterest-p"></a></li>
								<li className="facebook"><a target="_blank" href="http://facebook.com/" className="fa fa-facebook-f"></a></li>
								<li className="dribbble"><a target="_blank" href="http://dribbble.com/" className="fa fa-dribbble"></a></li>
							</ul>
							<div className="text">Get started now and take advantage of <br/> our 30 day free trial today.</div>
						</div>
					</div>
					
					<div className="footer-column col-lg-7 col-md-12 col-sm-12">
						<div className="row clearfix">
							<div className="column col-lg-4 col-md-4 col-sm-12">
								<h5>About</h5>
								<ul className="list">
									<li><a href="#">Home</a></li>
									<li><a href="#">About us</a></li>
									<li><a href="#">Success Stories</a></li>
									<li><a href="#">All Courses</a></li>
									<li><a href="#">Blog</a></li>
								</ul>
							</div>
							<div className="column col-lg-4 col-md-4 col-sm-12">
								<h5>Resourse</h5>
								<ul className="list">
									<li><a href="#">Terms of use</a></li>
									<li><a href="#">Contact Us</a></li>
									<li><a href="#">FAQ</a></li>
									<li><a href="#">Our Partners</a></li>
									<li><a href="#">Redeem Voucher</a></li>
								</ul>
							</div>
						</div>
					</div>
					
				</div>
			</div>
            <div className="lower-box">
            	<div className="row clearfix">
					<div className="col-lg-6 col-lg-6 col-sm-12">
						<div className="subscribe-form">
							<h6>Newsletter</h6>
							<form method="post" action="contact.html">
								<div className="form-group">
									<input type="email" name="email" placeholder="Your email" required/>
									<button type="submit" className="submit-btn"><span className="icon flaticon-right-arrow-2"></span></button>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6 col-lg-6 col-sm-12">
						<div className="text">Need to train your team? We offer flexible, cost-effective <br/> group memberships for your business, school,</div>
						<a href="#" className="singup">Free Singup</a>
					</div>
				</div>
			</div>
			
			<div className="footer-bottom">
				<div className="row clearfix">
					<div className="copyright-column col-lg-6 col-md-12 col-sm-12">
						<div className="copyright">Copyright 2020, All Right Reserved</div>
					</div>
					
					<div className="nav-column col-lg-6 col-md-12 col-sm-12">
						<ul>
							<li><a href="about.html">SiteMap</a></li>
							<li><a href="about.html">Privacy Policy</a></li>
						</ul>
					</div>
					
				</div>
			</div>
			
		</div>
	</footer>
        </>
    )
}

export default Footer