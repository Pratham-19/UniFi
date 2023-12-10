import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Chain {
  id: string;
  token: string;
  shortName: string;
  label: string;
  rpcUrl: string;
  blockExplorerUrl: string;
  color: string;
  isStripePaymentsEnabled: boolean;
  isMoneriumPaymentsEnabled: boolean;
  faucetUrl?: string;
  transactionServiceUrl?: string;
}
