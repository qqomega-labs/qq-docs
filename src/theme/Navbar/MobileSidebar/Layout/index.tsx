import React, {type ReactNode} from 'react';
import Layout from '@theme-original/Navbar/MobileSidebar/Layout';
import type LayoutType from '@theme/Navbar/MobileSidebar/Layout';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  return (
    <>
      <Layout {...props} />
    </>
  );
}
