import React, { useState } from "react";
import "./css/Service_page.css";
import { Link } from "react-router-dom";
import maintImage from '../assets/servicecnt.png'; // You can replace with a maintenance-specific image

const services = [
  {
    id: 1,
    heading: "Software Maintenance",
    title: "Comprehensive Software Maintenance",
    description: [
      "We ensure that your software stays up-to-date, secure, and optimized for performance. Our maintenance services prevent downtime, improve stability, and extend the lifecycle of your applications.",
    ],
    image: maintImage,
    extraSections: [
      {
        title: "Bug Fixing & Issue Resolution",
        description: [
          "Quickly identify and resolve software issues to minimize disruption and maintain smooth operations."
        ],
      },
      {
        title: "Performance Optimization",
        description: [
          "Regularly optimize your applications to ensure faster response times, efficient resource usage, and better scalability."
        ],
      },
      {
        title: "Security Updates & Patch Management",
        description: [
          "Keep your applications secure with the latest patches and proactive measures to prevent vulnerabilities and cyber threats."
        ],
      },
      {
        title: "Feature Enhancements",
        description: [
          "Enhance existing functionalities or add new features based on evolving business needs and user feedback."
        ],
      },
      {
        title: "Monitoring & Support",
        description: [
          "24/7 monitoring and technical support to quickly address issues and ensure continuous system availability."
        ],
      },
    ],
  },
  {
    id: 2,
    heading: "Infrastructure Support",
    title: "IT & System Support Services",
    description: [
      "We provide support for your IT infrastructure, including servers, networks, and cloud services, ensuring reliable performance and minimal downtime."
    ],
    image: maintImage,
    extraSections: [
      {
        title: "Server & Network Management",
        description: [
          "Monitor and maintain servers and network systems for consistent availability and performance."
        ],
      },
      {
        title: "Backup & Disaster Recovery",
        description: [
          "Implement regular backup strategies and disaster recovery plans to protect critical data and minimize risk."
        ],
      },
      {
        title: "Cloud & Hosting Support",
        description: [
          "Manage cloud deployments, optimize costs, and ensure seamless access to hosted applications."
        ],
      },
    ],
  },
  {
    id: 3,
    heading: "Application Support",
    title: "Ongoing Application Support",
    description: [
      "Our support services help your team handle end-user queries, troubleshoot issues, and maintain smooth application operations."
    ],
    image: maintImage,
    extraSections: [
      {
        title: "User Support & Troubleshooting",
        description: [
          "Provide timely assistance to end-users to resolve software-related problems efficiently."
        ],
      },
      {
        title: "System Health Monitoring",
        description: [
          "Monitor application performance, uptime, and error logs to proactively detect issues before they escalate."
        ],
      },
      {
        title: "Documentation & Knowledge Management",
        description: [
          "Maintain updated documentation and knowledge resources for smooth onboarding and easier issue resolution."
        ],
      },
    ],
  },
  {
    id: 4,
    heading: "Preventive Maintenance",
    title: "Proactive Preventive Measures",
    description: [
      "Preventive maintenance ensures that your software and systems remain reliable, reducing unplanned downtime and long-term operational costs."
    ],
    image: maintImage,
    extraSections: [
      {
        title: "Regular System Audits",
        description: [
          "Conduct periodic audits to identify potential weaknesses and apply preventive measures."
        ],
      },
      {
        title: "Performance Reviews",
        description: [
          "Analyze system performance regularly to anticipate and prevent bottlenecks or failures."
        ],
      },
      {
        title: "Compliance & Updates",
        description: [
          "Ensure software adheres to compliance standards and is updated to meet industry regulations."
        ],
      },
    ],
  },
  {
    id: 5,
    heading: "Emergency Support",
    title: "Critical Issue Resolution",
    description: [
      "Our emergency support services handle urgent technical issues, ensuring rapid response and minimal impact on business operations."
    ],
    image: maintImage,
    extraSections: [
      {
        title: "24/7 On-Demand Support",
        description: [
          "Round-the-clock availability to resolve critical issues as soon as they arise."
        ],
      },
      {
        title: "Rapid Incident Response",
        description: [
          "Quickly assess and mitigate problems to restore system functionality with minimal downtime."
        ],
      },
      {
        title: "Root Cause Analysis",
        description: [
          "Investigate incidents thoroughly to prevent future occurrences and improve system resilience."
        ],
      },
    ],
  },
];

const Maintance = () => {
  const [active, setActive] = useState(1);
  const activeService = services.find((s) => s.id === active);

  // Helper function to render a single set of tabs
  const renderTabs = (keySuffix) => (
    services.map((service) => (
      <div
        // IMPORTANT: Ensure keys are unique across all rendered elements, especially the duplicated set
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
        <h1>Maintenance & Support Services</h1>
        <p>
          Ensure your software and systems remain reliable, secure, and optimized with our comprehensive maintenance and support solutions.
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

export default Maintance;