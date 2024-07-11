import React, { useState, useEffect, useRef } from "react";
import "./testimonial.css";
import axios from "axios";
import config from "../../config.json";

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const form = useRef();
  const [testimonial, setTestimonial] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get(`${config.webServiceUrl}/api/testimonials`).then((response) => {
      setTestimonials(response.data.slice(0, 10));
    });
  }, []);

  const getAvatar = () => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://www.googleapis.com/plus/v1/people/me?fields=image"
    );
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const avatarUrl = data.image.url;
        return avatarUrl;
      }
    };
    xhr.send();
  };

  const testimonialData = {
    testimonial,
    name,
    email,
    avatarUrl: getAvatar(),
  };

  const handleSubmit = () => {
    axios
      .post("/api/testimonials", { testimonialData })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // alert
    alert(
      `Thank you for your review, ${name}! I appreciate your feedback and will take it into considerations as I continue to render my services.`
    );
    const alertBox = document.querySelector(".alert");
    alertBox.style.backgroundColor = "orange";
    alertBox.style.color = "white";

    // Reset the form fields
    form.current.reset();

    // Remove the alert box after 2 seconds
    setTimeout(() => {
      alertBox.remove();
    }, 2000);
  };

  return (
    <section id="testimonial">
      <h2>Testimonials</h2>
      <h5>Reviews from clients</h5>

      <div className="testimonial-contents">
        <div className="testimonial-swiper"></div>
      </div>
      {testimonials ? (
        <Swiper
          className="container testimonials__container"
          modules={[Pagination, Navigation, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          a11y={{ enabled: true }}
        >
          {testimonials.map((testi) => {
            return (
              <SwiperSlide key={testi.id} className="testimonial">
                <div className="client__avatar">
                  <img src={testi.avatar} alt="client avatar" />
                </div>
                <h5 className="client__name">{testi.name}</h5>
                <small className="client__review">{testi.testimonial}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <p className="text-light">
          <em>No reviews yet. Be the first to write one.</em>
        </p>
      )}

      <div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="btn btn-primary"
        >
          {isExpanded ? "Collapse" : "Testify"}
        </button>

        {isExpanded && (
          <div className="testify-form">
              <h2>Testify</h2>
              <form ref={form} onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <textarea
                  name="review"
                  id="review"
                  cols="30"
                  rows="10"
                  placeholder="Review"
                  onChange={(e) => setTestimonial(e.target.value)}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
              <div className="alert"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
