import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import HomePage from './homepage';
import { APIResult } from '@/types/APIResult';

const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  data: APIResult
}

export default function Home({ data }: HomeProps) {
  return (
    <>
      <Head>
        <title>Ricknmortypedia</title>
        <meta name="description" content="All about Rick and Morty!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Rick-And-Morty-Logo.png" />
      </Head>
      <main>
        <HomePage data={data} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context:any) => {
  

  const hostname = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';
  const res = await fetch(`${hostname}/api/character/1`)
  const data: APIResult = await res.json()

  return {
    props: {
      data,
    },
    revalidate:5
  }
}
