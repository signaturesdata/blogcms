import type { StaticImageData } from 'next/image'
import { cn } from '@/utilities/ui'
import React from 'react'

import type { MediaBlock as MediaBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'
import Link from 'next/link'
import './HeroBanner.css'

type Props = MediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
  bannerType: 'homeBanner' | 'innerBanner'
  heading: string
  subheading?: string
  buttonLabel: string
  buttonHref: string
  buttonClass?: string
  buttons: []
}

const styleMap: Record<Props['bannerType'], string> = {
  homeBanner: 'home-banner h-100',
  innerBanner: 'inner-banner h-50',
}

export const HeroBanner: React.FC<Props> = (props) => {
  const {
    bannerType,
    heading,
    subheading,
    buttonLabel,
    buttonHref,
    buttonClass,
    media,
    imgClassName,
    staticImage,
    buttons,
  } = props
  return (
    <>
      {bannerType === 'homeBanner' ? ( //Home banner
        <section>
          <div className="home-banner">
            <div className="banner-video">
              {(media || staticImage) && <Media resource={media} src={staticImage} />}
            </div>

            <div className="banner-content custom-container">
              <h1>{heading}</h1>
              {subheading && <p>{subheading}</p>}
              <div className="home-explore-btn-div">
                {buttons.map((col, index) => {
                  const { btnLabel, btnLink, btnClass } = col
                  return (
                    <Link href={btnLink} passHref key={index}>
                      <button className={cn('home-explore-btn', btnClass)}>{btnLabel}</button>
                    </Link>
                  )
                })}
                {/* <Link href={buttonHref} passHref>
                  <button className={cn('home-explore-btn', buttonClass)}>{buttonLabel}</button>
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      ) : (
        //Inner banner
        <section>
          {(media || staticImage) && (
            <Media
              imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
              resource={media}
              src={staticImage}
            />
          )}
        </section>
      )}
    </>
  )
}
