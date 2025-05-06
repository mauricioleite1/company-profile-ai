'use client';

import { splitByComma } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Fragment, useState } from 'react';
import { Plus, PlusCircle } from 'lucide-react';

interface CompanyProfileCardServiceLineProps {
  serviceLine: string;
}

export default function CompanyProfileCardServiceLine({
  serviceLine,
}: CompanyProfileCardServiceLineProps) {
  const [showButton, setShowButton] = useState(false);
  const processedServiceLineArray = splitByComma(serviceLine);

  const handleMouseOver = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  return (
    <div
      className='flex h-full w-full flex-col gap-y-2 rounded-md bg-neutral-50 p-5'
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <h4 className='text-xs font-semibold text-neutral-400'>Service lines</h4>

      <div className='flex flex-col gap-y-2'>
        <ul className='flex flex-wrap gap-1'>
          {processedServiceLineArray.map((serviceLine, index) => {
            const isLast = index === processedServiceLineArray.length - 1;
            return (
              <Fragment key={index}>
                <li className='rounded-full text-sm font-semibold text-neutral-600'>
                  {serviceLine}
                  {!isLast ? ',' : '.'}
                </li>
                {isLast && showButton && (
                  <Button
                    variant='ghost'
                    className='h-4 w-fit cursor-pointer rounded bg-transparent p-0 text-[11px] text-green-300 hover:bg-green-300 hover:text-white'
                  >
                    <PlusCircle size={14} />
                  </Button>
                )}
              </Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
