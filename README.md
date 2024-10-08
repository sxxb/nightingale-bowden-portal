# Nightingale Bowden Resident Portal

[Link](https://sxxb.github.io/nightingale-bowden-portal/)

## What is this?

A little directory website for residents of Nightingale Bowden in Adelaide, South Australia. It contains information about the building, useful resources for residents, and links to other things like our Slack channel, our Strata Manager, etc.

This is not intended to be a comprehensive, official resource of the building, but rather a good way to improve my coding skills while creating something useful for my community. Do not rely on this resource existing forever!

## How did you make it?

Using [Astro](https://astro.build). I created a few basic components and layouts, developed a collection schema for the various categories of articles, and then wrote a *lot* of Markdown to populate those collections. It's not particularly advanced, but it should be easy to manage, easy to add more content to in future, and most of all easy to use.

## Can I contribute?

I would prefer to keep the project within the building community so if you are somehow reading this as a third party I will probably respectfully decline. If you're a neighbour of mine, you can absolutely contribute. I'm not an expert and if you think there's something I could be doing better, or you have ideas for useful additions, please reach out.

## What is Nightingale Bowden?
A socially, environmentally, and financially sustainable apartment building in Adelaide, South Australia. You can read more about Nightingale Bowden (and Nightingale's other projects) [here](https://www.nightingalehousing.org/project/nightingale-bowden).

## To Do:

- handle alerts => display either no alert or most recent alert only. may require...
- [automatic timestamping](https://docs.astro.build/en/recipes/modified-time/) <= this updates every commit for all files (due to build workflow perhaps?) need to review
- [manage tags across all collections for one single tag page](https://stackoverflow.com/questions/77525579/how-to-retrieve-all-content-with-getcollection)
- replace images (host locally)
- ~~tweak styling, particularly for mobile~~
- add content with feedback from community
- back button on articles (not playing nicely with base url requirement)
- add to schema: option for 'old' notices/alerts/events (greyed out but still visible)


