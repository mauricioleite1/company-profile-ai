import { motion } from 'framer-motion';
import { CompanyProfileCard } from '@/components/company-profile-card';
import { ICompany } from '@/types';
import { slideUp } from '@/lib/motion';

interface CompanyProfileCardProps {
  company: ICompany;
}

export default function CompanyProfileCardContainer({
  company,
}: CompanyProfileCardProps) {
  return (
    <motion.div
      variants={slideUp}
      initial='hidden'
      animate='visible'
      className='bg-card flex min-h-120 min-w-150 flex-1 flex-col items-center justify-between gap-y-10 overflow-hidden rounded-lg p-4 shadow transition delay-100 ease-in-out hover:-translate-y-1 hover:shadow-md'
    >
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
    </motion.div>
  );
}
