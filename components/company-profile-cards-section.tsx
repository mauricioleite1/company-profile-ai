'use client';

import CompanyProfileCard from '@/components/company-profile-card';
import { mock } from '@/lib/mock';
import useDataStore from '@/stores/use-data-store';
import { useEffect } from 'react';

export default function CompanyProfileCardsSection() {
  const { data, setData } = useDataStore();
  const companies = mock;

  useEffect(() => {
    setData(companies);
  }, [companies]);

  return (
    <section className='from-background flex min-h-24 w-[860px] min-w-[900px] flex-wrap items-center justify-start gap-6 overflow-y-auto rounded-xl bg-gradient-to-t to-transparent p-1 pb-12'>
      {data.map((company, i) => (
        <CompanyProfileCard key={i} company={company} />
      ))}
    </section>
  );
}
