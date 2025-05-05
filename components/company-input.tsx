'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export default function CompanyInput() {
  return (
    <div className='relative w-120 min-w-80'>
      <Input
        placeholder='Insert a company url..'
        type='text'
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <Button className='absolute top-1/2 right-2 -translate-y-1/2'>
        <ArrowUp />
      </Button>
    </div>
  );
}
