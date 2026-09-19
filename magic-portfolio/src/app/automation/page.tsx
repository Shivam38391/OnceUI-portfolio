"use client";

import { Badge } from "@once-ui-system/core/components/Badge";
import { Button } from "@once-ui-system/core/components/Button";
import { Card } from "@once-ui-system/core/components/Card";
import { Flex } from "@once-ui-system/core/components/Flex";
import { Grid } from "@once-ui-system/core/components/Grid";
import { Heading } from "@once-ui-system/core/components/Heading";
import { Icon } from "@once-ui-system/core/components/Icon";
import React from "react";
// If using Magic Portfolio starter, import from "@/once-ui/components"
// If using the core library, import from "@once-ui-system/core"
import { Text } from "@once-ui-system/core/components/Text";
import { Background } from "@once-ui-system/core/components/Background";















/* ==========================================================================
   CONFIG — EDIT EVERYTHING HERE
   ========================================================================== */

const pageData = {
  contact: {
    whatsappNumber: "919796276986",
    whatsappPrefillMessage:
      "Hi Shivam — I saw your automation page. Here's what my team does manually every day: ",
    bookingUrl: "https://calendly.com/shivamsharma38391",
  },

  /* ---------- Background tuning (all three sections) ---------- */
  background: {
    hero: {
      mask: { x: 50, y: 15, radius: 75 },
      gradient: {
        display: true,
        // opacity: 50,
        x: 50,
        y: 0,
        width: 120,
        height: 90,
        tilt: -6,
        colorStart: "brand-background-strong",
        colorEnd: "static-transparent",
      },
      dots: {
        display: true,
        opacity: 35,
        size: "24",
        color: "brand-on-background-weak",
      },
      grid: { display: false },
      lines: { display: false },
    },
    edge: {
      mask: { x: 50, y: 50, radius: 80 },
      gradient: { display: false },
      dots: { display: false },
      grid: {
        display: true,
        opacity: 30,
        color: "neutral-alpha-weak",
        width: "var(--static-space-32)",
        height: "var(--static-space-32)",
      },
      lines: { display: false },
    },
    finalCta: {
      mask: { x: 50, y: 50, radius: 90 },
      gradient: {
        display: true,
        opacity: 40,
        x: 50,
        y: 100,
        width: 110,
        height: 80,
        tilt: 0,
        colorStart: "brand-background-medium",
        colorEnd: "static-transparent",
      },
      dots: { display: false },
      grid: { display: false },
      lines: {
        display: true,
        opacity: 20,
        color: "neutral-alpha-weak",
        size: "24",
        thickness: 1,
        angle: 45,
      },
    },
  },

  /* ---------- Hero ---------- */
  hero: {
    badge: "Business automation, built by an engineer",
    heading: "Every lead gets a reply in 30 seconds. Even at 2am.",
    subheading:
      "I build automation systems for small and mid-sized businesses. WhatsApp follow-ups, lead routing, invoices, reminders, AI that reads your documents. Set up once, runs without anyone touching it.",
    primaryCta: "Message me on WhatsApp",
    secondaryCta: "Book a free 15-min audit",
    ctaFootnote:
      "Tell me what your team does by hand. I'll tell you what's worth automating first — free.",
    chatDemo: {
      label: "Saturday, 9:47pm",
      messages: [
        { from: "system", text: "Form submitted — bulk order enquiry", time: "" },
        {
          from: "business",
          text: "Hi Ravi, thanks for asking about bulk pricing. Sending our rate card now — are you looking at 50+ units?",
          time: "9:47pm",
        },
        { from: "customer", text: "Yes, around 200. Can we talk tomorrow?", time: "9:52pm" },
        {
          from: "business",
          text: "Of course. Sales is booked in for 11am — you'll get a reminder an hour before.",
          time: "9:52pm",
        },
      ],
      footnote: "Nobody on the team was awake.",
    },
  },

  /* ---------- Stat strip ---------- */
  stats: [
    { value: "< 30 sec", label: "to first reply" },
    { value: "24/7", label: "no one on duty" },
    { value: "1–2 wks", label: "to go live" },
    { value: "100%", label: "yours to keep" },
  ],

  /* ---------- Problem ---------- */
  problem: {
    heading: "You already know where the time goes",
    subheading:
      "Most businesses don't need more people. They need the boring half to stop needing people.",
    pains: [
      {
        icon: "clock",
        title: "Leads go cold overnight",
        desc: "An enquiry lands at 9pm. Someone opens it at 11am. They've already messaged three competitors.",
      },
      {
        icon: "refresh",
        title: "The same data, typed three times",
        desc: "WhatsApp to a spreadsheet, spreadsheet to Tally, Tally to a report. Forty times a day.",
      },
      {
        icon: "calendar",
        title: "Follow-ups run on memory",
        desc: "Confirmations, invoices, reminders — they go out when somebody remembers. Sometimes nobody does.",
      },
      {
        icon: "layers",
        title: "Month-end eats two days",
        desc: "Numbers pulled out of four systems into one sheet that everybody quietly distrusts.",
      },
    ],
    closer: "This doesn't need a bigger team. It needs a system.",
  },

  /* ---------- Demo ---------- */
  demo: {
    badge: "Featured system",
    heading: "What an instant follow-up actually looks like",
    subheading: "The full pipeline, from form submission to a message on the customer's phone.",
    youtubeEmbedUrl:
      "https://www.youtube-nocookie.com/embed/_G6AtdWil3Y?rel=0&modestbranding=1",
    videoTitle: "WhatsApp lead follow-up automation — full walkthrough",
    pipelineSteps: [
      { title: "Lead arrives", desc: "Ad, landing page or sheet" },
      { title: "n8n parses", desc: "Cleaned, checked, deduped" },
      { title: "Team alerted", desc: "Telegram or Slack ping" },
      { title: "Customer replied to", desc: "Personalised WhatsApp" },
      { title: "CRM updated", desc: "Status written to the DB" },
    ],
    beforeAfter: {
      label: "Average first-response time on this build",
      before: { value: "~4 hrs", label: "before" },
      after: { value: "< 30 sec", label: "after" },
    },
  },

  /* ---------- Services ---------- */
  services: {
    heading: "Four things I get asked for most",
    subheading: "Every build is custom, but these shapes come up again and again.",
    items: [
      {
        icon: "userCheck",
        title: "Lead capture and routing",
        outcome: "Nothing sits in an inbox waiting to be noticed.",
        description:
          "Leads get cleaned, deduped, assigned to the right person and answered — before anyone opens a laptop.",
      },
      {
        icon: "messageSquare",
        title: "WhatsApp workflows",
        outcome: "Confirmations that never depend on memory.",
        description:
          "Official Cloud API wired into your forms, CRM, payment gateway and database. Orders, invoices, reminders, payment nudges.",
      },
      {
        icon: "cpu",
        title: "AI that reads your paperwork",
        outcome: "Documents become structured data by themselves.",
        description:
          "Line items pulled out of PDF invoices, messy queries sorted into categories, replies drafted for your team to edit.",
      },
      {
        icon: "layers",
        title: "Custom internal software",
        outcome: "For the part no off-the-shelf tool will do.",
        description:
          "Backend services, database schemas and internal dashboards, so the automation survives its first odd requirement.",
      },
    ],
  },

  /* ---------- Qualification ---------- */
  fit: {
    heading: "Let's be honest about whether this fits",
    subheading: "I'd rather turn a project down than take one that won't pay for itself.",
    goodFit: {
      title: "Works well if",
      points: [
        "Roughly 20+ enquiries a month, steadily",
        "Your customers already talk to you on WhatsApp",
        "There's a process your team repeats the same way",
        "One or two people lose real hours to copy-paste",
        "You want to own the system, not rent it",
      ],
    },
    badFit: {
      title: "Probably not, if",
      points: [
        "You want one small Zapier task for a few thousand rupees",
        "You want bulk unsolicited WhatsApp marketing — Meta bans it, so do I",
        "You need operations run daily, not a system built",
        "The process changes weekly and nobody can describe it",
        "You're comparing quotes purely on price",
      ],
    },
  },

  /* ---------- Engineering edge ---------- */
  edge: {
    badge: "Why this doesn't break in month three",
    heading: "Most automation projects die at the first awkward requirement",
    subheading:
      "Connecting two popular apps is the easy half. Projects fail on the parts that need an engineer.",
    comparison: {
      leftLabel: "Drag-and-drop freelancer",
      rightLabel: "What you get here",
      rows: [
        {
          situation: "No ready-made connector exists",
          left: "Project stops, or you change software",
          right: "I write against the REST API directly",
        },
        {
          situation: "The webhook needs real auth",
          left: "Left open behind a secret URL",
          right: "Signature checks and token rotation",
        },
        {
          situation: "Data outgrows a spreadsheet",
          left: "Google Sheets until it collapses",
          right: "A PostgreSQL schema built for you",
        },
        {
          situation: "Something fails at 2am",
          left: "You hear it from an angry customer",
          right: "Retries, logs, and an alert to both of us",
        },
      ],
    },
    techStack: [
      "n8n",
      "WhatsApp Cloud API",
      "OpenAI & Gemini",
      "Node.js",
      "Python / FastAPI",
      "Next.js",
      "PostgreSQL",
      "Razorpay webhooks",
    ],
  },

  /* ---------- Process ---------- */
  process: {
    heading: "From first call to running system",
    subheading: "Five steps with real timelines. You'll always know what happens next.",
    steps: [
      { when: "15 min", title: "Audit call", desc: "You walk me through the manual work. I ask a lot of questions." },
      { when: "1–2 days", title: "Blueprint", desc: "A written plan: what gets automated, what it costs, what stays manual." },
      { when: "1–2 weeks", title: "Build", desc: "Workflows, integrations, database, and the edge-case handling that decides survival." },
      { when: "2–3 days", title: "Go live", desc: "Fake leads end to end, then real traffic, watched together." },
      { when: "30 days", title: "Monitor", desc: "Alerts, logs and fixes as real-world mess hits it. Included." },
    ],
  },

  /* ---------- Packages ---------- */
  packages: {
    heading: "Start small. Prove it works. Then expand.",
    subheading: "No retainers to get started, and nothing runs on accounts you don't control.",
    tiers: [
      {
        name: "Automation audit",
        price: "Free",
        priceNote: "15 minutes, no obligation",
        summary: "A straight answer on what's worth automating.",
        includes: [
          "A call about how your team works today",
          "A written one-page map of your top 2–3 opportunities",
          "An honest note on what you shouldn't automate yet",
        ],
        cta: "Book the audit",
        ctaType: "booking",
        featured: false,
      },
      {
        name: "Pilot system",
        price: "From ₹12,000",
        priceNote: "One workflow, end to end",
        summary: "Your most painful process, built properly and put into production.",
        includes: [
          "One complete workflow, live in 1–2 weeks",
          "Integrated with the tools you already use",
          "Error handling, logging and alerts from day one",
          "30 days of monitoring and fixes included",
          "Workflows, code and credentials handed to you",
        ],
        cta: "Discuss a pilot",
        ctaType: "whatsapp",
        featured: true,
      },
      {
        name: "Custom build",
        price: "Quoted",
        priceNote: "Multi-workflow systems",
        summary: "For operations that need a real backend behind the automation.",
        includes: [
          "Several connected workflows across departments",
          "Custom backend services and database design",
          "Internal dashboard for your team",
          "Self-hosted on your own infrastructure",
        ],
        cta: "Tell me the scope",
        ctaType: "whatsapp",
        featured: false,
      },
    ],
    footnote:
      "Price depends on how many systems have to talk to each other and how messy their data is. You get a fixed number before any work starts.",
  },

  /* ---------- Case studies ---------- */
  caseStudies: {
    heading: "Systems already running",
    subheading: "Client names withheld. Happy to walk through any of these on a call.",
    items: [
      {
        badge: "Client build",
        metric: "4 hrs → under 30 sec",
        title: "WhatsApp lead follow-up engine",
        description: "Automated response pipeline holding a 99.8% delivery rate across the message queue.",
        tags: ["n8n", "WhatsApp API", "Webhooks"],
      },
      {
        badge: "Own product",
        metric: "Multi-step reasoning agent",
        title: "Drafty — AI agent assistant",
        description: "A ReAct-pattern agent that plans multi-step work and pulls structure out of unstructured input.",
        tags: ["React", "Gemini API", "ReAct"],
      },
      {
        badge: "Client build",
        metric: "Hundreds of alerts a day",
        title: "Notification and scheduling backend",
        description: "Cron-driven notification service built without dragging in a third-party queue and its monthly bill.",
        tags: ["Node.js", "Python", "PostgreSQL"],
      },
    ],
  },

  /* Leave empty until you have real quotes — the section hides itself. */
  testimonials: [] as { quote: string; name: string; role: string }[],

  /* ---------- FAQ ---------- */
  faq: {
    heading: "Asked before every project",
    items: [
      {
        q: "Do I need the official WhatsApp Business API?",
        a: "For anything automated, yes. The regular Business app can't be driven by software reliably, and tools that fake it get numbers banned. I set up the official Cloud API on your Meta account during the build. Meta charges you directly per conversation — usually small, and paid by you rather than routed through me.",
      },
      {
        q: "We use Tally, Zoho, a Google Sheet and one custom app. Does that matter?",
        a: "That's the normal situation. If a tool has an API, I connect to it. If it doesn't, we look at exports, shared database access, or a small service that sits in between. Part of the audit is telling you which of your tools will be awkward and what that adds to the timeline.",
      },
      {
        q: "Who owns it once it's built?",
        a: "You do. The workflows, source code, database and every credential live on your accounts and your infrastructure. If we stop working together, nothing switches off and you don't need my permission to change anything.",
      },
      {
        q: "What happens when it breaks?",
        a: "It will occasionally — an API changes, a service has an outage, a customer sends something nobody anticipated. Every build ships with retry logic, error logging and alerts that fire to both of us. The first 30 days of fixes are in the project price.",
      },
      {
        q: "How long until something is actually running?",
        a: "A single workflow is usually live one to two weeks after the blueprint is signed off. Bigger builds get broken into pieces that each go live on their own, so you're never waiting months to see anything work.",
      },
      {
        q: "Where does our customer data go?",
        a: "Wherever you want. The default is self-hosted n8n and a database on infrastructure you control, so customer data doesn't sit on a third-party automation platform. If an AI step is genuinely needed, I'll tell you exactly what gets sent to it and what doesn't.",
      },
      {
        q: "Can we start with just one small thing?",
        a: "That's the recommended way. Pick the process that annoys you most, let me build that one properly, and judge the rest on whether it saved the hours I said it would.",
      },
    ],
  },

  /* ---------- Final CTA ---------- */
  finalCta: {
    heading: "Tell me what your team does by hand",
    subheading:
      "One 15-minute call. You leave with a written list of what's worth automating, in priority order — whether or not you hire me to build it.",
    steps: [
      "You message me on WhatsApp or pick a slot",
      "We spend 15 minutes on what your team repeats daily",
      "You get a one-page automation map, free, within 48 hours",
    ],
  },

  footerNote:
    "Shivam Sharma, full-stack engineer building automation systems from Jammu, India. Usually replies within a few hours.",
};

/* ==========================================================================
   BUILDING BLOCKS
   ========================================================================== */

function SectionIntro({
  badge,
  heading,
  subheading,
}: {
  badge?: string;
  heading: string;
  subheading?: string;
}) {
  return (
    <Flex
      direction="column"
      gap="12"
      fillWidth
      horizontal="center"
      align="center"
      style={{ maxWidth: "660px" }}
    >
      {badge && (
        <Badge
          id={`intro-${badge.slice(0, 12).replace(/\s+/g, "-").toLowerCase()}`}
          title={badge}
          arrow={false}
          effect={false}
          paddingX="12"
          paddingY="4"
          background="neutral-alpha-weak"
          onBackground="neutral-medium"
          textVariant="label-default-s"
        />
      )}
      <Heading as="h2" variant="heading-strong-l" wrap="balance" align="center">
        {heading}
      </Heading>
      {subheading && (
        <Text
          variant="body-default-m"
          onBackground="neutral-medium"
          wrap="balance"
          align="center"
        >
          {subheading}
        </Text>
      )}
    </Flex>
  );
}

function ChatBubble({ from, text, time }: { from: string; text: string; time: string }) {
  if (from === "system") {
    return (
      <Flex fillWidth horizontal="center" className="sa-bubble">
        <Flex paddingX="12" paddingY="4" radius="full" background="neutral-alpha-weak">
          <Text variant="body-default-xs" onBackground="neutral-weak">
            {text}
          </Text>
        </Flex>
      </Flex>
    );
  }

  const isBusiness = from === "business";

  return (
    <Flex fillWidth horizontal={isBusiness ? "end" : "start"} className="sa-bubble">
      <Flex
        direction="column"
        gap="2"
        paddingX="12"
        paddingY="8"
        radius="m"
        background={isBusiness ? "brand-alpha-weak" : "surface"}
        border="neutral-alpha-weak"
        style={{ maxWidth: "86%" }}
      >
        <Text
          variant="body-default-s"
          onBackground={isBusiness ? "brand-strong" : "neutral-strong"}
        >
          {text}
        </Text>
        {time && (
          <Text
            variant="body-default-xs"
            onBackground="neutral-weak"
            align={isBusiness ? "right" : "left"}
          >
            {time}
          </Text>
        )}
      </Flex>
    </Flex>
  );
}

function ListRow({ text, positive }: { text: string; positive: boolean }) {
  return (
    <Flex gap="12" vertical="start">
      <Text
        variant="body-strong-s"
        onBackground={positive ? "brand-medium" : "neutral-weak"}
        style={{ lineHeight: "1.6", flexShrink: 0 }}
      >
        {positive ? "✓" : "✕"}
      </Text>
      <Text variant="body-default-s" onBackground="neutral-medium">
        {text}
      </Text>
    </Flex>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <Card
      fillWidth
      direction="column"
      padding="0"
      radius="l"
      background="surface"
      border="neutral-alpha-weak"
    >
      <details className="sa-faq">
        <summary className="sa-faq-summary">
          <Text variant="body-strong-m">{q}</Text>
          <span className="sa-faq-icon" aria-hidden="true">
            +
          </span>
        </summary>
        <div className="sa-faq-body">
          <Text variant="body-default-m" onBackground="neutral-medium">
            {a}
          </Text>
        </div>
      </details>
    </Card>
  );
}

/* ==========================================================================
   PAGE
   ========================================================================== */

export default function AutomationPage() {
  const { contact, background } = pageData;

  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappPrefillMessage
  )}`;

  const ctaHref = (type: string) =>
    type === "whatsapp" ? whatsappUrl : contact.bookingUrl;

  return (
    <>
      <style>{`
        /* ---- hero thread: the one animated moment on the page ---- */
        .sa-bubble { opacity: 0; animation: sa-rise 520ms cubic-bezier(.2,.7,.3,1) forwards; }
        .sa-bubble:nth-child(1) { animation-delay: 240ms; }
        .sa-bubble:nth-child(2) { animation-delay: 620ms; }
        .sa-bubble:nth-child(3) { animation-delay: 1180ms; }
        .sa-bubble:nth-child(4) { animation-delay: 1560ms; }
        @keyframes sa-rise {
          from { opacity: 0; transform: translateY(10px) scale(.98); }
          to   { opacity: 1; transform: none; }
        }

        /* ---- pipeline rail ---- */
        .sa-flow { display: grid; grid-template-columns: repeat(5, 1fr); }
        .sa-flow-node {
          position: relative; display: flex; flex-direction: column;
          align-items: center; text-align: center; gap: 10px; padding: 0 6px;
        }
        .sa-flow-node::before {
          content: ""; position: absolute; top: 19px; left: -50%;
          width: 100%; height: 2px; border-radius: 2px;
          background: linear-gradient(90deg,
            var(--neutral-alpha-medium) 0%,
            var(--brand-solid-medium, var(--neutral-alpha-strong)) 50%,
            var(--neutral-alpha-medium) 100%);
          background-size: 300% 100%;
          animation: sa-sweep 4s linear infinite;
        }
        .sa-flow-node:nth-child(1)::before { display: none; }
        .sa-flow-node:nth-child(3)::before { animation-delay: .4s; }
        .sa-flow-node:nth-child(4)::before { animation-delay: .8s; }
        .sa-flow-node:nth-child(5)::before { animation-delay: 1.2s; }
        @keyframes sa-sweep {
          from { background-position: 0% 0; }
          to   { background-position: 100% 0; }
        }
        .sa-flow-dot {
          width: 38px; height: 38px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: var(--surface-background);
          border: 2px solid var(--neutral-alpha-medium);
          position: relative; z-index: 1; flex-shrink: 0;
        }
        @media (max-width: 767px) {
          .sa-flow { grid-template-columns: 1fr; gap: 16px; }
          .sa-flow-node { flex-direction: row; align-items: center; text-align: left; }
          .sa-flow-node::before { display: none; }
        }

        /* ---- FAQ ---- */
        .sa-faq-summary {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; padding: 20px 24px; cursor: pointer; list-style: none;
        }
        .sa-faq-summary::-webkit-details-marker { display: none; }
        .sa-faq-summary:focus-visible {
          outline: 2px solid var(--brand-solid-strong, currentColor);
          outline-offset: -2px; border-radius: 12px;
        }
        .sa-faq-icon { flex-shrink: 0; font-size: 20px; line-height: 1; opacity: .5; transition: transform 160ms ease; }
        .sa-faq[open] .sa-faq-icon { transform: rotate(45deg); }
        .sa-faq-body { padding: 0 24px 20px; max-width: 72ch; }

        /* ---- sticky mobile CTA ---- */
        .sa-mobile-bar {
          position: fixed; left: 0; right: 0; top: 0; z-index: 40;
          display: flex; gap: 8px;
          padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
          background: var(--page-background, #fff);
          border-top: 1px solid var(--neutral-alpha-weak, rgba(0,0,0,.08));
        }
        .sa-mobile-bar > * { flex: 1; }
        @media (min-width: 768px) { .sa-mobile-bar { display: none; } }

        @media (prefers-reduced-motion: reduce) {
          .sa-bubble { opacity: 1; animation: none; }
          .sa-flow-node::before { animation: none; background: var(--neutral-alpha-medium); }
          .sa-faq-icon { transition: none; }
        }
      `}</style>

      <Flex
        as="main"
        direction="column"
        fillWidth
        horizontal="center"
        paddingX="m"
        paddingY="xl"
        gap="80"
        style={{ paddingBottom: "104px" }}
      >
        {/* ───────────── 1. HERO ───────────── */}
        <Flex
          direction="column"
          fillWidth
          horizontal="center"
          gap="32"
          style={{ position: "relative", maxWidth: "1100px" }}
        >
          <Background
            position="absolute"
            mask={background.hero.mask}
            gradient={{
        display: true,
        opacity: 50,
        x: 50,
        y: 0,
        width: 120,
        height: 90,
        tilt: -6,
        colorStart: "brand-background-strong",
        colorEnd: "static-transparent",
      }}
            dots={{
        display: true,
        opacity: 30,
        size: "24",
        color: "brand-on-background-weak",
      }}
            grid={background.hero.grid}
            lines={background.hero.lines}
          />

          <Grid fillWidth columns="2" m={{ columns: 1 }} gap="40">
            <Flex direction="column" gap="20" vertical="center">
              <Badge
                id="hero-badge"
                title={pageData.hero.badge}
                icon="sparkle"
                arrow={false}
                effect={false}
                paddingX="16"
                paddingY="8"
                background="brand-alpha-weak"
                onBackground="brand-medium"
                textVariant="label-default-s"
              />

              <Heading as="h1" variant="display-strong-s" wrap="balance">
                {pageData.hero.heading}
              </Heading>

              <Text
                variant="body-default-l"
                onBackground="neutral-medium"
                style={{ maxWidth: "54ch" }}
              >
                {pageData.hero.subheading}
              </Text>

              <Flex gap="12" wrap paddingTop="8">
                <Button
                  variant="primary"
                  size="l"
                  label={pageData.hero.primaryCta}
                  href={whatsappUrl}
                  prefixIcon="messageSquare"
                />
                <Button
                  variant="secondary"
                  size="l"
                  label={pageData.hero.secondaryCta}
                  href={contact.bookingUrl}
                  prefixIcon="calendar"
                />
              </Flex>

              <Text
                variant="body-default-s"
                onBackground="neutral-weak"
                style={{ maxWidth: "50ch" }}
              >
                {pageData.hero.ctaFootnote}
              </Text>
            </Flex>

            <Card
              fillWidth
              direction="column"
              gap="12"
              padding="20"
              radius="xl"
              background="page"
              border="neutral-alpha-weak"
            >
              <Flex horizontal="between" vertical="center">
                <Text variant="label-strong-s">Customer WhatsApp</Text>
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  {pageData.hero.chatDemo.label}
                </Text>
              </Flex>

              <Flex direction="column" gap="8" fillWidth>
                {pageData.hero.chatDemo.messages.map((m, i) => (
                  <ChatBubble key={i} from={m.from} text={m.text} time={m.time} />
                ))}
              </Flex>

              <Flex paddingX="12" paddingY="8" radius="m" background="brand-alpha-weak">
                <Text variant="body-default-xs" onBackground="brand-strong">
                  {pageData.hero.chatDemo.footnote}
                </Text>
              </Flex>
            </Card>
          </Grid>

          {/* Stat strip */}
          <Grid
            fillWidth
            columns="4"
            s={{ columns: 2 }}
            gap="0"
            radius="l"
            background="surface"
            border="neutral-alpha-weak"
            overflow="hidden"
          >
            {pageData.stats.map((stat, i) => (
              <Flex
                key={i}
                direction="column"
                gap="2"
                paddingX="20"
                paddingY="20"
                horizontal="center"
                align="center"
                style={{
                  borderLeft: i === 0 ? "none" : "1px solid var(--neutral-alpha-weak)",
                }}
              >
                <Text variant="heading-strong-l">{stat.value}</Text>
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  {stat.label}
                </Text>
              </Flex>
            ))}
          </Grid>
        </Flex>

        {/* ───────────── 2. PROBLEM ───────────── */}
        <Flex
          direction="column"
          fillWidth
          horizontal="center"
          gap="32"
          style={{ maxWidth: "980px" }}
        >
          <SectionIntro
            heading={pageData.problem.heading}
            subheading={pageData.problem.subheading}
          />

          <Grid fillWidth columns="2" s={{ columns: 1 }} gap="16">
            {pageData.problem.pains.map((pain, i) => (
              <Flex
                key={i}
                gap="16"
                padding="24"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                vertical="start"
              >
                <Flex
                  padding="8"
                  radius="m"
                  background="neutral-alpha-weak"
                  style={{ flexShrink: 0 }}
                >
                  <Icon name={pain.icon} size="s" onBackground="neutral-medium" />
                </Flex>
                <Flex direction="column" gap="4">
                  <Heading as="h3" variant="heading-strong-s">
                    {pain.title}
                  </Heading>
                  <Text variant="body-default-s" onBackground="neutral-medium">
                    {pain.desc}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Grid>

          <Text variant="body-strong-l" align="center" wrap="balance">
            {pageData.problem.closer}
          </Text>
        </Flex>

        {/* ───────────── 3. DEMO ───────────── */}
        <Flex
          id="demo"
          direction="column"
          fillWidth
          horizontal="center"
          gap="24"
          style={{ maxWidth: "980px" }}
        >
          <SectionIntro
            badge={pageData.demo.badge}
            heading={pageData.demo.heading}
            subheading={pageData.demo.subheading}
          />

          <Card
            fillWidth
            radius="xl"
            background="surface"
            border="neutral-alpha-weak"
            padding="16"
            direction="column"
            gap="16"
          >
            <Flex
              fillWidth
              radius="l"
              background="neutral-weak"
              style={{ aspectRatio: "16 / 9", overflow: "hidden" }}
            >
              <iframe
                src={pageData.demo.youtubeEmbedUrl}
                title={pageData.demo.videoTitle}
                loading="lazy"
                style={{ width: "100%", height: "100%", border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Flex>

            {/* Connected pipeline, not five separate boxes */}
            <Flex
              direction="column"
              padding="24"
              gap="20"
              background="page"
              radius="m"
              border="neutral-alpha-weak"
            >
              <div className="sa-flow">
                {pageData.demo.pipelineSteps.map((item, i) => (
                  <div className="sa-flow-node" key={i}>
                    <div className="sa-flow-dot">
                      <Text variant="body-strong-s" onBackground="brand-medium">
                        {i + 1}
                      </Text>
                    </div>
                    <Flex direction="column" gap="2">
                      <Text variant="body-strong-s">{item.title}</Text>
                      <Text variant="body-default-xs" onBackground="neutral-weak">
                        {item.desc}
                      </Text>
                    </Flex>
                  </div>
                ))}
              </div>
            </Flex>

            {/* Before / after, instead of a sentence about it */}
            <Flex
              direction="column"
              gap="12"
              padding="20"
              radius="m"
              background="page"
              border="neutral-alpha-weak"
            >
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {pageData.demo.beforeAfter.label}
              </Text>
              <Flex fillWidth gap="16" vertical="center" wrap>
                <Flex direction="column" gap="2" style={{ minWidth: "120px" }}>
                  <Text
                    variant="display-strong-xs"
                    onBackground="neutral-weak"
                    style={{ textDecoration: "line-through", opacity: 0.6 }}
                  >
                    {pageData.demo.beforeAfter.before.value}
                  </Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {pageData.demo.beforeAfter.before.label}
                  </Text>
                </Flex>

                <Text variant="heading-strong-m" onBackground="neutral-weak">
                  →
                </Text>

                <Flex direction="column" gap="2" style={{ minWidth: "120px" }}>
                  <Text variant="display-strong-xs" onBackground="brand-medium">
                    {pageData.demo.beforeAfter.after.value}
                  </Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {pageData.demo.beforeAfter.after.label}
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            <Flex horizontal="between" vertical="center" wrap gap="16" paddingX="8" paddingY="4">
              <Text variant="body-strong-m" wrap="balance">
                Want this running on your leads by the end of the month?
              </Text>
              <Button
                variant="primary"
                size="m"
                label="Book a 15-min call"
                href={contact.bookingUrl}
                prefixIcon="calendar"
              />
            </Flex>
          </Card>
        </Flex>

        {/* ───────────── 4. SERVICES ───────────── */}
        <Flex
          direction="column"
          fillWidth
          horizontal="center"
          gap="32"
          style={{ maxWidth: "980px" }}
        >
          <SectionIntro
            heading={pageData.services.heading}
            subheading={pageData.services.subheading}
          />

          <Grid fillWidth columns="2" s={{ columns: 1 }} gap="20">
            {pageData.services.items.map((service, i) => (
              <Card
                key={i}
                direction="column"
                gap="12"
                padding="24"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
              >
                <Flex
                  padding="12"
                  radius="m"
                  background="brand-alpha-weak"
                  style={{ width: "fit-content" }}
                >
                  <Icon name={service.icon} size="m" onBackground="brand-medium" />
                </Flex>
                <Heading as="h3" variant="heading-strong-s">
                  {service.title}
                </Heading>
                <Text variant="body-strong-s" onBackground="brand-medium">
                  {service.outcome}
                </Text>
                <Text variant="body-default-s" onBackground="neutral-medium">
                  {service.description}
                </Text>
              </Card>
            ))}
          </Grid>
        </Flex>

        {/* ───────────── 5. FIT / NOT FIT ───────────── */}
        <Flex
          direction="column"
          fillWidth
          horizontal="center"
          gap="32"
          style={{ maxWidth: "980px" }}
        >
          <SectionIntro
            heading={pageData.fit.heading}
            subheading={pageData.fit.subheading}
          />

          <Grid fillWidth columns="2" s={{ columns: 1 }} gap="20">
            <Card
              direction="column"
              gap="16"
              padding="24"
              radius="l"
              background="surface"
              border="brand-alpha-medium"
            >
              <Heading as="h3" variant="heading-strong-s">
                {pageData.fit.goodFit.title}
              </Heading>
              <Flex direction="column" gap="12">
                {pageData.fit.goodFit.points.map((p, i) => (
                  <ListRow key={i} text={p} positive />
                ))}
              </Flex>
            </Card>

            <Card
              direction="column"
              gap="16"
              padding="24"
              radius="l"
              background="page"
              border="neutral-alpha-weak"
            >
              <Heading as="h3" variant="heading-strong-s">
                {pageData.fit.badFit.title}
              </Heading>
              <Flex direction="column" gap="12">
                {pageData.fit.badFit.points.map((p, i) => (
                  <ListRow key={i} text={p} positive={false} />
                ))}
              </Flex>
            </Card>
          </Grid>
        </Flex>

        {/* ───────────── 6. ENGINEERING EDGE ───────────── */}
        <Flex
          fillWidth
          horizontal="center"
          style={{ position: "relative", maxWidth: "980px" }}
        >
          <Background
            position="absolute"
            mask={background.edge.mask}
            gradient={background.edge.gradient}
            dots={background.edge.dots}
            grid={{
        display: true,
        opacity: 30,
        color: "neutral-alpha-weak",
        width: "var(--static-space-32)",
        height: "var(--static-space-32)",
      }}
            lines={background.edge.lines}
          />

          <Card
            fillWidth
            direction="column"
            padding="32"
            radius="xl"
            background="surface"
            border="neutral-alpha-weak"
            gap="24"
          >
            <Flex direction="column" gap="12">
              <Badge
                id="edge-badge"
                title={pageData.edge.badge}
                arrow={false}
                effect={false}
                paddingX="12"
                paddingY="4"
                background="brand-alpha-weak"
                onBackground="brand-medium"
                textVariant="label-default-s"
              />
              <Heading as="h2" variant="heading-strong-m" wrap="balance">
                {pageData.edge.heading}
              </Heading>
              <Text
                variant="body-default-m"
                onBackground="neutral-medium"
                style={{ maxWidth: "66ch" }}
              >
                {pageData.edge.subheading}
              </Text>
            </Flex>

            <Flex
              direction="column"
              radius="m"
              background="page"
              border="neutral-alpha-weak"
              overflow="hidden"
            >
              <Grid
                fillWidth
                columns="3"
                s={{ columns: 1 }}
                paddingX="20"
                paddingY="12"
                style={{ borderBottom: "1px solid var(--neutral-alpha-weak)" }}
              >
                <Text variant="label-strong-s">When this happens</Text>
                <Text variant="label-strong-s" onBackground="neutral-weak">
                  {pageData.edge.comparison.leftLabel}
                </Text>
                <Text variant="label-strong-s" onBackground="brand-medium">
                  {pageData.edge.comparison.rightLabel}
                </Text>
              </Grid>

              {pageData.edge.comparison.rows.map((row, i) => (
                <Grid
                  key={i}
                  fillWidth
                  columns="3"
                  s={{ columns: 1 }}
                  gap="8"
                  paddingX="20"
                  paddingY="16"
                  style={{
                    borderBottom:
                      i < pageData.edge.comparison.rows.length - 1
                        ? "1px solid var(--neutral-alpha-weak)"
                        : "none",
                  }}
                >
                  <Text variant="body-strong-s">{row.situation}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {row.left}
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-strong">
                    {row.right}
                  </Text>
                </Grid>
              ))}
            </Flex>

            <Flex wrap gap="8">
              {pageData.edge.techStack.map((tech, i) => (
                <Badge
                  key={i}
                  id={`tech-badge-${i}`}
                  title={tech}
                  arrow={false}
                  effect={false}
                  paddingX="12"
                  paddingY="4"
                  background="neutral-alpha-weak"
                  onBackground="neutral-strong"
                  textVariant="label-default-s"
                />
              ))}
            </Flex>
          </Card>
        </Flex>

        {/* ───────────── 7. PROCESS ───────────── */}
        <Flex
          direction="column"
          fillWidth
          horizontal="center"
          gap="32"
          style={{ maxWidth: "980px" }}
        >
          <SectionIntro
            heading={pageData.process.heading}
            subheading={pageData.process.subheading}
          />

          <Grid fillWidth columns="5" m={{ columns: 2 }} s={{ columns: 1 }} gap="16">
            {pageData.process.steps.map((item, i) => (
              <Card
                key={i}
                direction="column"
                padding="20"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                gap="8"
              >
                <Flex horizontal="between" vertical="center" gap="8">
                  <Text variant="heading-strong-m" onBackground="brand-medium">
                    {i + 1}
                  </Text>
                  <Badge
                    id={`process-when-${i}`}
                    title={item.when}
                    arrow={false}
                    effect={false}
                    paddingX="8"
                    paddingY="2"
                    background="neutral-alpha-weak"
                    onBackground="neutral-medium"
                    textVariant="label-default-s"
                  />
                </Flex>
                <Heading as="h3" variant="heading-strong-s">
                  {item.title}
                </Heading>
                <Text variant="body-default-s" onBackground="neutral-medium">
                  {item.desc}
                </Text>
              </Card>
            ))}
          </Grid>
        </Flex>

        {/* ───────────── 8. PACKAGES ───────────── */}
        <Flex
          direction="column"
          fillWidth
          horizontal="center"
          gap="32"
          style={{ maxWidth: "1040px" }}
        >
          <SectionIntro
            heading={pageData.packages.heading}
            subheading={pageData.packages.subheading}
          />

          <Grid fillWidth columns="3" m={{ columns: 1 }} gap="20">
            {pageData.packages.tiers.map((tier, i) => (
              <Card
                key={i}
                direction="column"
                gap="16"
                padding="24"
                radius="l"
                background={tier.featured ? "surface" : "page"}
                border={tier.featured ? "brand-alpha-medium" : "neutral-alpha-weak"}
              >
                <Flex direction="column" gap="4">
                  <Flex horizontal="between" vertical="center" gap="8">
                    <Heading as="h3" variant="heading-strong-s">
                      {tier.name}
                    </Heading>
                    {tier.featured && (
                      <Badge
                        id={`tier-badge-${i}`}
                        title="Most chosen"
                        arrow={false}
                        effect={false}
                        paddingX="8"
                        paddingY="2"
                        background="brand-alpha-weak"
                        onBackground="brand-medium"
                        textVariant="label-default-s"
                      />
                    )}
                  </Flex>
                  <Text variant="display-strong-xs">{tier.price}</Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {tier.priceNote}
                  </Text>
                </Flex>

                <Text variant="body-default-s" onBackground="neutral-medium">
                  {tier.summary}
                </Text>

                <Flex direction="column" gap="8" style={{ flexGrow: 1 }}>
                  {tier.includes.map((inc, j) => (
                    <ListRow key={j} text={inc} positive />
                  ))}
                </Flex>

                <Button
                  variant={tier.featured ? "primary" : "secondary"}
                  size="m"
                  label={tier.cta}
                  href={ctaHref(tier.ctaType)}
                  fillWidth
                />
              </Card>
            ))}
          </Grid>

          <Text
            variant="body-default-s"
            onBackground="neutral-weak"
            align="center"
            wrap="balance"
            style={{ maxWidth: "620px" }}
          >
            {pageData.packages.footnote}
          </Text>
        </Flex>

        {/* ───────────── 9. CASE STUDIES ───────────── */}
        <Flex
          direction="column"
          fillWidth
          horizontal="center"
          gap="32"
          style={{ maxWidth: "980px" }}
        >
          <SectionIntro
            heading={pageData.caseStudies.heading}
            subheading={pageData.caseStudies.subheading}
          />

          <Grid fillWidth columns="3" m={{ columns: 2 }} s={{ columns: 1 }} gap="20">
            {pageData.caseStudies.items.map((study, i) => (
              <Card
                key={i}
                direction="column"
                gap="12"
                padding="24"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
              >
                <Badge
                  id={`study-badge-${i}`}
                  title={study.badge}
                  arrow={false}
                  effect={false}
                  paddingX="8"
                  paddingY="4"
                  background="neutral-alpha-weak"
                  onBackground="neutral-medium"
                  textVariant="label-default-s"
                />
                <Text variant="heading-strong-m" onBackground="brand-medium">
                  {study.metric}
                </Text>
                <Heading as="h3" variant="heading-strong-s">
                  {study.title}
                </Heading>
                <Text variant="body-default-s" onBackground="neutral-medium">
                  {study.description}
                </Text>
                <Flex gap="4" wrap paddingTop="4">
                  {study.tags.map((tag, j) => (
                    <Badge
                      key={j}
                      id={`study-${i}-tag-${j}`}
                      title={tag}
                      arrow={false}
                      effect={false}
                      paddingX="8"
                      paddingY="2"
                      background="neutral-alpha-weak"
                      onBackground="neutral-strong"
                      textVariant="code-default-s"
                    />
                  ))}
                </Flex>
              </Card>
            ))}
          </Grid>
        </Flex>

        {/* ───────────── 10. TESTIMONIALS (auto-hides when empty) ───────────── */}
        {pageData.testimonials.length > 0 && (
          <Flex
            direction="column"
            fillWidth
            horizontal="center"
            gap="32"
            style={{ maxWidth: "980px" }}
          >
            <SectionIntro heading="What clients said afterwards" />
            <Grid fillWidth columns="3" m={{ columns: 1 }} gap="20">
              {pageData.testimonials.map((t, i) => (
                <Card
                  key={i}
                  direction="column"
                  gap="16"
                  padding="24"
                  radius="l"
                  background="surface"
                  border="neutral-alpha-weak"
                >
                  <Text variant="body-default-m">{t.quote}</Text>
                  <Flex direction="column" gap="2">
                    <Text variant="body-strong-s">{t.name}</Text>
                    <Text variant="body-default-xs" onBackground="neutral-weak">
                      {t.role}
                    </Text>
                  </Flex>
                </Card>
              ))}
            </Grid>
          </Flex>
        )}

        {/* ───────────── 11. FAQ ───────────── */}
        <Flex
          direction="column"
          fillWidth
          horizontal="center"
          gap="24"
          style={{ maxWidth: "820px" }}
        >
          <SectionIntro heading={pageData.faq.heading} />
          <Flex direction="column" gap="12" fillWidth>
            {pageData.faq.items.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </Flex>
        </Flex>

        {/* ───────────── 12. FINAL CTA ───────────── */}
        <Flex
          fillWidth
          horizontal="center"
          style={{ position: "relative", maxWidth: "820px" }}
        >
          <Background
            position="absolute"
            mask={background.finalCta.mask}
            gradient={{
        display: true,
        opacity: 40,
        x: 50,
        y: 100,
        width: 110,
        height: 80,
        tilt: 0,
        colorStart: "brand-background-medium",
        colorEnd: "static-transparent",
      }}
            dots={background.finalCta.dots}
            grid={background.finalCta.grid}
            lines={{
        display: true,
        opacity: 20,
        color: "neutral-alpha-weak",
        size: "24",
        thickness: 1,
        angle: 45,
      }}
          />

          <Card
            fillWidth
            direction="column"
            padding="40"
            radius="xl"
            background="surface"
            border="brand-alpha-medium"
            gap="24"
            horizontal="center"
            align="center"
          >
            <Heading as="h2" variant="heading-strong-l" align="center" wrap="balance">
              {pageData.finalCta.heading}
            </Heading>

            <Text
              variant="body-default-l"
              onBackground="neutral-medium"
              align="center"
              wrap="balance"
              style={{ maxWidth: "56ch" }}
            >
              {pageData.finalCta.subheading}
            </Text>

            <Flex
              direction="column"
              gap="12"
              padding="20"
              radius="m"
              background="page"
              border="neutral-alpha-weak"
              fillWidth
              style={{ maxWidth: "520px" }}
            >
              {pageData.finalCta.steps.map((step, i) => (
                <Flex key={i} gap="12" vertical="start">
                  <Text
                    variant="body-strong-s"
                    onBackground="brand-medium"
                    style={{ flexShrink: 0 }}
                  >
                    {i + 1}
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-medium">
                    {step}
                  </Text>
                </Flex>
              ))}
            </Flex>

            <Flex gap="12" wrap horizontal="center">
              <Button
                variant="primary"
                size="l"
                label="Message me on WhatsApp"
                href={whatsappUrl}
                prefixIcon="messageSquare"
              />
              <Button
                variant="secondary"
                size="l"
                label="Pick a time instead"
                href={contact.bookingUrl}
                prefixIcon="calendar"
              />
            </Flex>

            <Text variant="body-default-xs" onBackground="neutral-weak" align="center">
              {pageData.footerNote}
            </Text>
          </Card>
        </Flex>
      </Flex>

      {/* ───────────── STICKY MOBILE CTA ───────────── */}
      <div className="sa-mobile-bar">
        <Button
          variant="primary"
          size="m"
          label="WhatsApp"
          href={whatsappUrl}
          prefixIcon="messageSquare"
          fillWidth
        />
        <Button
          variant="secondary"
          size="m"
          label="Book a call"
          href={contact.bookingUrl}
          prefixIcon="calendar"
          fillWidth
        />
      </div>
    </>
  );
}












