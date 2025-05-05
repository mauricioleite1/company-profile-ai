import CompanyInput from '@/components/company-input';

export default function Home() {
  return (
    <main className='flex flex-col h-[100dvh] w-[100dvw] items-center justify-center'>
      <h1>Company Profile AI</h1>
      <div className='min-w-80 w-200'>
        <CompanyInput />
      </div>
    </main>
  );
}
