import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Partners',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
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
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'partnershipType',
      title: 'Partnership Type',
      type: 'string',
      options: {
        list: [
          { title: 'Strategic Partner', value: 'strategic' },
          { title: 'Academic Partner', value: 'academic' },
          { title: 'Financial Partner', value: 'financial' },
          { title: 'Community Partner', value: 'community' },
          { title: 'Media Partner', value: 'media' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which the partner appears (lower numbers appear first)',
      initialValue: 0,
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Mark if this partnership is currently active',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      type: 'partnershipType',
    },
    prepare(selection) {
      const { title, media, type } = selection
      return {
        title,
        subtitle: type || 'Partner',
        media,
      }
    },
  },
})
