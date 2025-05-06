import CompanyInput from '@/components/company-input';
import CompanyProfileCardsSection from '@/components/company-profile-cards-section';
import InputShortcut from '@/components/input-shortcut';

export default function Home() {
  return (
    <main className='flex h-[100dvh] w-[100dvw] flex-col items-center justify-start gap-y-24'>
      <section className='mt-80 flex flex-col items-center justify-center gap-y-10'>
        <div className='flex w-full flex-col items-center justify-center'>
          <h1 className='bg-gradient-to-br from-neutral-900 via-neutral-900 to-emerald-500 bg-clip-text text-4xl font-bold text-transparent'>
            Company Profile AI
          </h1>

          <p className='text-neutral-400'>
            A company profile generator powered by AI
          </p>
        </div>
        <CompanyInput />

        <div className='flex items-center justify-center gap-x-2 text-neutral-400'>
          <p className='text-xs'>Try out</p>
          <div className='flex items-center justify-center gap-x-2'>
            <InputShortcut text='www.mccarren.ai' />
            <InputShortcut text='www.google.com' />
            <InputShortcut text='chatgpt.com' />
          </div>
        </div>
      </section>
      <CompanyProfileCardsSection />
    </main>
  );
}
