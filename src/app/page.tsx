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

        <div className="relative">
          <div className="rounded-[2.5rem] bg-[#FFF2E5] p-2">
            <div className="rounded-[2rem] bg-[#0A2233] h-[480px] grid place-items-center text-center p-8">
              <div>
                <p className="text-6xl">Children Photo Here</p>
                <p className="text-[#FF8C1A] font-black mt-4">150+ CHILDREN</p>
                <p className="text-white/50 text-xs mt-2">Add real hero photo to public folder later</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#FF8C1A] rounded-2xl px-6 py-4 shadow-xl">
            <p className="font-black text-black text-sm">Psalms 22:6</p>
            <p className="text-[10px] text-black/70">God defends the orphans</p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF2E5] py-14 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
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
            <p className="text-[12px] text-gray-600 mt-2">Fully registered charity. 100% of donations go to children welfare. See transparency page.</p>
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
            <Link href="/programs" className="text-[#FF8C1A] font-black text-sm">View All Programs</Link>
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