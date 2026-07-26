import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().default('Admin'),
    image: z.string().optional(),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    price: z.string().optional(),
    category: z.string(),
    section: z.string(),
    order: z.number().default(0),
    specs: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
    features: z.array(z.string()).optional(),
  }),
});

export const collections = { services, articles, products };