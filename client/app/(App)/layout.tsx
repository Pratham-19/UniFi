import React from 'react';
import Footer from '../_components/Footer';
import { Navbar } from '../_components';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-[100vh] overflow-x-hidden ">
      <Navbar />
      {children}
      {/* <Footer className="" /> */}
    </div>
  );
}
