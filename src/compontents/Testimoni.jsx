import React, { useRef, useEffect } from 'react';
import "./css/Testimonial.css";

const testimonials = [
  {
    text: 'Global IT Services delivered an exceptional app that perfectly matched our requirements. Their team combined creativity with technical expertise to create a user-friendly and feature-rich solution. The process was smooth, and their support was outstanding. Highly recommended for app development!',
    title: 'App Development'
  },
  {
    text: 'Global IT Services provided detailed and actionable insights through their data analysis expertise. Their solutions helped us make informed decisions and optimize our business strategy effectively. Highly reliable and result-driven!',
    title: 'Data Analysis'
  },
  {
    text: 'We were impressed by Global IT Services’ commitment to quality and timelines. Their communication and proactive approach helped us feel confident throughout the project.',
    title: 'Software Consulting'
  },
  {
    text: 'Excellent collaboration and support throughout our project lifecycle. Global IT Services truly understands customer needs and delivers on promises.',
    title: 'Business Intelligence'
  }
];

export default function TestimonialSlider() {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      const container = containerRef.current;
      const cardWidth = container.querySelector('.testimonial-card')?.offsetWidth || 300;
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
      }
    }, 4000);
  };

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const cardWidth = container.querySelector('.testimonial-card')?.offsetWidth || 300;
    container.scrollBy({ left: direction === 'left' ? -(cardWidth + 20) : (cardWidth + 20), behavior: 'smooth' });
  };

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => { isDown.current = false; };

  const handleMouseUp = () => { isDown.current = false; };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="testimonial-wrapper container-fluid">
      <div>
        <div className="testimonial-header">
          <h4>Testimonials</h4>
          <h2>The Stories that inspire us everyday</h2>
        </div>
        <div className="testimonial-controls">
          <button onClick={() => handleScroll('left')} className="scroll-button">&#8592;</button>
          <button onClick={() => handleScroll('right')} className="scroll-button">&#8594;</button>
        </div>
      </div>

      <div
        className="testimonial-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote-mark">“</div>
            <p className="testimonial-text">{item.text}</p>
            <div className="testimonial-title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
