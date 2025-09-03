// src/blocks/CallToAction.ts
import type { Block } from 'payload'

const SigCustomBlock: Block = {
  slug: 'SigCustomBlock',
  labels: {
    singular: 'Custom Block',
    plural: 'Custom Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'textarea',
    },
    {
      name: 'buttonLabel',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonHref',
      type: 'text',
      required: true,
      admin: {
        description: 'Absolute or relative URL (e.g., /contact, https://example.com)',
      },
    },

    // ---- BG COLOR (choose Option A or B) ----

    // Option A: simple text with hex validation
    {
      name: 'bgColor',
      type: 'text',
      label: 'Background Color (hex)',
      admin: {
        placeholder: '#0ea5e9',
        description: 'Enter a hex color like #0ea5e9 or #fff',
      },
      validate: (val) => {
        if (!val) return true // allow empty -> frontend uses a default
        const hex = String(val).trim()
        const ok = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex)
        return ok || 'Please enter a valid hex color (e.g., #0ea5e9 or #fff).'
      },
    },

    // Option B: if you registered your color picker plugin globally as 'colorPicker',
    // replace the field above with this one (comment A and uncomment B):
    // {
    //   name: 'bgColor',
    //   type: 'text',
    //   label: 'Background Color',
    //   admin: {
    //     components: {
    //       Field: 'colorPicker', // uses your plugin UI
    //     },
    //   },
    // },

    // ---- BUTTON STYLE (dropdown) ----
    {
      name: 'buttonStyle',
      type: 'select',
      required: true,
      defaultValue: 'solid',
      options: [
        { label: 'Solid', value: 'solid' },
        { label: 'Outline', value: 'outline' },
        { label: 'Ghost', value: 'ghost' },
        { label: 'Link', value: 'link' },
      ],
      admin: {
        description: 'Controls visual style of the CTA button',
      },
    },
    // (Optional) color variant if you want a second dropdown:
    // {
    //   name: 'buttonVariant',
    //   type: 'select',
    //   defaultValue: 'primary',
    //   options: [
    //     { label: 'Primary', value: 'primary' },
    //     { label: 'Secondary', value: 'secondary' },
    //   ],
    // },
  ],
}

export default SigCustomBlock
