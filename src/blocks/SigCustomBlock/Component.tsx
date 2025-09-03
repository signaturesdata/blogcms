import React from 'react'

type CTAProps = {
  heading: string
  subheading?: string
  buttonLabel: string
  buttonHref: string
  bgColor?: string
  buttonStyle: 'solid' | 'outline' | 'ghost' | 'link'
}

const styleMap: Record<CTAProps['buttonStyle'], string> = {
  solid: 'inline-flex items-center px-4 py-2 rounded-md bg-black text-white hover:opacity-90',
  outline:
    'inline-flex items-center px-4 py-2 rounded-md border border-black text-black hover:bg-black/5',
  ghost: 'inline-flex items-center px-4 py-2 rounded-md hover:bg-black/5',
  link: 'inline-flex items-center underline underline-offset-4',
}

export const SigCustomBlock: React.FC<CTAProps> = ({
  heading,
  subheading,
  buttonLabel,
  buttonHref,
  bgColor,
  buttonStyle,
}) => {
  return (
    <section className="py-12" style={{ backgroundColor: bgColor || '#f8fafc' }}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold">{heading}</h2>
        {subheading && <p className="mt-2 text-gray-600">{subheading}</p>}
        <div className="mt-6">
          <a href={buttonHref} className={styleMap[buttonStyle]}>
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
