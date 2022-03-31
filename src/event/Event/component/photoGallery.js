import React from 'react'

import bg_parallax_03_1894x1662 from'../../Assets/images/bg-parallax-03-1894x1662.jpg'
import gallery_01_original_1200x800 from'../../Assets/images/gallery-01-original-1200x800.jpg'
import gallery_02_original_1200x800 from'../../Assets/images/gallery-02-original-1200x800.jpg'
import gallery_03_original_1200x800 from'../../Assets/images/gallery-03-original-1200x800.jpg'
import gallery_04_original_1200x800 from'../../Assets/images/gallery-04-original-1200x800.jpg'
import gallery_05_original_1200x800 from'../../Assets/images/gallery-05-original-1200x800.jpg'


export default function photoGallery() {
    return (
        <div>
            {/* Section Photo Gallery*/}
        <section
          className="parallax-container section"
          style={{ backgroundImage: `url(${bg_parallax_03_1894x1662})`,width: "100%",
          height: "auto"}}>
        
          <div className="parallax-content section-lg context-dark text-center parallax-overlay-gradient-primary-1">
            <div className="container container-wide">
              <h6>event album</h6>
              <h3>Photo Gallery.</h3>
              <div
                className="row row-ten row-narrow row-30 row-lg-50 justify-content-center"
                data-lightgallery="group"
              >
                <div className="col-sm-4 col-md-3 col-lg-2">
                  <div className="wow">
                    <div>
                      {/* Gallery Thumbnail*/}
                      <a
                        className="thumbnail"
                        href={gallery_01_original_1200x800}
                       
                      >
                        <span className="thumbnail-overlay" />
                        <span className="thumbnail-icon" />
                        <img style={{ width:'265px', height:"305px",objectFit:'cover'}}
                          src={gallery_01_original_1200x800}
                         
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2">
                  <div className="wow">
                    <div>
                      {/* Gallery Thumbnail*/}
                      <a
                        className="thumbnail"
                        href={gallery_02_original_1200x800}
                        data-lightgallery="item"
                        data-triangle=".thumbnail-overlay"
                      >
                        <span className="thumbnail-overlay" />
                        <span className="thumbnail-icon" />
                        <img style={{ width:'265px', height:"305px",objectFit:'cover'}}
                          src={gallery_02_original_1200x800}
                        
                         
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2">
                  <div className="wow">
                    <div>
                      {/* Gallery Thumbnail*/}
                      <a
                        className="thumbnail"
                        href={gallery_03_original_1200x800}
                        data-lightgallery="item"
                        data-triangle=".thumbnail-overlay"
                      >
                        <span className="thumbnail-overlay" />
                        <span className="thumbnail-icon" />
                        <img style={{ width:'265px', height:"305px",objectFit:'cover'}}
                          src={
                            gallery_03_original_1200x800
                          }
                          alt
                          width={298}
                          height={343}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2">
                  <div className="wow">
                    <div>
                      {/* Gallery Thumbnail*/}
                      <a
                        className="thumbnail"
                        href={gallery_04_original_1200x800}
                        data-lightgallery="item"
                        data-triangle=".thumbnail-overlay"
                      >
                        <span className="thumbnail-overlay" />
                        <span className="thumbnail-icon" />
                        <img style={{ width:'265px', height:"305px",objectFit:'cover'}}
                          src={gallery_04_original_1200x800}
                         
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2">
                  <div className="wow">
                    <div>
                      {/* Gallery Thumbnail*/}
                      <a
                        className="thumbnail"
                        href={gallery_05_original_1200x800}
                        data-lightgallery="item"
                        data-triangle=".thumbnail-overlay"
                      >
                        <span className="thumbnail-overlay" />
                        <span className="thumbnail-icon" />
                        <img style={{ width:'265px', height:"305px",objectFit:'cover'}}
                          src={gallery_05_original_1200x800}
                          alt
                          width={298}
                          height={343}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <p className="font-weight-sbold font-secondary">
                    <span>
                      Don’t hesitate, contact us for better help and services.
                    </span>{" "}
                    <a className="link-inline" href="#">
                      Book Ticket Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}
