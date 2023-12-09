'use client';
import React from 'react';
import { useQuery, init } from '@airstack/airstack-react';
import { GetAddressFromEns } from '../_lib/airstack_queries';

init(process.env.NEXT_PUBLIC_AIRSTACK_API_KEY ?? '');

const Page = () => {
  const { data, loading, error } = useQuery(GetAddressFromEns, {
    name: 'megabyte0x.eth'
  });
  console.log(data, loading, error);

  return <div>Page</div>;
};

export default Page;
