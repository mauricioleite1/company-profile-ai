import { ICompany } from '@/types/company';

interface CompanyProfileCardProps {
  company: ICompany;
}

export default function CompanyProfileCard({
  company,
}: CompanyProfileCardProps) {
  return (
    <div className='bg-card flex h-100 min-w-150 flex-1 rounded-lg p-4'>
      <div className='flex h-full w-full flex-col items-start justify-start gap-2'>
        <div className='flex w-full flex-col items-start justify-start gap-2'>
          <h3 className='line-clamp-1 text-base font-semibold'>
            {company.company_name}
          </h3>

          <p className='line-clamp-3 text-sm text-neutral-400'>
            {company.company_description}
          </p>
        </div>
      </div>
    </div>
  );
}
