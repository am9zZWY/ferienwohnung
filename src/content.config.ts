import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const listings = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/listings' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      location: z.string(),
      tagline: z.string(),
      heroImage: image(),
      intro: z.string(),
      description: z.array(z.string()),
      facts: z.object({
        guests: z.number(),
        bedrooms: z.number(),
        bathrooms: z.number(),
        sizeSqm: z.number(),
      }),
      amenities: z.array(z.string()),
      highlights: z.array(
        z.object({
          image: image(),
          title: z.string(),
          text: z.string(),
        }),
      ),
      gallery: z.array(
        z.object({
          src: image(),
          alt: z.string(),
        }),
      ),
      distances: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
      activities: z.array(z.string()).optional(),
      excursions: z.array(z.string()).optional(),
      arrival: z.array(z.object({ mode: z.string(), text: z.string() })).optional(),
      pricingNotes: z.array(z.string()).optional(),
      cancellationPolicy: z.string().optional(),
      host: z
        .object({
          name: z.string(),
          image: image().optional(),
          languages: z.string().optional(),
          message: z.string().optional(),
        })
        .optional(),
      coords: z.object({ lat: z.number(), lng: z.number() }).optional(),
      reviews: z
        .array(
          z.object({
            author: z.string(),
            date: z.string(),
            rating: z.number(),
            text: z.string(),
            reply: z.string().optional(),
          }),
        )
        .optional(),
      ratingAverage: z.number().optional(),
      ratingCount: z.number().optional(),
      contactEmail: z.string().email(),
      contactPhone: z.string().optional(),
    }),
});

export const collections = { listings };
