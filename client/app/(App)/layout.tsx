import React from 'react';
import { Navbar, Footer } from '../_components';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen  overflow-x-hidden">
      <Navbar />
      {children}
      <Footer className="bottom-0" />
    </div>
  );
}
