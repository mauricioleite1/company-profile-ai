import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

interface CompanyProfileCardServiceLineAddProps {
  handleAddClick: () => void;
}

export default function CompanyProfileCardServiceLineAdd({
  handleAddClick,
}: CompanyProfileCardServiceLineAddProps) {
  return (
    <Button
      variant='ghost'
      className='ml-2 h-4 w-4 cursor-pointer rounded bg-transparent p-0 text-[11px] text-neutral-600'
      onClick={handleAddClick}
    >
      <PlusCircle size={14} />
    </Button>
  );
}
