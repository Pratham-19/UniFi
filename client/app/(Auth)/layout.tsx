import React from 'react';
import AuthNavbar from '../_components/Navbar/LoginNavbar';
import Footer from '../_components/Footer';
import MaxWidthWrapper from '../_components/MaxWidthWrapper';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full h-[100vh] overflow-x-hidden">{children}</div>;
}
