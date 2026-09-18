import Link from 'next/link'
import Stats from '@/components/Stats'
import ProgramCard from '@/components/ProgramCard'
import DonateButton from '@/components/DonateButton'

export default function Home() {
  return (
    <main className="bg-[#0E2F44]">
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[#FF8C1A] font-black text-[11px] tracking-[0.2em]">WE LIFT ORPHANS FROM SURVIVING TO THRIVING</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-black leading-[0.9] text-white">
            EPHRAIM<br/>
            <span className="text-[#FF8C1A]">ORPHANAGE</span><br/>
            HOME
          </h1>
          <p className="mt-4 text-white/60 text-sm max-w-md">
            We believe every child deserves to grow up in a loving environment where their needs are met and their future is secured. Join us in giving hope, love and education to 150+ orphans in Uganda.
          </p>
          <div className="mt-6 flex gap-3">
            <DonateButton />
            <Link href="/our-children" className="px-6 py-3 rounded-full border border-white/20 text-white text-sm font-bold">Meet The Children</Link>
          </div>
          <div className="mt-10">
            <Stats />
          </div>
        </div>

        {/* NEW 10 PHOTOS HERO - REPLACES PLACEHOLDER */}
        <div className="relative">
          <div className="rounded-[2.5rem] bg-[#FFF2E5] p-2">
            <div className="rounded-[2rem] overflow-hidden">
              <img src="/hero1.jpg" alt="Ephraim children main" className="w-full h-[300px] object-cover" />
              <div className="grid grid-cols-4 gap-2 p-2 bg-white">
                <img src="/hero2.jpg" alt="child 2" className="h-[80px] w-full object-cover rounded-xl" />
                <img src="/hero3.jpg" alt="child 3" className="h-[80px] w-full object-cover rounded-xl" />
                <img src="/hero4.jpg" alt="child 4" className="h-[80px] w-full object-cover rounded-xl" />
                <img src="/hero5.jpg" alt="child 5" className="h-[80px] w-full object-cover rounded-xl" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#FF8C1A] rounded-2xl px-6 py-4 shadow-xl">
            <p className="font-black text-black text-sm">150+ CHILDREN</p>
            <p className="text-[10px] text-black/70 font-bold">Psalms 22:6 - God defends orphans</p>
          </div>
          <div className="absolute -top-3 -right-3 bg-white rounded-full px-4 py-2 shadow-xl">
            <p className="font-black text-[#0E2F44] text-[11px]">10 Real Photos Live</p>
          </div>
        </div>
      </section>

      {/* NEW SECTION - SHOWS hero6 to hero10 */}
      <section className="bg-[#FFF2E5] py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#0E2F44] text-center">Real Moments From Our Home</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
            {[6,7,8,9,10].map(n=>(
              <img key={n} src={`/hero${n}.jpg`} alt={`Ephraim ${n}`} className="h-[180px] w-full object-cover rounded-2xl" />
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div>
              <h3 className="font-black text-[#0E2F44]">Our Mission</h3>
              <p className="text-[12px] text-gray-600 mt-2">To provide love, shelter, education and spiritual guidance to orphaned and vulnerable children.</p>
            </div>
            <div>
              <h3 className="font-black text-[#0E2F44]">Our Vision</h3>
              <p className="text-[12px] text-gray-600 mt-2">A Uganda where no child is left to survive alone — every child thrives.</p>
            </div>
            <div>
              <h3 className="font-black text-[#0E2F44]">Registered and Transparent</h3>
              <p className="text-[12px] text-gray-600 mt-2">MTN MoMo 0752 748110 — 100% of donations go to children welfare.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-[#0E2F44] text-center">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <ProgramCard title="Education Support" desc="School fees, books, uniform for 150+ children. $30 educates 1 child/month." />
            <ProgramCard title="Food & Nutrition" desc="3 meals daily. $10 feeds a child for a week with healthy meals." />
            <ProgramCard title="Healthcare" desc="Medical checkups, medicine, and emergency care for all children." />
            <ProgramCard title="Shelter & Love" desc="Safe home, bedding, clothes, and 24/7 mother care." />
            <ProgramCard title="Spiritual Growth" desc="Psalms 22:6 - We raise children with faith and hope." />
            <ProgramCard title="Skills Training" desc="Tailoring, farming, computer for older children to be self-reliant." />
          </div>
          <div className="text-center mt-8">
            <Link href="/programs" className="text-[#FF8C1A] font-black text-sm">View All Programs →</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FF8C1A] py-14 px-6 text-center">
        <h2 className="text-3xl font-black text-black">Be The Reason A Child Smiles Today</h2>
        <p className="text-black/70 text-sm mt-2 max-w-2xl mx-auto">Your $10, $30, $50 monthly keeps a child in school, fed and loved. MTN MoMo: 0752 748110</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/donate" className="bg-black text-[#FF8C1A] px-8 py-3 rounded-full font-black text-sm">Donate Now</Link>
          <Link href="/sponsor-a-child" className="bg-white text-black px-8 py-3 rounded-full font-black text-sm">Sponsor A Child</Link>
        </div>
      </section>
    </main>
  )
}