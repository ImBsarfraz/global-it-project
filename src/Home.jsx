import React, { useRef, useState } from "react";

import "./Home.css";
import Testimonial from "./compontents/Testimoni"
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";


//images
import cloud from "./assets/cloud_service.png";
import Data from "./assets/data_service.png";
import digital from "./assets/digital.png";
import security from "./assets/Security.png";
import sft from "./assets/sft_dvp.webp";
import ai from "./assets/Ai_machine.png";

const Home = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
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
      title: "New Enquiry Request",
    };

    console.log("Sending email with:", emailData);
    console.log("Public Key:", import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

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
      alert("Failed to send Enguiry. Please check the console for details.");
    }
  };

  // Service cards
  const items = [
    {
      title: "Web Development",
      desc: "We create responsive, high-performance websites using modern technologies and best practices.",
      icon: "💻"
    },
    {
      title: "Mobile App Development",
      desc: "Developing seamless, cross-platform mobile applications for iOS and Android devices.",
      icon: "📱"
    },
    {
      title: "Cloud Solutions",
      desc: "Providing scalable, secure, and reliable cloud infrastructure and services tailored to your business.",
      icon: "☁️"
    },
  ];


  // Slides for the 1–6 buttons
  const slides = [
    {
      img: sft,
      point1: "✔️ Custom Software Solutions",
      point2: "✔️ Mobile Application Development (iOS, Android, Cross-platform)",
      point3: "✔️ Web Application Engineering",
      point4: "✔️ Enterprise Systems (ERP, CRM, SCM)",
      point5: "✔️ SaaS Platform Development",
      text: "Global IT Services delivers tailored software applications that are reliable, scalable, and secure, designed to meet the unique needs of your business."
    },
    {
      img: Data,
      point1: "✔️ Data Analytics & Visualization",
      point2: "✔️ Data Science & Predictive Modeling",
      point3: "✔️ Big Data Engineering",
      point4: "✔️ Business Intelligence (BI) Solutions",
      point5: "✔️ Data Warehousing & Management",
      text: "Global IT Services transforms raw data into actionable insights through analytics, modeling, and smart data management, empowering better business decisions."
    },
    {
      img: cloud,
      point1: "✔️ Cloud-Native Application Development",
      point2: "✔️ Cloud Migration & Modernization",
      point3: "✔️ Cloud Infrastructure Management & Monitoring",
      point4: "✔️ DevOps Automation & CI/CD Pipelines",
      point5: "✔️ Serverless Architecture & Deployment",
      text: "Global IT Services provides scalable, secure, and efficient cloud platforms to build, migrate, and manage applications across diverse environments."
    },
    {
      img: digital,
      point1: "✔️ Digital Marketing Strategy",
      point2: "✔️ Social Media Management & Engagement",
      point3: "✔️ Custom CMS Development",
      point4: "✔️ E-commerce Platform Development",
      point5: "✔️ SEO & Search Engine Optimization",
      text: "Global IT Services enhances brand visibility and business growth through strategic digital marketing, robust CMS solutions, and optimized e-commerce platforms."
    },
    {
      img: security,
      point1: "✔️ Cybersecurity Assessment & Audits",
      point2: "✔️ Threat Detection & Risk Management",
      point3: "✔️ Network & Cloud Security",
      point4: "✔️ Compliance & Data Protection",
      point5: "✔️ Security Consulting & Training",
      text: "Global IT Services safeguards your digital assets by identifying risks, implementing protective measures, and ensuring compliance with industry standards."
    },
    {
      img: ai,
      point1: "✔️ Artificial Intelligence Solutions",
      point2: "✔️ Machine Learning Models",
      point3: "✔️ Natural Language Processing (NLP)",
      point4: "✔️ Predictive Analytics & Automation",
      point5: "✔️ AI-driven Business Insights",
      text: "Global IT Services leverages AI and machine learning to automate processes, predict trends, and generate actionable insights that drive smarter business decisions."
    },
  ];



  // Track which slide is active
  const [active, setActive] = useState(0);

  return (
    <>
      {/* ===== HERO HEADER ===== */}
      <div className="header">
        <div className="header_overlay">
          <h2>Software Development</h2>
          <p>
            Software development involves designing, building, and maintaining applications
            and systems to solve real-world problems.
            <br />
            It requires a combination of programming skills, problem-solving, and collaboration
            to create efficient and scalable software solutions.
          </p>

          <Link to="/Contact"><button className="header_btn">Explore now !</button></Link>
        </div>
      </div>

      {/* ===== INTRO + ENQUIRY ===== */}
      <div className="wrapper ">
        <div className="intro">
          <h2 className="text-info">Features -</h2>
          <p>
            Global IT Services is a software company dedicated to delivering innovative, user-friendly solutions using cutting-edge technology. We focus on quality, agility, and custom software development to help businesses enhance efficiency, streamline operations, and drive growth.
          </p>
        </div>

        <div className="content container">
          <div className="scroll-features">
            {[
              { icon: "⚡", title: "Speedy Service", description: "We deliver fast and efficient solutions to meet your business needs without compromising quality." },
              { icon: "🎯", title: "Targeted Support", description: "Our team provides precise and personalized support to help you achieve your goals effectively." },
              { icon: "💡", title: "Bright Ideas", description: "We bring innovative and creative solutions to solve complex challenges and drive growth." },
              { icon: "🤝", title: "Trusted Team", description: "Our experienced and reliable team partners with you to ensure success every step of the way." }

            ].map((f, i) => (
              <div key={i} className="fcard">
                <h3 className="mt-3">{f.icon} {f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>

          <div className="enquiry-box">
            <h2>Free Enquiry</h2>
            <span>Submit your details and our team at Global IT Services will get back to you with a tailored solution for your business needs.</span>
            <form ref={formRef} onSubmit={sendEmail} className="form">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>

      {/* ===== OUR SERVICES ===== */}
      <div className="services">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {items.map((item, i) => (
            <div key={i} className="service-card">
              <span className="service-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="switcher-section">
        <h2>We offer the best services for you</h2>
        <div className="slide-display">
          <div className="slide_txt">
            <p>{slides[active].text}</p>
            <br />
            <h3>{slides[active].point1}</h3>
            <h3>{slides[active].point2}</h3>
            <h3>{slides[active].point3}</h3>
            <h3>{slides[active].point4}</h3>
            <h3>{slides[active].point5}</h3>
          </div>
          <div className="slide_img_col" >
            <img src={slides[active].img}
              alt={slides[active].title}
              className="slide-image"
            />
          </div>
        </div>

        <div className="nav-row">
          <button
            className="nav-btn" onClick={() =>
              setActive((prev) => (prev - 1 + slides.length) % slides.length)}>
            ◄</button>

          <span className="slide-counter">
            {active + 1} / {slides.length}
          </span>

          <button
            className="nav-btn"
            onClick={() => setActive((prev) => (prev + 1) % slides.length)}>
            ►
          </button>
        </div>
      </div>

      <Testimonial />
    </>
  );
};

export default Home;
