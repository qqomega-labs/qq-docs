import type { ReactNode } from "react";
// import clsx from "clsx"; // NOTE: backup
// import Link from "@docusaurus/Link"; // NOTE: backup
import { Redirect } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from "@site/src/components/HomepageFeatures"; // NOTE: backup
// import Heading from "@theme/Heading"; // NOTE: backup
// import styles from "./index.module.css"; // NOTE: backup

// NOTE: backup
// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx("hero hero--primary", styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro"
//           >
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="QQ Omega combines AI-powered agents to score and rank cryptocurrency projects across fundamentals, tokenomics, on-chain metrics, and market sentiment."
    >
      {/* NOTE: backup */}
      {/* <HomepageHeader /> */}
      <main>
        {/* NOTE: backup */}
        {/* <HomepageFeatures /> */}
        <Redirect to="/docs/category/about-qq-omega" />;
      </main>
    </Layout>
  );
}
