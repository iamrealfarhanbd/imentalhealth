const SingleCourseAside = () => {
    return (
        <>
            <div className="info-column col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="price">$9.99 <i>$129.99</i> <span>92% of</span></div>
                <h5>This course includes:</h5>
                <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered </div>
                <ul className="level-list">
                  <li>Level :<span>Beginner</span></li>
                  <li>Topic :<span>Java Script</span></li>
                  <li>Class :<span>32 articles</span></li>
                  <li>Access :<span>Mobile and TV</span></li>
                </ul>
                <h5>Other includes:</h5>
                <ul className="level-list-two">
                  <li>Full lifetime access</li>
                  <li>19 downloadable resources</li>
                  <li>Certificate of completion</li>
                </ul>
                {/* Coupon Form */}
                <div className="coupon-form">
                  <h6>Watch Video <span className="fa fa-caret-right" /></h6>
                  <form method="post" action="contact.html">
                    <div className="form-group">
                      <input type="email" name="email" defaultValue placeholder="Enter Coupon" required />
                      <button type="submit" className="submit-btn">Enter</button>
                    </div>
                  </form>
                </div>
                <div className="btns-box">
                  <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                  <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
                </div>
              </div>
            </div>
        </>
    )
}

export default SingleCourseAside;