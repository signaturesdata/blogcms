import type { Block, Field } from 'payload'

const buttonFields: Field[] = [
  {
    label: 'Button Label',
    name: 'btnLabel',
    type: 'text',
  },
  {
    label: 'Button Link',
    name: 'btnLink',
    type: 'text',
  },
  {
    label: 'Button Class',
    name: 'btnClass',
    type: 'text',
  },
]

const HeroBanner: Block = {
  slug: 'HeroBanner',
  labels: {
    singular: 'Hero Banner',
    plural: 'Hero Banners',
  },
  fields: [
    {
      name: 'bannerType',
      type: 'select',
      required: true,
      defaultValue: 'homeBanner',
      options: [
        { label: 'Home Banner', value: 'homeBanner' },
        { label: 'Inner Banner', value: 'innerBanner' },
      ],
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
    },
    // {
    //   name: 'buttonLabel',
    //   type: 'text',
    //   required: true,
    // },
    // {
    //   name: 'buttonHref',
    //   type: 'text',
    //   required: true,
    // },
    // {
    //   name: 'buttonClass',
    //   type: 'text',
    // },
    {
      name: 'buttons',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: buttonFields,
      maxRows: 2,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default HeroBanner
