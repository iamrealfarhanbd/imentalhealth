const BlogSingleAside = () => {
    return (
        <>
            <div className="sidebar-side col-lg-3 col-md-12 col-sm-12">
                <aside className="sidebar sticky-top">
                  {/* Search */}
                  <div className="sidebar-widget search-box">
                    <form method="post" action="contact.html">
                      <div className="form-group">
                        <input type="search" name="search-field" defaultValue placeholder="Search" required />
                        <button type="submit"><span className="icon fa fa-search" /></button>
                      </div>
                    </form>
                  </div>
                  {/* Popular Post Widget */}
                  <div className="sidebar-widget popular-posts">
                    <div className="sidebar-title">
                      <h4>Recent Post</h4>
                    </div>
                    <div className="widget-content">
                      <article className="post">
                        <figure className="post-thumb"><img src="/assets/images/resource/post-thumb-3.jpg" alt="" /><a href="blog-detail.html" className="overlay-box"><span className="icon fa fa-link" /></a></figure>
                        <div className="post-info">Octobar 20, 2020</div>
                        <div className="text"><a href="blog-detail.html">Is Baking a Good career? 15 Reasons </a></div>
                      </article>
                      <article className="post">
                        <div className="post-info">Octobar 20, 2020</div>
                        <figure className="post-thumb"><img src="/assets/images/resource/post-thumb-4.jpg" alt="" /><a href="blog-detail.html" className="overlay-box"><span className="icon fa fa-link" /></a></figure>
                        <div className="text"><a href="blog-detail.html">Best Practices: SEO For <br /> Syndicated Content</a></div>
                      </article>
                      <article className="post">
                        <div className="post-info">Octobar 20, 2020</div>
                        <figure className="post-thumb"><img src="/assets/images/resource/post-thumb-5.jpg" alt="" /><a href="blog-detail.html" className="overlay-box"><span className="icon fa fa-link" /></a></figure>
                        <div className="text"><a href="blog-detail.html">A Guide to Google SEO <br /> Algorithm Updates</a></div>
                      </article>
                    </div>
                  </div>
                  {/* Links Widget */}
                  <div className="sidebar-widget links-widget">
                    <div className="sidebar-title">
                      <h4>Recent Post</h4>
                    </div>
                    <div className="widget-content">
                      <ul className="blog-cat">
                        <li><a href="#">Business (3)</a></li>
                        <li><a href="#">Education  (03)</a></li>
                        <li><a href="#">Technology (12)</a></li>
                        <li><a href="#">News (6)</a></li>
                        <li><a href="#">Design (4)</a></li>
                        <li><a href="#">Lifestyle  News (6)</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* Archive Widget */}
                  <div className="sidebar-widget archive-widget">
                    <div className="sidebar-title">
                      <h4>Archives Post</h4>
                    </div>
                    <div className="widget-content">
                      {/* Form Group */}
                      <div className="form-group">
                        <select name="country" className="custom-select-box">
                          <option>February 2020</option>
                          <option>February 2019</option>
                          <option>February 2018</option>
                          <option>February 2017</option>
                          <option>February 2016</option>
                        </select>
                      </div>
                      {/* Form Group */}
                      <div className="form-group">
                        <select name="country" className="custom-select-box">
                          <option>February 2019</option>
                          <option>February 2018</option>
                          <option>February 2017</option>
                          <option>February 2016</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* Popular Posts */}
                  <div className="sidebar-widget popular-tags">
                    <div className="sidebar-title">
                      <h4>Tags</h4>
                    </div>
                    <div className="widget-content">
                      <a href="#">seafood</a>
                      <a href="#">gyros</a>
                      <a href="#">chicken</a>
                      <a href="#">pizza</a>
                      <a href="#">ecommerce</a>
                      <a href="#">food</a>
                    </div>
                  </div>
                </aside>
              </div>
        </>
    )
}

export default BlogSingleAside;