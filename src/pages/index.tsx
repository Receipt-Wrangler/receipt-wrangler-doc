import clsx from "clsx";

import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttonContainer}>
          <div className={clsx(styles.buttons, styles.buttonMargin)}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/getting-started"
            >
              Get started
            </Link>
          </div>
          <div className={styles.button}>
            <Link
              className="button button--secondary button--lg"
              to="https://demo.receiptwrangler.io"
            >
              Try it out
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileAppSection() {
  return (
    <section className={styles.mobileApp}>
      <div className="container">
        <Heading as="h2" className={styles.mobileAppHeading}>
          Get the Mobile App
        </Heading>
        <p className={styles.mobileAppDescription}>
          Take Receipt Wrangler on the go. Scan receipts, manage expenses, and
          stay organized from your phone.
        </p>
        <div className={styles.mobileAppButtons}>
          <Link
            className="button button--primary button--lg"
            to="https://play.google.com/store/apps/details?id=io.receiptwrangler&hl=en_US"
          >
            Android
          </Link>
          <Link
            className="button button--primary button--lg"
            to="https://apps.apple.com/us/app/receipt-wrangler/id6475374843"
          >
            iOS
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <MobileAppSection />
      </main>
    </Layout>
  );
}
