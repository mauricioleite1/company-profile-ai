'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle, X } from 'lucide-react';
import { z } from 'zod';

interface CompanyProfileCardEmailsProps {
  emails: string;
  poc: string;
}

const emailSchema = z.string().email('Please insert a valid e-mail address');

export default function CompanyProfileCardEmails({
  emails,
  poc,
}: CompanyProfileCardEmailsProps) {
  const [showEmailButton, setShowEmailButton] = useState(false);
  const [showPocButton, setShowPocButton] = useState(false);
  const [emailList, setEmailList] = useState(() =>
    emails
      .split(',')
      .map((email) => email.trim())
      .filter(Boolean),
  );
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const [pocValue, setPocValue] = useState(poc);
  const [pocInput, setPocInput] = useState('');
  const [showPocInput, setShowPocInput] = useState(false);

  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputContainerRef = useRef<HTMLDivElement | null>(null);
  const pocInputRef = useRef<HTMLInputElement | null>(null);
  const pocInputContainerRef = useRef<HTMLDivElement | null>(null);

  const handleEmailMouseOver = () => setShowEmailButton(true);
  const handleEmailMouseLeave = () => setShowEmailButton(false);

  const handlePocMouseOver = () => setShowPocButton(true);
  const handlePocMouseLeave = () => setShowPocButton(false);

  const handleAddEmailClick = () => {
    setShowEmailInput(true);
    setTimeout(() => emailInputRef.current?.focus(), 50);
  };

  const handleAddEmail = () => {
    const trimmedValue = inputValue.trim().toLowerCase();
    const result = emailSchema.safeParse(trimmedValue);

    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    const alreadyExists = emailList.some(
      (email) => email.toLowerCase() === trimmedValue,
    );

    if (alreadyExists) {
      setError('Este e-mail já foi adicionado.');
      return;
    }

    setEmailList((prev) => [...prev, trimmedValue]);
    setInputValue('');
    setError(null);
    setShowEmailInput(false);
  };

  const handleRemoveEmail = (emailToRemove: string) => {
    setEmailList((prev) =>
      prev.filter(
        (email) => email.toLowerCase() !== emailToRemove.toLowerCase(),
      ),
    );
  };

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
        emailInputContainerRef.current &&
        !emailInputContainerRef.current.contains(event.target as Node)
      ) {
        setShowEmailInput(false);
        setInputValue('');
        setError(null);
      }

      if (
        pocInputContainerRef.current &&
        !pocInputContainerRef.current.contains(event.target as Node)
      ) {
        setShowPocInput(false);
        setPocInput('');
      }
    };

    if (showEmailInput || showPocInput) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showEmailInput, showPocInput]);

  return (
    <div className='flex h-full w-full flex-col gap-y-6 rounded-md bg-green-100/60 p-5'>
      {/* Email Section */}
      <div
        className='flex items-center gap-x-2 border-b border-b-green-300 py-2'
        onMouseOver={handleEmailMouseOver}
        onMouseLeave={handleEmailMouseLeave}
      >
        <h4 className='text-xs font-semibold whitespace-nowrap text-green-400'>
          E-mails
        </h4>

        <div className='flex flex-col'>
          <div className='flex flex-wrap items-center gap-1'>
            {emailList.map((email, index) => (
              <div
                key={index}
                className='flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-sm font-semibold text-neutral-600 shadow-sm'
              >
                <span>{email}</span>
                <button
                  onClick={() => handleRemoveEmail(email)}
                  className='text-neutral-500 hover:text-red-500'
                  aria-label={`Remover ${email}`}
                >
                  <X size={12} />
                </button>
              </div>
            ))}

            {showEmailButton && !showEmailInput && (
              <Button
                variant='ghost'
                className='h-4 w-4 cursor-pointer rounded bg-transparent p-0 text-[11px] text-neutral-600'
                onClick={handleAddEmailClick}
              >
                <PlusCircle size={14} />
              </Button>
            )}
          </div>

          {showEmailInput && (
            <div className='flex flex-col' ref={emailInputContainerRef}>
              <div className='flex'>
                <Input
                  ref={emailInputRef}
                  className='h-5 w-48 text-sm'
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    if (error) setError(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddEmail();
                  }}
                />
                <Button
                  size='sm'
                  className='h-5 px-2 py-0 text-xs'
                  onClick={handleAddEmail}
                >
                  Add
                </Button>
              </div>
              {error && <p className='text-xs text-red-500'>{error}</p>}
            </div>
          )}
        </div>
      </div>

      {/* POC Section */}
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
    </div>
  );
}
