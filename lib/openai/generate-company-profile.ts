import { openai } from '@/lib/openai';
import { ICompany } from '@/types';

export async function generateCompanyProfile(
  website: string,
): Promise<ICompany | null> {
  const content = `You are an assistant that analyzes company websites and generates a structured profile.  

Based on the website below, return a JSON object with the following structure only:

{
  "company_name": "",
  "service_line": "",
  "company_description": "",
  "tier1_keywords": [],
  "tier2_keywords": [],
  "emails": "",
  "poc": ""
}

- company_name: the name of the company  
- service_line: a string with the company's service areas or business lines separated by comma, can be more than 3 if you find.
- company_description: A concise summary (3-5 sentences) about what the company does, extracted or inferred from the website. 
- tier1_keywords: main keywords this company would use to search for public/government opportunities  
- tier2_keywords: secondary keywords that this company might use in public/government opportunity searches  
- emails: list of emails found on the website  
- poc: point of contact (if available)  

⚠️ Output only the JSON. No explanation. No markdown. No formatting. Just the raw JSON object.

Website: ${website}`;

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content }],
    temperature: 0.7,
  });

  const raw = response.choices[0].message.content;
  try {
    return JSON.parse(raw ?? '{}');
  } catch (err) {
    console.error('Error parsing GPT response:', err);
    return null;
  }
}
