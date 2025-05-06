import { IProfile } from '@/types';

export async function generateCompanyProfile(
  website: string,
): Promise<IProfile> {
  const response = await fetch('/api/generate-profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ website }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate company profile');
  }

  const data = response.json();
  console.log('Response from generateCompanyProfile:', data);

  return data;
}
