import Link from 'next/link'
export default function SponsorPage(){
  return (
    <main className="bg-[#FFF2E5] min-h-screen py-14 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-black text-[#0E2F44]">Sponsor A <span className="text-[#FF8C1A]">Child</span></h1>
        <p className="text-sm text-gray-600 mt-3">$30/month covers school + food + medical. You get updates + photos.</p>
        <div className="grid md:grid-cols-3 gap-4 mt-8 text-left">
          {[1,2,3,4,5,6].map(i=>(
            <div key={i} className="bg-white rounded-2xl p-4 border">
              <div className="h-32 rounded-xl bg-[#0E2F44]/10 grid place-items-center">Child Photo {i}</div>
              <p className="font-black mt-3 text-[#0E2F44] text-sm">Child {i} — Age 8</p>
              <p className="text-[11px] text-gray-500">Loves reading. Needs school fees.</p>
              <Link href="https://wa.me/256752748110?text=I%20want%20to%20sponsor%20a%20child" className="mt-3 block bg-[#FF8C1A] text-black text-center py-2 rounded-full font-black text-xs">Sponsor on WhatsApp</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}