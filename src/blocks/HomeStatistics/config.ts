import type { Block } from 'payload'

const HomeStatistics: Block = {
  slug: 'HomeStatistics',
  labels: {
    singular: 'Home Statistics',
    plural: 'Home Statistics',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'happyPatients',
      type: 'text',
      required: true,
    },
    {
      name: 'happyPatientsImg',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'orthoSurgeries',
      type: 'text',
      required: true,
    },
    {
      name: 'orthoSurgeriesImg',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'normalDeliveries',
      type: 'text',
      required: true,
    },
    {
      name: 'normalDeliveriesImg',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'obstetricSurgeries',
      type: 'text',
      required: true,
    },
    {
      name: 'obstetricSurgeriesImg',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default HomeStatistics
