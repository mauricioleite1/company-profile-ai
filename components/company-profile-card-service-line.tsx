'use client';

import { Button } from '@/components/ui/button';
import { Fragment } from 'react';
import { SquarePen, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import CompanyProfileCardServiceLineAdd from '@/components/company-profile-card-service-line-add';
import useServiceLineEdit from '@/hooks/use-service-line-edit';
import useServiceLineEditEvents from '@/hooks/use-service-line-edit-events';

interface CompanyProfileCardServiceLineProps {
  serviceLine: string;
}

export default function CompanyProfileCardServiceLine({
  serviceLine,
}: CompanyProfileCardServiceLineProps) {
  const {
    showInput,
    inputValue,
    serviceLines,
    editingIndex,
    hoveredIndex,
    inputRef,
    inputContainerRef,
    setInputValue,
    setHoveredIndex,
    handleAddClick,
    handleAddServiceLine,
    handleEditServiceLine,
    handleRemoveServiceLine,
    handleCancelEdit,
  } = useServiceLineEdit(serviceLine);

  const { showButton, handleMouseOver, handleMouseLeave } =
    useServiceLineEditEvents();

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
          <CompanyProfileCardServiceLineAdd handleAddClick={handleAddClick} />
        )}
      </div>

      <div className='flex flex-col gap-y-2'>
        <ul className='flex flex-wrap items-center gap-1'>
          {serviceLines.map((line, index) => {
            const isLast = index === serviceLines.length - 1;
            const isHovered = hoveredIndex === index;

            return (
              <Fragment key={index}>
                <li
                  className='flex items-center gap-1 rounded-full text-sm font-semibold text-neutral-600'
                  onMouseOver={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {editingIndex === index ? (
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
                        aria-label={`Edit ${line}`}
                      >
                        <SquarePen size={16} />
                      </button>

                      <button
                        onClick={() => handleRemoveServiceLine(index)}
                        className='cursor-pointer text-neutral-500 hover:text-red-500'
                        aria-label={`Remove ${line}`}
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
                Add
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
