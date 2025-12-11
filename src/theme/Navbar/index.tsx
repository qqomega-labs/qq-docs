import React from 'react';
import Navbar from '@theme-original/Navbar';
import type NavbarType from '@theme/Navbar';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof NavbarType>;

// Simple passthrough - no wrapper div, just render the original Navbar
export default function NavbarWrapper(props: Props): JSX.Element {
  return <Navbar {...props} />;
}
