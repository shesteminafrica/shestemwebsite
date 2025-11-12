import { defineType } from 'sanity'

export default defineType({
  name: 'localeString',
  title: 'Localized string',
  type: 'object',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'string',
    },
    {
      name: 'fr',
      title: 'French',
      type: 'string',
    },
  ],
})
