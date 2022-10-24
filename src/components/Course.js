import React from "react";

const Course = ({ course }) => {
  const { details, image_url } = course;
  return (
    <div>
      <div className="col-md-6 col-xl-4 filter-item">
        <div className="course-box style2">
          <div className="course-img">
            <img
              loading="lazy"
              width="384"
              height="280"
              src={image_url}
              className="attachment-acadu_384X280 size-acadu_384X280 wp-post-image"
              alt=""
              srcSet={image_url}
              sizes="(max-width: 384px) 100vw, 384px"
            />
            <span className="tag">
              {" "}
              <span className="woocommerce-Price-amount amount">
                <bdi>
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  14.00
                </bdi>
              </span>{" "}
            </span>
          </div>
          <div className="course-content">
            <h3 className="course-title">
              <a href="https://angfuzsoft.com/wordpress/acadu/courses/complete-financial-analyst-advance-course/">
                Complete Financial Analyst Advance Course
              </a>
            </h3>
            <div className="course-author">
              <div className="tutor-avatar">
                <div className="tutor-ratio tutor-ratio-1x1">
                  <img
                    src="https://angfuzsoft.com/wordpress/acadu/wp-content/uploads/2022/09/client1-1-150x150.jpg"
                    alt="Acadu"
                  />{" "}
                </div>
              </div>{" "}
              <a
                href="https://angfuzsoft.com/wordpress/acadu/profile/acadu?view=instructor"
                className="author-name"
              >
                Acadu{" "}
              </a>
              <div className="course-rating">
                <div className="tutor-course-ratings tutor-mb-8">
                  <div className="tutor-ratings">
                    <div className="tutor-ratings-stars">
                      <span
                        className="tutor-icon-star-bold"
                        data-rating-value="1"
                      ></span>
                      <span
                        className="tutor-icon-star-bold"
                        data-rating-value="2"
                      ></span>
                      <span
                        className="tutor-icon-star-bold"
                        data-rating-value="3"
                      ></span>
                      <span
                        className="tutor-icon-star-bold"
                        data-rating-value="4"
                      ></span>
                      <span
                        className="tutor-icon-star-bold"
                        data-rating-value="5"
                      ></span>{" "}
                    </div>

                    <div className="tutor-ratings-average">(5.00)</div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="course-meta">
              <span>
                <i className="fal fa-file"></i> Lesson 15
              </span>
              <span>
                <i className="fal fa-user"></i> Students 1
              </span>
              <span>
                <i className="fa-light fa-clock"></i> 17h 20m
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
