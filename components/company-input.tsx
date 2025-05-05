'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUp } from 'lucide-react';

export default function CompanyInput() {
  return (
    <div className='relative w-140 min-w-100'>
      <Input
        placeholder='Insert a company url..'
        type='text'
        onChange={(e) => {
          console.log(e.target.value);
        }}
        className='pr-44'
      />
      <Button className='absolute top-1/2 right-2 -translate-y-1/2 bg-emerald-500 text-white ease-in-out hover:bg-emerald-500/80'>
        <ArrowUp />
        Generate Profile
      </Button>
    </div>
  );
}
