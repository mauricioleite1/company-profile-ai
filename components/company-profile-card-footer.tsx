interface CompanyProfileCardFooterProps {
  companyTier1Keywords: string[];
  companyTier2Keywords: string[];
}

export default function CompanyProfileCardFooter({
  companyTier1Keywords,
  companyTier2Keywords,
}: CompanyProfileCardFooterProps) {
  return (
    <footer className='h-full w-full'>
      <ul className='flex flex-wrap items-center justify-start gap-2 overflow-x-auto p-1'>
        <h4 className='text-xs font-semibold text-neutral-600'>Keywords</h4>
        {companyTier1Keywords.map((keyword: string, i: number) => (
          <li key={i} className='rounded-full bg-neutral-200 px-3'>
            <span className='text-xs whitespace-nowrap'>{keyword}</span>
          </li>
        ))}
        {companyTier2Keywords.map((keyword: string, i: number) => (
          <li key={i} className='rounded-full bg-neutral-100 px-3'>
            <span className='text-xs whitespace-nowrap'>{keyword}</span>
          </li>
        ))}
      </ul>
    </footer>
  );
}
