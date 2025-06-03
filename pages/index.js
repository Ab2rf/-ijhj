import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Serveo - Home</title>
      </Head>
      <main className="min-h-screen bg-light text-secondary flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-primary mb-4">Serveo 🛍️</h1>
        <p className="text-lg mb-8">Your trusted platform for digital products, services, and middleman purchases</p>
        <div className="flex gap-4">
          <Link href="/products"><button className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-red-700">Products</button></Link>
          <Link href="/services"><button className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-red-700">Services</button></Link>
          <Link href="/middleman"><button className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-red-700">Middleman</button></Link>
        </div>
      </main>
    </>
  )
}