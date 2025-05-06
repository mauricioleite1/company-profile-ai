import { NextResponse } from 'next/server';
import { generateCompanyProfile } from '@/lib/openai/generate-company-profile';

export async function POST(req: Request) {
  const { website } = await req.json();

  const profile = await generateCompanyProfile(website);

  return NextResponse.json({ profile });
}
