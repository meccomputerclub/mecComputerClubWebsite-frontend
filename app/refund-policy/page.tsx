import React from "react";
import {
  FaUndo,
  FaMoneyBill,
  FaExclamationTriangle,
  FaUserTimes,
  FaArrowUp,
  FaEnvelopeOpenText,
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

export default function RefundPolicyPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FaUndo className="text-blue-600" /> Return & Refund Policy
      </h1>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-8">
        <PolicySection
          icon={<FaMoneyBill />}
          title="7-Day Money-Back Guarantee"
        >
          <ul className="list-disc pl-6 mb-2">
            <li>
              <span className="font-semibold">Eligibility:</span> Our 7-day
              money-back guarantee applies exclusively to Web Hosting services.
            </li>
            <li>
              <span className="font-semibold">Condition:</span> If you are not
              satisfied with our Web Hosting services within the first seven (7)
              days, you may request a full refund.
            </li>
            <li>
              <span className="font-semibold">Requirement:</span> To initiate
              the refund process, you must submit a written request for service
              cancellation via email or support ticket. Additionally, you must
              provide a specific reason for your cancellation to help us improve
              our services.
            </li>
            <li>
              <span className="font-semibold">Exclusions:</span> The money-back
              guarantee does not apply to domain registrations, renewals,
              transfers, SSL certificates, or any processing fees, as these
              services are non-refundable.
            </li>
            <li>
              <span className="font-semibold">Discretion:</span> FlexoHost
              reserves the right to assess the validity of your cancellation
              request and determine whether all reasonable steps have been taken
              to resolve any issues before processing a refund.
            </li>
            <li>
              <span className="font-semibold">Refund Processing:</span> Refund
              requests may take up to 7-10 days to be processed.
            </li>
          </ul>
        </PolicySection>
        <PolicySection
          icon={<FaEnvelopeOpenText />}
          title="Payment and Renewal Notices"
        >
          <p>
            All services are prepaid, and renewal reminders will be sent via
            email between 30 days and 1 day before the renewal date. Failure to
            renew services on time may result in additional late fees.
          </p>
        </PolicySection>
        <PolicySection
          icon={<FaUserTimes />}
          title="Account Termination and Refunds"
        >
          <ul className="list-disc pl-6 mb-2">
            <li>
              <span className="font-semibold">Prorated Refunds:</span> If FLEX
              SOFTR is unable to provide the agreed-upon services, a prorated
              refund will be issued for the unused portion of the service.
            </li>
            <li>
              <span className="font-semibold">Violation of Policies:</span> No
              refunds will be given if your account is suspended or terminated
              due to a violation of our policies.
            </li>
            <li>
              <span className="font-semibold">Cancellation Request:</span> Upon
              submitting an account cancellation request, your account will be
              immediately suspended and permanently deleted within 30 days.
            </li>
            <li>
              <span className="font-semibold">Multiple Accounts:</span> If you
              have multiple accounts and any of them have outstanding payments,
              FlexoHost reserves the right to suspend all accounts until the
              balance is cleared. No refunds will be provided in such cases.
            </li>
          </ul>
        </PolicySection>
        <PolicySection
          icon={<FaExclamationTriangle />}
          title="Excessive Resource Usage"
        >
          <p>
            If your account consumes an excessive amount of system resources,
            resulting in service suspension or termination, you will not be
            eligible for a refund.
          </p>
        </PolicySection>
        <PolicySection icon={<FaUndo />} title="Second-Time Use">
          <p>
            Refunds are granted only once per product. If you repurchase our
            service after previously receiving a refund, you will not be
            eligible for another refund.
          </p>
        </PolicySection>
        <PolicySection
          icon={<FaArrowUp />}
          title="Overage Charges and Service Upgrades"
        >
          <p>
            If your account exceeds its allocated resources, you will receive a
            notification. Failure to upgrade your plan or reduce usage may
            result in account suspension. No refunds will be provided for
            suspensions due to overage charges.
          </p>
        </PolicySection>
      </div>
    </main>
  );
}
