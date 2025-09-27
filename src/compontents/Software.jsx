import React, { useState } from "react";
import "./css/Service_page.css";
import { Link } from "react-router-dom";
import cntimage from '../assets/servicecnt.png';

// Service data remains unchanged
const services = [
  {
    id: 1,
    heading: "Customized Solutions Development",
    title: "Customized Solutions for Your Business",
    description: [
      "Building custom software involves creating applications specifically designed to address the unique needs of your business. Unlike generic, off-the-shelf software, custom solutions are tailored to solve specific operational challenges efficiently and effectively.",
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Greater Adaptability and Growth Potential",
        description: [
          "Custom software can grow alongside your business. These solutions can be updated or expanded with additional features or modules, enabling your system to evolve without the restrictions of pre-packaged software.",
        ],
      },
      {
        title: "Seamless System Integration and Enhanced Efficiency",
        description: [
          "Custom-built software integrates directly with your current systems, streamlining operations and improving overall efficiency. It reduces the risk of errors from system incompatibility.",
        ],
      },
      {
        title: "Advanced Security Measures",
        description: [
          "Gain full control over security measures, implementing specialized protocols to safeguard sensitive business data.",
        ],
      },
      {
        title: "Specialized Support and Ongoing Maintenance",
        description: [
          "Dedicated teams understand your system’s architecture, ensuring quicker troubleshooting, regular updates, and effective maintenance.",
        ],
      },
      {
        title: "Strategic Business Advantage",
        description: [
          "Custom software provides unique functionalities to support specific goals, improve service delivery, and offer a competitive edge.",
        ],
      },
    ],
  },
  {
    id: 2,
    heading: "Mobile App Development",
    title: "Specialized App Development for iOS and Android",
    description: [
      "Building applications for iOS and Android leverages each platform’s features and system performance. Native apps offer faster operation and seamless user experience.",
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Efficient Cross-Platform Development",
        description: [
          "Tools like React Native and Flutter allow a single app to run across different systems, reducing development time and costs.",
        ],
      },
      {
        title: "Intuitive and Engaging User Interfaces",
        description: [
          "Focus on visually appealing and user-friendly interfaces to enhance engagement and retention.",
        ],
      },
      {
        title: "Optimized Speed and Resource Management",
        description: [
          "Apps deliver quick load times and efficient use of device resources for consistent performance across all devices.",
        ],
      },
      {
        title: "Robust Data Security Measures",
        description: [
          "Integrate encryption, secure API connections, and regular updates to protect sensitive user data.",
        ],
      },
    ],
  },
  {
    id: 3,
    heading: "Web Application Development",
    title: "Adaptable and Scalable",
    description: [
      "Web apps can scale to accommodate more users and data. Their flexibility makes them ideal for businesses expanding online presence.",
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Universal Compatibility",
        description: [
          "Web applications work smoothly on all modern browsers, ensuring a consistent experience across devices.",
        ],
      },
      {
        title: "Responsive Design",
        description: [
          "Automatically adjusts layout to fit different screens, improving accessibility and user experience.",
        ],
      },
      {
        title: "Customizable and Integrated",
        description: [
          "Tailor web applications with custom features, dashboards, and integrations with other services like CRM or ERP.",
        ],
      },
      {
        title: "Strong Security",
        description: [
          "Includes SSL encryption, authentication, and protection against threats like SQL injection and XSS.",
        ],
      },
      {
        title: "Simplified Maintenance",
        description: [
          "Updates are deployed directly to the server, giving users access to the latest features without downloading new versions.",
        ],
      },
    ],
  },
  {
    id: 4,
    heading: "Enterprise Software Development",
    title: "Enterprise Resource Planning (ERP)",
    description: [
      "ERP solutions consolidate key business functions into a unified system, enhancing operational efficiency and supporting informed decision-making.",
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Customer Relationship Management (CRM)",
        description: [
          "Streamline customer interactions and improve relationship management with integrated CRM modules.",
        ],
      },
      {
        title: "Supply Chain Management (SCM)",
        description: [
          "Optimize the supply chain workflow, improve inventory management, and enhance collaboration with suppliers.",
        ],
      },
    ],
  },
  {
    id: 5,
    heading: "SaaS Development",
    title: "Software as a Service (SaaS)",
    description: [
      "SaaS allows users to run applications via the internet, eliminating local installation. It’s commonly used for CRM, ERP, and productivity tools.",
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Pay-As-You-Go Subscription Model",
        description: [
          "Subscription-based pricing provides predictable costs and flexibility to adjust service usage.",
        ],
      },
      {
        title: "Seamless Maintenance and Updates",
        description: [
          "Provider manages updates and maintenance, ensuring users always experience the latest features and security improvements.",
        ],
      },
    ],
  },
];

const Software = () => {
  const [active, setActive] = useState(1);
  const activeService = services.find((s) => s.id === active);

  // Helper function to render a single set of tabs
  const renderTabs = () => (
    services.map((service) => (
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
    ))
  );

  return (
    <>
      {/* Banner section remains unchanged */}
      <div className="banner">
        <h1>Software Development Services</h1>
        <p>
          Elevate your business with cutting-edge software solutions by Suprases.
          Our expertise enables scalable, secure, and high-performance software to drive innovation.
        </p>
        <Link to="/contact">
          <button className="btn-expert">Talk to Our Experts &rarr;</button>
        </Link>
      </div>

      <div className="services-container container">
        {/* Services Content remains unchanged */}
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

        <div className="tabs-wrapper"> 
          <div className="services-tabs">
            {renderTabs()}
            {renderTabs()}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Software;