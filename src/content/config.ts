// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const alertsCollection = defineCollection({
   type: 'content',
   schema: z.object({
      title: z.string(),
      abstract: z.string(),
      // tags: z.array(z.string()).optional(),
      image: z.string().optional(),
      publishedDate: z.date(),
   }) 
});
const eventsCollection = defineCollection({
   type: 'content',
   schema: z.object({
      title: z.string(),
      abstract: z.string(),
      // tags: z.array(z.string()).optional(),
      image: z.string().optional(),
      publishedDate: z.date(),
   }) 
});
const committeeCollection = defineCollection({ 
   type: 'content',
   schema: z.object({
      title: z.string(),
      abstract: z.string(),
      // tags: z.array(z.string()).optional(),
      image: z.string().optional(),
      publishedDate: z.date(),
   }) 
});
const guesthouseCollection = defineCollection({ 
   type: 'content',
   schema: z.object({
      title: z.string(),
      abstract: z.string(),
      // tags: z.array(z.string()).optional(),
      image: z.string().optional(),
      publishedDate: z.date(),
   }) 
});
const noticesCollection = defineCollection({
    type: 'content',
    schema: z.object({
       title: z.string(),
       abstract: z.string(),
       //  tags: z.array(z.string()).optional(),
       image: z.string().optional(),
       publishedDate: z.date(),
    }) 
});
const resourcesCollection = defineCollection({
   type: 'content',
   schema: z.object({
      title: z.string(),
      abstract: z.string(),
      // tags: z.array(z.string()).optional(),
      image: z.string().optional(),
      publishedDate: z.date(),
   })
});
const rooftopCollection = defineCollection({
   type: 'content',
   schema: z.object({
      title: z.string(),
      abstract: z.string(),
      // tags: z.array(z.string()).optional(),
      image: z.string().optional(),
      publishedDate: z.date(),
   })
});
const slackCollection = defineCollection({
   type: 'content',
   schema: z.object({
      title: z.string(),
      abstract: z.string(),
      // tags: z.array(z.string()).optional(),
      image: z.string().optional(),
      publishedDate: z.date(),
   })
});
const strataCollection = defineCollection({
   type: 'content',
   schema: z.object({
      title: z.string(),
      abstract: z.string(),
      // tags: z.array(z.string()).optional(),
      image: z.string().optional(),
      publishedDate: z.date(),
   })
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