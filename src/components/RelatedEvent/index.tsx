import React, { cache } from 'react'
import Link from 'next/link'
import { Media } from '../../components/Media'
import { formatDateTime } from '@/utilities/formatDateTime'
import { getLimitDesc } from '@/utilities/getLimitDesc'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import './RelatedEvent.css'

type Props = {
  slug: string
}

export default async function RelatedEvent({ slug }: Props) {
  const posts = await queryPostBySlug({ slug })

  return (
    <section>
      <div className="blog-sec-bg">
        <div className="custom-container">
          <h2 className="blog-title">Related Events</h2>

          <div className="blog-flex">
            {posts.length > 0 ? (
              posts.map((item, index) => {
                return (
                  <div className="blog-card" key={item.id || index}>
                    <div className="blog-img">
                      {item.thumbnail && <Media resource={item.thumbnail} />}
                    </div>
                    <Link href={'/event/' + item.slug} className="blog-cont">
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
              <div className="no-blogs">Event not found</div>
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
    collection: 'events',
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
