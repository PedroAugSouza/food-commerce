import { z } from 'zod';
import { SaveProductSchema } from './product-form.schema';

export type FormType = z.infer<typeof SaveProductSchema>;
