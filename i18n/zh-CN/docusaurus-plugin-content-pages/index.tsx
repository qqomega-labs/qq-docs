import type { ReactNode } from "react";
import { Redirect } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="QQ Omega 结合 AI 驱动的代理，从基本面、代币经济学、链上指标和市场情绪等方面对加密货币项目进行评分和排名。"
    >
      <main>
        <Redirect to="/zh-CN/docs/category/about-qq-omega" />;
      </main>
    </Layout>
  );
}
