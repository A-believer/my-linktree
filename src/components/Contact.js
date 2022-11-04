import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import "../index.css";

export default function Contact() {
  const name = "David";
  const formFilled = () => {
    alert("Thank you. \nWe will be in touch with you! ");
  };
  const formRequired = () => {
    alert("We need your complete Information!");
  };
  const initialEntry = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    agreement: false,
  };

  const [formEntry, setFormEntry] = useState(initialEntry);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormEntry({ ...formEntry, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(valid(formEntry));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formEntry);
    }
  }, [formEntry, formErrors, isSubmit]);

  const valid = (entry) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!entry.first_name) {
      errors.first_name = "please type in your first name!";
    }
    if (!entry.last_name) {
      errors.last_name = "please type in your last name!";
    }
    if (!entry.email) {
      errors.email = "your email address is required!";
    } else if (!regex.test(entry.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!entry.message) {
      errors.message = "please enter a message!";
    }
    if (!entry.agreement) {
      errors.agreement = "please check this box!";
    }
    return errors;
  };

  return (
    <article className="container mx-auto">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>{formFilled}</div>
      ) : (
        <pre>{formRequired}</pre>
      )}

      <section id="form" className="mx-auto">
        <form className="container mx-auto" onSubmit={handleSubmit}>
          <div>
            <h1 className="">Contact Me</h1>
            <p>Hi there, contact me to ask about anything you have in mind.</p>
          </div>
          <div id="first_name" className="">
            <label id="first_name" for="firstName">
              First Name{" "}
            </label>
            <input
              type="type"
              name="first_name"
              id="first_name"
              value={formEntry.first_name}
              class=""
              placeholder="Enter your first name"
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.first_name}</p>
          <div id="last_name" className="">
            <label id="last_name" for="last_name">
              Last Name{" "}
            </label>
            <input
              type="type"
              name="last_name"
              id="last_name"
              value={formEntry.last_name}
              class=""
              placeholder="Enter your last name"
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.last_name}</p>
          <div id="email">
            <label id="email" for="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formEntry.email}
              class=""
              placeholder="yourname@email.com"
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div id="message">
            <p>Message</p>
            <textarea
              name="message"
              id="message"
              value={formEntry.message}
              class=""
              placeholder="Send me a message and I'll reply as soon 
                            as possible..."
              onChange={handleChange}
            ></textarea>
          </div>
          <p>{formErrors.message}</p>
          <div id="agreement">
            <label>
              <input
                name="agreement"
                id="agreement"
                value={formEntry.agreement}
                type="checkbox"
                onChange={handleChange}
                class=""
              />
              You agree to providing your data to {name} who may contact you
            </label>
          </div>
          <p>{formErrors.agreement}</p>
          <div className="">
            <button
              type="submit"
              id="btn__submit"
              className="w-full text-center text-white py-3 px-5 bg-blue-600 border border-blue-600 
                rounded-lg font-semibold hover:bg-blue-300 focus:border-blue-400"
            >
              Send message
            </button>
          </div>
        </form>
      </section>

      <section id="footer" className="w-full">
        <hr />
        <Footer />
      </section>
    </article>
  );
}
