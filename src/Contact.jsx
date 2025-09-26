import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Please fill all required fields!");
      return;
    }

    const emailData = {
      name: form.name,
      email: form.email,
      message: form.message,
      title: "New Contact Request",
    };

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      alert("Email sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send contact request. Please check the console for details.");
    }
  };


  return (
    <div className="enquiry-box">
      <h2>Contact Us</h2>
      <p>Fill in your details and we will get back to you shortly.</p>
      <form ref={formRef} onSubmit={sendEmail} className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;