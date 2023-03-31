import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import HomePage from './homepage';
import { APIResult } from '@/types/APIResult';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const [data, setData] = useState<APIResult>({
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null
    },
    results: []
  })

  useEffect(() => {
    (async() => {
      const res = await fetch(`${window.location.origin}/api/character/1`)
      const getData: APIResult = await res.json()
      setData(getData)
    })()
  }, [])
  
  return (
    <>
      <Head>
        <title>Ricknmortypedia</title>
        <meta name="description" content="All about Rick and Morty!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Rick-And-Morty-Logo.png" />
      </Head>
      <main>
        <HomePage data={data}  />
      </main>
    </>
  )
}


