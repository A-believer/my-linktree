import React, { useState, useEffect } from "react";
// import Footer from "../components/Footer";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(valid(formEntry));
    setIsSubmit(true);
  };

  return (
    <main
      className="flex flex-col w-full max-w-3xl px-5 mx-auto 
      font-inter gap-y-5"
    >
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>{formFilled}</div>
      ) : (
        <pre>{formRequired}</pre>
      )}
      <div className="py-12">
        <h1
          className="mb-5 text-4xl font-semibold leading-10 
          text-gray-900"
        >
          Contact Me
        </h1>
        <p className="text-lg text-gray-600 md:text-xl">
          Hi there, contact me to ask about anything you have in mind.
        </p>
      </div>
      <form
        className="flex flex-col text-gray-700 rounded 
        shadow-none gap-y-4"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <label
            id="first_name"
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
            <input
              type="type"
              name="first_name"
              id="first_name"
              value={formEntry.first_name}
              className={`w-full px-3 py-2 mt-2 border rounded-md
              appearance-none focus:outline-none focus:shadow-ring${
                formErrors.first_name
                  ? "focus:shadow-error border-[#F89687]"
                  : "focus:shadow-ring"
              }`}
              placeholder="Enter your first name"
              onChange={handleChange}
            />
            {formErrors.first_name && (
              <p className="text-[#F89687] pl-3">
                Your 'first name' is required!
              </p>
            )}
          </label>

          <label
            className="block text-sm font-medium text-gray-700"
            id="last_name"
            htmlFor="last_name"
          >
            Last Name
            <input
              type="type"
              name="last_name"
              id="last_name"
              value={formEntry.last_name}
              className={`w-full px-3 py-2 mt-2 border rounded-md
              outline-none appearance-none focus:shadow-ring ${
                formErrors.last_name
                  ? "focus:shadow-error border-[#F89687]"
                  : "focus:shadow-ring"
              }`}
              placeholder="Enter your last name"
              onChange={handleChange}
            />
            {formErrors.last_name && (
              <p className="text-[#F89687] pl-3">
                Your 'last name' is required!
              </p>
            )}
          </label>
        </div>

        <div id="email">
          <label
            className="block text-sm font-medium text-gray-700"
            id="email"
            htmlFor="email"
          >
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={formEntry.email}
              className={`w-full px-3 py-2 mt-2 border rounded-md
              outline-none appearance-none focus:shadow-ring  ${
                formErrors.email
                  ? "focus:shadow-error border-[#F89687]"
                  : "focus:shadow-ring"
              }`}
              placeholder="yourname@email.com"
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className="text-[#F89687] pl-3">Your email is required!</p>
            )}
          </label>
        </div>

        <div id="message">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="message"
          >
            Message
            <textarea
              name="message"
              id="message"
              value={formEntry.message}
              class={`w-full h-32 px-3 py-2 mt-2 border 
            rounded-md outline-none appearance-none 
            ${
              formErrors.message
                ? "focus:shadow-error border-[#F89687]"
                : "focus:shadow-ring"
            }`}
              placeholder="Send me a message and I'll reply as soon as possible..."
              onChange={handleChange}
            />
            {formErrors.message && (
              <p className="text-[#F89687] pl-3">Please enter a message!</p>
            )}
          </label>
        </div>

        <div className="flex items-center mb-4" id="agreement">
          <input
            name="agreement"
            id="agreement"
            value={formEntry.agreement}
            type="checkbox"
            onChange={handleChange}
            class={`w-4 h-4 text-blue-600 bg-gray-100 rounded 
            border-gray-300  hover:bg-blue-300
            hover: shadow-ring-blue-500  ${
              formErrors.agreement
                ? "focus:shadow-error border-[#F89687]"
                : "focus:shadow-ring"
            }`}
          />
          <label
            className="ml-4 text-sm 
            font-medium text-gray-500"
            htmlFor="agreement"
          >
            You agree to providing your data to {name} who may contact you
          </label>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            id="btn__submit"
            className="w-full text-center text-white py-3 px-5 bg-blue-600 border border-blue-600 
                rounded-lg font-semibold hover:bg-blue-700 focus:border-blue-400"
          >
            Send message
          </button>
        </div>
      </form>
      {/* <section id="footer" className="w-full">
        <hr />
        <Footer />
      </section> */}
    </main>
  );
}
