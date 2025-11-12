import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'initiative',
  title: 'Initiatives',
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
      name: 'mainImage',
      title: 'Main Image',
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
      name: 'content',
      title: 'Full Content',
      type: 'localeBlockContent',
    }),
    defineField({
      name: 'keyPoints',
      title: 'Key Points',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'fr',
          title: 'French',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'localeString',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    }),
    defineField({
      name: 'initiativeType',
      title: 'Initiative Type',
      type: 'string',
      options: {
        list: [
          { title: 'Networking', value: 'networking' },
          { title: 'Coaching & Mentoring', value: 'coaching' },
          { title: 'Grant Advice', value: 'grant' },
          { title: 'Training', value: 'training' },
          { title: 'Local Initiative', value: 'local' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which the initiative appears (lower numbers appear first)',
      initialValue: 0,
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Mark if this initiative is currently active',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'mainImage',
      type: 'initiativeType',
    },
    prepare(selection) {
      const { title, media, type } = selection
      return {
        title,
        subtitle: type || 'Initiative',
        media,
      }
    },
  },
})
