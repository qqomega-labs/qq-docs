import React from "react";
import TOC from "@theme-original/TOC";
import type TOCType from "@theme/TOC";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof TOCType>;

// Simple passthrough - no wrapper div, just render the original TOC
export default function TOCWrapper(props: Props): React.JSX.Element {
  return <TOC {...props} />;
}
