'use client';

import { splitByComma } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Fragment, useEffect, useRef, useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface CompanyProfileCardServiceLineProps {
  serviceLine: string;
}

export default function CompanyProfileCardServiceLine({
  serviceLine,
}: CompanyProfileCardServiceLineProps) {
  const [showButton, setShowButton] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [serviceLines, setServiceLines] = useState(() =>
    splitByComma(serviceLine),
  );

  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputContainerRef = useRef<HTMLLIElement | null>(null);

  const handleMouseOver = () => setShowButton(true);
  const handleMouseLeave = () => setShowButton(false);

  const handleAddClick = () => setShowInput(true);

  const handleAddServiceLine = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    setServiceLines((prev) => [...prev, trimmed]);
    setInputValue('');
    setShowInput(false);
  };

  // Detectar clique fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputContainerRef.current &&
        !inputContainerRef.current.contains(event.target as Node)
      ) {
        setShowInput(false);
      }
    };

    if (showInput) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showInput]);

  return (
    <div
      className='flex h-full w-full flex-col gap-y-2 rounded-md bg-neutral-50 p-5'
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <h4 className='text-xs font-semibold text-neutral-400'>Service lines</h4>

      <div className='flex flex-col gap-y-2'>
        <ul className='flex flex-wrap items-center gap-1'>
          {serviceLines.map((line, index) => {
            const isLast = index === serviceLines.length - 1;
            return (
              <Fragment key={index}>
                <li className='rounded-full text-sm font-semibold text-neutral-600'>
                  {line}
                  {!isLast ? ',' : '.'}
                </li>
              </Fragment>
            );
          })}

          {showButton && !showInput && (
            <Button
              variant='ghost'
              className='h-4 w-fit cursor-pointer rounded bg-transparent p-0 text-[11px] text-green-300 hover:bg-green-300 hover:text-white'
              onClick={handleAddClick}
            >
              <PlusCircle size={14} />
            </Button>
          )}

          {showInput && (
            <li className='flex gap-1' ref={inputContainerRef}>
              <Input
                ref={inputRef}
                className='h-5 w-40 rounded-none border-x-0 border-t-0 border-b border-b-green-400 px-0 text-sm shadow-none'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleAddServiceLine();
                }}
                autoFocus
              />
              <Button
                size='sm'
                className='h-6 px-2 text-xs'
                onClick={handleAddServiceLine}
              >
                Add
              </Button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
