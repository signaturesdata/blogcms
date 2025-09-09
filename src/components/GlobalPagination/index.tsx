import Link from 'next/link'
import React from 'react'

type Props = {
  page: number
  totalPages: number
  basePath: string // e.g. "/blog" or "/events"
}

export const Pagination: React.FC<Props> = ({ page, totalPages, basePath }) => {
  if (totalPages <= 1) return null

  return (
    <nav className="flex justify-center gap-2 mt-6">
      {page > 1 && (
        <Link href={`${basePath}?page=${page - 1}`} className="px-3 py-1 border rounded">
          Prev
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, i) => (
        <Link
          key={i + 1}
          href={`${basePath}?page=${i + 1}`}
          className={`px-3 py-1 border rounded ${page === i + 1 ? 'bg-gray-200' : ''}`}
        >
          {i + 1}
        </Link>
      ))}

      {page < totalPages && (
        <Link href={`${basePath}?page=${page + 1}`} className="px-3 py-1 border rounded">
          Next
        </Link>
      )}
    </nav>
  )
}
