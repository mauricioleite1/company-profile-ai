'use client';

import { useEffect, useState } from 'react';
import useDataStore from '@/stores/use-data-store';

export default function useSortData() {
  const { data } = useDataStore();
  const [sortedData, setSortedData] = useState([...data]);

  useEffect(() => {
    setSortedData([...data].reverse());
  }, [data]);

  return {
    sortedData,
  };
}
