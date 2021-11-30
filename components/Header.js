const Header = () => {
    return (
        <header className="main-header">
           <div className="header-upper">
        	<div className="outer-container clearfix">
				<div className="pull-left logo-box">
					<div className="logo"><a href="index.html"><img src="/assets/images/logo.png" alt="" title=""/></a></div>
				</div>
				<div className="nav-outer clearfix">
					<div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div>
					<nav className="main-menu navbar-expand-md">
						<div className="navbar-header">	
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						</div>
						
						<div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
							<ul className="navigation clearfix">
								<li className="dropdown has-mega-menu"><a href="#"><span>Courses <i className="fa fa-arrow-down"></i></span></a>
									<div className="mega-menu">
									
										<div className="upper-box">
											<div className="page-links-box">
												<a href="course.html" className="link"><span className="icon flaticon-bullhorn"></span>Marketing</a>
												<a href="course-2.html" className="link"><span className="icon flaticon-cyclist"></span>Lifestyle</a>
												<a href="course-3.html" className="link"><span className="icon flaticon-bar-chart"></span>Business</a>
												<a href="course-4.html" className="link"><span className="icon flaticon-software"></span>Software</a>
												<a href="course-3.html" className="link"><span className="icon flaticon-atom"></span>Science</a>
												<a href="course.html" className="link"><span className="icon flaticon-webpage"></span>IT Management</a>
												<a href="course-2.html" className="link"><span className="icon flaticon-language"></span>Language</a>
												<a href="course-3.html" className="link"><span className="icon flaticon-team"></span>Human Resources</a>
												<a href="course-4.html" className="link"><span className="icon flaticon-healthcare"></span>Health Care</a>
											</div>
										</div>
										<div className="lower-box">
											<div className="text">Top instructors from around the Neque convallis a cras semper auctor. <br/> Libero id faucibus nisl tincidunt egetnvallis </div>
											<div className="btn-box">
												<a href="#" className="theme-btn btn-style-five">Start teaching today</a>
											</div>
											<div className="side-icon">
												<img src="/assets/images/resource/mega-menu-icon.png" alt="" />
											</div>
										</div>
									</div>
								</li>
								<li className="current"><a href="#"><span data-hover="Home">Home</span></a>
								</li>
								<li className="dropdown"><a href="#">All Courses</a>
								</li>
								<li className="dropdown"><a href="#">Special Deal</a>
								</li>
								<li className="dropdown"><a href="#">Blog</a>
								</li>
								<li><a href="contact.html">Free Resources</a></li>
								<li><a href="donation.html">Login</a></li>
							</ul>
						</div>
					</nav>
			
					<div className="outer-box clearfix">
						<div className="search-box">
							<form method="post" action="contact.html">
								<div className="form-group">
									<input type="search" name="search-field" placeholder="What do we want learn" required/>
									<button type="submit"><span className="icon fa fa-search"></span></button>
								</div>
							</form>
						</div>
						
						<ul className="social-box">
							<li className="instagram"><a target="_blank" href="http://instagram.com/" className="fa fa-instagram"></a></li>
							<li className="facebook"><a target="_blank" href="http://facebook.com/" className="fa fa-facebook-f"></a></li>
							<li className="twitter"><a target="_blank" href="http://twitter.com/" className="fa fa-twitter"></a></li>
							<li className="pinterest"><a target="_blank" href="http://pinterest.com/" className="fa fa-pinterest-p"></a></li>
						</ul>
							
					</div>
				</div>
				
            </div>
        </div>
        
        <div className="sticky-header">
            <div className="auto-container clearfix">
                <div className="logo pull-left">
                    <a href="index.html" title=""><img src="/assets/images/logo.png" alt="" title=""/></a>
                </div>
                <div className="pull-right">
                    <nav className="main-menu">
                    </nav>
					<div className="outer-box clearfix">
						
					</div>
					
                </div>
            </div>
        </div>
    
        <div className="mobile-menu">
            <div className="menu-backdrop"></div>
            <div className="close-btn"><span className="icon flaticon-multiply"></span></div>
            
            <nav className="menu-box">
                <div className="nav-logo"><a href="index.html"><img src="/assets/images/logo.png" alt="" title=""/></a></div>
                <div className="menu-outer"></div>
            </nav>
        </div>
	
    </header>    
    )
}


export default Header