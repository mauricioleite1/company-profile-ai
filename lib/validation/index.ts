import { z } from 'zod';

export const emailSchema = z
  .string()
  .email('Invalid email address')
  .max(100, 'Email address is too long');

export const domainSchema = z
  .string()
  .min(1, 'Domain is required')
  .regex(
    /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/,
    'Invalid URL. Please try again (ex: www.company.com)',
  );
