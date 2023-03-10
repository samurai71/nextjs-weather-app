import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name='description' content='Weather App in nextjs using openweatherapi ' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
    </>
  );
}
