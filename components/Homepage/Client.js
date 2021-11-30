const HomeClient = () => {
    return (
        <>
      <section className="clients-section">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <h2>Key supporters</h2>
            <div className="text">These leading universities are currently offering online degree <br /> courses on FutureLearn:</div>
          </div>
          <div className="sponsors-outer">
            {/*Sponsors Carousel*/}
            <ul className="sponsors-carousel owl-carousel owl-theme">
              <li className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/1.png" alt="" /></a></figure></li>
              <li className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/2.png" alt="" /></a></figure></li>
              <li className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/3.png" alt="" /></a></figure></li>
              <li className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/4.png" alt="" /></a></figure></li>
              <li className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/5.png" alt="" /></a></figure></li>
              <li className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/1.png" alt="" /></a></figure></li>
              <li className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/2.png" alt="" /></a></figure></li>
              <li className="slide-item"><figure className="image-box"><a href="#"><img src="/assets/images/clients/3.png" alt="" /></a></figure></li>
            </ul>
          </div>
        </div>
      </section>
        </>
    )
}

export default HomeClient