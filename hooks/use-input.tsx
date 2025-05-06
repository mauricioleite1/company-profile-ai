import { useState, useTransition } from 'react';
import { IHttpProtocol } from '@/types';
import useDataStore from '@/stores/use-data-store';
import useInputStore from '@/stores/use-input-store';
import { generateCompanyProfile } from '@/gateways/generate-company-profile';

export default function useInput() {
  const [protocol, setProtocol] = useState<IHttpProtocol>('https://');
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const { addCompany } = useDataStore();
  const { domain, setDomain } = useInputStore();

  const handleInputChange = (raw: string) => {
    const lower = raw.toLowerCase();

    if (lower.startsWith('https://')) {
      setProtocol('https://');
      setDomain(raw.replace(/^https?:\/\//, ''));
    } else if (lower.startsWith('http://')) {
      setProtocol('http://');
      setDomain(raw.replace(/^https?:\/\//, ''));
    } else {
      setDomain(raw);
    }
  };

  const fullUrl = `${protocol}${domain}`;

  const isValidUrl = () => {
    try {
      new URL(`${protocol}${domain}`);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!isValidUrl()) return;

    startTransition(async () => {
      try {
        const response = await generateCompanyProfile(fullUrl);

        addCompany(response.profile);
        setDomain('');
      } catch (err) {
        console.error(err);
        alert('Error generating profile. Try again.');
      }
    });
  };

  return {
    protocol,
    setProtocol,
    isOpen,
    setIsOpen,
    isPending,
    startTransition,
    handleInputChange,
    fullUrl,
    isValidUrl,
    handleSubmit,
  };
}
