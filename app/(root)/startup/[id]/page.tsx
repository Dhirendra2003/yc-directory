import React from 'react'
import { client } from '@/sanity/lib/client'
import { STARTUPS_BY_ID_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id
  const post = await client.fetch(STARTUPS_BY_ID_QUERY, { id })
  if (!post) {
    return notFound()
  }
  return (
    <div>
      <h1 className=" "></h1>
    </div>
  )
}

export default page
