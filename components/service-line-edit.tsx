import { Button } from '@/components/ui/button';
import { SquarePen, X } from 'lucide-react';

interface ServiceLineEditProps {
  handleEditServiceLine: (index: number) => void;
  handleRemoveServiceLine: (index: number) => void;
  line: string;
  index: number;
}

export default function ServiceLineEdit({
  handleEditServiceLine,
  handleRemoveServiceLine,
  line,
  index,
}: ServiceLineEditProps) {
  return (
    <>
      <Button
        variant='ghost'
        onClick={() => handleEditServiceLine(index)}
        className='h-fit max-w-fit cursor-pointer bg-transparent p-0 px-0 text-neutral-500 hover:text-blue-500'
        aria-label={`Editar ${line}`}
      >
        <SquarePen size={16} />
      </Button>

      <button
        onClick={() => handleRemoveServiceLine(index)}
        className='cursor-pointer text-neutral-500 hover:text-red-500'
        aria-label={`Remover ${line}`}
      >
        <X size={16} />
      </button>
    </>
  );
}
