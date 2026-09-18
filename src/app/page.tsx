import Link from 'next/link'
import Stats from '@/components/Stats'
import DonateButton from '@/components/DonateButton'
import ProgramCard from '@/components/ProgramCard'

export default function Home() {
  return (
    <main className="bg-[#0E2F44]">
      {/* HERO - PREMIUM */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <p className="text-white/70 text-[10px] font-bold tracking-widest">LIVE FROM UGANDA • 47 CHILDREN HOME</p>
          </div>
          <h1 className="mt-6 text-6xl md:text-[72px] font-black leading-[0.85] tracking-tight text-white">
            WE LIFT<br/>
            <span className="text-[#FF8C1A]">ORPHANS</span><br/>
            FROM<br/>
            SURVIVING<br/>
            TO THRIVING.
          </h1>
          <p className="mt-6 text-white/60 text-[14px] leading-relaxed max-w-md">
            I am Ephraim Matovu, once an orphan raised by Compassion. In 2019 I found 2 orphans under a tree. Today we are <span className="text-white font-bold">47 children</span> — 30 boys, 17 girls, one disabled girl who needs special care. Psalms 22:6 — God defends the orphans.
          </p>
          <div className="mt-8 flex gap-3">
            <DonateButton />
            <Link href="/our-children" className="px-7 py-3.5 rounded-full border border-white/20 text-white text-[12px] font-black tracking-widest">MEET THE 47 CHILDREN →</Link>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <Stats />
            <div className="h-10 w-px bg-white/10"></div>
            <div>
              <p className="text-white font-black text-sm">100% Transparent</p>
              <p className="text-white/40 text-[10px]">MTN MoMo 0752 748110</p>
            </div>
          </div>
        </div>

        {/* 10 PHOTOS COLLAGE - PREMIUM */}
        <div className="relative">
          <div className="rounded-[2.5rem] bg-[#FFF2E5] p-3 shadow-2xl rotate-1">
            <div className="rounded-[2rem] overflow-hidden">
              <img src="/hero1.jpg" alt="Main" className="w-full h-[340px] object-cover" />
              <div className="grid grid-cols-4 gap-2 p-2 bg-white">
                <img src="/hero2.jpg" className="h-[90px] w-full object-cover rounded-xl" alt="" />
                <img src="/hero3.jpg" className="h-[90px] w-full object-cover rounded-xl" alt="" />
                <img src="/hero4.jpg" className="h-[90px] w-full object-cover rounded-xl" alt="" />
                <img src="/hero5.jpg" className="h-[90px] w-full object-cover rounded-xl" alt="" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 -left-8 bg-[#FF8C1A] rounded-[1.5rem] px-7 py-5 shadow-2xl">
            <p className="font-black text-black text-2xl leading-none">47</p>
            <p className="font-black text-black text-[11px] tracking-widest">CHILDREN LOVED</p>
            <p className="text-black/60 text-[9px] font-bold mt-1">30 BOYS • 17 GIRLS • 1 DISABLED</p>
          </div>
          <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-5 py-3 shadow-xl">
            <p className="font-black text-[#0E2F44] text-[11px]">✦ VERIFIED ON GOFUNDME</p>
          </div>
        </div>
      </section>

      {/* REAL MOMENTS - 10 PHOTOS MARQUEE */}
      <section className="bg-[#FFF2E5] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-black text-[#0E2F44] leading-none">Real Moments.<br/><span className="text-[#FF8C1A]">Real Children.</span> Real Hope.</h2>
            <Link href="/gallery" className="text-[11px] font-black tracking-widest text-[#0E2F44] border-b border-[#0E2F44] pb-1">VIEW ALL 10 PHOTOS →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8">
            {[6,7,8,9,10].map(n=>(
              <div key={n} className="group relative overflow-hidden rounded-[1.5rem]">
                <img src={`/hero${n}.jpg`} alt="" className="h-[220px] w-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <p className="absolute bottom-3 left-3 text-white text-[10px] font-black opacity-0 group-hover:opacity-100 transition">EPHRAIM HOME #{n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY + IMPACT */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-3">
            <img src="/hero3.jpg" className="h-[280px] w-full object-cover rounded-[1.5rem]" alt="" />
            <img src="/hero8.jpg" className="h-[280px] w-full object-cover rounded-[1.5rem] mt-8" alt="" />
          </div>
          <div>
            <p className="text-[#FF8C1A] font-black text-[10px] tracking-[0.3em]">OUR STORY — FROM 2 TO 47</p>
            <h2 className="mt-4 text-4xl font-black text-[#0E2F44] leading-[0.9]">I Was Once<br/>An Orphan Too.</h2>
            <p className="mt-6 text-[13px] text-gray-600 leading-relaxed">
              Raised by Compassion International, I know what it means to have no parents. After COVID, 47 orphans lost everything. Church help stopped. We survived on sharing one meal. Now we rent a small home, but we need school fees, food, bedding, medicine.
              <br/><br/>
              <span className="font-black text-[#0E2F44]">Your $10 feeds a child for 7 days. $30 keeps one in school for a month. $50 gives full care.</span>
              <br/><br/>
              One girl is completely disabled — she needs special care and medical help.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-[#FFF2E5] rounded-2xl p-4"><p className="font-black text-[#0E2F44] text-xl">47</p><p className="text-[10px] text-gray-500">Total Children</p></div>
              <div className="bg-[#FFF2E5] rounded-2xl p-4"><p className="font-black text-[#0E2F44] text-xl">2019</p><p className="text-[10px] text-gray-500">Since Started</p></div>
              <div className="bg-[#FFF2E5] rounded-2xl p-4"><p className="font-black text-[#0E2F44] text-xl">100%</p><p className="text-[10px] text-gray-500">Goes To Kids</p></div>
            </div>
            <Link href="/donate" className="mt-8 inline-block bg-[#0E2F44] text-white px-8 py-3 rounded-full font-black text-[11px] tracking-widest">DONATE NOW — SAVE A LIFE</Link>
          </div>
        </div>
      </section>

      {/* PROGRAMS - PREMIUM CLICKABLE LUXURY */}
      <section className="bg-[#0E2F44] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[0.9]">How Your Donation<br/><span className="text-[#FF8C1A]">Transforms Lives</span></h2>
            <p className="mt-3 text-white/30 text-[10px] font-black tracking-[0.2em]">TAP ANY CARD TO DONATE INSTANTLY • 100% TO 47 CHILDREN</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            <ProgramCard
              title="Education $30/mo"
              desc="School fees, uniform, books. Keeps 1 child in class. 13 kids currently out."
            />
            <ProgramCard
              title="Food $10/week"
              desc="3 healthy meals daily for 1 child. 21 meals that save life."
            />
            <ProgramCard
              title="Healthcare"
              desc="Medicine, checkups for 47 kids + special care for 1 disabled girl."
            />
            <ProgramCard
              title="Shelter & Love"
              desc="Rent, bedding, clothes, 24/7 mother care. Family, not facility."
            />
            <ProgramCard
              title="Faith — Psalms 22:6"
              desc="We raise children with hope and spiritual guidance. God defends orphans."
            />
            <ProgramCard
              title="Skills For Future"
              desc="Tailoring, farming, computer for self-reliance after 18."
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#FF8C1A] py-16 px-6 text-center relative overflow-hidden">
        <img src="/hero10.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-5xl font-black text-black leading-[0.9]">Be The Reason A Child<br/>Smiles Today.</h2>
          <p className="text-black/70 text-[13px] mt-4">47 children waiting — MTN MoMo 0752 748110 • GoFundMe International • Wise/PayPal: ephraimmatovu@outlook.com</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/donate" className="bg-black text-[#FF8C1A] px-10 py-4 rounded-full font-black text-[12px] tracking-widest">DONATE NOW</Link>
            <Link href="https://wa.me/256752748110" className="bg-white text-black px-10 py-4 rounded-full font-black text-[12px] tracking-widest">WHATSAPP US</Link>
          </div>
        </div>
      </section>
    </main>
  )
}