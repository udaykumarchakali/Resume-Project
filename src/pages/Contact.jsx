import { useState } from "react";
import { FaTwitter, FaLinkedinIn  } from "react-icons/fa";
 import "./detail.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-card">

      {/* Social Icons */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/shopy-product-36222a419/?isSelfProfile=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://x.com/BharathKum46104"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
 

        
      </div>

      <h1>Want to get in touch?</h1>
      <h2>Drop me a line</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Message</label>
        <textarea
          rows="5"
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">
          Submit
        </button>
      </form>

    </div>
  );
};

export default Contact;