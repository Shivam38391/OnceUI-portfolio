/* ==========================================================================
   AutomationCta — drop this on your developer homepage, below your projects.

   Two exports:
     <AutomationCta />         full card, for mid-page
     <AutomationCtaCompact />  one-line strip, for a footer or sidebar

   Both link to the automation page. Set the route in ctaConfig.href.
   ========================================================================== */

import { Background, Badge, Button, Card, Flex, Heading, Text } from "@once-ui-system/core";

const ctaConfig = {
  href: "/automation",

  badge: "Client work",
  heading: "I also build automation systems for businesses",
  description:
    "Production n8n and WhatsApp Cloud API pipelines — lead routing, follow-ups, document parsing, and the backend services behind them. Separate page, with the architecture and a walkthrough.",
  buttonLabel: "See the automation work",

  // Mini pipeline shown on the right — echoes the diagram on the target page
  flow: ["Lead", "n8n", "API", "WhatsApp", "DB"],

  // Compact variant
  compact: {
    label: "Building automation for a business?",
    linkLabel: "See that side of my work",
  },
};

/* ---------- Shared styles ---------- */

const ctaStyles = `
  .sa-cta-flow { display: flex; align-items: center; gap: 0; flex-wrap: nowrap; }
  .sa-cta-node {
    display: flex; flex-direction: column; align-items: center; gap: 6px;
    position: relative; padding: 0 2px;
  }
  .sa-cta-dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: var(--brand-solid-medium, var(--neutral-alpha-strong));
    position: relative; z-index: 1;
  }
  .sa-cta-rail {
    width: 28px; height: 2px; border-radius: 2px;
    background: linear-gradient(90deg,
      var(--neutral-alpha-medium) 0%,
      var(--brand-solid-medium, var(--neutral-alpha-strong)) 50%,
      var(--neutral-alpha-medium) 100%);
    background-size: 300% 100%;
    animation: sa-cta-sweep 3.2s linear infinite;
    margin-bottom: 18px;
  }
  .sa-cta-rail:nth-of-type(2) { animation-delay: .25s; }
  .sa-cta-rail:nth-of-type(3) { animation-delay: .5s; }
  .sa-cta-rail:nth-of-type(4) { animation-delay: .75s; }
  @keyframes sa-cta-sweep {
    from { background-position: 0% 0; }
    to   { background-position: 100% 0; }
  }
  @media (prefers-reduced-motion: reduce) {
    .sa-cta-rail { animation: none; background: var(--neutral-alpha-medium); }
  }
`;

/* ---------- Full card ---------- */

export function AutomationCta() {
  return (
    <>
      <style>{ctaStyles}</style>

      <Flex fillWidth horizontal="center" style={{ position: "relative" }}>
        <Background
          position="absolute"
          mask={{ x: 70, y: 50, radius: 70 }}
          gradient={{
            display: true,
            opacity: 30,
            x: 80,
            y: 50,
            width: 70,
            height: 120,
            tilt: 0,
            colorStart: "brand-background-strong",
            colorEnd: "static-transparent",
          }}
          dots={{ display: false }}
          grid={{ display: false }}
          lines={{ display: false }}
        />

        <Card
          fillWidth
          direction="row"
          s={{ direction: "column" }}
          gap="32"
          padding="32"
          radius="xl"
          background="surface"
          border="brand-alpha-medium"
          vertical="center"
        >
          <Flex direction="column" gap="12" style={{ flexGrow: 1 }}>
            <Badge
              id="automation-cta-badge"
              title={ctaConfig.badge}
              arrow={false}
              effect={false}
              paddingX="12"
              paddingY="4"
              background="brand-alpha-weak"
              onBackground="brand-medium"
              textVariant="label-default-s"
            />

            <Heading as="h2" variant="heading-strong-m" wrap="balance">
              {ctaConfig.heading}
            </Heading>

            <Text
              variant="body-default-m"
              onBackground="neutral-medium"
              style={{ maxWidth: "58ch" }}
            >
              {ctaConfig.description}
            </Text>

            <Flex paddingTop="8">
              <Button
                variant="primary"
                size="m"
                label={ctaConfig.buttonLabel}
                href={ctaConfig.href}
              />
            </Flex>
          </Flex>

          {/* Mini pipeline — visual link to the page you're sending them to */}
          <Flex
            padding="20"
            radius="l"
            background="page"
            border="neutral-alpha-weak"
            horizontal="center"
            vertical="center"
            style={{ flexShrink: 0 }}
          >
            <div className="sa-cta-flow">
              {ctaConfig.flow.map((node, i) => (
                <div key={node} style={{ display: "contents" }}>
                  {i > 0 && <div className="sa-cta-rail" />}
                  <div className="sa-cta-node">
                    <div className="sa-cta-dot" />
                    <Text variant="body-default-xs" onBackground="neutral-weak">
                      {node}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </Flex>
        </Card>
      </Flex>
    </>
  );
}

/* ---------- Compact strip ---------- */

export function AutomationCtaCompact() {
  return (
    <Flex
      fillWidth
      horizontal="between"
      vertical="center"
      wrap
      gap="16"
      paddingX="20"
      paddingY="16"
      radius="l"
      background="page"
      border="neutral-alpha-weak"
    >
      <Text variant="body-default-s" onBackground="neutral-medium">
        {ctaConfig.compact.label}
      </Text>
      <Button
        variant="secondary"
        size="s"
        label={ctaConfig.compact.linkLabel}
        href={ctaConfig.href}
      />
    </Flex>
  );
}

export default AutomationCta;