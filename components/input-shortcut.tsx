'use client';

import { Button } from '@/components/ui/button';
import { Component } from 'lucide-react';
import useInputShortcut from '@/hooks/use-input-shortcut';

interface InputShortcutProps {
  text: string;
}

export default function InputShortcut({ text }: InputShortcutProps) {
  const { handleClick } = useInputShortcut(text);

  return (
    <Button
      className='bg-background border border-emerald-300 text-neutral-600 hover:-translate-y-[2px] hover:bg-transparent hover:shadow'
      onClick={handleClick}
    >
      <Component size={18} className='text-neutral-800' />

      {text}
    </Button>
  );
}
