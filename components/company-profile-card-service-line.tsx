import { splitByComma } from '@/lib/utils';

interface CompanyProfileCardServiceLineProps {
  serviceLine: string;
}

export default function CompanyProfileCardServiceLine({
  serviceLine,
}: CompanyProfileCardServiceLineProps) {
  const processedServiceLineArray = splitByComma(serviceLine);

  return (
    <div className='flex h-full w-full flex-col gap-y-2 rounded-md bg-blue-100/60 p-2'>
      <h4 className='text-xs font-semibold text-blue-400'>Service lines</h4>

      <ul className='flex flex-wrap gap-1'>
        {processedServiceLineArray.map((serviceLine, index) => {
          const isLast = index === processedServiceLineArray.length - 1;
          return (
            <li
              key={index}
              className='rounded-full text-xs font-semibold text-neutral-600'
            >
              {serviceLine}
              {!isLast ? ',' : '.'}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
