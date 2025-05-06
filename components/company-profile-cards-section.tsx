'use client';

import CompanyProfileCardContainer from '@/components/company-profile-card-container';
import useDataStore from '@/stores/use-data-store';

export default function CompanyProfileCardsSection() {
  const { data } = useDataStore();

  return (
    <section className='from-background mb-1 flex min-h-24 flex-wrap items-start justify-start gap-6 overflow-y-auto rounded-xl bg-gradient-to-t to-transparent p-1 px-4 md:w-[860px] md:min-w-[400px]'>
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
