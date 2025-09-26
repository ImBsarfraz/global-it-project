import React from 'react'
import "./Careers.css";
import { Link } from 'react-router-dom';

import career1 from "./assets/career1.png";
import career2 from "./assets/career2.png";

const jobs = [
    {
        title: "Full Stack Mern Developer",
        decription: "We are looking for a highly skilled Full Stack MERN Developer to design, develop, and maintain scalable web applications. The ideal candidate should have strong expertise in MongoDB, Express.js, React.js, and Node.js, along with a passion for building user-friendly and efficient digital solutions.",
        type: "Full-Time",
        experience: "2–4 Years",
        datePost: "Posted Within Past 24 hrs"
    },
    {
        title: "Frontend Developer",
        decription: "We are seeking a talented Frontend Developer to create responsive, user-friendly web interfaces. The ideal candidate should have strong skills in React.js, JavaScript, HTML5, CSS3, and modern UI frameworks. You will collaborate closely with designers and backend developers to deliver seamless digital experiences.",
        type: "Full-Time",
        experience: "1–2 Years",
        datePost: "Posted within past 1 day"
    },
    {
        title: "MEAN Stack Developer",
        decription: "We are looking for a skilled MEAN Stack Developer to design and develop scalable web applications using MongoDB, Express.js, Angular, and Node.js. The ideal candidate should be proficient in building dynamic user interfaces, integrating RESTful APIs, and ensuring high performance across platforms.",
        type: "Full-Time",
        experience: "2–5 Years",
        datePost: "Posted Within Past 1hr"
    },
    {
        title: "Backend Developer",
        decription: "We are seeking an experienced Backend Developer to build and maintain server-side applications and APIs. The ideal candidate should have strong expertise in Node.js, Express.js, databases (MongoDB/MySQL/PostgreSQL), and cloud services. You will be responsible for ensuring scalability, security, and performance of backend systems.",
        type: "Full-Time",
        experience: "2–5 Years",
        datePost: "Posted Just Now"
    },
]

const Careers = () => {
    return (
        <>
            <div className='career-header text-center'>
                <div className="career-header-overlay">
                    <ul>
                        <li><Link to="/" className='nav-link'>Home </Link></li>
                        <li>-</li>
                        <li>Careers</li>
                    </ul>
                </div>
            </div>

            {/* Careers */}

            <div className="conatiner-fluid p-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={career1} alt="career-img" />
                    </div>
                    <div className="col-md-6">
                        <h5 className='text-info'>
                            Careers at Global IT Services -
                        </h5>
                        <h1>
                            Innovation drives us. Together,
                            we can shape the future.
                        </h1>
                        <span className='mt-5'>At GU Datalogic, we empower businesses to grow by
                            building strong customer connections and creating
                            a positive workplace culture. Our mission is to
                            deliver seamless experiences that inspire trust
                            and satisfaction—because when employees thrive,
                            customers stay loyal.
                        </span> <br />
                        <button className='btn btn-lg btn-info text-white mt-5'>
                             <a href="#jobs" className="text-white text-decoration-none">Explore Our Jobs</a>
                        </button>
                    </div>

                    <div className="col-md-6 mt-5">
                        <h5 className='text-info'>
                            Works at Global It Services -
                        </h5>
                        <h1>What We Value at Work</h1>

                        <div className='border border-dark p-3'>
                            <h6>🌍 A Happy Tech Day</h6>
                            <span>
                                On World Tech Day, we celebrate the power of
                                technology to inspire positivity and progress.
                                Just like innovation drives performance, a
                                supportive and inclusive workplace fuels
                                creativity, strengthens collaboration, and boosts
                                productivity—shaping a culture where both people
                                and technology thrive together.
                            </span>
                        </div>
                        <h6 className='mt-5'>
                            ⚡ Agility with Accountability
                        </h6>
                        <span>
                            We adapt quickly to change while staying
                            responsible for our actions. This balance allows us
                            to innovate confidently and deliver results that
                            matter.
                        </span>
                        <h6 className='mt-5'>
                            📚 Be a Lifelong Learner
                        </h6>
                        <span>
                            Growth never stops. We encourage curiosity,
                            continuous learning, and the pursuit of new
                            skills—because evolving together makes us stronger.
                        </span>
                    </div>
                    <div className="col-md-6 mt-5">
                        <img src={career2} alt="career-image" />
                    </div>
                </div>
            </div>

            {/* jobs */}
            <div className="conatiner-fluid p-5" id='jobs'>
                <div className="row">
                    <div className="col-md-12">
                        <h5 className='text-info'>Job Openings -</h5>
                        <h2 className='mt-3'>Explore opportunities</h2>
                    </div>
                    {
                        jobs.map((job) => (
                            <div className="col-md-3 mt-5">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>
                                            {job.title}
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <span>
                                            {
                                                job.decription
                                            }
                                        </span>
                                        <h6 className='mt-4'>
                                            {
                                                job.type
                                            }
                                        </h6>

                                    </div>
                                    <div className="card-footer">
                                        <h6 className='text-success'>
                                            {
                                                job.datePost
                                            }
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Careers