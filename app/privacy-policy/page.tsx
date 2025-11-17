import React from "react";
import {
  FaShieldAlt,
  FaUser,
  FaChartBar,
  FaExchangeAlt,
  FaLock,
  FaChild,
  FaHandshake,
  FaGlobe,
  FaEnvelope,
  FaEdit,
  FaBullhorn,
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

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FaShieldAlt className="text-blue-600" /> Privacy Policy
      </h1>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-8">
        <p className="mb-6 text-lg">
          At FlexoHost, we take your data privacy seriously and are committed
          to protecting any information we collect from you. By using our
          services, you agree to the use of your data in accordance with this
          Privacy Policy. This policy is designed to help you understand:
        </p>
        <ul className="mb-6 list-disc pl-6 space-y-1">
          <li>What personal information we collect</li>
          <li>How we use or share it</li>
          <li>How you can correct any errors</li>
          <li>Our online information practices and your available options</li>
        </ul>
        <PolicySection icon={<FaGlobe />} title="Who We Are">
          <p>
            FlexoHost provides cloud-based solutions, including Web Hosting,
            Domain Name Registration, Web Design & Development, and Web
            Applications. Our services cater to businesses, individuals, and
            non-profit organizations, offering customized technology solutions
            tailored to diverse needs.
          </p>
        </PolicySection>
        <PolicySection icon={<FaLock />} title="Data Collection and Storage">
          <p>
            When you use our services, any collected information is stored on
            servers located in the United States and Bangladesh, unless
            otherwise specified. Your data may be processed or accessed by FLEX
            SOFTR or our service providers.
            <br />
            <span className="font-semibold text-blue-700">
              By using our services, you expressly consent to the storage and
              processing of your information as outlined in this policy.
            </span>
          </p>
        </PolicySection>
        <PolicySection icon={<FaUser />} title="Information We Collect">
          <ul className="list-disc pl-6 mb-2">
            <li>
              <span className="font-semibold">Personal Information:</span> Name,
              address, telephone number, email, service details, payment
              history, and payment methods (used only for billing purposes)
            </li>
            <li>
              <span className="font-semibold">Cookies and Tracking:</span>{" "}
              Required cookies (for website functionality), performance cookies
              (to analyze site usage), functional cookies (to remember user
              preferences), advertising cookies (for personalized marketing)
            </li>
            <li>
              <span className="font-semibold">Customer Surveys:</span>{" "}
              Participation is voluntary and helps us enhance our services.
            </li>
            <li>
              <span className="font-semibold">Social Media:</span> Our website
              may include social media features that collect certain information
              (governed by the privacy policies of the respective platforms).
            </li>
            <li>
              <span className="font-semibold">Third-Party Websites:</span> This
              policy does not apply to third-party websites hosted by FlexoHost
              or domain names registered through our services.
            </li>
          </ul>
        </PolicySection>
        <PolicySection icon={<FaChartBar />} title="How We Use Information">
          <ul className="list-disc pl-6 mb-2">
            <li>To provide and improve services</li>
            <li>To bill and process payments</li>
            <li>To enhance customer support</li>
            <li>To offer relevant products and promotions</li>
            <li>To analyze trends and improve security measures</li>
            <li>
              To send newsletters and promotional content (opt-out available)
            </li>
          </ul>
        </PolicySection>
        <PolicySection
          icon={<FaExchangeAlt />}
          title="Sharing and Disclosure of Information"
        >
          <ul className="list-disc pl-6 mb-2">
            <li>
              <span className="font-semibold">Partners and Sponsors:</span> Data
              may be shared with trusted partners for service facilitation.
            </li>
            <li>
              <span className="font-semibold">Service Providers:</span>{" "}
              Third-party providers may process payments, administer surveys, or
              run promotions on our behalf.
            </li>
            <li>
              <span className="font-semibold">Domain Registration:</span> Per
              ICANN rules, certain domain registration details may be publicly
              accessible via WHOIS searches.
            </li>
            <li>
              <span className="font-semibold">Legal Requirements:</span> We may
              disclose data in response to legal requests (court orders,
              subpoenas) or to protect against fraud/security threats.
            </li>
          </ul>
        </PolicySection>
        <PolicySection icon={<FaEdit />} title="Your Rights and Options">
          <ul className="list-disc pl-6 mb-2">
            <li>
              <span className="font-semibold">Updating Information:</span> You
              can update or correct your personal information through our
              billing system or by contacting support.
            </li>
            <li>
              <span className="font-semibold">Opt-Out:</span> Unsubscribe from
              marketing communications by updating your preferences in your
              account settings or contacting us.
            </li>
            <li>
              <span className="font-semibold">Public Forums:</span> Any
              information shared in public areas of our website may be
              accessible to others. Contact us to request removal of personal
              details.
            </li>
          </ul>
        </PolicySection>
        <PolicySection icon={<FaLock />} title="Data Security">
          <p>
            We implement advanced security measures to protect your personal
            information. However, no online platform is entirely secure, so we
            encourage users to take precautions when sharing data online.
          </p>
        </PolicySection>
        <PolicySection icon={<FaChild />} title="Children's Privacy">
          <p>
            Our services are not intended for children under 13. We do not
            knowingly collect data from minors. If such collection is
            identified, we will take immediate steps to delete the information.
          </p>
        </PolicySection>
        <PolicySection icon={<FaHandshake />} title="Reseller Relationships">
          <p>
            FlexoHost may process data on behalf of resellers but does not
            control the personal information collected by them. Customers must
            contact the reseller for data access or modification requests. Data
            retention depends on the reseller relationship and applicable legal
            requirements.
          </p>
        </PolicySection>
        <PolicySection
          icon={<FaBullhorn />}
          title="Changes to This Privacy Policy"
        >
          <p>
            We reserve the right to modify this Privacy Policy at any time.
            Updates will be posted on this page. If you believe we are not
            handling your data correctly, please contact us, and we will address
            your concerns promptly.
          </p>
        </PolicySection>
        <div className="mt-8 flex items-center gap-3">
          <FaEnvelope className="text-blue-600 text-2xl" />
          <span className="font-semibold">
            For inquiries regarding this Privacy Policy, contact our support
            team at:
          </span>
        </div>
        <div className="ml-10 mt-2 text-blue-700 dark:text-blue-300 font-semibold text-lg">
          info@flexohost.com
        </div>
      </div>
    </main>
  );
}
