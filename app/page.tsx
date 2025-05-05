import CompanyInput from '@/components/company-input';
import CompanyProfileCardsSection from '@/components/company-profile-cards-section';

export default function Home() {
  return (
    <main className='flex h-[100dvh] w-[100dvw] flex-col items-center justify-center gap-y-24'>
      <section className='flex flex-col items-center justify-center gap-y-8'>
        <div className='flex w-full flex-col items-center justify-center'>
          <h1 className='bg-gradient-to-br from-neutral-900 via-neutral-900 to-emerald-500 bg-clip-text text-4xl font-bold text-transparent'>
            Company Profile AI
          </h1>

          <p className='text-neutral-400'>
            A company profile generator powered by AI
          </p>
        </div>
        <CompanyInput />
      </section>

      <CompanyProfileCardsSection />
    </main>
  );
}
