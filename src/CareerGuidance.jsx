import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";


const CareerGuidance = () => {
  const formRef = useRef();

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Please fill all required fields!");
      return;
    }

    const emailData = {
      name: form.name,
      email: form.email,
      message: form.message,
      title: "New Career Guidance Request",
    };

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      
      alert("Email sent successfully!");

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send guidance request. Please check the console for details.");
    }
  };


  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="mb-5">
        <h1 className="display-4">Career Guidance</h1>
        <span className="lead text-muted">
          Explore your career potential, plan your growth, and get tips from experts to achieve your goals.
        </span>
      </div>

      {/* Tips Section */}
      <div className="mb-5">
        <h2 className="mb-3">Tips for Career Growth</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Identify your strengths and interests to choose the right career path.</li>
          <li className="list-group-item">Set short-term and long-term goals for continuous growth.</li>
          <li className="list-group-item">Build technical and soft skills relevant to your industry.</li>
          <li className="list-group-item">Network with professionals and mentors for guidance and opportunities.</li>
          <li className="list-group-item">Stay updated with trends and emerging technologies in your field.</li>
        </ul>
      </div>

      {/* Resources Section */}
      <div className="mb-5">
        <h2 className="mb-3">Resources</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><a href="https://www.linkedin.com/learning/" target="_blank" rel="noreferrer">LinkedIn Learning</a></li>
          <li className="list-group-item"><a href="https://www.coursera.org/" target="_blank" rel="noreferrer">Coursera Courses</a></li>
          <li className="list-group-item"><a href="https://www.udemy.com/" target="_blank" rel="noreferrer">Udemy Courses</a></li>
          <li className="list-group-item"><a href="https://www.khanacademy.org/" target="_blank" rel="noreferrer">Khan Academy</a></li>
          <li className="list-group-item"><a href="https://www.codecademy.com/" target="_blank" rel="noreferrer">Codecademy</a></li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="mb-5">
        <h2 className="mb-3">Get in Touch</h2>
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerGuidance;
