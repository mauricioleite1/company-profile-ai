import CompanyProfileCardsSection from '@/components/company-profile-cards-section';
import CompanyProfileInputSection from '@/components/company-profile-input-section';

export default function Home() {
  return (
    <main className='flex h-[100dvh] w-[100dvw] flex-col items-center justify-start gap-y-24'>
      <CompanyProfileInputSection />
      <CompanyProfileCardsSection />
    </main>
  );
}
