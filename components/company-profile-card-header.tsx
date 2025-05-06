import { Globe } from 'lucide-react';

interface CompanyProfileCardHeaderProps {
  companyName: string;
  companyDescription?: string;
}

export default function CompanyProfileCardHeader({
  companyName,
  companyDescription = '',
}: CompanyProfileCardHeaderProps) {
  return (
    <header className='flex w-full flex-col items-start justify-start gap-2'>
      <div className='flex flex-col items-start justify-start gap-y-2'>
        <div className='rounded-full bg-emerald-200 p-1'>
          <Globe size={16} className='text-card' />
        </div>
        <h3 className='line-clamp-1 text-base font-semibold'>{companyName}</h3>
      </div>

      <p className='line-clamp-3 text-sm text-neutral-400'>
        {companyDescription}
      </p>
    </header>
  );
}
