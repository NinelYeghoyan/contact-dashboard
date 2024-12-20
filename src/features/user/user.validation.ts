import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters' }),
  image: z.string().optional(),
  description: z
    .string()
    .min(10, { message: 'Description must be at least 10 characters' })
    .optional(),
});
