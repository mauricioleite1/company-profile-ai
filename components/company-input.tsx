'use client';

import { Input } from '@/components/ui/input';

export default function CompanyInput() {
  return (
    <Input
      placeholder='Insert a company name..'
      type='text'
      onChange={(e) => {
        console.log(e.target.value);
      }}
    />
  );
}
