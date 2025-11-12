import { defineType } from 'sanity'

export default defineType({
  name: 'localeText',
  title: 'Localized text',
  type: 'object',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'text',
    },
    {
      name: 'fr',
      title: 'French',
      type: 'text',
    },
  ],
})
