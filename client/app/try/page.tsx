'use client';
import React from 'react';
import { useQuery, init } from '@airstack/airstack-react';
import { GetAddressFromEns, GetNFTs } from '../_lib/airstack_queries';

init(process.env.NEXT_PUBLIC_AIRSTACK_API_KEY ?? '');

const Page = () => {
  const { data, loading, error } = useQuery(GetNFTs, {
    resolvedAddress: '0x2acdf6a2f893687ccd341a1ad7e27102b665d8c4'
  });
  const { data: getPoap } = useQuery(GetP, {
    resolvedAddress: '0x2acdf6a2f893687ccd341a1ad7e27102b665d8c4'
  });
  console.log(data, loading, error);

  return <div>Page</div>;
};

export default Page;
