import { ICompany } from '@/types/company';

interface CompanyProfileCardKeywordsProps {
  company: ICompany;
}

export default function CompanyProfileCardKeywords({
  company,
}: CompanyProfileCardKeywordsProps) {
  return (
    <div className='h-full w-full'>
      {/*<h4>Keywords:</h4>*/}

      <ul className='flex flex-wrap items-center justify-start gap-2 overflow-x-auto p-1'>
        <h4 className='text-xs font-semibold text-neutral-600'>Keywords</h4>
        {company.tier1_keywords.map((keyword, i) => (
          <li key={i} className='rounded-full bg-neutral-200 px-3'>
            <span className='text-xs whitespace-nowrap'>{keyword}</span>
          </li>
        ))}
        {company.tier2_keywords.map((keyword, i) => (
          <li key={i} className='rounded-full bg-neutral-100 px-3'>
            <span className='text-xs whitespace-nowrap'>{keyword}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
