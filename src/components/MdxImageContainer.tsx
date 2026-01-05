import { type ReactNode } from "react";

/**
 * Custom mdx image wrapper.
 */
export default function MdxImageContainer({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto 2rem auto",
        padding: "0 1rem",
      }}
    >
      {children}
    </div>
  );
}
