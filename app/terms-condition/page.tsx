import React from "react";
import {
  FaHandshake,
  FaUserCheck,
  FaMoneyBill,
  FaUndo,
  FaExchangeAlt,
  FaFileAlt,
  FaBan,
  FaExclamationTriangle,
  FaEdit,
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function PolicySection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-blue-600 text-2xl">{icon}</span>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="text-gray-700 dark:text-gray-200 text-base pl-2">
        {children}
      </div>
    </section>
  );
}

export default function TermsConditionPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FaFileAlt className="text-blue-600" /> Terms & Condition
      </h1>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-8">
        <p className="mb-6 text-lg font-semibold">FlexoHost – শর্তাবলী</p>
        <p className="mb-6">
          FlexoHost-এ আপনাকে স্বাগতম! আমাদের পরিষেবাগুলি ব্যবহার করে, আপনি
          নিম্নলিখিত শর্তাবলী মেনে চলতে সম্মত হচ্ছেন। এই শর্তাবলী FlexoHost-এর
          পরিষেবাগুলি প্রদানের নিয়মাবলী এবং উভয় পক্ষের দায়িত্ব স্পষ্টভাবে উল্লেখ
          করে।
        </p>
        <p className="mb-6">
          এই শর্তাবলী চুক্তি (TOS)-এর মাধ্যমে, FlexoHost-এর পরিষেবাগুলি (যাকে
          এখানে &quot;পরিষেবা&quot; বলা হবে) ব্যবহারের নিয়মাবলী নির্ধারিত হয়।
          আমাদের পরিষেবা ব্যবহার করার মাধ্যমে, আপনি নিশ্চিত করেন যে আপনার বয়স
          অন্তত ১৮ বছর এবং আপনি এই শর্তাবলী পূর্ণভাবে মেনে চলতে সম্মত। Flex
          Softr যে কোনো সময় এই শর্তাবলী পরিবর্তন করার অধিকার সংরক্ষণ করে, যার
          হালনাগাদ www.flexohost.com ওয়েবসাইটে প্রকাশিত হবে।
        </p>
        <PolicySection
          icon={<FaHandshake />}
          title="১. পরিষেবা প্রদান / 1. Service Delivery"
        >
          <p>
            আমরা আমাদের পরিষেবা যত দ্রুত সম্ভব সরবরাহ করতে প্রতিশ্রুতিবদ্ধ।
            অর্থপ্রদানের পর নিশ্চিতকরণ ইমেইল পাঠানো হবে এবং ক্রয়কৃত পরিষেবার
            অ্যাক্সেস দেওয়া হবে। কিছু প্রযুক্তিগত সমস্যার কারণে দেরি হতে পারে,
            তবে আমরা সর্বোচ্চ ২৪ ঘণ্টার মধ্যে পরিষেবা প্রদানের নিশ্চয়তা দিই।
          </p>
          <p className="mt-2">
            We strive to deliver all services promptly. Once payment is received
            and verified, you will receive an email with access details for the
            purchased service. In some cases, unforeseen technical issues may
            result in delays, but we guarantee service delivery within 24 hours.
          </p>
        </PolicySection>
        <PolicySection
          icon={<FaUserCheck />}
          title="২. অ্যাকাউন্ট সেটআপ এবং যাচাইকরণ / 2. Account Setup and Verification"
        >
          <p>
            নতুন অ্যাকাউন্ট অর্থপ্রদানের পর এবং জালিয়াতি যাচাই করার পর সক্রিয়
            করা হবে। গ্রাহকদের সঠিক যোগাযোগ তথ্য প্রদান করতে হবে, বিশেষত এমন
            একটি ইমেইল যা ক্রয়কৃত ডোমেইনের সাথে যুক্ত নয়। নিরাপত্তার জন্য, Flex
            Softr নতুন অ্যাকাউন্ট তৈরির ৩ দিনের মধ্যে গ্রাহকদের ন্যাশনাল আইডি,
            পাসপোর্ট বা ড্রাইভিং লাইসেন্সের কপি এবং ঠিকানার প্রমাণ চেয়ে নিতে
            পারে।
          </p>
          <p className="mt-2">
            New accounts will be activated after successful payment and fraud
            screening. Customers are required to provide accurate contact
            details, including an email address not linked to the purchased
            domain. For security purposes, FlexoHost may request verification
            documents, including a government-issued ID and proof of address,
            within 3 days of account creation. Failure to comply may result in
            order cancellation or flagged accounts.
          </p>
        </PolicySection>
        <PolicySection
          icon={<FaMoneyBill />}
          title="৩. অর্থপ্রদান / 3. Payments"
        >
          <p>
            FlexoHost-এর সকল পরিষেবা প্রিপেইড এবং প্রযোজ্য কর (ভ্যাট)
            অন্তর্ভুক্ত। অর্থপ্রদানের পদ্ধতিগুলোর মধ্যে রয়েছে বিকাশ, পেপ্যাল,
            ব্যাংক ট্রান্সফার, এবং অফিসে সরাসরি অর্থপ্রদান। সময়মতো অর্থপ্রদান না
            করলে পরিষেবা স্থগিত বা বাতিল হতে পারে।
          </p>
          <ul className="list-disc pl-6 my-2">
            <li>১ম দিন: কোনো ব্যবস্থা নেওয়া হবে না।</li>
            <li>২য় দিন: পরিষেবা স্থগিত করা হবে।</li>
            <li>৭ম দিন: বিলম্ব ফি প্রযোজ্য হবে।</li>
            <li>১০ম দিন: অ্যাকাউন্ট বাতিল করা হবে।</li>
          </ul>
          <p className="mt-2">
            All services offered by FlexoHost are prepaid and subject to
            applicable taxes. Payment methods include bKash, PayPal, bank
            transfer, and walk-in payments at our operational office. Online
            payments may incur gateway fees. Renewal notices are sent via email
            multiple times before the due date. Failure to pay on time may
            result in suspension or termination of services.
          </p>
          <ul className="list-disc pl-6 my-2">
            <li>Day 1: No action taken.</li>
            <li>Day 2: Services are suspended.</li>
            <li>Day 7: Late fee is applied.</li>
            <li>Day 10: Account is terminated.</li>
          </ul>
        </PolicySection>
        <PolicySection
          icon={<FaUndo />}
          title="৪. ফেরতের নীতি / 4. Refund Policy"
        >
          <p>
            নির্দিষ্ট শর্তে শুধুমাত্র ফেরত প্রদান করা হয়। ওয়েব হোস্টিং পরিষেবা ৭
            দিনের সন্তুষ্টি গ্যারান্টি অন্তর্ভুক্ত। যদি এই সময়সীমার মধ্যে
            পরিষেবা বাতিল করা হয় এবং সেটি বৈধ কারণের জন্য হয়, তবে ডোমেইন
            নিবন্ধন, SSL এবং প্রসেসিং ফি বাদে ফেরত প্রদান করা হবে।
          </p>
          <ul className="list-disc pl-6 my-2">
            <li>শর্তাবলী লঙ্ঘন করা হয়।</li>
            <li>একই পরিষেবা দ্বিতীয়বার ফেরতের জন্য অনুরোধ করা হয়।</li>
          </ul>
          <p className="mt-2">
            Refunds are only applicable under specific conditions. Web hosting
            services are covered by a 7-day satisfaction guarantee. If you
            cancel within this period due to valid dissatisfaction, you may
            request a full refund, excluding domain registration, SSL, and
            processing fees.
          </p>
          <ul className="list-disc pl-6 my-2">
            <li>The terms of service are violated.</li>
            <li>
              The client requests a refund for the same service more than once.
            </li>
          </ul>
        </PolicySection>
        <PolicySection
          icon={<FaExchangeAlt />}
          title="৫. পরিষেবা স্থানান্তর / 5. Service Transfers"
        >
          <p>
            FlexoHost সাইনআপের পর ৩ দিনের মধ্যে ফ্রি মাইগ্রেশন পরিষেবা প্রদান
            করে। তবে স্থানান্তরের সফলতা আগের হোস্টিং প্রদানকারীর সাথে
            সামঞ্জস্যের উপর নির্ভরশীল।
          </p>
          <p className="mt-2">
            FlexoHost provides free migration services for a limited period (3
            days) after signing up. However, migration success depends on
            compatibility with your previous hosting provider. While we aim to
            assist with all transfers, we cannot guarantee successful migration
            in every scenario.
          </p>
        </PolicySection>
        <PolicySection
          icon={<FaBan />}
          title="৬. বিষয়বস্তু নীতি / 6. Content Policy"
        >
          <p>
            সকল পরিষেবা বৈধ উদ্দেশ্যে ব্যবহার করতে হবে। নিষিদ্ধ বিষয়বস্তুর মধ্যে
            রয়েছে:
          </p>
          <ul className="list-disc pl-6 my-2">
            <li>কপিরাইট লঙ্ঘনকারী বিষয়বস্তু।</li>
            <li>
              হুমকিস্বরূপ, অশ্লীল, বা জাতীয় নিরাপত্তার জন্য ক্ষতিকর বিষয়বস্তু।
            </li>
            <li>ক্ষতিকারক সফটওয়্যার এবং অবৈধ কার্যক্রম।</li>
          </ul>
          <p className="mt-2">
            All services must be used for lawful purposes. Prohibited content
            includes, but is not limited to:
          </p>
          <ul className="list-disc pl-6 my-2">
            <li>Copyright-infringing material.</li>
            <li>
              Content deemed threatening, obscene, or harmful to national
              security.
            </li>
            <li>Malicious software, phishing tools, and hacking resources.</li>
            <li>
              Illegal or fraudulent activities, including Ponzi schemes, money
              laundering, and related operations.
            </li>
          </ul>
        </PolicySection>
        <PolicySection
          icon={<FaExclamationTriangle />}
          title="৭. বাতিলকরণ নীতি / 7. Cancellations"
        >
          <p>
            পরিষেবা বাতিল করার জন্য গ্রাহককে ইমেইলের মাধ্যমে বা আমাদের
            ওয়েবসাইটের ক্লায়েন্ট এরিয়া থেকে লিখিত অনুরোধ করতে হবে। বাতিলকৃত
            পরিষেবার ডেটা ৩০ দিনের জন্য সংরক্ষণ করা হবে, তারপর স্থায়ীভাবে মুছে
            ফেলা হবে।
          </p>
          <p className="mt-2">
            To cancel a service, clients must submit a written request via email
            or the client area on our website. Upon cancellation, account data
            will be retained for 30 days before permanent deletion.
          </p>
        </PolicySection>
        <PolicySection
          icon={<FaEdit />}
          title="৮. দায়িত্বসীমা / 8. Limitation of Liability"
        >
          <p>
            FlexoHost পরিষেবা ব্যবহারের কারণে সৃষ্ট কোনো পরোক্ষ, আকস্মিক, বা
            ফলশ্রুতিমূলক ক্ষতির জন্য দায়ী থাকবে না।
          </p>
          <p className="mt-2">
            FlexoHost will not be held liable for any indirect, incidental, or
            consequential damages resulting from the use or inability to use our
            services.
          </p>
        </PolicySection>
        <PolicySection
          icon={<FaEdit />}
          title="৯. শর্তাবলীর পরিবর্তন / 9. Amendments to Terms"
        >
          <p>
            FlexoHost যে কোনো সময় এই শর্তাবলী পরিবর্তন করার অধিকার সংরক্ষণ করে।
            গ্রাহকরা সর্বশেষ সংস্করণ www.flexohost.com ওয়েবসাইট থেকে পর্যালোচনা
            করার জন্য দায়বদ্ধ।
          </p>
          <p className="mt-2">
            FlexoHost reserves the right to amend these terms at any time.
            Clients are responsible for reviewing the latest version available
            on our website.
          </p>
        </PolicySection>
        <PolicySection
          icon={<FaGlobe />}
          title="যোগাযোগের তথ্য / Contact Information"
        >
          <ul className="list-none pl-0 mb-2">
            <li className="flex items-center gap-2">
              <FaGlobe className="text-blue-600" />{" "}
              <span>ওয়েবসাইট / Website:</span> www.flexohost.com
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" />{" "}
              <span>ইমেইল / Email:</span> flexohost@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-600" /> <span>ফোন / Phone:</span>{" "}
              +8801772065894
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" />{" "}
              <span>অবস্থান / Location:</span> ঢাকা, বাংলাদেশ
            </li>
          </ul>
        </PolicySection>
        <div className="mt-8 text-lg font-semibold text-blue-700 dark:text-blue-300">
          চলুন, একসাথে কিছু অসাধারণ তৈরি করি!
          <br />
          Let&apos;s build something extraordinary together!
        </div>
      </div>
    </main>
  );
}
