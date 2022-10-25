import React from "react";

const Faq = () => {
  return (
    <div className="w-9/12 mx-auto">
      <h2 className="text-3xl my-2">What is an FAQ page?</h2>
      <p className="m-2">
        An FAQ (Frequently Asked Questions) page is a key part of a knowledge
        base because it addresses the most common questions customers have and
        is useful to customers at all stages of the customer journey. FAQs start
        with a question and then answer it concisely. Within a knowledge base
        template, FAQs can function as their own articles (e.g., “How do I set
        up a password?”) or be incorporated into a longer series (e.g., “How to
        get started with your account”). Outside of the help center, a chatbot
        can also provide support through FAQs.
      </p>
      <h3 className="text-2xl">How to create an FAQ page?</h3>
      <p className="m-2">
        If you want to make an FAQ section that resonates with your customers,
        don’t just slap some ordinary questions and answers on a site page.
        Carefully think about what questions to include, consider who will
        answer (and how), and offer next-step solutions for when FAQs aren’t
        enough.
      </p>
      <p className="font-bold my-4">Tips for writing a good FAQ page</p>
      <ol className="list-decimal ml-8 my-4">
        <li>Use data to pick the right questions</li>
        <li>Form clear criteria around responding</li>
        <li>Offer multiple solutions</li>
        <li>Track your progress</li>
        <li>Make your FAQ page easy to find</li>
      </ol>
      <h3 className="text-2xl">Use data to pick the right questions</h3>
      <p className="m-2">
        To really meet your customers where they are, harness your CRM data to
        discover the most common questions across all channels and see how
        support reps categorize them. Ask your reps to keep logs of unusually
        helpful solutions they’ve shared with customers while they’re on support
        calls, too. If the questions to these answers are straightforward
        enough, add them to the FAQ page. Another way to figure out what
        questions to answer is to have non-native users pilot your site and
        products. Then, ask them if they found any aspects confusing. This gives
        you the “outsider” perspective you may not be able to find with your
        deeper knowledge of your brand.
      </p>
    </div>
  );
};

export default Faq;
