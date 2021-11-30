import SingleCourseAside from "../Aside/Single-course-aside"

const SingleCourse = () => {
    return (
        <>
        <section className="cource-detail-banner-section">
        <div className="pattern-layer-one" style={{backgroundImage: 'url(images/icons/icon-5.png)'}} />
        <div className="pattern-layer-two" style={{backgroundImage: 'url(images/icons/icon-6.png)'}} />
        <div className="pattern-layer-three" style={{backgroundImage: 'url(images/icons/icon-4.png)'}} />
        <div className="pattern-layer-four" style={{backgroundImage: 'url(images/icons/icon-8.png)'}} />
        <div className="auto-container">
          <ul className="page-breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li>Courses Single</li>
          </ul>
          <div className="content-box">
            <div className="title">5 day left at this price!</div>
            <h2>The Complete JavaScript Course 2020 <br /> From Zero to Expert!</h2>
            <ul className="course-info">
              <li><span className="icon fa fa-clock-o" />Last Update : November 23, 2020</li>
              <li><span className="icon fa fa-language" />English</li>
              <li><span className="icon fa fa-user" />749 students</li>
            </ul>
            <div className="development">Development courses</div>
            <div className="rating">
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star-o" />
              <strong>4.9</strong>
              <i>(70 Review)</i>
            </div>
            <div className="hovers">11.5 total hours . All Levels</div>
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
      </section>
        <section className="course-detail-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Content Column */}
            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-column">
                <h5>Courses Description</h5>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                <div className="learn-box">
                  <h5>What you'll learn</h5>
                  <ul className="learn-list">
                    <li>JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc.</li>
                    <li>Become job-ready by understanding how JavaScript really works behind the scenes</li>
                    <li>Modern ES6+ from the beginning: arrow functions, destructuring, spread operator, optional chaining (ES2020), etc.</li>
                    <li>Modern tools for 2020 and beyond: NPM, Parcel, Babel and ES6 modules</li>
                    <li>Modern ES6+ from the beginning: arrow functions, destructuring, spread operator, optional chaining (ES2020), etc.</li>
                    <li>Modern ES6+ from the beginning: arrow functions, destructuring, spread operator, optional chaining (ES2020), etc.</li>
                  </ul>
                </div>
                <h5>Requirements</h5>
                <ul className="learn-list-two">
                  <li>Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada Cum sociis natoque penatibus et magnis </li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                  <li>JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc.</li>
                </ul>
                <h5>Course content</h5>
                <div className="total-lectures">20 sections • 101 lectures • 30h 48m total length</div>
                {/* Accordion Box Two */}
                <ul className="accordion-box-two">
                  {/* Block */}
                  <li className="accordion block">
                    <div className="acc-btn">javascript formula <span className="side-text">5 lectures . 5 video </span> <div className="icon fa fa-angle-down" /></div>
                    <div className="acc-content">
                      <div className="content">
                        <ul className="accordion-list">
                          <li><a href="#"><span className="list-icon fa fa-file-o" />Course Assignments <span className="time">05:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Section Intro <span className="time">10:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />A Brief Introduction to JavaScript <span className="time">15:12</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Linking a JavaScript File <span className="time">20:30</span></a></li>
                          <li><a href="#"><span className="list-icon fa fa-file-word-o" />Data Types <span className="time">10:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Taking Decisions: if / else Statements <span className="time">11:22</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Truthy and Falsy Values <span className="time">18:44</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/*Block*/}
                  <li className="accordion block active-block">
                    <div className="acc-btn active">JavaScript Fundamentals – Part 2 <span className="side-text">5 lectures . 5 video </span> <div className="icon fa fa-angle-down" /></div>
                    <div className="acc-content current">
                      <div className="content">
                        <ul className="accordion-list">
                          <li><a href="#"><span className="list-icon fa fa-file-o" />Course Assignments <span className="time">05:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Section Intro <span className="time">10:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />A Brief Introduction to JavaScript <span className="time">15:12</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Linking a JavaScript File <span className="time">20:30</span></a></li>
                          <li><a href="#"><span className="list-icon fa fa-file-word-o" />Data Types <span className="time">10:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Taking Decisions: if / else Statements <span className="time">11:22</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Truthy and Falsy Values <span className="time">18:44</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li className="accordion block">
                    <div className="acc-btn">JavaScript Fundamentals – Part 3 <span className="side-text">5 lectures . 5 video </span> <div className="icon fa fa-angle-down" /></div>
                    <div className="acc-content">
                      <div className="content">
                        <ul className="accordion-list">
                          <li><a href="#"><span className="list-icon fa fa-file-o" />Course Assignments <span className="time">05:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Section Intro <span className="time">10:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />A Brief Introduction to JavaScript <span className="time">15:12</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Linking a JavaScript File <span className="time">20:30</span></a></li>
                          <li><a href="#"><span className="list-icon fa fa-file-word-o" />Data Types <span className="time">10:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Taking Decisions: if / else Statements <span className="time">11:22</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Truthy and Falsy Values <span className="time">18:44</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li className="accordion block">
                    <div className="acc-btn">How to Navigate This Course <span className="side-text">5 lectures . 5 video </span> <div className="icon fa fa-angle-down" /></div>
                    <div className="acc-content">
                      <div className="content">
                        <ul className="accordion-list">
                          <li><a href="#"><span className="list-icon fa fa-file-o" />Course Assignments <span className="time">05:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Section Intro <span className="time">10:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />A Brief Introduction to JavaScript <span className="time">15:12</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Linking a JavaScript File <span className="time">20:30</span></a></li>
                          <li><a href="#"><span className="list-icon fa fa-file-word-o" />Data Types <span className="time">10:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Taking Decisions: if / else Statements <span className="time">11:22</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Truthy and Falsy Values <span className="time">18:44</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li className="accordion block">
                    <div className="acc-btn">JavaScript in the Browser: DOM and Events Fundamentals <span className="side-text">5 lectures . 5 video </span> <div className="icon fa fa-angle-down" /></div>
                    <div className="acc-content">
                      <div className="content">
                        <ul className="accordion-list">
                          <li><a href="#"><span className="list-icon fa fa-file-o" />Course Assignments <span className="time">05:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Section Intro <span className="time">10:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />A Brief Introduction to JavaScript <span className="time">15:12</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Linking a JavaScript File <span className="time">20:30</span></a></li>
                          <li><a href="#"><span className="list-icon fa fa-file-word-o" />Data Types <span className="time">10:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Taking Decisions: if / else Statements <span className="time">11:22</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Truthy and Falsy Values <span className="time">18:44</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li className="accordion block">
                    <div className="acc-btn">How JavaScript Works Behind the Scenes <span className="side-text">5 lectures . 5 video </span> <div className="icon fa fa-angle-down" /></div>
                    <div className="acc-content">
                      <div className="content">
                        <ul className="accordion-list">
                          <li><a href="#"><span className="list-icon fa fa-file-o" />Course Assignments <span className="time">05:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Section Intro <span className="time">10:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />A Brief Introduction to JavaScript <span className="time">15:12</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Linking a JavaScript File <span className="time">20:30</span></a></li>
                          <li><a href="#"><span className="list-icon fa fa-file-word-o" />Data Types <span className="time">10:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Taking Decisions: if / else Statements <span className="time">11:22</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Truthy and Falsy Values <span className="time">18:44</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li className="accordion block">
                    <div className="acc-btn">A Closer Look at Functions <span className="side-text">5 lectures . 5 video </span> <div className="icon fa fa-angle-down" /></div>
                    <div className="acc-content">
                      <div className="content">
                        <ul className="accordion-list">
                          <li><a href="#"><span className="list-icon fa fa-file-o" />Course Assignments <span className="time">05:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Section Intro <span className="time">10:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />A Brief Introduction to JavaScript <span className="time">15:12</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Linking a JavaScript File <span className="time">20:30</span></a></li>
                          <li><a href="#"><span className="list-icon fa fa-file-word-o" />Data Types <span className="time">10:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Taking Decisions: if / else Statements <span className="time">11:22</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Truthy and Falsy Values <span className="time">18:44</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li className="accordion block">
                    <div className="acc-btn">Build 6 beautiful real-world projects <span className="side-text">5 lectures . 5 video </span> <div className="icon fa fa-angle-down" /></div>
                    <div className="acc-content">
                      <div className="content">
                        <ul className="accordion-list">
                          <li><a href="#"><span className="list-icon fa fa-file-o" />Course Assignments <span className="time">05:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Section Intro <span className="time">10:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />A Brief Introduction to JavaScript <span className="time">15:12</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Linking a JavaScript File <span className="time">20:30</span></a></li>
                          <li><a href="#"><span className="list-icon fa fa-file-word-o" />Data Types <span className="time">10:25</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Taking Decisions: if / else Statements <span className="time">11:22</span></a></li>
                          <li><a className="lightbox-image" href="https://www.youtube.com/watch?v=kxPCFljwJws"><span className="list-icon fa fa-play-circle-o" />Truthy and Falsy Values <span className="time">18:44</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* End Accordion Box */}
                {/* Read More */}
                <div className="read-more">
                  <a href="#">Show more</a>
                </div>
                <h5>Instructor</h5>
                {/* Author Box */}
                <div className="author-box">
                  <div className="box-inner">
                    <div className="image">
                      <img src="images/resource/author-4.jpg" alt="" />
                    </div>
                    <h6>Jonas jashiom <a href="profile.html" className="icon fa fa-plus" /></h6>
                    <div className="designation">java Developer, Designer, and Teacher</div>
                    <ul className="list">
                      <li><span className="icon fa fa-play-circle-o" />44 Course</li>
                      <li><span className="icon fa fa-star-o" />4.6 Instructor Rating</li>
                      <li><span className="icon fa fa-user" />6,073 Students</li>
                    </ul>
                    <div className="text">Hi, I'm Riad! I have been identified as one of LebariTop Instructors and all my premium courses have recently earned the best-selling status for outstanding performance and student satisfaction.</div>
                  </div>
                </div>
                {/* Comment Area */}
                <div className="comments-area">
                  <div className="group-title">
                    <h5>Course Review</h5>
                  </div>
                  <div className="comment-box">
                    {/* Comment */}
                    <div className="comment">
                      <div className="author-thumb"><img src="images/resource/author-5.jpg" alt="" /></div>
                      <div className="comment-info clearfix">
                        <strong>Shopnil Mahadi</strong>
                        <div className="rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star-o" />
                        </div>
                        <div className="comment-time">3 weeks ago</div>
                        <ul className="like-dislike">
                          <li><a href="#" className="flaticon-like-1" /></li>
                          <li><a href="#" className="flaticon-dislike" /></li>
                        </ul>
                      </div>
                      <div className="text"> I have been identified as one of LebariTop Instructors and all my premium courses have recently earned the best-selling status for outstanding performance and student satisfaction.</div>
                    </div>
                    {/* Comment */}
                    <div className="comment">
                      <div className="author-thumb"><img src="images/resource/author-6.jpg" alt="" /></div>
                      <div className="comment-info clearfix">
                        <strong>Shopnil Mahadi</strong>
                        <div className="rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star-o" />
                        </div>
                        <div className="comment-time">3 weeks ago</div>
                        <ul className="like-dislike">
                          <li><a href="#" className="flaticon-like-1" /></li>
                          <li><a href="#" className="flaticon-dislike" /></li>
                        </ul>
                      </div>
                      <div className="text"> I have been identified as one of LebariTop Instructors and all my premium courses have recently earned the best-selling status for outstanding performance and student satisfaction.</div>
                    </div>
                    {/* Comment */}
                    <div className="comment">
                      <div className="author-thumb"><img src="images/resource/author-7.jpg" alt="" /></div>
                      <div className="comment-info clearfix">
                        <strong>Shopnil Mahadi</strong>
                        <div className="rating">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star-o" />
                        </div>
                        <div className="comment-time">3 weeks ago</div>
                        <ul className="like-dislike">
                          <li><a href="#" className="flaticon-like-1" /></li>
                          <li><a href="#" className="flaticon-dislike" /></li>
                        </ul>
                      </div>
                      <div className="text"> I have been identified as one of LebariTop Instructors and all my premium courses have recently earned the best-selling status for outstanding performance and student satisfaction.</div>
                    </div>
                  </div>
                </div>
                {/* End Comment Area */}
                <div className="comment-form">
                  <div className="group-title"><h5>Leave A Comment</h5></div>
                  {/*Comment Form*/}
                  <form method="post" action="blog.html">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" name="username" placeholder="Full Name" required />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="email" name="email" placeholder="Email" required />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <input type="text" name="subject" placeholder="Subject" required />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea className="darma" name="message" placeholder="Your Message" defaultValue={""} />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <button className="theme-btn btn-style-five" type="submit" name="submit-form">Write A Review</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <SingleCourseAside />
          </div>
        </div>
      </section>
        </>
    )
}

export default SingleCourse;