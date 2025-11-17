import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  subtitle: string;
  faqs: FAQItem[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
        >
          <button
            className="w-full px-6 py-4 text-left bg-gray-50 dark:bg-[#1A2332] hover:bg-gray-100 dark:hover:bg-[#232B3E] transition-colors flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-semibold text-[#0B1437] dark:text-white">
              {faq.question}
            </span>
            <span className="text-[#009FFF] text-xl font-bold">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-white dark:bg-[#101624] border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
