import React from "react";
import Button from "./components/Button";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

export default function App() {
  const links = [
    {
      id: "twitter",
      value: "Twitter Link",
      link: "https://twitter.com/theDavid_AO",
    },
    {
      id: "btn_zuri",
      value: "Zuri Team",
      link: "https://training.zuri.team/",
    },
    {
      id: "books",
      value: "Zuri Books",
      link: "http://books.zuri.team",
    },
    {
      id: "books_python",
      value: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=davdev",
    },
    {
      id: "pitch",
      value: "Background Check for Coders",
      link: "https://pitch.zuri.team",
    },
    {
      id: "books_design",
      value: "Design Books",
      link: "https://books.zuri.team/design-rules",
    }
  ]
  return (
    <main className="flex flex-col w-full max-w-3xl px-5 py-6 mx-auto text-gray-900 font-inter gap-y-5">
      <section id="profile" className="w-full mt-5 sm:mb-5">
        <Profile />
      </section>
      <section id="links" className="flex flex-col w-full gap-y-5">
        {links.map((link) => (
          <Button key={link.id} {...link} />
        ))}
      </section>
      <section id="social-links" className="flex justify-center py-6 gap-x-6">
        <a href="https://hng9.slack.com/messages/C041JU70S5U/team/U0482L1J9FY" target="_blank" rel="noopener noreferrer">
          <img src="./slack.png" alt="slack" />
        </a>
        <a href="https://github.com/A-believer" target="_blank" rel="noopener noreferrer">
          <img src="./github.png" alt="github" />
        </a>
      </section>
      <section id="footer" className="w-full">
        <Footer />
      </section>
    </main>
  );
}