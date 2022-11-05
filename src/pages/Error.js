import React from "react";

export default function Error() {
  return (
    <main>
      <div>
        <p>404 error</p>
        <h1>We can't find that page</h1>
        <p>Sorry, the page you are looking for doesn't exist.</p>
      </div>
      <div>
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
