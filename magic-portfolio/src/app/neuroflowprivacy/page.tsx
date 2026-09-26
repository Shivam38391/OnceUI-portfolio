import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { baseURL, about, person, social, neuroflowPrivacyPolicy } from "@/resources";

/* ==========================================================================
   Type — IBM Plex Sans for reading, IBM Plex Mono reserved for the small
   technical markers (section numbers, dates, the eyebrow). Scoped to this
   page only; lift into layout.tsx if you want it site-wide.
   ========================================================================== */
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

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

/* ==========================================================================
   APP LINKS — replace the placeholder with your real Play Store URL.
   Add appStore once NeuroFlow ships on iOS; the button renders automatically
   once this isn't null.
   ========================================================================== */
const appLinks = {
  playStore:
    "https://play.google.com/store/apps/details?id=com.mobbius.neuroflow",
  appStore: null as string | null,
};

const sections = [
  { id: "data-processing", number: "01", title: "Data Processing and Mobile Identifiers" },
  { id: "user-controls", number: "02", title: "User Controls and Data Retention" },
  { id: "data-sharing", number: "03", title: "Data Sharing and Third-Party Disclosures" },
  { id: "contact", number: "04", title: "Contact Us" },
];

/* ---------- Small building blocks ---------- */

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 3.5v17l14-8.5-14-8.5z" fill="currentColor" />
    </svg>
  );
}

function AppLinkButton({
  href,
  label,
  sublabel,
  variant = "solid",
}: {
  href: string;
  label: string;
  sublabel: string;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const solid =
    "bg-[#B5722A] text-[#FBF8F3] hover:bg-[#9C6224] focus-visible:outline-[#14181B]";
  const outline =
    "border border-[#14181B] text-[#14181B] hover:bg-[#14181B] hover:text-[#FBF8F3] focus-visible:outline-[#B5722A]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variant === "solid" ? solid : outline}`}
    >
      <PlayIcon />
      <span className="flex flex-col leading-tight text-left">
        <span>{label}</span>
        <span className="text-xs font-normal opacity-80">{sublabel}</span>
      </span>
    </a>
  );
}

export default function NeuroflowPrivacyPage() {
  return (
    <main
      className={`${plexSans.variable} ${plexMono.variable} min-h-screen bg-[#F2F3F0] text-[#14181B] [font-family:var(--font-body)]`}
    >
      {/* ---------- Sticky header: brand + persistent app link ---------- */}
      <div className="sticky top-0 z-10 border-b border-[#DCE0DC] bg-[#F2F3F0]/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href={baseURL}
            className="text-base font-semibold tracking-tight hover:text-[#B5722A]"
          >
            NeuroFlow
          </a>
          <a
            href={appLinks.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#B5722A] px-4 py-2 text-sm font-medium text-[#FBF8F3] transition-colors hover:bg-[#9C6224] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14181B]"
          >
            <PlayIcon />
            Get the app
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* ---------- Title ---------- */}
        <div className="pb-10">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-[#6B7075] [font-family:var(--font-mono)]">
            Effective July 10, 2026
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          {/* ---------- Sidebar: contents + app panel ---------- */}
          <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
            <nav aria-label="Table of contents">
              <p className="text-sm font-medium text-[#6B7075]">Contents</p>
              <ol className="mt-3 flex flex-col gap-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex items-baseline gap-2 text-sm text-[#14181B] hover:text-[#B5722A]"
                    >
                      <span className="text-xs text-[#B5722A] [font-family:var(--font-mono)]">
                        {s.number}
                      </span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="rounded-lg border border-[#DCE0DC] bg-white p-5">
              <p className="text-sm font-medium">Get NeuroFlow</p>
              <p className="mt-1 text-sm text-[#565B60]">
                On-device AI chat, available now on Android.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <AppLinkButton
                  href={appLinks.playStore}
                  label="Get it on Google Play"
                  sublabel="Android"
                />
                {appLinks.appStore && (
                  <AppLinkButton
                    href={appLinks.appStore}
                    label="Download on the App Store"
                    sublabel="iOS"
                    variant="outline"
                  />
                )}
              </div>
            </div>
          </aside>

          {/* ---------- Document body ---------- */}
          <div className="max-w-[68ch]">
            <p className="text-[15px] leading-relaxed text-[#262B2F]">
              NeuroFlow is built as a commercial application. This service is
              designed to support offline, on-device artificial intelligence
              functionalities alongside feature sets optimized for future
              development.
            </p>

            <div className="mt-12 flex flex-col gap-12">
              <section id="data-processing" className="scroll-mt-24">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm text-[#B5722A] [font-family:var(--font-mono)]">
                    01
                  </span>
                  <h2 className="text-xl font-semibold tracking-tight">
                    Data Processing and Mobile Identifiers
                  </h2>
                </div>
                <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[#262B2F]">
                  <p>
                    Core computational Large Language Model (LLM) operations
                    are executed entirely on-device within a secure
                    application sandbox. However, to facilitate future
                    application optimizations, performance testing, and
                    promotional metrics, the app infrastructure interacts with
                    device identifiers.
                  </p>
                  <p>
                    Specifically, this application declares the potential
                    utilization of the Google Play Services{" "}
                    <strong>Advertising ID (AD_ID)</strong>. This identifier
                    may be used for:
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-[#262B2F]">
                    <li>
                      <strong>App Analytics &amp; Performance Tracking</strong>:
                      assessing system diagnostics, background native
                      processing stability, and usage metrics across multiple
                      device models.
                    </li>
                    <li>
                      <strong>Future Personalization</strong>: managing app
                      updates, delivery settings, and potential contextual
                      promotional features.
                    </li>
                  </ul>
                </div>
              </section>

              <hr className="border-[#DCE0DC]" />

              <section id="user-controls" className="scroll-mt-24">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm text-[#B5722A] [font-family:var(--font-mono)]">
                    02
                  </span>
                  <h2 className="text-xl font-semibold tracking-tight">
                    User Controls and Data Retention
                  </h2>
                </div>
                <div className="mt-4 text-[15px] leading-relaxed text-[#262B2F]">
                  <p>
                    Users retain full control over their mobile device
                    metrics. You can clear or fully delete your underlying
                    device Advertising ID at any time via your Android System
                    Settings (Settings &gt; Privacy &gt; Ads). NeuroFlow
                    respects all native system privacy selections and does not
                    bypass user-configured opt-out preferences.
                  </p>
                </div>
              </section>

              <hr className="border-[#DCE0DC]" />

              <section id="data-sharing" className="scroll-mt-24">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm text-[#B5722A] [font-family:var(--font-mono)]">
                    03
                  </span>
                  <h2 className="text-xl font-semibold tracking-tight">
                    Data Sharing and Third-Party Disclosures
                  </h2>
                </div>
                <div className="mt-4 text-[15px] leading-relaxed text-[#262B2F]">
                  <p>
                    We do not sell, rent, or trade user interactions or text
                    inputs. Mobile tracking attributes collected via native
                    framework integrations are strictly reserved for internal
                    application analytics, testing stability, and operational
                    scaling.
                  </p>
                </div>
              </section>

              <hr className="border-[#DCE0DC]" />

              <section id="contact" className="scroll-mt-24">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm text-[#B5722A] [font-family:var(--font-mono)]">
                    04
                  </span>
                  <h2 className="text-xl font-semibold tracking-tight">
                    Contact Us
                  </h2>
                </div>
                <div className="mt-4 text-[15px] leading-relaxed text-[#262B2F]">
                  <p>
                    If you have any questions regarding this privacy
                    declaration or future feature frameworks, please reach out
                    via email at{" "}
                    <a
                      href="mailto:shivamsharma38391@gmail.com"
                      className="text-[#B5722A] underline underline-offset-2 hover:text-[#9C6224]"
                    >
                      shivamsharma38391@gmail.com
                    </a>
                    .
                  </p>
                </div>
              </section>
            </div>

            <footer className="mt-16 border-t border-[#DCE0DC] pt-6 text-xs text-[#6B7075]">
              <p>&copy; {new Date().getFullYear()} NeuroFlow. All rights reserved.</p>
              <p className="mt-1">
                Built by{" "}
                <a href={baseURL} className="hover:text-[#B5722A]">
                  {person.name}
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}