import React from 'react';
import Navigation from './navigation';

const Layout = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);

export default Layout;
