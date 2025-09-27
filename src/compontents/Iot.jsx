import React, { useState } from "react";
import "./css/Service_page.css";
import { Link } from "react-router-dom";
import cntimage from '../assets/servicecnt.png';

const services = [
  {
    id: 1,
    heading: "IoT Solutions Development",
    title: "Custom IoT Solutions",
    description: [
      "We design and implement IoT systems that connect devices, sensors, and applications to deliver real-time data, automation, and analytics for your business."
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Sensor Integration",
        description: [
          "Seamlessly integrate various sensors to collect data from the environment, machinery, or consumer devices."
        ]
      },
      {
        title: "Data Analytics & Visualization",
        description: [
          "Process and analyze IoT data to generate actionable insights and visualize trends in real-time dashboards."
        ]
      },
      {
        title: "Real-Time Monitoring",
        description: [
          "Monitor devices and processes remotely with instant notifications, alerts, and automated control."
        ]
      },
    ]
  },
  {
    id: 2,
    heading: "Industrial IoT",
    title: "IoT for Smart Factories",
    description: [
      "Implement IoT to optimize industrial operations, reduce downtime, and improve productivity through connected machinery and predictive maintenance."
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Predictive Maintenance",
        description: [
          "Use sensor data to predict failures and schedule maintenance proactively, reducing operational downtime."
        ]
      },
      {
        title: "Automation & Control",
        description: [
          "Automate industrial processes using IoT-enabled controllers for efficiency and precision."
        ]
      },
      {
        title: "Energy & Resource Optimization",
        description: [
          "Monitor and optimize energy consumption to reduce costs and improve sustainability."
        ]
      },
    ]
  },
  {
    id: 3,
    heading: "Smart Home & Consumer IoT",
    title: "Connected Devices for Daily Life",
    description: [
      "Develop smart home solutions, wearables, and consumer electronics that enhance convenience, safety, and energy efficiency."
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Home Automation",
        description: [
          "Control lighting, HVAC, security, and appliances remotely through mobile apps and voice assistants."
        ]
      },
      {
        title: "Wearables & Health Monitoring",
        description: [
          "IoT devices track health metrics, activity levels, and vital signs for personalized insights and alerts."
        ]
      },
      {
        title: "Consumer Data Security",
        description: [
          "Protect personal data with secure IoT protocols, encryption, and user authentication."
        ]
      },
    ]
  },
  {
    id: 4,
    heading: "IoT Cloud & Connectivity",
    title: "Seamless Device Communication",
    description: [
      "Enable smooth device-to-cloud communication for centralized management, monitoring, and analytics."
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Cloud Integration",
        description: [
          "Connect devices to cloud platforms for real-time data collection, storage, and processing."
        ]
      },
      {
        title: "Remote Management",
        description: [
          "Manage, update, and troubleshoot devices remotely without the need for physical access."
        ]
      },
      {
        title: "Secure Communication Protocols",
        description: [
          "Use MQTT, HTTPS, and other protocols to ensure reliable and secure data transmission."
        ]
      },
    ]
  },
  {
    id: 5,
    heading: "IoT Analytics & Insights",
    title: "Actionable Insights from IoT Data",
    description: [
      "Transform raw IoT data into actionable business insights with predictive analytics and visualization tools."
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Predictive Analytics",
        description: [
          "Analyze historical data to predict trends, equipment failures, and user behavior patterns."
        ]
      },
      {
        title: "Real-Time Dashboards",
        description: [
          "Visualize device data in interactive dashboards for quick decision-making."
        ]
      },
      {
        title: "Optimization Recommendations",
        description: [
          "Receive recommendations to optimize processes, reduce costs, and enhance efficiency."
        ]
      },
    ]
  },
];

const Iot = () => {
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
        <h1>IoT (Internet of Things) Services</h1>
        <p>
          Transform your business with intelligent IoT solutions by Suprases. 
          Connect devices, gather data, and automate processes for smarter operations.
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

export default Iot;