import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Service_page.css";
import cntimage from '../assets/servicecnt.png';

const services = [
  {
    id: 1,
    heading: "Cloud Infrastructure Setup",
    title: "Scalable and Secure Cloud Platforms",
    description: [
      "We design and implement cloud infrastructure tailored to your business, ensuring scalability, high availability, and robust security for all your applications and data."
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Flexible Cloud Architecture",
        description: [
          "Our cloud solutions adapt to your business growth, allowing seamless expansion and integration of new services without disruption."
        ]
      },
      {
        title: "Optimized Performance and Efficiency",
        description: [
          "We ensure your cloud environment is optimized for maximum performance and resource efficiency, reducing operational costs while enhancing reliability."
        ]
      },
      {
        title: "Enhanced Security & Compliance",
        description: [
          "Global IT Services implements advanced security protocols and compliance measures to protect your sensitive data across cloud platforms."
        ]
      },
      {
        title: "Continuous Support and Monitoring",
        description: [
          "Our team provides ongoing support, monitoring, and proactive maintenance to ensure your cloud environment remains stable, secure, and up-to-date."
        ]
      },
    ]
  },
  {
    id: 2,
    heading: "Cloud Migration Services",
    title: "Seamless Migration to the Cloud",
    description: [
      "We help businesses migrate applications, databases, and workloads to the cloud with minimal downtime and disruption, ensuring a smooth transition."
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Assessment & Planning",
        description: [
          "We evaluate your existing infrastructure and create a migration plan that minimizes risk and ensures business continuity."
        ]
      },
      {
        title: "Data & Application Migration",
        description: [
          "Our experts move your data and applications securely to the cloud, validating functionality and performance throughout the process."
        ]
      },
      {
        title: "Post-Migration Optimization",
        description: [
          "After migration, we optimize your cloud environment for performance, cost efficiency, and scalability."
        ]
      },
    ]
  },
  {
    id: 3,
    heading: "Cloud Management & Support",
    title: "Ongoing Cloud Management",
    description: [
      "Global IT Services provides comprehensive cloud management to ensure your cloud environment operates efficiently, securely, and in alignment with your business goals."
    ],
    image: cntimage,
    extraSections: [
      {
        title: "24/7 Monitoring",
        description: [
          "Our team continuously monitors your cloud infrastructure to detect and resolve issues proactively, ensuring uptime and reliability."
        ]
      },
      {
        title: "Performance Optimization",
        description: [
          "We analyze resource usage and optimize workloads to maximize performance and cost efficiency."
        ]
      },
      {
        title: "Security & Compliance Management",
        description: [
          "We enforce security best practices and maintain compliance standards to protect your sensitive business data in the cloud."
        ]
      },
    ]
  },
];

const Cloud = () => {
  const [active, setActive] = useState(1);
  const activeService = services.find((s) => s.id === active);

  // Helper function to render a single set of tabs
  const renderTabs = (keySuffix) => (
    services.map((service) => (
      <div
        // Ensure keys are unique across all rendered elements, especially the duplicated set
        key={`${service.id}-${keySuffix}`}
        className={`tab ${active === service.id ? "active" : ""}`}
        onClick={() => setActive(service.id)}
      >
        <span className="tab-number">
          {service.id.toString().padStart(2, "0")}
        </span>
        <span>{service.heading}</span>
      </div>
    ))
  );

  return (
    <>
      <div className="banner">
        <h1>Cloud Services</h1>
        <p>
          Elevate your business with Global IT Services’ cloud solutions. We provide secure, scalable, and fully managed cloud platforms that drive digital transformation and innovation.
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

        <div className="tabs-wrapper"> 
          <div className="services-tabs">
            {renderTabs('original')}
            {renderTabs('duplicate')}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Cloud;