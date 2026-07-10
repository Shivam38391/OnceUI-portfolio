import React from 'react';
import { baseURL, about, person, social , neuroflowPrivacyPolicy} from "@/resources";



export const metadata = {
  title: neuroflowPrivacyPolicy.title,
  description: neuroflowPrivacyPolicy.description,
  openGraph: {
    title: neuroflowPrivacyPolicy.title,
    description: neuroflowPrivacyPolicy.description,
    url: baseURL + "neuroflowprivacy",
    siteName: person.name,
    images: [
      {
        url: baseURL + about.avatar,
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};  



export default function NeuroflowPrivacyPage() {
  return (

    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12 shadow-xl">
        
        <header className="border-b border-slate-800 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Privacy Policy for NeuroFlow
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Effective Date: July 10, 2026
          </p>
        </header>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <p>
            NeuroFlow is built as a commercial application. This service is designed to support offline, on-device artificial intelligence functionalities alongside feature sets optimized for future development.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-100 tracking-wide">
              1. Data Processing and Mobile Identifiers
            </h2>
            <p>
              Core computational Large Language Model (LLM) operations are executed entirely on-device within a secure application sandbox. However, to facilitate future application optimizations, performance testing, and promotional metrics, the app infrastructure interacts with device identifiers.
            </p>
            <p>
              Specifically, this application declares the potential utilization of the Google Play Services **Advertising ID (AD_ID)**. This identifier may be used for:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-400">
              <li>**App Analytics & Performance Tracking**: Assessing system diagnostics, background native processing stability, and usage metrics across multiple device models.</li>
              <li>**Future Personalization**: Managing app updates, delivery settings, and potential contextual promotional features.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-100 tracking-wide">
              2. User Controls and Data Retention
            </h2>
            <p>
              Users retain full control over their mobile device metrics. You can clear or fully delete your underlying device Advertising ID at any time via your Android System Settings (Settings &gt; Privacy &gt; Ads). NeuroFlow respects all native system privacy selections and does not bypass user-configured opt-out preferences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-100 tracking-wide">
              3. Data Sharing and Third-Party Disclosures
            </h2>
            <p>
              We do not sell, rent, or trade user interactions or text inputs. Mobile tracking attributes collected via native framework integrations are strictly reserved for internal application analytics, testing stability, and operational scaling.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-100 tracking-wide">
              4. Contact Us
            </h2>
            <p>
              If you have any questions regarding this privacy declaration or future feature frameworks, please reach out via email at:{' '}
              <a 
                href="mailto:your-email@example.com" 
                className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
              >
                shivamsharma38391@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <footer className="mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} NeuroFlow. All rights reserved.
        </footer>

      </div>
    </main>
  );
} 




