import type { Block } from 'payload'

const BlogGrid: Block = {
  slug: 'BlogGrid',
  labels: {
    singular: 'Blog Grid',
    plural: 'Blog Grid',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
    },
    {
      name: 'collection',
      type: 'text',
      defaultValue: 'Blog',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 10,
      label: 'Limit',
    },
    {
      name: 'orderby',
      type: 'select',
      required: true,
      defaultValue: 'desc',
      options: [
        { label: 'Asc', value: 'asc' },
        { label: 'Desc', value: 'desc' },
      ],
    },
  ],
}

export default BlogGrid
