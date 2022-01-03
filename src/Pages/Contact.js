import React from "react";
import "../styles/Contact.css";
import bkImg from "../assets/pizzaLeft.jpg";
import { useRef } from "react";

function Contact() {
  let inputName = useRef();
  let inputEmail = useRef();
  let inputMsg = useRef();

  function submitHandller(event) {
    event.preventDefault();
    let nameEnterd = inputName.current.value;
    let EmailEnterd = inputEmail.current.value;
    let MsgEnterd = inputMsg.current.value;

    console.log(nameEnterd, EmailEnterd, MsgEnterd);
  }

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${bkImg})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact</h1>
        <form onSubmit={submitHandller}>
          <label>Name:</label>
          <input
            type="text"
            required
            placeholder="full Name"
            ref={inputName}
          ></input>

          <label>Email:</label>
          <input
            type="email"
            required
            placeholder="Mail@Example.com"
            ref={inputEmail}
          ></input>

          <textarea
            row="2"
            required
            placeholder="Your Msg ....."
            ref={inputMsg}
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
