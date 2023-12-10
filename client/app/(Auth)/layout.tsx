import React from 'react';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full h-[100vh] overflow-x-hidden">{children}</div>;
}
