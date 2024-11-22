import React from 'react'
import SearchBar from '../../components/SearchBar'
import StartupCard from '@/components/StartupCard'
import { client } from '@/sanity/lib/client'
import { STARTUPS_QUERY } from '@/sanity/lib/queries'

async function page({searchParams}:{searchParams:Promise<{query?:string}>
}) {
  const query =(await searchParams).query
  const posts=await client.fetch(STARTUPS_QUERY)
 
  return (
    <>
    <section className='pink_container'>
      <h1 className='heading'>
        Pitch Your Startup, <br />
        Connect With Enterpreneurs
      </h1>
      <p className='sub-heading !max-w-3xl'>
        Submit Ideas , Vote on Pitches , and Get Noticed in Virtual Competitions.
      </p>
      <SearchBar query={query}/>
    </section>
    <section className='section_container'>
      <p className='text-30-semibold'>
        {query ? `search results for the following '${query}'`:"All startups"}
      </p>
      <ul className='mt-7 card_grid'>
{posts?.length>0? (
  posts.map((post:StartupCardType,ind)=>(
    <StartupCard key={post.id} posts={post}/>
  ))
):<p className='no-results'> No Startups Found!!</p>}
      </ul>
    </section>
    </>
  )
}

export default page
