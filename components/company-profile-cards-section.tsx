import CompanyProfileCard from '@/components/company-profile-card';
import { mock } from '@/lib/mock';

export default function CompanyProfileCardsSection() {
  const companies = mock;

  return (
    <section className='mix-w-[900px] to-card-section mb-2 flex min-h-24 w-[1240px] flex-wrap items-center justify-start gap-4 overflow-y-auto rounded-xl bg-gradient-to-t from-white p-2'>
      {companies.map((company, i) => (
        <CompanyProfileCard key={i} company={company} />
      ))}
    </section>
  );
}
