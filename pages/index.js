import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home({ exploreData }) {
  return (
    <div className=''>
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto sm:px-16'>
        <section>
          <h2 className='text-4xl font-semibold mb-5'>Explore Nearby</h2>
          {exploreData?.map((item) => (
            <h1 key={item.location}>{item?.location}</h1>
          ))}
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G")
    .then((res) => res.json());
  return {
    props: {
      exploreData
    }
  }
}
