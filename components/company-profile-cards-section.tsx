import CompanyProfileCard from '@/components/company-profile-card';
import { mock } from '@/lib/mock';

export default function CompanyProfileCardsSection() {
  const companies = mock;

  return (
    <section className='mix-w-[900px] to-card-section flex min-h-24 w-[1440px] flex-wrap items-center justify-start gap-2 overflow-y-auto rounded-xl bg-gradient-to-b from-neutral-300 p-2'>
      {companies.map((company, i) => (
        <CompanyProfileCard key={i} company={company} />
      ))}
    </section>
  );
}
