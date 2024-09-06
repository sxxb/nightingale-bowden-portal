// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

const articleSchema = z.object({
      title: z.string(),
      abstract: z.string(),
      // tags: z.array(z.string()).optional(),
      image: z.string().optional(),
   });

// 2. Define your collection(s)
const alertsCollection = defineCollection({
   type: 'content',
   schema: z.object({
      title: z.string(),
      abstract: z.string(),
      // tags: z.array(z.string()).optional(),
      image: z.string().optional(),
      startDate: z.date(),
      endDate: z.date(),
   }) 
});
const eventsCollection = defineCollection({
   type: 'content',
   schema: articleSchema, 
});
const committeeCollection = defineCollection({ 
   type: 'content',
   schema: articleSchema, 
});
const guesthouseCollection = defineCollection({ 
   type: 'content',
   schema: articleSchema, 
});
const noticesCollection = defineCollection({
   type: 'content',
   schema: articleSchema, 
});
const resourcesCollection = defineCollection({
   type: 'content',
   schema: articleSchema, 
});
const rooftopCollection = defineCollection({
   type: 'content',
   schema: articleSchema, 
});
const slackCollection = defineCollection({
   type: 'content',
   schema: articleSchema, 
});
const strataCollection = defineCollection({
   type: 'content',
   schema: articleSchema, 
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'alerts': alertsCollection,
  'events': eventsCollection,
  'committee': committeeCollection,
  'guesthouse': guesthouseCollection,
  'notices': noticesCollection,
  'resources': resourcesCollection,
  'rooftop': rooftopCollection,
  'slack': slackCollection,
  'strata': strataCollection,
};