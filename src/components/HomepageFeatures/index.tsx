import clsx from "clsx";

import Heading from "@theme/Heading";

import styles from "./styles.module.css";
import { motion } from "framer-motion";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Open Source",
    Svg: require("@site/static/img/features/openSource.svg").default,
    description: (
      <>
        Receipt Wrangler is a free, open-source project built by and for the
        community.
      </>
    ),
  },
  {
    title: "Sharing with Others",
    Svg: require("@site/static/img/features/collaborate.svg").default,
    description: (
      <>
        Share receipts within Receipt Wrangler for seamless expense tracking and
        collaboration – no more confusion about who owes what.
      </>
    ),
  },
  {
    title: "AI Powered",
    Svg: require("@site/static/img/features/aiScan.svg").default,
    description: (
      <>
        Receipt Wrangler's AI features streamline your expense management by
        automatically extracting the data you need from your receipts.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
        const yMin = Math.random() % -10;
        const yMax = Math.random() % 10;
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100" // Example SVG size
          initial={{ y: 0 }}
          animate={{ y: [-5, yMax, -5] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        >
          <Svg className={styles.featureSvg} role="img"/>
        </motion.svg>
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-5, yMax, -5] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      >
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
