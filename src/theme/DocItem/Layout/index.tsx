import React from "react";
import Layout from "@theme-original/DocItem/Layout";
import type LayoutType from "@theme/DocItem/Layout";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof LayoutType>;

// Simple passthrough - no wrapper div, just render the original Layout
export default function LayoutWrapper(props: Props): React.JSX.Element {
  return <Layout {...props} />;
}
