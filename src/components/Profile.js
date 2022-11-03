import React, { useState } from "react";

export default function Profile() {
  const [hover, setHover] = useState(false);
  return (
    <header className="relative flex flex-col items-center 
    w-full max-w-xl mx-auto text-xl font-bold gap-y-6">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative"
      >
        <img id="profile__img" src="profile.jpeg" alt="davedev"
          className="object-center w-20 h-auto rounded-full " />
        {hover && (
          <div className="absolute top-0 left-0 w-full h-full bg-[#344054] 
            bg-opacity-75 rounded-full flex items-end justify-center pb-1">
            <img src="camera_icon.png" alt="camera icon"
              className="cursor-pointer" />
          </div>
        )}
      </div>

      <a href='https://twitter.com/theDavid_AO' target='_blank'
        rel="noopener noreferrer">
        <p id="twitter">theDavid_AO</p>
      </a>
      <h1 id="slack">davedev</h1>
      <img src="share_button_desktop.png" alt="share button"
        className="hidden sm:block absolute right-0 top-[-10px]" />
      
      <img src="share_button_mobile.png" alt="share_button"
        className="sm:hidden absolute right-0 top-[-10px] block w-7 h-auto" />
    </header>
  );
}