import { ICompany } from '@/types/company';
import CompanyProfileCardKeywords from '@/components/company-profile-card-keywords';
import { Globe } from 'lucide-react';

interface CompanyProfileCardProps {
  company: ICompany;
}

export default function CompanyProfileCard({
  company,
}: CompanyProfileCardProps) {
  return (
    <div className='bg-card flex h-100 min-w-150 flex-1 flex-col items-center justify-between gap-y-4 rounded-lg p-4 shadow'>
      <header className='flex w-full flex-col items-start justify-start'>
        <div className='flex w-full flex-col items-start justify-start gap-2'>
          <div className='flex flex-col items-start justify-start gap-y-2'>
            <div className='rounded-full bg-emerald-200 p-1'>
              <Globe size={16} className='text-card' />
            </div>
            <h3 className='line-clamp-1 text-base font-semibold'>
              {company.company_name}
            </h3>
          </div>

          <p className='line-clamp-5 text-sm text-neutral-400'>
            {company.company_description}
          </p>
        </div>
      </header>
      <footer className='w-full'>
        <CompanyProfileCardKeywords company={company} />
      </footer>
    </div>
  );
}
