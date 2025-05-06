import { useState } from 'react';

export default function useServiceLineEditEvents() {
  const [showButton, setShowButton] = useState(false);

  const handleMouseOver = () => setShowButton(true);
  const handleMouseLeave = () => setShowButton(false);

  return {
    showButton,
    handleMouseOver,
    handleMouseLeave,
  };
}
