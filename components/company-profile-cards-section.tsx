'use client';

import CompanyProfileCardContainer from '@/components/company-profile-card-container';
import useDataStore from '@/stores/use-data-store';

export default function CompanyProfileCardsSection() {
  const { data } = useDataStore();

  return (
    <section className='from-background flex min-h-24 w-[860px] min-w-[900px] flex-wrap items-center justify-start gap-6 overflow-y-auto rounded-xl bg-gradient-to-t to-transparent p-1 pb-12'>
      {data.reverse().map((company, i) => {
        if (
          company.company_name === '' ||
          /not found/i.test(company.company_name)
        )
          return null;
        return <CompanyProfileCardContainer key={i} company={company} />;
      })}
    </section>
  );
}
