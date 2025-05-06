import CompanyProfileCardServiceLine from '@/components/company-profile-card-service-line';
import CompanyProfileCardEmails from '@/components/company-profile-card-emails';

interface CompanyProfileCardContentProps {
  companyServiceLine: string;
  companyEmails: string;
  companyPOC: string;
}

export default function CompanyProfileCardContent({
  companyServiceLine,
  companyEmails,
  companyPOC,
}: CompanyProfileCardContentProps) {
  return (
    <div className='flex w-full flex-col items-start justify-start gap-2'>
      <CompanyProfileCardServiceLine serviceLine={companyServiceLine} />
      <CompanyProfileCardEmails emails={companyEmails} poc={companyPOC} />
    </div>
  );
}
