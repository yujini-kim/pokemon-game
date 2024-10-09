"use client"

import NavBar from '@components/NavBar';
import FilterBox from '@components/FilterBox';
import { CoinProvider } from '@context/CoinContext'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();


export default function MainPage() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
          <CoinProvider>
            <NavBar />
            <FilterBox />
          </CoinProvider> 
      </QueryClientProvider>
    </div>
  );
}