import React from 'react'
import SearchBar from '../../components/SearchBar'
import StartupCardType from '@/components/StartupCard'
// import { client } from '@/sanity/lib/client'
import { STARTUPS_QUERY } from '@/sanity/lib/queries'
import StartupCard from '@/components/StartupCard'
import {sanityFetch, SanityLive} from '@/sanity/lib/live'
import { auth } from '@/auth'
// import { StartupTypeCard } from '@/components/StartupCard'

async function page({searchParams}:{searchParams:Promise<{query?:string}>
}) {
  const query =(await searchParams).query
  const params={search :query || null}
  // const posts=await client.fetch(STARTUPS_QUERY)
  const {data:post}=await sanityFetch({query:STARTUPS_QUERY,params})
  // console.log(post)
  const session =await auth();


  console.log(session?.id)
 
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
{post?.length>0? (
  post.map((post:StartupCardType,ind)=>(
    <StartupCard key={post.id} posts={post}/>
  ))
):<p className='no-results'> No Startups Found!!</p>}
      </ul>
    </section>
    <SanityLive/>
    </>
  )
}

export default page
