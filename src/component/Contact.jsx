import React from "react";
import "../styles.css";
import Call from "./call";

function Contact() {
  return (
    <div id="contact">
      <div className="Contact">
        <div className="contactdetail">
          <h2>Our Contact Us</h2>
          <h1>Easy to contact us</h1>
          <p>
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </p>
          <div className="callformat">
            <Call
              icon="fa-solid fa-phone"
              title="Call"
              ph="022 187 556 65"
              btn="call now"
            />
            <Call
              icon="fa-brands fa-rocketchat"
              title="Chat"
              ph="022 187 556 65"
              btn="chat now"
            />
            <Call
              icon="fa-solid fa-video"
              title="Video"
              ph="022 187 556 65"
              btn="Video now"
            />
            <Call
              icon="fa-solid fa-comment-dots"
              title="Message"
              ph="022 187 556 65"
              btn="Message now"
            />
          </div>
        </div>
        <div className="contactImage">
          <img
            src="https://images.unsplash.com/photo-1554435493-93422e8220c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
