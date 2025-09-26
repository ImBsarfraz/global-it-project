import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Service_page.css";
import cntimage from '../assets/servicecnt.png';

const services = [
  {
    id: 1,
    heading: "Digital Strategy & Consulting",
    title: "Transform Your Business Digitally",
    description: [
      "We help businesses develop and implement digital strategies to enhance online presence, drive engagement, and maximize ROI across digital platforms."
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Customized Digital Roadmap",
        description: [
          "Our experts craft a digital strategy aligned with your business goals, ensuring measurable growth and improved customer experiences."
        ]
      },
      {
        title: "Market & Competitor Analysis",
        description: [
          "We provide detailed insights into market trends and competitors, enabling data-driven decisions and competitive advantage."
        ]
      },
      {
        title: "Digital Transformation Planning",
        description: [
          "We identify opportunities to automate and optimize processes, integrating digital tools that enhance efficiency and customer satisfaction."
        ]
      },
    ]
  },
  {
    id: 2,
    heading: "Web & Mobile Experience",
    title: "Responsive Websites & Mobile Apps",
    description: [
      "Our team designs and develops responsive websites and mobile apps that deliver intuitive, seamless, and engaging user experiences."
    ],
    image: cntimage,
    extraSections: [
      {
        title: "User-Centric Design",
        description: [
          "We focus on UX/UI principles to ensure interfaces are intuitive, visually appealing, and easy to navigate."
        ]
      },
      {
        title: "Cross-Platform Compatibility",
        description: [
          "Our solutions work flawlessly across devices, browsers, and operating systems, offering a consistent user experience."
        ]
      },
      {
        title: "Performance & Optimization",
        description: [
          "We optimize websites and apps for speed, responsiveness, and accessibility, ensuring maximum engagement and retention."
        ]
      },
    ]
  },
  {
    id: 3,
    heading: "Digital Marketing & SEO",
    title: "Grow Your Brand Online",
    description: [
      "We provide comprehensive digital marketing services, including SEO, content marketing, social media campaigns, and paid advertising to grow your brand visibility and reach."
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Search Engine Optimization",
        description: [
          "We improve your website’s search engine ranking, driving organic traffic and increasing lead generation."
        ]
      },
      {
        title: "Social Media Marketing",
        description: [
          "We create targeted campaigns on social platforms to boost engagement, brand awareness, and customer loyalty."
        ]
      },
      {
        title: "Content & Campaign Strategy",
        description: [
          "Our team crafts compelling content and strategic campaigns to attract, engage, and convert your audience effectively."
        ]
      },
    ]
  },
  {
    id: 4,
    heading: "E-commerce & Online Platforms",
    title: "Powerful Online Stores & Platforms",
    description: [
      "We develop e-commerce platforms and digital storefronts tailored to your business needs, providing seamless shopping experiences and integrated backend management."
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Customizable E-commerce Solutions",
        description: [
          "Our platforms include personalized features, payment integrations, and analytics to boost sales and customer satisfaction."
        ]
      },
      {
        title: "Secure & Scalable",
        description: [
          "We implement secure transaction processes and scalable infrastructure to handle growing user traffic and sales volumes."
        ]
      },
      {
        title: "Integrated Management Tools",
        description: [
          "Our solutions provide analytics, inventory, and order management tools for streamlined business operations."
        ]
      },
    ]
  },
];

const Digital = () => {
  const [active, setActive] = useState(1);
  const activeService = services.find((s) => s.id === active);

  return (
    <>
      <div className="banner">
        <h1>Digital Services</h1>
        <p>
          Transform your business with Global IT Services’ digital solutions. We empower your brand through strategy, technology, and creativity to thrive in a connected world.
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

          {activeService.extraSections.map((section, index) => (
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

export default Digital;
