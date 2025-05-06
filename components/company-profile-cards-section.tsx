import CompanyProfileCard from '@/components/company-profile-card';
import { mock } from '@/lib/mock';

export default function CompanyProfileCardsSection() {
  const companies = mock;

  return (
    <section className='from-background flex min-h-24 w-[860px] min-w-[900px] flex-wrap items-center justify-start gap-6 overflow-y-auto rounded-xl bg-gradient-to-t to-transparent p-1 pb-12'>
      {companies.map((company, i) => (
        <CompanyProfileCard key={i} company={company} />
      ))}
    </section>
  );
}
