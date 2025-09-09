import React, { cache } from 'react'
import Link from 'next/link'
import { Media } from '../../components/Media'
import { formatDateTime } from '@/utilities/formatDateTime'
import { getLimitDesc } from '@/utilities/getLimitDesc'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import './RelatedBlog.css'

type Props = {
  slug: string
}

export default async function RelatedBlog({ slug }: Props) {
  const posts = await queryPostBySlug({ slug })

  return (
    <section>
      <div className="blog-sec-bg">
        <div className="custom-container">
          <h2 className="blog-title">Related Blogs</h2>

          <div className="blog-flex">
            {posts.length > 0 ? (
              posts.map((item, index) => {
                return (
                  <div className="blog-card" key={item.id || index}>
                    <div className="blog-img">
                      {item.thumbnail && <Media resource={item.thumbnail} />}
                    </div>
                    <Link href={'/blog/' + item.slug} className="blog-cont">
                      <div className="blog-border-wrapper">
                        <h3>{item.title}</h3>
                        <p>
                          <i>{formatDateTime(item.date)}</i>
                        </p>
                        <p>{getLimitDesc(item.content)}...</p>
                      </div>
                    </Link>
                  </div>
                )
              })
            ) : (
              <div className="no-blogs">Blog not found</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'blog',
    draft,
    limit: 3,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        not_equals: slug,
      },
    },
  })

  return result.docs || null
})
