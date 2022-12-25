import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div>
      <section class="text-gray-700">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Frequently Asked Question
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about how our business works and what
              can do for you.
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How Long is this site live?
                </summary>

                <span>
                  We are running this site since 2022. Till we are running this
                  site successfully.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                  Can I upload anything I want on this site?
                </summary>

                <span>
                  Still, we are working on this product. But now you can upload
                  small files to our site.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How can I migrate to another site?
                </summary>

                <span>
                  You can ask to get help with migration. We have tons of
                  experts to help with regarding migration.
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  Can I cancel my suscription anytime?
                </summary>

                <span class="px-4 py-2">
                  Yes, You can cancel your subscription anytime when you think
                  it's not good for you.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  Will I get lifetime access to this course?
                </summary>

                <span class="px-4 py-2">
                  Yes, you will get lifetime access to any courses if you buy
                  from our site.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How can I communicate with you?
                </summary>

                <span class="px-4 py-2">
                  You can communicate with us via email, phone and our live
                  support.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
