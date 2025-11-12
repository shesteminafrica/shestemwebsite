import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'report',
  title: 'Reports & Info',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reportType',
      title: 'Report Type',
      type: 'string',
      options: {
        list: [
          { title: 'Annual Report', value: 'annual' },
          { title: 'Activity Report', value: 'activity' },
          { title: 'Research Report', value: 'research' },
          { title: 'Newsletter', value: 'newsletter' },
          { title: 'Info Document', value: 'info' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      description: 'Link to external document if not uploading PDF',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'Year of the report (e.g., 2024-2025)',
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      type: 'reportType',
      media: 'coverImage',
      year: 'year',
    },
    prepare(selection) {
      const { title, type, media, year } = selection
      return {
        title,
        subtitle: `${type} ${year ? `- ${year}` : ''}`,
        media,
      }
    },
  },
})
