'use client';

import { Button } from '@/components/ui/button';
import useInputStore from '@/stores/use-input-store';

interface InputShortcutProps {
  text: string;
}

export default function InputShortcut({ text }: InputShortcutProps) {
  const { setDomain } = useInputStore();

  const handleClick = () => {
    setDomain(text);
    const input = document.querySelector(
      'input[name="company"]',
    ) as HTMLInputElement;
    if (input) {
      input.value = text;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.focus();
    }
  };

  return (
    <Button
      className='bg-background border border-emerald-300 text-neutral-600 hover:-translate-y-[2px] hover:bg-transparent hover:shadow'
      onClick={handleClick}
    >
      {text}
    </Button>
  );
}
