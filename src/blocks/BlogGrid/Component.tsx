import type { Blog } from '@/payload-types'
import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Pagination } from '@/components/GlobalPagination'
import { BlogItems } from '@/components/BlogItems'

type Props = {
  searchParams: { page?: string }
  heading: string
  collection: string
  limit: number
  orderby: string
}

export const BlogGrid: React.FC<Props> = async ({ searchParams, heading, limit, orderby }) => {
  const payload = await getPayload({ config: configPromise })
  const page = Number(searchParams?.page) || 1

  const fetchedPosts = await payload.find({
    collection: 'blog',
    depth: 1,
    page,
    limit,
    sort: orderby === 'asc' ? 'date' : '-date',
  })

  return (
    <section>
      <BlogItems posts={fetchedPosts.docs as Blog[]} title={heading} />

      <div className="container">
        {fetchedPosts.totalPages > 1 && fetchedPosts.page && (
          <Pagination
            page={fetchedPosts.page}
            totalPages={fetchedPosts.totalPages}
            basePath="/blog"
          />
        )}
      </div>
    </section>
  )
}
