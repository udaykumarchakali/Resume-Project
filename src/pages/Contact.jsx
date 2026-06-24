import { FaTwitter, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import "./detail.css";

const Contact = () => {
  return (
    <div className="contact-card">

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

        <a
          href="https://www.behance.net/bharathkumar437"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehance />
        </a>

        <a
          href="https://medium.com/@json90327"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMediumM />
        </a>
      </div>

      <h1>Want to get in touch?</h1>
      <h2>Drop me a line</h2>

      <form className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" />

        <label>Message</label>
        <textarea
          rows="5"
          placeholder="Write your message here..."
        ></textarea>

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            alert("Message Sent Successfully!");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;