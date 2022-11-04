import React from "react";
import Footer from "./Footer";

export default function Contact() {
    const name = "David"


    return (
        <main className="flex flex-col w-full max-w-3xl px-5 py-6 
            mx-auto text-gray-900 font-inter gap-y-5">
            <section id="form" className="w-full">
                <form>
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask about anything you have in mind.</p>
                <div id="first_name">
                    <label id="first_name" for="firstName">First Name:</label>
                    <input
                        type="type"
                        name="first_name"
                        id="first_name"
                        class=""
                        placeholder="Enter your first name"
                        required
                    />
                </div>
                <div id="last_name">
                     <label id="last_name" for="last_name">Last Name:</label>
                    <input
                        type="type"
                        name="last_name"
                        id="last_name"
                        class=""
                        placeholder="Enter your last name"
                        required
                    />
                </div>
                <div id="email">
                    <label id="email" for="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        class=""
                        placeholder="yourname@email.com"
                        required
                    />
                </div>
                <div id="message">
                    <p>Message</p>
                    <textarea
                        id="message"
                        class=""
                        name="message"
                        placeholder="Send me a message and I'll reply as soon 
                        as possible..."
                        required>
                    </textarea>
                </div>
                <div>
                    <label>
                        <input
                            name="prefer"
                            value="front-end-projects"
                            type="checkbox"
                            class="" />
                        You agree to providing your data to {name} who may
                        contact you
                    </label>
                </div>
                <div className="btn__submit">
                    <button type="submit" id="submit" class="submit-button">
                        Submit
                    </button>
                </div>
            </form>
            </section>
            
            <section id="footer" className="w-full">
                <hr/>
                <Footer />
            </section>
        </main>
    );
}