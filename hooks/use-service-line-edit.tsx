import { useEffect, useRef, useState } from 'react';
import { splitByComma } from '@/lib/utils';

export default function useServiceLineEdit(serviceLine: string) {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [serviceLines, setServiceLines] = useState(() =>
    splitByComma(serviceLine),
  );
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputContainerRef = useRef<HTMLLIElement | null>(null);

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

  return {
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
  };
}
