import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./testimonial.css";
import axios from "axios";
import Testify from './Testify';

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const Testimonial = () => {
  const [testimonials, setTestimonial] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/testimonials").then((response) => {
      setTestimonial(response.data.slice(0, 10));
    });
  }, []);

  const openMiniWindow = () => {
    const miniWindow = window.open('', 'Testify', 'height=600,width=700');
    miniWindow.document.body.innerHTML = '<div id="testify-container"></div>';
    ReactDOM.render(<Testify />, miniWindow.document.getElementById('testify-container'));
  };

  return (
    <section id="testimonial">
      <h2>Testimonials</h2>
      <h5>Reviews from clients</h5>

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

      <button onClick={openMiniWindow} className="btn btn-primary">Testify</button>
    </section>
  );
};

export default Testimonial;