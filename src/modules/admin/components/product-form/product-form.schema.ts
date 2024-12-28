import { z } from 'zod';

export const SaveProductSchema = z.object({
  name: z.string(),
  price: z.string(),
  category: z.string(),
  description: z.string(),
  image: z.custom<FileList>(),
});
