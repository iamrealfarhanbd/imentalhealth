import BlogSingleAside from "../Aside/Blog-single-aside"

const BlogSinglePage = () => {
    return (
        <>
            <section className="blog-detail-banner-section">
          <div className="pattern-layer-one" style={{backgroundImage: 'url(/assets/images/icons/icon-5.png)'}} />
          <div className="pattern-layer-two" style={{backgroundImage: 'url(/assets/images/icons/icon-6.png)'}} />
          <div className="pattern-layer-three" style={{backgroundImage: 'url(/assets/images/icons/icon-4.png)'}} />
          <div className="pattern-layer-four" style={{backgroundImage: 'url(/assets/images/icons/icon-8.png)'}} />
          <div className="auto-container">
            {/* Page Breadcrumb */}
            <ul className="page-breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li>Blog Single</li>
            </ul>
            <div className="content-box">
              <div className="title">Education</div>
              <h2>Learning Is Worth The Investment, And The Numbers Back It Up</h2>
              <div className="clearfix">
                <div className="pull-left">
                  <div className="author-info">
                    <div className="author-image">
                      <img src="/assets/images/resource/author-8.jpg" alt="" />
                    </div>
                    <strong>Post By</strong>
                    27 november , 2020   Tagged With: Education, Courses
                  </div>
                </div>
                <div className="pull-right">
                  {/* Social Box */}
                  <ul className="social-box">
                    <span className="fa fa-share-alt" />
                    <li className="twitter"><a target="_blank" href="http://twitter.com/" className="fa fa-twitter" /></li>
                    <li className="pinterest"><a target="_blank" href="http://pinterest.com/" className="fa fa-pinterest-p" /></li>
                    <li className="facebook"><a target="_blank" href="http://facebook.com/" className="fa fa-facebook-f" /></li>
                    <li className="dribbble"><a target="_blank" href="http://dribbble.com/" className="fa fa-dribbble" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Blog Detail Banner Section */}
        {/*Sidebar Page Container*/}
        <div className="sidebar-page-container style-two">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Content Side */}
              <div className="content-side col-lg-9 col-md-12 col-sm-12">
                <div className="blog-detail">
                  <div className="inner-box">
                    <p>As a society, we spend hundreds of billions of dollars measuring the return on our financial assets. Yet, at the same time, we still haven’t found convincing ways of measuring the return on our investments in developing people.</p>
                    <div className="bold-text">This element of choice for the users is something that ads will never replicate; they’ll surely appreciate you better for it.</div>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
                    <h4>Measuring L&amp;D Impact</h4>
                    <p>My company recently commissioned a study from analyst firm IDC to take a closer look at the ROI of companies investing in their employees.</p>
                    <div className="blockquote-box">
                      <div className="row clearfix">
                        <div className="blockquote-column col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-column">
                            <span className="quote-icon"><img src="/assets/images/icons/quote-icon-1.png" alt="" /></span>
                            <p>My company recently commissioned a study from analyst firm IDC to take a closer look at the ROI of companies investing in their employees.My company recently commissioned a study from analyst firm IDC to take a closer look at the ROI </p>
                            <span className="quote-icon-two"><img src="/assets/images/icons/quote-icon-2.png" alt="" /></span>
                          </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-column">
                            <div className="image">
                              <img src="/assets/images/resource/blockquote.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bold-text">While IDC’s findings don’t necessarily apply to all L&amp;D solutions, they do make a compelling case for the upside of investing in employee development. It’s also true that </div>
                    <p>a single product; other conditions must be in place to reap the full rewards of a learning culture. However, those rewards can be significant. IDC’s research found companies</p>
                    <div className="big-image">
                      <img src="/assets/images/resource/news-21.jpg" alt="" />
                    </div>
                    <p>a single product; other conditions must be in place to reap the full rewards of a learning culture. However, those rewards can be significant. IDC’s research found companies</p>
                    <p>Of course, I believe rolling out enterprise-wide online learning is foundational to successful L&amp;D, but, wherever they start, companies really need to strive toward creating true learning cultures. That means establishing structures and conditions so continuous learning can thrive,</p>
                    <p>including giving everyone time and space to engage with learning resources whenever they need them. It also requires creating an environment where it’s safe for people to talk about making mistakes,</p>
                    {/* Post Share Options*/}
                    <div className="post-share-options">
                      <ul className="tags">
                        <li><span className="icon fa fa-tag" /></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Course</a></li>
                      </ul>
                    </div>
                    {/* Related Projects */}
                    <div className="related-projects">
                      <div className="row clearfix">
                        {/* News Block Three */}
                        <div className="news-block-three col-lg-4 col-md-4 col-sm-12">
                          <div className="inner-box">
                            <div className="image">
                              <a href="blog-detail.html"><img src="/assets/images/resource/news-22.jpg" alt="" /></a>
                            </div>
                            <div className="lower-content">
                              <h6><a href="blog-detail.html">Sales assistant responsibilities and duties</a></h6>
                              <a href="blog-detail.html" className="learn-more">Learn more</a>
                            </div>
                          </div>
                        </div>
                        {/* News Block Three */}
                        <div className="news-block-three col-lg-4 col-md-4 col-sm-12">
                          <div className="inner-box">
                            <div className="image">
                              <a href="blog-detail.html"><img src="/assets/images/resource/news-23.jpg" alt="" /></a>
                            </div>
                            <div className="lower-content">
                              <h6><a href="blog-detail.html">A Comprehensive Guide to Become a Medical</a></h6>
                              <a href="blog-detail.html" className="learn-more">Learn more</a>
                            </div>
                          </div>
                        </div>
                        {/* News Block Three */}
                        <div className="news-block-three col-lg-4 col-md-4 col-sm-12">
                          <div className="inner-box">
                            <div className="image">
                              <a href="blog-detail.html"><img src="/assets/images/resource/news-24.jpg" alt="" /></a>
                            </div>
                            <div className="lower-content">
                              <h6><a href="blog-detail.html">How to get a Job in the Motorcycle Industry?</a></h6>
                              <a href="blog-detail.html" className="learn-more">Learn more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment-form">
                      <div className="group-title"><h4>Leave A Comment</h4></div>
                      {/*Comment Form*/}
                      <form method="post" action="blog.html">
                        <div className="form-group">
                          <input type="text" name="username" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                          <input type="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                          <input type="text" name="topic" placeholder="Topic" required />
                        </div>
                        <div className="form-group">
                          <textarea className name="message" placeholder="Type your comment" defaultValue={""} />
                        </div>
                        <div className="form-group">
                          <div className="check-box"><input type="checkbox" name="shipping-option" id="account-option" />   <label htmlFor="account-option">Save my name, email, and website in this browser for the next time I comment.</label></div>
                        </div>
                        <div className="form-group">
                          <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="txt">Post comment</span></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <BlogSingleAside />
            </div>
          </div>
        </div>
        </>
    )
}

export default BlogSinglePage;