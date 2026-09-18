import Link from 'next/link'
export default function OurChildren(){
  return (
    <main className="bg-white min-h-screen py-14 px-6 text-center">
      <h1 className="text-4xl font-black text-[#0E2F44]">Our <span className="text-[#FF8C1A]">Children</span></h1>
      <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto">150+ children currently under our care. Each has a story of hope.</p>
      <Link href="/sponsor-a-child" className="inline-block mt-6 bg-[#0E2F44] text-white px-6 py-3 rounded-full font-black text-sm">See Children Needing Sponsors</Link>
    </main>
  )
}