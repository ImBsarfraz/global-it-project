import React, { useState } from "react";
import "./css/Service_page.css";
import { Link } from "react-router-dom";
import dataImage from '../assets/servicecnt.png'; // Replace with a data-specific image if available

const services = [
  {
    id: 1,
    heading: "Data Management Solutions",
    title: "Organize and Manage Your Business Data",
    description: [
      "Efficient data management is crucial for informed business decisions. Our solutions help you store, organize, and maintain data securely and systematically."
    ],
    image: dataImage,
    extraSections: [
      {
        title: "Centralized Data Storage",
        description: [
          "Consolidate your data from various sources into a centralized system for easy access and management."
        ],
      },
      {
        title: "Data Quality & Governance",
        description: [
          "Ensure accuracy, consistency, and reliability of your data across all departments and systems."
        ],
      },
      {
        title: "Secure Data Handling",
        description: [
          "Implement encryption and access control protocols to protect sensitive business information."
        ],
      },
    ],
  },
  {
    id: 2,
    heading: "Data Analytics",
    title: "Transform Data into Insights",
    description: [
      "Our analytics solutions help businesses interpret data, identify trends, and make data-driven decisions to enhance growth and efficiency."
    ],
    image: dataImage,
    extraSections: [
      {
        title: "Real-Time Analytics",
        description: [
          "Monitor key metrics and KPIs in real-time for faster decision-making."
        ],
      },
      {
        title: "Predictive Modeling",
        description: [
          "Leverage advanced algorithms to forecast trends and anticipate business challenges."
        ],
      },
      {
        title: "Interactive Dashboards",
        description: [
          "Visualize complex data in simple, actionable formats for stakeholders and decision-makers."
        ],
      },
    ],
  },
  {
    id: 3,
    heading: "Cloud Data Solutions",
    title: "Secure & Scalable Cloud Infrastructure",
    description: [
      "Leverage cloud technologies to store, access, and process your data efficiently and securely, with scalability to grow as your business expands."
    ],
    image: dataImage,
    extraSections: [
      {
        title: "Cloud Storage & Backup",
        description: [
          "Ensure secure storage and regular backup of your critical business data."
        ],
      },
      {
        title: "Data Integration",
        description: [
          "Integrate data from multiple systems to create a unified, accurate dataset."
        ],
      },
      {
        title: "Cloud Security & Compliance",
        description: [
          "Implement best practices for cloud security and adhere to industry compliance standards."
        ],
      },
    ],
  },
  {
    id: 4,
    heading: "Big Data Solutions",
    title: "Handle Large-Scale Data Efficiently",
    description: [
      "Our big data services allow businesses to process and analyze massive datasets to uncover insights that drive strategic growth."
    ],
    image: dataImage,
    extraSections: [
      {
        title: "High-Performance Data Processing",
        description: [
          "Use advanced frameworks and architectures to handle large-scale data efficiently."
        ],
      },
      {
        title: "Data Visualization & Reporting",
        description: [
          "Convert complex datasets into visual reports for easier interpretation."
        ],
      },
      {
        title: "Scalable Data Infrastructure",
        description: [
          "Design infrastructure that grows with your data needs without performance compromise."
        ],
      },
    ],
  },
  {
    id: 5,
    heading: "Data Security & Compliance",
    title: "Protect Your Data and Meet Regulations",
    description: [
      "We provide robust security measures and compliance solutions to protect sensitive data and meet industry regulations like GDPR and ISO standards."
    ],
    image: dataImage,
    extraSections: [
      {
        title: "Data Encryption",
        description: [
          "Encrypt sensitive data to prevent unauthorized access."
        ],
      },
      {
        title: "Regulatory Compliance",
        description: [
          "Ensure your business processes adhere to industry regulations and standards."
        ],
      },
      {
        title: "Continuous Monitoring",
        description: [
          "Monitor your data systems continuously to detect and prevent security breaches."
        ],
      },
    ],
  },
];

const Services = () => {
  const [active, setActive] = useState(1);
  const activeService = services.find((s) => s.id === active);

  return (
    <>
      <div className="banner">
        <h1>Data Services</h1>
        <p>
          Empower your business with advanced data solutions by Suprases.
          Our expertise enables secure, scalable, and actionable data insights to drive growth and efficiency.
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

export default Services;