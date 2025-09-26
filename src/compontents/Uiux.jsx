import React, { useState } from "react";
import "./css/Service_page.css";
import { Link } from "react-router-dom";
import cntimage from '../assets/servicecnt.png';

const services = [
  {
    id: 1,
    heading: "UI Design",
    title: "Intuitive User Interface Design",
    description: [
      "Our UI design services focus on creating visually appealing and user-friendly interfaces that enhance user engagement and satisfaction.",
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Consistency and Branding",
        description: [
          "We ensure that every screen reflects your brand identity and maintains consistency in typography, colors, and visual elements.",
        ],
      },
      {
        title: "Interactive Prototypes",
        description: [
          "Interactive prototypes allow you to visualize the flow and usability of your application before development begins.",
        ],
      },
    ],
  },
  {
    id: 2,
    heading: "UX Research",
    title: "Data-Driven User Experience Research",
    description: [
      "UX research helps understand user behavior, needs, and pain points to create designs that provide a seamless and satisfying experience.",
    ],
    image: cntimage,
    extraSections: [
      {
        title: "User Interviews and Surveys",
        description: [
          "We gather insights directly from users to make informed design decisions that truly address their needs.",
        ],
      },
      {
        title: "Journey Mapping",
        description: [
          "Visualizing user journeys helps identify friction points and opportunities for improved interaction.",
        ],
      },
    ],
  },
  {
    id: 3,
    heading: "Wireframing & Prototyping",
    title: "Structured Design Blueprints",
    description: [
      "Wireframes and prototypes provide a clear visual guide for developers, ensuring the design vision is accurately implemented.",
    ],
    image: "https://via.placeholder.com/300x150?text=Wireframe",
    extraSections: [
      {
        title: "Low & High-Fidelity Wireframes",
        description: [
          "We create both simple sketches and detailed wireframes to plan layouts, content hierarchy, and navigation flow.",
        ],
      },
      {
        title: "Interactive Prototypes",
        description: [
          "Clickable prototypes simulate real interactions, allowing early testing and feedback before development.",
        ],
      },
    ],
  },
  {
    id: 4,
    heading: "Usability Testing",
    title: "Validating Designs Through Testing",
    description: [
      "Usability testing ensures your product is intuitive, easy to use, and meets user expectations effectively.",
    ],
    image: "https://via.placeholder.com/300x150?text=Usability+Testing",
    extraSections: [
      {
        title: "Task-Based Testing",
        description: [
          "We observe users completing specific tasks to identify pain points and opportunities for improvement.",
        ],
      },
      {
        title: "Iterative Design Improvements",
        description: [
          "Feedback from usability tests is used to refine and enhance the design for optimal user experience.",
        ],
      },
    ],
  },
  {
    id: 5,
    heading: "Responsive & Accessible Design",
    title: "Designs for All Devices and Users",
    description: [
      "We create responsive and accessible designs that deliver a consistent experience across devices and for all users.",
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Mobile-First Approach",
        description: [
          "Designing for mobile first ensures your application works seamlessly on smaller screens and scales up for larger devices.",
        ],
      },
      {
        title: "Accessibility Compliance",
        description: [
          "Our designs follow WCAG guidelines, ensuring usability for people with disabilities and enhancing overall inclusivity.",
        ],
      },
    ],
  },
];

const Uiux = () => {
  const [active, setActive] = useState(1);
  const activeService = services.find((s) => s.id === active);

  return (
    <>
      <div className="banner">
        <h1>UI & UX Design Services</h1>
        <p>
          Elevate your digital presence with Suprases’ UI/UX expertise. We design intuitive, engaging, and user-centric interfaces that enhance user satisfaction and drive business growth.
        </p>
        <Link to="/contact">
          <button className="btn-expert">Talk to Our Experts &rarr;</button>
        </Link>
      </div>

      <div className="services-container container">
        <div className="services-content">
          <div className="d-flex">
            <div className="servuice_img">
              <img src={activeService.image} alt={activeService.title} />
            </div>
            <div>
              <h2>{activeService.title}</h2>
              <ul>
                {activeService.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          {activeService.extraSections &&
            activeService.extraSections.map((section, index) => (
              <div key={index}>
                <h2>{section.title}</h2>
                <ul>
                  {section.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <div className="services-tabs">
          {services.map((service) => (
            <div
              key={service.id}
              className={`tab ${active === service.id ? "active" : ""}`}
              onClick={() => setActive(service.id)}
            >
              <span className="tab-number">
                {service.id.toString().padStart(2, "0")}
              </span>
              <span>{service.heading}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Uiux;
