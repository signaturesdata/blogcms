import type { Block } from 'payload'

const EventGrid: Block = {
  slug: 'EventGrid',
  labels: {
    singular: 'Event Grid',
    plural: 'Event Grid',
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
      defaultValue: 'Events',
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

export default EventGrid
