import { PlusCircle, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

interface CompanyProfileCardPOCProps {
  poc: string;
}

export default function CompanyProfileCardPOC({
  poc,
}: CompanyProfileCardPOCProps) {
  const [showPocButton, setShowPocButton] = useState(false);

  const [pocValue, setPocValue] = useState(poc);
  const [pocInput, setPocInput] = useState('');
  const [showPocInput, setShowPocInput] = useState(false);

  const pocInputContainerRef = useRef<HTMLDivElement | null>(null);

  const pocInputRef = useRef<HTMLInputElement | null>(null);

  const handlePocMouseOver = () => setShowPocButton(true);
  const handlePocMouseLeave = () => setShowPocButton(false);

  const handleAddPoc = () => {
    const trimmed = pocInput.trim();
    if (!trimmed) return;
    setPocValue(trimmed);
    setPocInput('');
    setShowPocInput(false);
  };

  const handleRemovePoc = () => {
    setPocValue('');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pocInputContainerRef.current &&
        !pocInputContainerRef.current.contains(event.target as Node)
      ) {
        setShowPocInput(false);
        setPocInput('');
      }
    };

    if (showPocInput) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPocInput]);

  return (
    <div
      className='flex items-center gap-x-2 border-b border-b-green-300 py-2'
      onMouseOver={handlePocMouseOver}
      onMouseLeave={handlePocMouseLeave}
    >
      <h4 className='text-xs font-semibold text-green-400'>POC</h4>

      {pocValue ? (
        <div className='flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-sm font-semibold text-neutral-600 shadow-sm'>
          <span>{pocValue}</span>
          <button
            onClick={handleRemovePoc}
            className='text-neutral-500 hover:text-red-500'
            aria-label='Remover POC'
          >
            <X size={12} />
          </button>
        </div>
      ) : showPocInput ? (
        <div ref={pocInputContainerRef} className='flex gap-1'>
          <Input
            ref={pocInputRef}
            className='h-5 w-48 text-sm'
            value={pocInput}
            onChange={(e) => setPocInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleAddPoc();
            }}
          />
          <Button
            size='sm'
            className='h-5 px-2 py-0 text-xs'
            onClick={handleAddPoc}
          >
            Add
          </Button>
        </div>
      ) : (
        showPocButton && (
          <Button
            variant='ghost'
            className='h-4 w-4 cursor-pointer rounded bg-transparent p-0 text-[11px] text-neutral-600'
            onClick={() => {
              setShowPocInput(true);
              setTimeout(() => pocInputRef.current?.focus(), 50);
            }}
          >
            <PlusCircle size={14} />
          </Button>
        )
      )}
    </div>
  );
}
