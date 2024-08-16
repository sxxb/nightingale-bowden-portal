// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const calendarCollection = defineCollection({
     type: 'content',
     schema: z.object({
        title: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        publishDate: z.date(),
     }) 
    });
const committeeCollection = defineCollection({ /* ... */ });
const guesthouseCollection = defineCollection({ /* ... */ });
const noticesCollection = defineCollection({
    type: 'content',
    schema: z.object({
       title: z.string(),
       abstract: z.string(),
       tags: z.array(z.string()).optional(),
       image: z.string().optional(),
       publishDate: z.date(),
    }) 
});
const resourcesCollection = defineCollection({ /* ... */ });
const rooftopCollection = defineCollection({ /* ... */ });
const slackCollection = defineCollection({ /* ... */ });
const strataCollection = defineCollection({ /* ... */ });

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'calendar': calendarCollection,
  'committee': committeeCollection,
  'guesthouse': guesthouseCollection,
  'notices': noticesCollection,
  'resources': resourcesCollection,
  'rooftop': rooftopCollection,
  'slack': slackCollection,
  'strata': strataCollection,
};