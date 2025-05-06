'use client';

import { Fragment, useState } from 'react';

interface CompanyProfileCardEmailsProps {
  emails: string;
  poc: string;
}

export default function CompanyProfileCardEmails({
  emails,
  poc,
}: CompanyProfileCardEmailsProps) {
  const [showButton, setShowButton] = useState(false);

  const handleMouseOver = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  return (
    <div
      className='flex h-full w-full flex-col gap-y-6 rounded-md bg-green-100/60 p-5'
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex flex-col gap-y-2 border-b border-b-green-300'>
        <h4 className='text-xs font-semibold text-green-400'>E-mails</h4>

        <span className='rounded-full text-sm font-semibold text-neutral-600'>
          {emails}
        </span>
      </div>

      <div className='flex flex-col gap-y-2 border-b border-b-green-300'>
        <h4 className='text-xs font-semibold text-green-400'>POC</h4>

        <span className='rounded-full text-sm font-semibold text-neutral-600'>
          {poc}
        </span>
      </div>
    </div>
  );
}
