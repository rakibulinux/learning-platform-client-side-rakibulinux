import React from "react";

const Blog = () => {
  //   4.1 What is cors?

  // 4.2 Why are you using firebase? What other options do you have to implement authentication?

  // 4.3 How does the private route work?

  // 4.4 What is Node? How does Node work?

  return (
    <div className="w-9/12 mx-auto">
      <h2 className="text-3xl my-2">What is cors?</h2>
      <p>
        In this section, we will explain what cross-origin resource sharing
        (CORS) is, describe some common examples of cross-origin resource
        sharing based attacks, and discuss how to protect against these attacks.
        This topic was written in collaboration with PortSwigger Research, who
        popularized this attack class with the presentation Exploiting CORS
        misconfigurations for Bitcoins and bounties. What is CORS (cross-origin
        resource sharing)? Cross-origin resource sharing (CORS) is a browser
        mechanism which enables controlled access to resources located outside
        of a given domain. It extends and adds flexibility to the same-origin
        policy (SOP). However, it also provides potential for cross-domain
        attacks, if a website's CORS policy is poorly configured and
        implemented. CORS is not a protection against cross-origin attacks such
        as cross-site request forgery (CSRF).
      </p>
      <h2 className="text-2xl my-2">Why are you using firebase?</h2>
      <p className="my-2">
        Firebase helps you develop high-quality apps, grow your user base, and
        earn more money. Each feature works independently, and they work even
        better together.
      </p>
      <h3 className="text-2xl my-2">
        What other options do you have to implement authentication?
      </h3>
      <p className="my-2">
        Auth0, MongoDB, Passport, Okta, and Firebase are the most popular
        alternatives and competitors to Firebase Authentication.
      </p>
      <h2 className="text-2xl my-2">How does the private route work?</h2>
      <p className="my-2">
        The private route component is similar to the public route, the only
        change is that redirect URL and authenticate condition. If the user is
        not authenticated he will be redirected to the login page and the user
        can only access the authenticated routes If he is authenticated (Logged
        in).
      </p>
      <h2 className="text-2xl my-2">What is Node?</h2>
      <p className="my-2">
        Node.js is an open-source backend javascript runtime environment. It is
        a used as backend service where javascript works on the server-side of
        the application. This way javascript is used on both frontend and
        backend. Node.js runs on chrome v8 engine which converts javascript code
        into machine code, it is highly scalable, lightweight, fast, and
        data-intensive.
      </p>

      <h2 className="text-2xl my-2">How does Node work?</h2>
      <p className="my-2">
        Node.js accepts the request from the clients and sends the response,
        while working with the request node.js handles them with a single
        thread. To operate I/O operations or requests node.js use the concept of
        threads. Thread is a sequence of instructions that the server needs to
        perform. It runs parallel on the server to provide the information to
        multiple clients. Node.js is an event loop single-threaded language. It
        can handle concurrent requests with a single thread without blocking it
        for one request.
      </p>
    </div>
  );
};

export default Blog;
