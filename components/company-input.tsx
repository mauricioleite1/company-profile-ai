'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import useInputStore from '@/stores/use-input-store';

const protocols = ['https://', 'http://'] as const;

export default function CompanyInput() {
  const [protocol, setProtocol] = useState<'https://' | 'http://'>('https://');
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { domain, setDomain } = useInputStore();

  const handleInputChange = (raw: string) => {
    const lower = raw.toLowerCase();

    if (lower.startsWith('https://')) {
      setProtocol('https://');
      setDomain(raw.replace(/^https?:\/\//, ''));
    } else if (lower.startsWith('http://')) {
      setProtocol('http://');
      setDomain(raw.replace(/^https?:\/\//, ''));
    } else {
      setDomain(raw);
    }
  };

  const fullUrl = `${protocol}${domain}`;

  const isValidUrl = () => {
    try {
      new URL(`${protocol}${domain}`);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = () => {
    if (!isValidUrl()) return;
    setIsSubmitting(true);
    console.log('Enviando URL:', fullUrl);
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <div className='relative w-140 min-w-100'>
      <div className='absolute top-1/2 left-2 z-10 -translate-y-1/2'>
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className='text-muted-foreground hover:bg-accent flex cursor-pointer items-center gap-1 rounded-md px-2 py-1 text-sm'
        >
          {protocol}
          <ChevronDown className='h-4 w-4' />
        </div>

        {isOpen && (
          <div className='bg-popover absolute left-0 mt-1 w-max rounded-md border shadow-md'>
            {protocols.map((p) => (
              <div
                key={p}
                onClick={() => {
                  setProtocol(p);
                  setIsOpen(false);
                }}
                className={clsx(
                  'hover:bg-accent cursor-pointer px-3 py-1 text-sm',
                  p === protocol && 'bg-muted',
                )}
              >
                {p}
              </div>
            ))}
          </div>
        )}
      </div>

      <Input
        placeholder='mccarren.ai'
        type='text'
        value={domain}
        onChange={(e) => handleInputChange(e.target.value)}
        className='bg-input pr-32 pl-24 placeholder:text-neutral-300 hover:border-neutral-200 focus-visible:border-neutral-200'
      />

      <Button
        onClick={handleSubmit}
        disabled={!isValidUrl() || isSubmitting}
        className='absolute top-1/2 right-2 w-12 -translate-y-1/2 bg-emerald-400 text-white ease-in-out hover:bg-emerald-500/80 disabled:cursor-not-allowed disabled:opacity-50'
      >
        <ArrowRight />
      </Button>
    </div>
  );
}
