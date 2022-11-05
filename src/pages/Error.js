import React from "react";

export default function Error() {
  return (
    <main
      className="w-full h-full flex flex-col gap-24 py-24 justify-center 
    relative mx-28 font-inter"
    >
      <div className="w-180 mb-6">
        <p
          className="w-full text-md font-semibold text-blue-600 leading-tight 
         "
        >
          404 error
        </p>
        <p
          className="w-full text-gray-900 text-6xl font-semibold leading-tight
                            tracking-tight"
        >
          We can't find that page
        </p>
        <p
          className="w-full text-gray-600 text-base font-normal leading-tight
                            tracking-tight"
        >
          Sorry, the page you are looking for doesn't exist.
        </p>
      </div>

      <div className="">
        <div>
          <button>
            <img src="./back.jpeg" alt="go back" />
            Go Back
          </button>
        </div>
        <div>
          <button>Take me home</button>
        </div>
      </div>
    </main>
  );
}
