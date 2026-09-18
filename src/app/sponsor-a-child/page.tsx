import Link from 'next/link'
export default function SponsorPage(){
  const kids = [
    {id:1, name:"Hope", age:6, img:6},
    {id:2, name:"Grace", age:8, img:7},
    {id:3, name:"Ephraim", age:7, img:8},
    {id:4, name:"Joy", age:5, img:9},
    {id:5, name:"Faith", age:9, img:10},
    {id:6, name:"Samuel", age:8, img:2},
  ]
  return (
    <main className="bg-[#FFF2E5] min-h-screen py-14 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-black text-[#0E2F44]">Sponsor A <span className="text-[#FF8C1A]">Child</span></h1>
        <p className="text-sm text-gray-600 mt-3">$30/month — you get updates + photos on WhatsApp</p>
        <div className="grid md:grid-cols-3 gap-4 mt-8 text-left">
          {kids.map(k=>(
            <div key={k.id} className="bg-white rounded-2xl p-4 border">
              <img src={`/hero${k.img}.jpg`} alt={k.name} className="h-48 w-full object-cover rounded-xl" />
              <p className="font-black mt-3 text-[#0E2F44] text-sm">{k.name} — Age {k.age}</p>
              <p className="text-[11px] text-gray-500">Needs school fees + food. Loves reading.</p>
              <Link href={`https://wa.me/256752748110?text=I%20want%20to%20sponsor%20${k.name}`} className="mt-3 block bg-[#FF8C1A] text-black text-center py-2 rounded-full font-black text-xs">Sponsor {k.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}