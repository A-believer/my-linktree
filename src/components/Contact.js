import React from "react";
// import './index.css';
import Footer from "./Footer";

export default function Contact() {

    return (
        <main className="flex flex-col w-full max-w-3xl px-5 py-6 
            mx-auto text-gray-900 font-inter gap-y-5">
        
            <section id="footer" className="w-full">
                <Footer />
            </section>
        </main>
    );
}