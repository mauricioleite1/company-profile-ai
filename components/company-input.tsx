'use client';

import { ArrowRight, ChevronDown, Loader } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn, protocols } from '@/lib/utils';
import useInput from '@/hooks/use-input';
import useInputStore from '@/stores/use-input-store';
import { IHttpProtocol } from '@/types';
import { fadeInAlternative } from '@/lib/motion';

export default function CompanyInput() {
  const {
    error,
    protocol,
    setProtocol,
    isOpen,
    setIsOpen,
    isPending,
    handleInputChange,
    handleSubmit,
    isValidUrl,
  } = useInput();

  const { domain } = useInputStore();

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
            {protocols.map((p: IHttpProtocol) => (
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
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            return handleSubmit();
          }
        }}
        className={cn(
          'bg-input py-6 pr-32 pl-24 placeholder:text-neutral-300 hover:border-neutral-200 focus-visible:border-neutral-200',
          error &&
            'border-rose-300 hover:border-rose-200 focus-visible:border-rose-300',
        )}
      />
      <span className='absolute -bottom-4 text-xs text-rose-400'>{error}</span>

      <motion.div
        variants={fadeInAlternative}
        initial='hidden'
        animate='visible'
      >
        <Button
          onClick={handleSubmit}
          disabled={!isValidUrl() || isPending}
          className='absolute top-1/2 right-2 w-12 -translate-y-1/2 bg-emerald-400 text-white ease-in-out hover:bg-emerald-500/80 disabled:cursor-not-allowed disabled:opacity-50'
        >
          {!isPending ? <ArrowRight /> : <Loader className='animate-spin' />}
        </Button>
      </motion.div>
    </div>
  );
}
