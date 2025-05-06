import { CompanyProfileCard } from '@/components/company-profile-card';
import { ICompany } from '@/types';

interface CompanyProfileCardProps {
  company: ICompany;
}

export default function CompanyProfileCardContainer({
  company,
}: CompanyProfileCardProps) {
  return (
    <div className='bg-card flex min-h-120 min-w-150 flex-1 flex-col items-center justify-between gap-y-10 overflow-hidden rounded-lg p-4 shadow'>
      <CompanyProfileCard.Header
        companyName={company.company_name}
        companyDescription={company.company_description}
      />

      <CompanyProfileCard.Content
        companyServiceLine={company.service_line}
        companyEmails={company.emails}
        companyPOC={company.poc}
      />

      <CompanyProfileCard.Footer
        companyTier1Keywords={company.tier1_keywords}
        companyTier2Keywords={company.tier2_keywords}
      />
    </div>
  );
}
