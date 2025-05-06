import useInputStore from '@/stores/use-input-store';

export default function useInputShortcut(text: string) {
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

  return {
    handleClick,
  };
}
