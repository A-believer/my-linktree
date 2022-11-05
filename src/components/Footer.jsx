import React from "react";

export default function Footer() {
  return (
    <footer
      className="flex flex-col py-1  pt-8 items-start w-full text-sm text-gray-500  
    border-t border-gray-600 sm:flex-row sm:justify-between 
    sm:items-center gap-y-6"
    >
      <img src="zuri_logo.png" alt="logo" />
      <p>HNG Internship 9 Frontend Task</p>
      <img src="I4G.png" alt="I4G logo" />
    </footer>
  );
}
