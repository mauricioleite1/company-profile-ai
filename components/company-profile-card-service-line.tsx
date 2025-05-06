'use client';

import { splitByComma } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Pen, PlusCircle, SquarePen, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface CompanyProfileCardServiceLineProps {
  serviceLine: string;
}

export default function CompanyProfileCardServiceLine({
  serviceLine,
}: CompanyProfileCardServiceLineProps) {
  const [showButton, setShowButton] = useState(false); // Para controlar o estado de hover
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [serviceLines, setServiceLines] = useState(() =>
    splitByComma(serviceLine),
  );
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Para o hover

  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputContainerRef = useRef<HTMLLIElement | null>(null);

  const handleMouseOver = () => setShowButton(true); // Mostrar o botão ao passar o mouse
  const handleMouseLeave = () => setShowButton(false); // Esconder o botão ao sair do hover

  const handleAddClick = () => {
    setShowInput(true);
    setInputValue('');
    setEditingIndex(null);
  };

  const handleAddServiceLine = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    if (editingIndex !== null) {
      const updatedServiceLines = [...serviceLines];
      updatedServiceLines[editingIndex] = trimmed;
      setServiceLines(updatedServiceLines);
      setEditingIndex(null);
    } else {
      setServiceLines((prev) => [...prev, trimmed]);
    }

    setInputValue('');
    setShowInput(false);
  };

  const handleEditServiceLine = (index: number) => {
    setEditingIndex(index);
    setInputValue(serviceLines[index]);
    setShowInput(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleRemoveServiceLine = (index: number) => {
    setServiceLines((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCancelEdit = () => {
    setInputValue('');
    setEditingIndex(null);
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
        setInputValue('');
        setEditingIndex(null);
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
      <div className='flex items-center justify-start'>
        <h4 className='text-xs font-semibold text-neutral-400'>
          Service lines
        </h4>

        {(serviceLines.length === 0 || showButton) && !showInput && (
          // Exibe o botão de adicionar se não houver nenhum item na lista ou estiver em hover
          <Button
            variant='ghost'
            className='h-4 w-4 cursor-pointer rounded bg-transparent p-0 text-[11px] text-neutral-600'
            onClick={handleAddClick}
          >
            <PlusCircle size={14} />
          </Button>
        )}
      </div>

      <div className='flex flex-col gap-y-2'>
        <ul className='flex flex-wrap items-center gap-1'>
          {serviceLines.map((line, index) => {
            const isLast = index === serviceLines.length - 1;
            const isHovered = hoveredIndex === index; // Verifica se o item está sendo "hovered"
            return (
              <Fragment key={index}>
                <li
                  className='flex items-center gap-1 rounded-full text-sm font-semibold text-neutral-600'
                  onMouseOver={() => setHoveredIndex(index)} // Ativar hover
                  onMouseLeave={() => setHoveredIndex(null)} // Desativar hover
                >
                  {editingIndex === index ? (
                    // Exibe o input no lugar do texto ao editar
                    <Input
                      ref={inputRef}
                      className='h-6 w-40 rounded-none border-x-0 border-t-0 border-b border-b-neutral-400 px-0 text-sm shadow-none'
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleAddServiceLine();
                      }}
                      autoFocus
                    />
                  ) : (
                    <>
                      {line}
                      {!isLast ? ',' : '.'}
                    </>
                  )}

                  {isHovered && !editingIndex && (
                    <>
                      <button
                        onClick={() => handleEditServiceLine(index)}
                        className='cursor-pointer text-neutral-500 hover:text-blue-500'
                        aria-label={`Editar ${line}`}
                      >
                        <SquarePen size={16} />
                      </button>

                      <button
                        onClick={() => handleRemoveServiceLine(index)}
                        className='cursor-pointer text-neutral-500 hover:text-red-500'
                        aria-label={`Remover ${line}`}
                      >
                        <X size={16} />
                      </button>
                    </>
                  )}
                </li>
              </Fragment>
            );
          })}

          {showInput && editingIndex === null && (
            <li className='flex gap-1' ref={inputContainerRef}>
              <Input
                ref={inputRef}
                className='h-6 w-40 rounded-none border-x-0 border-t-0 border-b border-b-neutral-400 px-0 text-sm shadow-none'
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
                {editingIndex !== null ? 'Save' : 'Add'}
              </Button>
              <Button
                variant='outline'
                size='sm'
                className='h-6 px-2 text-xs'
                onClick={handleCancelEdit}
              >
                Cancel
              </Button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
