'use client';

import { AnonAadhaarProvider } from 'anon-aadhaar-react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnonAadhaarProvider _appId={process.env.NEXT_PUBLIC_APP_ID ?? ''}>
      {children}
    </AnonAadhaarProvider>
  );
};

export default Providers;
