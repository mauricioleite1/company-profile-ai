'use client';

import CompanyProfileCardContainer from '@/components/company-profile-card-container';
import useSortData from '@/hooks/use-sort-data';

export default function CompanyProfileCardsSection() {
  const { sortedData } = useSortData();

  return (
    <section className='from-background flex min-h-24 w-[860px] min-w-[900px] flex-wrap items-center justify-start gap-6 overflow-y-auto rounded-xl bg-gradient-to-t to-transparent p-1 pb-12'>
      {sortedData.map((company, i) => {
        if (company.company_name === '' || company.company_name === 'Not found')
          return null;
        return <CompanyProfileCardContainer key={i} company={company} />;
      })}
    </section>
  );
}
