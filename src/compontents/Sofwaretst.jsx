import React, { useState } from "react";
import "./css/Service_page.css";
import { Link } from "react-router-dom";
import cntimage from '../assets/servicecnt.png';

const services = [
  {
    id: 1,
    heading: "Manual Testing",
    title: "Thorough Manual Testing for Your Software",
    description: [
      "Manual testing involves human testers evaluating the functionality, usability, and reliability of software applications to ensure they meet business requirements.",
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Detailed Test Cases and Execution",
        description: [
          "Testers create comprehensive test cases and execute them step-by-step to identify bugs and issues early in the development cycle.",
        ],
      },
      {
        title: "User Experience Validation",
        description: [
          "Manual testing helps evaluate the application from an end-user perspective, ensuring usability, navigation, and functionality meet expectations.",
        ],
      },
    ],
  },
  {
    id: 2,
    heading: "Automation Testing",
    title: "Efficient Automated Testing for Faster Delivery",
    description: [
      "Automation testing uses tools like Selenium, Cypress, and TestNG to run repetitive tests automatically, increasing efficiency and reducing manual effort.",
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Faster Test Execution",
        description: [
          "Automated scripts execute tests quickly and consistently, helping teams deliver software updates faster and more reliably.",
        ],
      },
      {
        title: "Reusable Test Scripts",
        description: [
          "Test scripts can be reused across multiple versions of the application, saving time and effort in regression testing.",
        ],
      },
    ],
  },
  {
    id: 3,
    heading: "Performance Testing",
    title: "Ensure Optimal Application Performance",
    description: [
      "Performance testing assesses how an application behaves under various loads, helping identify bottlenecks and optimize responsiveness.",
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Load and Stress Testing",
        description: [
          "Simulate high traffic scenarios to ensure the application remains stable and responsive under peak loads.",
        ],
      },
      {
        title: "Scalability Evaluation",
        description: [
          "Measure the system's ability to scale effectively with increasing users and transactions.",
        ],
      },
    ],
  },
  {
    id: 4,
    heading: "Security Testing",
    title: "Protect Your Application Against Vulnerabilities",
    description: [
      "Security testing identifies vulnerabilities and ensures sensitive data is protected from potential threats and cyber-attacks.",
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Vulnerability Assessment",
        description: [
          "Detect potential security risks and weaknesses in the system, ensuring compliance with industry standards.",
        ],
      },
      {
        title: "Penetration Testing",
        description: [
          "Simulate attacks to evaluate system defenses and strengthen application security before deployment.",
        ],
      },
    ],
  },
  {
    id: 5,
    heading: "SaaS Testing",
    title: "Comprehensive Testing for SaaS Applications",
    description: [
      "SaaS testing ensures cloud-based applications deliver reliable performance, scalability, and security for end-users.",
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Multi-Tenant Testing",
        description: [
          "Verify that multiple users can safely share the same software environment without conflicts or data leaks.",
        ],
      },
      {
        title: "Continuous Monitoring",
        description: [
          "Monitor SaaS applications continuously for performance, uptime, and reliability to ensure customer satisfaction.",
        ],
      },
    ],
  },
];

const Softwaretst = () => {
  const [active, setActive] = useState(1);
  const activeService = services.find((s) => s.id === active);

  return (
    <>
      <div className="banner">
        <h1>Software Testing Services</h1>
        <p>
          Ensure your software is reliable, secure, and high-performing with Suprases' professional software testing services.
          We provide thorough testing strategies to enhance quality, reduce risks, and improve user satisfaction.
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

export default Softwaretst;
