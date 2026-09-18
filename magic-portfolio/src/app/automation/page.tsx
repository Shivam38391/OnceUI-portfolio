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








/* ==========================================================================
   CONFIG: EDIT ALL YOUR DETAILS HERE
   ========================================================================== */
export const pageData = {
  // 1. Contact & Booking
  contact: {
    whatsappNumber: "919796276986", // Country code + number without '+' or dashes
    whatsappPrefillMessage: "Hi Shivam, I want to discuss automating our business workflow.",
    bookingUrl: "https://calendly.com/shivamsharma38391", // Cal.com or Calendly link
  },
// https://calendly.com/shivamsharma38391  // 2. Hero Section
  hero: {
    badge: "Custom Business Automation & AI Systems",
    heading: "Automate the work that slows your business down.",
    subheading:
      "I build AI-powered business automations that capture leads, automate follow-ups, connect your existing tools, and eliminate hours of repetitive manual work every week.",
    techSummary: "Powered by n8n · Generative AI · WhatsApp Cloud API · Node.js & Python",
  },

  // 3. Demo Section & Video
  demo: {
    badge: "Featured Automation",
    heading: "Never forget to follow up with a lead again.",
    subheading:
      "Leads go cold within 15 minutes. See how this system responds instantly on WhatsApp.",
    // Replace with your YouTube Embed URL (format: https://www.youtube-nocookie.com/embed/VIDEO_ID)
    youtubeEmbedUrl: "https://www.youtube.com/embed/_G6AtdWil3Y?si=SQ8FyhKwrGBp1Bp-",






    pipelineSteps: [
      { step: "01", title: "Lead Form Submitted", desc: "Meta ads, landing page, or Google Sheet" },
      { step: "02", title: "n8n Processing", desc: "Instant parsing & data validation" },
      { step: "03", title: "Team Notification", desc: "Internal alerts sent via Telegram/Slack" },
      { step: "04", title: "WhatsApp Message", desc: "Personalized follow-up sent automatically" },
      { step: "05", title: "CRM Updated", desc: "Status tracked & recorded in database" },
    ],
  },

  // 4. "What Can I Automate?" Services
  services: [
    {
      icon: "userCheck",
      title: "Lead Management",
      description:
        "Capture incoming leads from social ads, landing pages, or contact forms. Normalize customer details, route them to your sales team, and trigger instantaneous auto-replies.",
    },
    {
      icon: "messageSquare",
      title: "WhatsApp Automation",
      description:
        "Connect official WhatsApp Cloud APIs directly with your forms, CRMs, payment gateways, and databases. Deliver payment confirmations, invoices, appointment reminders, and follow-ups.",
    },
    {
      icon: "cpu",
      title: "AI Business Workflows",
      description:
        "Integrate Gemini and OpenAI to classify unstructured customer queries, extract key information from PDF invoices or receipts, and draft context-aware responses automatically.",
    },
    {
      icon: "layers",
      title: "Custom Business Software",
      description:
        "When off-the-shelf automation platforms hit limits, I build custom backend microservices, SQL databases, and internal dashboards tailored to your exact company operations.",
    },
  ],

  // 5. Engineering Advantage
  technicalEdge: {
    badge: "Engineering Advantage",
    heading: "I don’t just connect tools. I build the entire system.",
    subheading:
      "Most freelancers only drag blocks inside Zapier. When custom APIs, secure webhook authentications, database schemas, or edge cases arise, they get stuck. As a full-stack engineer, I build the entire pipeline from frontend to database.",
    pipelineNodes: [
      "Business Front / Ads",
      "n8n Orchestrator",
      "APIs & LLMs",
      "Node.js / Python Services",
      "PostgreSQL DB",
      "Next.js Dashboard",
    ],
    techStack: [
      "n8n Workflows",
      "WhatsApp Business API",
      "OpenAI & Google Gemini",
      "Node.js & Express",
      "Python & FastAPI",
      "Next.js & React",
      "PostgreSQL",
      "Razorpay / Webhooks",
      "Custom REST APIs",
    ],
  },

  // 6. 5-Step Process
  process: [
    {
      step: "01",
      title: "Discover",
      desc: "We analyze your team's current manual tasks, time leaks, and tooling friction.",
    },
    {
      step: "02",
      title: "Design",
      desc: "I blueprint the high-ROI automated pipeline and specify data schemas.",
    },
    {
      step: "03",
      title: "Build",
      desc: "I build the n8n workflows, test API endpoints, and script edge-case handling.",
    },
    {
      step: "04",
      title: "Deploy",
      desc: "We launch in staging, run mock leads, and test with your live environment.",
    },
    {
      step: "05",
      title: "Optimize",
      desc: "Automated logging, error alerting, and ongoing refinement as your volume grows.",
    },
  ],

  // 7. Audit Offer & Pilot Pricing
  offer: {
    badge: "Start with Zero Risk",
    heading: "Start with a Business Automation Audit",
    subheading:
      "Book a 15-minute consultation. Tell me what your team currently executes manually every day. I will pinpoint at least 2 automation opportunities that will save you hours of work each week.",
    priceTag: "Small pilot projects start from ₹12,000",
    priceSubtext: "Transparent pricing based on complexity and integrations. No recurring retainers required to start.",
  },

  // 8. Case Studies
  caseStudies: [
    {
      badge: "Automation Pipeline",
      title: "WhatsApp Lead Follow-Up Engine",
      description:
        "Automated response workflow that cut initial lead engagement time from 4 hours to under 30 seconds, maintaining a 99.8% delivery rate.",
      tags: ["n8n", "WhatsApp API", "Webhooks"],
    },
    {
      badge: "AI Product",
      title: "Drafty — AI Agent Assistant",
      description:
        "ReAct-pattern AI product that executes complex query drafting, multi-step analysis, and structured extraction.",
      tags: ["React", "Gemini API", "ReAct Agent"],
    },
    {
      badge: "Full-Stack System",
      title: "Production Notification & Cron Engine",
      description:
        "High-reliability notification backend operating on cron routines, handling hundreds of scheduled alerts without third-party queue bloat.",
      tags: ["Node.js", "Python", "PostgreSQL"],
    },
  ],
};

/* ==========================================================================
   MAIN PAGE COMPONENT
   ========================================================================== */
export default function AutomationPage() {
  const whatsappUrl = `https://wa.me/${pageData.contact.whatsappNumber}?text=${encodeURIComponent(
    pageData.contact.whatsappPrefillMessage
  )}`;

  return (
    <Flex
      as="main"
      direction="column"
      fillWidth
      horizontal="center"
      paddingX="m"
      paddingY="xl"
      gap="64"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
         ───────────────────────────────────────────────────────────── */}
      <Flex
        direction="column"
        fillWidth
        horizontal="center"
        align="center"
        gap="24"
        style={{ maxWidth: "860px", textAlign: "center" }}
      >
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

        {/* Once UI Letter-by-Letter Animated Reveal
        <FadingLettersFx
          text={pageData.hero.heading}
          animationState="entering"
          variant="display-strong-s"
          align="center"
        /> */}


<Heading
  as="h1"
  variant="display-strong-s"
  wrap="balance"
  align="center"
>
  {pageData.hero.heading}
</Heading>
        <Text
          variant="body-default-l"
          onBackground="neutral-medium"
          wrap="balance"
          align="center"
        >
          {pageData.hero.subheading}
        </Text>

        <Flex gap="16" wrap horizontal="center" paddingTop="8">
          <Button
            variant="primary"
            size="l"
            label="Book a Free 15-Min Call"
            href={pageData.contact.bookingUrl}
            suffixIcon="calendar"
          />
          <Button
            variant="secondary"
            size="l"
            label="Watch Demo ↓"
            href="#demo"
          />
        </Flex>

        <Text variant="label-default-s" onBackground="neutral-weak">
          {pageData.hero.techSummary}
        </Text>
      </Flex>

      {/* ─────────────────────────────────────────────────────────────
          2. DEMO VIDEO & PIPELINE
         ───────────────────────────────────────────────────────────── */}
      <Flex
        id="demo"
        direction="column"
        fillWidth
        horizontal="center"
        gap="24"
        style={{ maxWidth: "980px" }}
      >
        <Flex direction="column" horizontal="center" align="center" gap="8">
          <Badge
            id="demo-badge"
            title={pageData.demo.badge}
            arrow={false}
            effect={false}
            paddingX="12"
            paddingY="4"
            background="neutral-alpha-weak"
            onBackground="neutral-medium"
            textVariant="label-default-s"
          />
          <Heading as="h2" variant="heading-strong-l" align="center">
            {pageData.demo.heading}
          </Heading>
          <Text
            variant="body-default-m"
            onBackground="neutral-medium"
            align="center"
          >
            {pageData.demo.subheading}
          </Text>
        </Flex>

        <Card
          fillWidth
          radius="xl"
          background="surface"
          border="neutral-alpha-weak"
          padding="16"
          direction="column"
          gap="16"
        >
          {/* Responsive 16:9 Video Frame */}
          <Flex
            fillWidth
            radius="l"
            background="neutral-weak"
            horizontal="center"
            vertical="center"
            style={{
              aspectRatio: "16 / 9",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <iframe
              src={pageData.demo.youtubeEmbedUrl}
              title="WhatsApp Lead Follow-up Automation Demo"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Flex>

          {/* Workflow Architecture Grid: 5 columns on desktop, 2 on tablet, 1 on mobile */}
          <Flex
            direction="column"
            padding="16"
            gap="16"
            background="page"
            radius="m"
            border="neutral-alpha-weak"
          >
            <Text variant="label-strong-m">
              WhatsApp Lead Follow-Up Architecture
            </Text>

            <Grid
              fillWidth
              columns="5"
              m={{ columns: 2 }}
              s={{ columns: 1 }}
              gap="12"
            >
              {pageData.demo.pipelineSteps.map((item, idx) => (
                <Flex
                  key={idx}
                  direction="column"
                  padding="12"
                  gap="4"
                  radius="s"
                  background="surface"
                  border="neutral-alpha-weak"
                >
                  <Text variant="label-strong-s" onBackground="brand-medium">
                    {item.step}
                  </Text>
                  <Text variant="body-strong-s">{item.title}</Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {item.desc}
                  </Text>
                </Flex>
              ))}
            </Grid>
          </Flex>

          {/* Callout action */}
          <Flex
            horizontal="space-between"
            vertical="center"
            wrap
            gap="16"
            paddingX="12"
            paddingY="8"
          >
            <Text variant="body-strong-m">
              Want this exact system deployed for your business?
            </Text>
            <Button
              variant="primary"
              size="m"
              label="Book a Demo Call →"
              href={pageData.contact.bookingUrl}
            />
          </Flex>
        </Card>
      </Flex>

      {/* ─────────────────────────────────────────────────────────────
          3. WHAT CAN I AUTOMATE? (SERVICES GRID)
         ───────────────────────────────────────────────────────────── */}
      <Flex
        direction="column"
        fillWidth
        horizontal="center"
        gap="32"
        style={{ maxWidth: "980px" }}
      >
        <Flex direction="column" horizontal="center" align="center" gap="8">
          <Badge
            id="services-badge"
            title="Services & Solutions"
            arrow={false}
            effect={false}
            paddingX="12"
            paddingY="4"
            background="neutral-alpha-weak"
            onBackground="neutral-medium"
            textVariant="label-default-s"
          />
          <Heading as="h2" variant="heading-strong-l" align="center">
            What can I automate for your team?
          </Heading>
          <Text
            variant="body-default-m"
            onBackground="neutral-medium"
            align="center"
          >
            Remove repetitive manual steps so you can focus on high-value operations.
          </Text>
        </Flex>

        {/* 2 columns on desktop/tablet, 1 on mobile */}
        <Grid
          fillWidth
          columns="2"
          s={{ columns: 1 }}
          gap="20"
        >
          {pageData.services.map((service, index) => (
            <Card
              key={index}
              direction="column"
              gap="12"
              padding="24"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
            >
              <Icon name={service.icon} size="m" />
              <Heading as="h3" variant="heading-strong-s">
                {service.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">
                {service.description}
              </Text>
            </Card>
          ))}
        </Grid>
      </Flex>

      {/* ─────────────────────────────────────────────────────────────
          4. TECHNICAL EDGE
         ───────────────────────────────────────────────────────────── */}
      <Card
        fillWidth
        direction="column"
        padding="32"
        radius="xl"
        background="surface"
        border="neutral-alpha-weak"
        gap="28"
        style={{ maxWidth: "980px" }}
      >
        <Flex direction="column" gap="8">
          <Badge
            id="edge-badge"
            title={pageData.technicalEdge.badge}
            arrow={false}
            effect={false}
            paddingX="12"
            paddingY="4"
            background="brand-alpha-weak"
            onBackground="brand-medium"
            textVariant="label-default-s"
          />
          <Heading as="h2" variant="heading-strong-m">
            {pageData.technicalEdge.heading}
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-medium">
            {pageData.technicalEdge.subheading}
          </Text>
        </Flex>

        {/* End-to-end data pipeline representation */}
        <Flex
          direction="column"
          padding="20"
          radius="m"
          background="page"
          border="neutral-alpha-weak"
          gap="16"
        >
          <Text variant="label-default-s" onBackground="neutral-weak">
            END-TO-END ARCHITECTURE
          </Text>
          <Flex wrap vertical="center" gap="12" horizontal="space-between">
            {pageData.technicalEdge.pipelineNodes.map((node, i, arr) => (
              <React.Fragment key={i}>
                <Flex
                  paddingX="16"
                  paddingY="8"
                  radius="s"
                  background="surface"
                  border="neutral-medium"
                >
                  <Text variant="body-strong-s">{node}</Text>
                </Flex>
                {i < arr.length - 1 && (
                  <Text variant="body-strong-m" onBackground="neutral-weak">
                    →
                  </Text>
                )}
              </React.Fragment>
            ))}
          </Flex>
        </Flex>

        {/* Tech Stack Badges */}
        <Flex wrap gap="8">
          {pageData.technicalEdge.techStack.map((tech, idx) => (
            <Badge
              key={idx}
              id={`tech-badge-${idx}`}
              title={tech}
              arrow={false}
              effect={false}
              paddingX="12"
              paddingY="6"
              background="neutral-alpha-weak"
              onBackground="neutral-strong"
              textVariant="label-default-s"
            />
          ))}
        </Flex>
      </Card>

      {/* ─────────────────────────────────────────────────────────────
          5. IMPLEMENTATION PROCESS
         ───────────────────────────────────────────────────────────── */}
      <Flex
        direction="column"
        fillWidth
        horizontal="center"
        gap="32"
        style={{ maxWidth: "980px" }}
      >
        <Flex direction="column" horizontal="center" align="center" gap="8">
          <Badge
            id="process-badge"
            title="How We Work"
            arrow={false}
            effect={false}
            paddingX="12"
            paddingY="4"
            background="neutral-alpha-weak"
            onBackground="neutral-medium"
            textVariant="label-default-s"
          />
          <Heading as="h2" variant="heading-strong-l" align="center">
            From manual headache to autopilot in 5 steps
          </Heading>
          <Text
            variant="body-default-m"
            onBackground="neutral-medium"
            align="center"
          >
            A disciplined, risk-free process designed to preserve business continuity.
          </Text>
        </Flex>

        {/* 5 columns on desktop, 2 on tablet, 1 on mobile */}
        <Grid
          fillWidth
          columns="5"
          m={{ columns: 2 }}
          s={{ columns: 1 }}
          gap="16"
        >
          {pageData.process.map((item) => (
            <Card
              key={item.step}
              direction="column"
              padding="20"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              gap="8"
            >
              <Text variant="display-strong-s" onBackground="brand-medium">
                {item.step}
              </Text>
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

      {/* ─────────────────────────────────────────────────────────────
          6. AUDIT OFFER & PILOT PRICING
         ───────────────────────────────────────────────────────────── */}
      <Card
        fillWidth
        direction="column"
        padding="36"
        radius="xl"
        background="surface"
        border="brand-alpha-medium"
        gap="24"
        style={{ maxWidth: "860px", textAlign: "center" }}
        horizontal="center"
        align="center"
      >
        <Badge
          id="offer-badge"
          title={pageData.offer.badge}
          arrow={false}
          effect={false}
          paddingX="16"
          paddingY="6"
          background="brand-alpha-weak"
          onBackground="brand-medium"
          textVariant="label-default-s"
        />

        <Heading as="h2" variant="heading-strong-l" align="center">
          {pageData.offer.heading}
        </Heading>

        <Text
          variant="body-default-l"
          onBackground="neutral-medium"
          style={{ maxWidth: "640px" }}
          align="center"
        >
          {pageData.offer.subheading}
        </Text>

        <Flex
          direction="column"
          padding="16"
          radius="m"
          background="page"
          border="neutral-alpha-weak"
          gap="4"
          style={{ maxWidth: "540px", width: "100%" }}
        >
          <Text variant="label-strong-m">{pageData.offer.priceTag}</Text>
          <Text variant="body-default-xs" onBackground="neutral-medium">
            {pageData.offer.priceSubtext}
          </Text>
        </Flex>

        <Flex gap="16" wrap horizontal="center">
          <Button
            variant="primary"
            size="l"
            label="Schedule Free 15-Min Audit"
            href={pageData.contact.bookingUrl}
            suffixIcon="calendar"
          />
          <Button
            variant="secondary"
            size="l"
            label="Message on WhatsApp"
            href={whatsappUrl}
            prefixIcon="messageSquare"
          />
        </Flex>
      </Card>

      {/* ─────────────────────────────────────────────────────────────
          7. CASE STUDIES / SYSTEMS BUILT
         ───────────────────────────────────────────────────────────── */}
      <Flex
        direction="column"
        fillWidth
        horizontal="center"
        gap="32"
        style={{ maxWidth: "980px" }}
      >
        <Flex direction="column" horizontal="center" align="center" gap="8">
          <Badge
            id="cases-badge"
            title="Proven Systems"
            arrow={false}
            effect={false}
            paddingX="12"
            paddingY="4"
            background="neutral-alpha-weak"
            onBackground="neutral-medium"
            textVariant="label-default-s"
          />
          <Heading as="h2" variant="heading-strong-l" align="center">
            Case Studies & Systems Built
          </Heading>
        </Flex>

        {/* 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <Grid
          fillWidth
          columns="3"
          m={{ columns: 2 }}
          s={{ columns: 1 }}
          gap="20"
        >
          {pageData.caseStudies.map((study, idx) => (
            <Card
              key={idx}
              direction="column"
              gap="12"
              padding="24"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
            >
              <Badge
                id={`study-badge-${idx}`}
                title={study.badge}
                arrow={false}
                effect={false}
                paddingX="10"
                paddingY="4"
                background="brand-alpha-weak"
                onBackground="brand-medium"
                textVariant="label-default-s"
              />
              <Heading as="h3" variant="heading-strong-s">
                {study.title}
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-medium">
                {study.description}
              </Text>
              <Flex gap="6" wrap paddingTop="4">
                {study.tags.map((tag, tagIdx) => (
                  <Badge
                    key={tagIdx}
                    id={`study-${idx}-tag-${tagIdx}`}
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
    </Flex>
  );
}