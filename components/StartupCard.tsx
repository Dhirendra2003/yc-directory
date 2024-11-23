/* eslint-disable @next/next/no-img-element */
import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { Author, Startup } from '@/sanity/types'

export type StartupCardType=Omit<Startup , "author"> & {author?:Author};

function StartupCard({ posts }: { post: StartupTypeCard }) {
  return (
    <li className='startup-card group'>
      <div className='flex-between'>
        <p className='startup_card_date'>
          {formatDate(posts._createdAt)}
        </p>
        <div className='flex gap-1.5'>
          <EyeIcon className='size-6 text-primary' />
          <span className='text-16-medium'>{posts.views}</span>
        </div>
        </div>
        <div className="flex-between mt-5 gap-5">
          <div className="flex-1">
            <Link href={`/user/${posts.author?._id}`} >
              <p className='font-bold capitalize line-clamp-1'>{posts.author?.name}</p></Link>
              <Link href={`/startups/${posts._id}`} >
              <h3 className='text-26-semibold line-clamp-1'>{posts.title}</h3></Link>
          </div>
          <Link href={`/user/${posts.authortId}`}>
          <Image src={posts?.author?.image} alt='placeholder' width={48} height={48} className='rounded-full'/>
          </Link>
      </div>
      <Link href={`startup/${posts._id}`}>
      <p className='startup-card_desc'>
        {posts.description}
      </p>
      <img src={posts.image} alt="placeholder" className="startup-card_img" />
      </Link>
      <div className='flex-between gap-3 mt-5'>
        <Link href={`/?query=${posts?.category?.toLowerCase()}`}>
        <p className="text-16-medium">{posts?.category}</p>
        </Link>
        <Button className='startup-card_btn' asChild>
          <Link href={`/startup/${posts._id}`}>Details</Link>
        </Button>
      </div>
    </li>
  )
}

export default StartupCard