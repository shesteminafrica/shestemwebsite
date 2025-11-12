import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'opportunity',
  title: 'Opportunities',
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
      name: 'opportunityType',
      title: 'Opportunity Type',
      type: 'string',
      options: {
        list: [
          { title: 'Scholarship', value: 'scholarship' },
          { title: 'Grant', value: 'grant' },
          { title: 'Fellowship', value: 'fellowship' },
          { title: 'Internship', value: 'internship' },
          { title: 'Job', value: 'job' },
          { title: 'Training', value: 'training' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      name: 'deadline',
      title: 'Application Deadline',
      type: 'datetime',
    }),
    defineField({
      name: 'applicationLink',
      title: 'Application Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eligibility',
      title: 'Eligibility',
      type: 'localeText',
      description: 'Who can apply',
    }),
    defineField({
      name: 'amount',
      title: 'Amount/Value',
      type: 'string',
      description: 'Financial value if applicable',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Mark if this opportunity is still available',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      organization: 'organization',
      type: 'opportunityType',
      media: 'mainImage',
      deadline: 'deadline',
    },
    prepare(selection) {
      const { title, organization, type, media, deadline } = selection
      return {
        title,
        subtitle: `${organization} - ${type} ${deadline ? `(Deadline: ${new Date(deadline).toLocaleDateString()})` : ''}`,
        media,
      }
    },
  },
})
