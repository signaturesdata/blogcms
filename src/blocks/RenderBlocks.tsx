import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { SigCustomBlock } from '@/blocks/SigCustomBlock/Component'
import { HeroBanner } from '@/blocks/HeroBanner/Component'
import { HomeAbout } from '@/blocks/HomeAbout/Component'
import { HomeStatistics } from '@/blocks/HomeStatistics/Component'
import { BlogGrid } from '@/blocks/BlogGrid/Component'
import { EventGrid } from '@/blocks/EventGrid/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  SigCustomBlock: SigCustomBlock,
  HeroBanner: HeroBanner,
  HomeAbout: HomeAbout,
  HomeStatistics: HomeStatistics,
  BlogGrid: BlogGrid,
  EventGrid: EventGrid,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
  searchParams?: { [key: string]: string | string[] | undefined }
}> = (props) => {
  const { blocks, searchParams } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer searchParams={searchParams} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
