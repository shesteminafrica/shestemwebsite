import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Events',
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
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Webinar', value: 'webinar' },
          { title: 'Workshop', value: 'workshop' },
          { title: 'Conference', value: 'conference' },
          { title: 'Networking', value: 'networking' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
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
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'localeString',
      description: 'Physical location or "Online"',
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
    }),
    defineField({
      name: 'isPast',
      title: 'Is Past Event',
      type: 'boolean',
      description: 'Mark if this event has already happened',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'mainImage',
      date: 'startDate',
      type: 'eventType',
    },
    prepare(selection) {
      const { title, media, date, type } = selection
      return {
        title,
        subtitle: `${type} - ${new Date(date).toLocaleDateString()}`,
        media,
      }
    },
  },
})
