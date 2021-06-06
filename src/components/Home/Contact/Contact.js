import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  return (
    <div className="contact-area pt-2 text-center" id="contact">
      <div className="container p-5 ">
        <h1 className="text-capitalize text-white">
          Feel free to Contact with us
        </h1>
        <form className="pt-4" >
          <div className="row pt-2 m-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                name="name"
                placeholder="Name"
                id=""
                className="form-control"
              />
            </div>
            <div className="col-8 form-group mx-auto pt-2">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                id=""
                className="form-control"
              />
            </div>
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                id=""
                className="form-control mt-2"
              />
            </div>
            <div className="col-8 form-group mx-auto">
              <textarea
                cols="30"
                rows="8"
                name="message"
                placeholder="Your Message"
                id=""
                className="form-control mt-2"
              />
            </div>
            <div className="col-8 form-group mx-auto">
              <input
                type="submit"
                id=""
                className="btn-contact mt-2 mb-2"
                value="Send Message"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
