import type { Block } from 'payload'

const HomeAbout: Block = {
  slug: 'HomeAbout',
  labels: {
    singular: 'Home About',
    plural: 'Home About',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
      required: true,
    },
    {
      name: 'carouselText',
      type: 'textarea',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
  ],
}

export default HomeAbout
