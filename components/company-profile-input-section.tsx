'use client';

import { motion } from 'framer-motion';
import CompanyInput from '@/components/company-input';
import InputShortcut from '@/components/input-shortcut';
import { fadeIn, slideUp } from '@/lib/motion';

export default function CompanyProfileInputSection() {
  return (
    <motion.section
      variants={slideUp}
      initial='hidden'
      animate='visible'
      className='mt-80 flex flex-col items-center justify-center gap-y-10'
    >
      <div className='flex w-full flex-col items-center justify-center'>
        <h1 className='bg-gradient-to-br from-neutral-900 via-neutral-900 to-emerald-500 bg-clip-text text-4xl font-bold text-transparent'>
          Company Profile
        </h1>

        <p className='text-neutral-400'>
          AI-driven insights from company websites.
        </p>
      </div>
      <CompanyInput />

      <motion.div
        variants={fadeIn}
        initial='hidden'
        animate='visible'
        className='flex items-center justify-center gap-2 text-neutral-400'
      >
        <div className='flex flex-col items-center justify-start gap-2'>
          <span className='-mb-2 w-full text-left text-xs font-semibold text-emerald-400/60'>
            Experiment with examples
          </span>
          <div className='flex items-center justify-center gap-x-2'>
            <InputShortcut text='www.mccarren.ai' />
            <InputShortcut text='www.google.com' />
            <InputShortcut text='chatgpt.com' />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
