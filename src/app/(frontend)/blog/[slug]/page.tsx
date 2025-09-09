import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'
import { generateMeta } from '@/utilities/generateMeta'
import { Media } from '@/components/Media'
import RelatedBlog from '@/components/RelatedBlog'
import './BlogInnerPage.css'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return (
    <section>
      <div className="blogdetailSecBg">
        <div className="custom-container">
          <div className="pageintroH2">
            <h2>{post.title}</h2>
          </div>
          <div className="blog-img">{post.thumbnail && <Media resource={post.thumbnail} />}</div>

          {post.content && <RichText data={post.content} />}
        </div>
      </div>
      <div>
        <RelatedBlog slug={slug} />
      </div>
    </section>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'blog',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
