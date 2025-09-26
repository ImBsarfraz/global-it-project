import React, { useState } from "react";
import "./css/Service_page.css";
import { Link } from "react-router-dom";
import cntimage from '../assets/servicecnt.png';

const services = [
  {
    id: 1,
    heading: "Embedded Systems Design",
    title: "Custom Embedded Solutions",
    description: [
      "We design and develop embedded systems tailored for specific hardware and application requirements, ensuring high efficiency, reliability, and performance."
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Hardware-Software Optimization",
        description: [
          "Seamless integration of hardware and software ensures maximum performance, low power consumption, and efficient operation for your embedded solutions."
        ]
      },
      {
        title: "Real-Time Processing",
        description: [
          "Our systems support real-time operation for critical applications like automation, robotics, and industrial controls."
        ]
      },
      {
        title: "Custom Firmware Development",
        description: [
          "We provide tailored firmware for microcontrollers and embedded devices to deliver precise control and advanced functionality."
        ]
      },
    ]
  },
  {
    id: 2,
    heading: "IoT Integration",
    title: "Smart Connected Devices",
    description: [
      "We develop IoT solutions that connect embedded devices to the cloud, enabling remote monitoring, automation, and data-driven insights."
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Sensor & Actuator Integration",
        description: [
          "Embedded devices are integrated with sensors and actuators for data collection, control, and real-time monitoring."
        ]
      },
      {
        title: "Cloud Connectivity",
        description: [
          "Devices communicate with cloud platforms for data analytics, alerts, and remote management."
        ]
      },
      {
        title: "Security & Data Protection",
        description: [
          "We implement strong security measures at hardware, firmware, and cloud levels to protect your devices and data."
        ]
      },
    ]
  },
  {
    id: 3,
    heading: "Industrial Automation",
    title: "Embedded Systems for Automation",
    description: [
      "Embedded systems play a key role in automating industrial processes, improving efficiency, and reducing human intervention."
    ],
    image: cntimage,
    extraSections: [
      {
        title: "PLC & Controller Integration",
        description: [
          "We integrate embedded devices with PLCs and controllers for precise process automation."
        ]
      },
      {
        title: "Predictive Maintenance",
        description: [
          "IoT-enabled embedded systems predict failures and schedule maintenance proactively to reduce downtime."
        ]
      },
      {
        title: "Real-Time Monitoring",
        description: [
          "Embedded systems monitor operations in real time, providing actionable insights to improve efficiency."
        ]
      },
    ]
  },
  {
    id: 4,
    heading: "Wearable & Consumer Devices",
    title: "Embedded Solutions for Next-Gen Devices",
    description: [
      "We develop firmware and software for wearable devices, smart gadgets, and consumer electronics."
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Low-Power Design",
        description: [
          "Optimized hardware and firmware to extend battery life and reduce energy consumption."
        ]
      },
      {
        title: "Mobile & Cloud Connectivity",
        description: [
          "Embedded devices seamlessly interact with mobile apps and cloud platforms for enhanced user experience."
        ]
      },
      {
        title: "User-Centric Design",
        description: [
          "Our embedded solutions focus on performance, usability, and real-time feedback for consumer satisfaction."
        ]
      },
    ]
  },
  {
    id: 5,
    heading: "Firmware Development",
    title: "Robust Firmware for Embedded Devices",
    description: [
      "We create reliable firmware that drives embedded devices efficiently while supporting scalability and maintenance."
    ],
    image: cntimage,
    extraSections: [
      {
        title: "Device Control & Optimization",
        description: [
          "Direct control over microcontrollers and peripherals ensures maximum performance and reliability."
        ]
      },
      {
        title: "Modular & Scalable Code",
        description: [
          "Firmware is designed modularly to simplify future updates and feature expansion."
        ]
      },
      {
        title: "Testing & Validation",
        description: [
          "We perform rigorous testing under real-world conditions to guarantee stability, safety, and compliance."
        ]
      },
    ]
  },
];

const Embedded = () => {
  const [active, setActive] = useState(1);
  const activeService = services.find((s) => s.id === active);

  return (
    <>
      <div className="banner">
        <h1>Embedded Systems & IoT Services</h1>
        <p>
          Transform your hardware solutions with Suprases Embedded Systems and IoT expertise. 
          We deliver intelligent, connected, and high-performance embedded solutions.
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

export default Embedded;
