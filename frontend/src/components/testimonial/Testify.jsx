import React, { useRef, useState } from "react";
import "../../index.css";
import "./testimonial.css";
import axios from "axios";

export const Testify = () => {

  const form = useRef();
  const [testimonial, setTestimonial] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const getAvatar = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.googleapis.com/plus/v1/people/me?fields=image");
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
    axios.post("/api/testimonials", { testimonialData })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    // alert
    alert(`Thank you for your review, ${name}! I appreciate your feedback and will take it into considerations as I continue to render my services.`);
    const alertBox = document.querySelector('.alert');
    alertBox.style.backgroundColor = 'orange';
    alertBox.style.color = 'white';

    // Reset the form fields
    form.current.reset();

    // Remove the alert box after 2 seconds
    setTimeout(() => {
        alertBox.remove();
    }, 2000);
  };

  return (
    <section id="testify">
      <h2>Testify</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name"  onChange={(e) => setName(e.target.value)} required/>
        <input type="email" name="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} required/>
        <textarea name="review" id="review" cols="30" rows="10" placeholder="Review"  onChange={(e) => setTestimonial(e.target.value)} required></textarea>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Testify</button>
      </form>
      <div className="alert"></div>
    </section>
  );
}

export default Testify;
