import CompanyInput from '@/components/company-input';

export default function Home() {
  return (
    <main className='flex h-[100dvh] w-[100dvw] flex-col items-center justify-center gap-y-8'>
      <h1>Company Profile AI</h1>
      <CompanyInput />
    </main>
  );
}
