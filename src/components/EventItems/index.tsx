import { cn } from '@/utilities/ui'
import React from 'react'
import Link from 'next/link'
import type { Event } from '@/payload-types'
import { Media } from '../../components/Media'
import { formatDateTime } from '@/utilities/formatDateTime'
import { getLimitDesc } from '@/utilities/getLimitDesc'
import './EventItems.css'

type Props = {
  title: string
  posts: Event[]
}

export const EventItems: React.FC<Props> = ({ posts, title }) => {
  return (
    <section>
      <div className="blog-sec-bg">
        <div className="custom-container">
          <h2 className="blog-title">{title}</h2>

          <div className="blog-flex">
            {posts.length > 0 ? (
              posts.map((item, index) => {
                return (
                  <div className="blog-card" key={item.id || index}>
                    <div className="blog-img">
                      {item.thumbnail && <Media resource={item.thumbnail} />}
                    </div>
                    <Link href={'event/' + item.slug} className="blog-cont">
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
