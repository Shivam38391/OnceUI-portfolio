
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how we collect, use, protect, and manage your personal information.",
};

const LAST_UPDATED = "October 13, 2026";
const APP_NAME = "Talknow";
const CONTACT_EMAIL = "shivamsharma38391@gmail.com";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0b0b10] px-5 py-16 text-gray-200 sm:px-8">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-10 inline-flex text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to home
        </Link>

        <header className="mb-12 border-b border-white/10 pb-8">
          <p className="mb-3 text-sm font-medium text-violet-400">
            LEGAL
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-400">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="mt-6 leading-7 text-gray-300">
            This Privacy Policy explains how {APP_NAME} ("we", "us", or
            "our") collects, uses, stores, and shares information when you
            use our website, application, and related services (the
            "Service").
          </p>
        </header>

        <div className="space-y-10 leading-7 text-gray-300">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              The information we collect depends on how you use the Service.
              It may include:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-white">Account information:</strong>{" "}
                username, email address, profile photo, date of birth or age
                information, and authentication details.
              </li>
              <li>
                <strong className="text-white">Profile and preferences:</strong>{" "}
                language, interests, profile settings, and matching preferences
                that you choose to provide.
              </li>
              <li>
                <strong className="text-white">Communications:</strong>{" "}
                messages, friend requests, connection history, and information
                you submit when contacting support or reporting a user.
              </li>
              <li>
                <strong className="text-white">Voice and video:</strong>{" "}
                audio and video streams needed to connect you with other users.
                Whether these streams are recorded or stored depends on the
                features we provide and the technology used.
              </li>
              <li>
                <strong className="text-white">Technical information:</strong>{" "}
                IP address, device and browser information, operating system,
                app version, diagnostic logs, and usage events, where
                collected.
              </li>
              <li>
                <strong className="text-white">Optional permissions:</strong>{" "}
                camera, microphone, notifications, and other device
                permissions when needed for a feature and authorized by you.
              </li>
            </ul>
            <p className="mt-3">
              Please do not share passwords, financial details, government ID
              numbers, or other highly sensitive information in public
              profiles or conversations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              2. How We Use Information
            </h2>
            <p className="mb-3">We may use information to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Create and manage accounts.</li>
              <li>Find users and facilitate random or interest-based matching.</li>
              <li>Enable messaging, voice calls, video calls, and friendships.</li>
              <li>Maintain security, investigate abuse, and enforce our terms.</li>
              <li>Diagnose errors, improve performance, and develop features.</li>
              <li>Respond to questions, support requests, and legal obligations.</li>
              <li>Detect fraud, spam, harassment, and attempts to misuse the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              3. Random Matching, Chats, and Calls
            </h2>
            <p className="mb-3">
              The Service may connect you with people you do not already know.
              Information in your profile and your matching preferences may be
              used to facilitate those connections.
            </p>
            <p className="mb-3">
              Other users may see information you choose to share with them.
              They may take screenshots, record their screen, or otherwise
              capture conversations using their own devices. We cannot
              guarantee that another user will keep information confidential.
            </p>
            <p>
              We do not promise that calls or messages are end-to-end encrypted,
              or that audio/video is never recorded or retained. Those
              statements should only be made if they accurately reflect the
              Service's implemented technology and practices. We will explain
              any recording, moderation, or retention practices that apply to
              the features you use.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              4. Cookies and Similar Technologies
            </h2>
            <p>
              Our website or Service may use cookies, local storage, and
              similar technologies to maintain sessions, remember preferences,
              protect accounts, measure performance, and understand usage.
              You can manage cookies through your browser settings. Disabling
              certain technologies may affect functionality. Any analytics or
              advertising technologies we use should be disclosed here,
              including relevant opt-out choices.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              5. How We Share Information
            </h2>
            <p className="mb-3">
              We do not sell your personal information for money. We may share
              information in the following circumstances, as permitted by law:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-white">With other users:</strong>{" "}
                profile information and content you choose to make visible or
                send to them.
              </li>
              <li>
                <strong className="text-white">Service providers:</strong>{" "}
                hosting, databases, authentication, communications, analytics,
                crash reporting, and customer support providers that help
                operate the Service.
              </li>
              <li>
                <strong className="text-white">Safety and legal matters:</strong>{" "}
                when reasonably necessary to investigate abuse, protect users,
                respond to lawful requests, or protect rights and safety.
              </li>
              <li>
                <strong className="text-white">Business changes:</strong>{" "}
                in connection with a merger, acquisition, financing, or sale
                of assets, subject to applicable law.
              </li>
              <li>
                <strong className="text-white">With your direction:</strong>{" "}
                when you ask us to share information or otherwise consent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              6. International Data Transfers
            </h2>
            <p>
              Our service providers or infrastructure may process information
              in countries other than the country where you live. Where
              required, we will use appropriate safeguards for international
              transfers and comply with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              7. Data Retention
            </h2>
            <p>
              We retain information for as long as reasonably necessary to
              provide the Service, maintain security, resolve disputes, meet
              legal obligations, and enforce our agreements. Retention periods
              depend on the type of information and why it was collected.
              When information is no longer needed, we will delete it or
              anonymize it where appropriate, subject to applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              8. Your Privacy Rights and Choices
            </h2>
            <p className="mb-3">
              Depending on where you live and the laws that apply, you may have
              rights to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Request access to personal information we hold about you.</li>
              <li>Correct inaccurate information.</li>
              <li>Request deletion of your information.</li>
              <li>Object to or restrict certain processing.</li>
              <li>Withdraw consent where processing relies on consent.</li>
              <li>Request a copy of certain information in a portable format.</li>
              <li>Complain to a relevant data protection authority.</li>
            </ul>
            <p className="mt-3">
              To exercise an applicable right, contact us at{" "}
              <a
                className="text-violet-400 underline underline-offset-4 hover:text-violet-300"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>
              . We may need to verify your identity before processing a request.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              9. Account and Data Deletion
            </h2>
            <p className="mb-3">
              You may request account deletion by using any deletion option
              provided in the app or by contacting us at{" "}
              <a
                className="text-violet-400 underline underline-offset-4 hover:text-violet-300"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <p>
              We will process valid requests in accordance with applicable law.
              Some information may be retained for a limited period when
              necessary for security, fraud prevention, dispute resolution,
              backups, or legal compliance. Where required, we will explain
              the applicable exceptions and retention periods.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              10. Security
            </h2>
            <p>
              We use reasonable technical and organizational measures designed
              to protect information. No method of transmission or storage is
              completely secure, and we cannot guarantee absolute security.
              You are responsible for keeping your account credentials secure
              and notifying us if you suspect unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              11. Children's Privacy
            </h2>
            <p>
              The Service is not intended for children below the minimum age
              permitted by applicable law. If the Service is designed for
              adults or users aged 18 and above, state that requirement clearly
              in your onboarding and enforcement processes. We do not knowingly
              collect children's personal information in violation of
              applicable law. If you believe a child has provided information
              unlawfully, contact us so we can investigate.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              12. Third-Party Services
            </h2>
            <p>
              The Service may link to third-party websites or integrate
              third-party technologies. Those parties may process information
              under their own privacy policies. We encourage you to review
              their policies before using their services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              13. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy as the Service changes or as
              required by law. We will update the date shown at the top and
              provide additional notice where required. Your continued use of
              the Service is subject to applicable notice and consent
              requirements for any changes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              14. Contact Us
            </h2>
            <p>
              If you have questions, concerns, or privacy requests, contact:
            </p>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-semibold text-white">{APP_NAME}</p>
              <p className="mt-1">
                Privacy contact:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-violet-400 underline underline-offset-4 hover:text-violet-300"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Replace the placeholder details with your actual legal or
                business contact information.
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-14 border-t border-white/10 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </footer>
      </article>
    </main>
  );
}