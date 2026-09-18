import Link from 'next/link'

export default function GetInvolvedPage(){
  return (
    <main className="bg-[#FFF2E5] min-h-screen">
      {/* HERO */}
      <section className="bg-[#0E2F44] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-[#FF8C1A]/10 rounded-full blur-[140px]" />
          <img src="/hero10.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="inline-flex gap-2 items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <p className="text-[10px] font-black tracking-widest text-white/60">47 CHILDREN WAITING • 30 BOYS • 17 GIRLS • 1 DISABLED GIRL NEEDS YOU</p>
          </div>
          <h1 className="mt-8 text-6xl md:text-[84px] font-black leading-[0.85] tracking-tighter text-white">
            Get <span className="text-[#FF8C1A]">Involved</span>
          </h1>
          <p className="mt-6 text-white/50 text-[14px] max-w-2xl leading-relaxed">
            Not everyone can adopt 47 children. But everyone can do something. 7 luxury ways to become family — from $10 to forever.
          </p>
        </div>
      </section>

      {/* 7 WAYS - LUXURY BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-12 gap-5 auto-rows-[280px]">

        {/* 1 - DONATE - LARGE */}
        <div className="md:col-span-8 bg-[#FF8C1A] rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group">
          <img src="/hero1.jpg" alt="" className="absolute right-0 top-0 w-[55%] h-full object-cover opacity-30 group-hover:scale-105 transition duration-700" />
          <div className="relative">
            <p className="text-[10px] font-black tracking-widest bg-black text-[#FF8C1A] inline-block px-3 py-1 rounded-full">01 • MOST URGENT</p>
            <h3 className="mt-4 text-4xl font-black leading-[0.9] text-black">Donate Now<br/>Save A Life Today.</h3>
            <p className="mt-3 text-black/70 text-[13px] max-w-sm">$10 = 7 days food • $30 = 1 month school • $50 = full care • MTN MoMo 0752 748110 or GoFundMe</p>
          </div>
          <div className="relative flex gap-3 mt-6">
            <Link href="/donate" className="bg-black text-white px-7 py-3 rounded-full font-black text-[11px] tracking-widest">DONATE →</Link>
            <Link href="https://www.gofundme.com/f/support-ephraims-mission-for-orphans" className="bg-white text-black px-7 py-3 rounded-full font-black text-[11px] tracking-widest">GOFUNDME</Link>
          </div>
        </div>

        {/* 2 - SPONSOR */}
        <div className="md:col-span-4 bg-[#0E2F44] rounded-[2.5rem] p-8 flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-black tracking-widest text-[#FF8C1A]">02 • HEART</p>
            <h3 className="mt-4 text-[28px] font-black leading-[0.9] text-white">Sponsor<br/>A Child</h3>
            <p className="mt-3 text-white/50 text-[12px]">Become a monthly parent. WhatsApp us photo of child you sponsor.</p>
          </div>
          <Link href="/sponsor-a-child" className="mt-6 bg-white text-black text-center py-3 rounded-full font-black text-[11px] tracking-widest">SPONSOR $30/MO →</Link>
        </div>

        {/* 3 - VOLUNTEER */}
        <div className="md:col-span-4 bg-white rounded-[2.5rem] p-8 border flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-[#FFF2E5] rounded-full grid place-items-center font-black text-[#0E2F44]">✦</div>
            <h3 className="mt-4 text-[22px] font-black text-[#0E2F44] leading-[0.9]">Volunteer<br/>In Uganda</h3>
            <p className="mt-3 text-[12px] text-[#0E2F44]/60">Teach, build, love. Come to Mukono. We host you. Safe, real impact.</p>
          </div>
          <Link href="https://wa.me/256752748110?text=I%20want%20to%20volunteer" className="mt-6 border border-[#0E2F44] text-[#0E2F44] text-center py-3 rounded-full font-black text-[11px] tracking-widest">APPLY ON WHATSAPP</Link>
        </div>

        {/* 4 - SHARE */}
        <div className="md:col-span-4 bg-white rounded-[2.5rem] p-8 border flex flex-col justify-between relative overflow-hidden">
          <img src="/hero6.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
          <div className="relative">
            <p className="text-[10px] font-black tracking-widest text-[#FF8C1A]">04 • FREE BUT POWERFUL</p>
            <h3 className="mt-4 text-[22px] font-black text-[#0E2F44] leading-[0.9]">Share Our<br/>Story</h3>
            <p className="mt-3 text-[12px] text-[#0E2F44]/60">1 share = 100 eyes. Post ephraim-orphanage.vercel.app on your Status.</p>
          </div>
          <div className="relative mt-6 grid grid-cols-2 gap-2">
            <a href="https://wa.me/?text=Help%2047%20orphans%20in%20Uganda%20https://ephraim-orphanage.vercel.app" className="bg-[#25D366] text-white text-center py-2.5 rounded-full font-black text-[10px]">WHATSAPP</a>
            <a href="https://www.instagram.com/ephraimorphanagehome" className="bg-black text-white text-center py-2.5 rounded-full font-black text-[10px]">INSTAGRAM</a>
          </div>
        </div>

        {/* 5 - CORPORATE */}
        <div className="md:col-span-4 bg-[#0E2F44] rounded-[2.5rem] p-8 flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-black tracking-widest text-white/40">05 • COMPANIES</p>
            <h3 className="mt-4 text-[22px] font-black text-white leading-[0.9]">Partner With<br/>Your Company</h3>
            <p className="mt-3 text-white/50 text-[12px]">We give you photos, receipts, impact report. Tax receipt via GoFundMe.</p>
          </div>
          <Link href="mailto:ephraimmatovu@outlook.com" className="mt-6 bg-[#FF8C1A] text-black text-center py-3 rounded-full font-black text-[11px] tracking-widest">EMAIL US</Link>
        </div>

        {/* 6 - PRAY */}
        <div className="md:col-span-6 bg-[#FFF2E5] rounded-[2.5rem] p-8 border border-[#FF8C1A]/20 flex items-center gap-8">
          <img src="/hero5.jpg" alt="" className="w-[110px] h-[110px] rounded-[1.5rem] object-cover shrink-0" />
          <div>
            <h3 className="text-[20px] font-black text-[#0E2F44]">Pray & Send Love</h3>
            <p className="mt-2 text-[12px] text-[#0E2F44]/60">We are Psalms 22:6 family. Your prayers keep us strong. Send voice note on WhatsApp — we play for kids.</p>
            <Link href="https://wa.me/256752748110" className="mt-4 inline-block text-[11px] font-black tracking-widest border-b border-[#0E2F44]">SEND PRAYER →</Link>
          </div>
        </div>

        {/* 7 - WISHLIST */}
        <div className="md:col-span-6 bg-white rounded-[2.5rem] p-8 border flex items-center justify-between">
          <div>
            <h3 className="text-[20px] font-black text-[#0E2F44]">Buy From Wishlist</h3>
            <p className="mt-2 text-[11px] text-[#0E2F44]/60">Mattresses, books, shoes, medicine. We send you video of kids receiving.</p>
            <div className="mt-4 flex gap-2 text-[10px] font-black">
              <span className="bg-[#FFF2E5] px-3 py-1 rounded-full">MATTRESS $25</span>
              <span className="bg-[#FFF2E5] px-3 py-1 rounded-full">SHOES $8</span>
              <span className="bg-[#FFF2E5] px-3 py-1 rounded-full">BOOKS $12</span>
            </div>
          </div>
          <Link href="/donate" className="w-12 h-12 bg-[#0E2F44] text-white rounded-full grid place-items-center font-black">→</Link>
        </div>

      </section>

      {/* FINAL LUXURY CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-black rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden">
          <img src="/hero3.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[0.9]">Every Child Deserves<br/><span className="text-[#FF8C1A]">A Family. Be Ours.</span></h2>
            <div className="mt-8 flex justify-center gap-3">
              <Link href="/donate" className="bg-[#FF8C1A] text-black px-10 py-4 rounded-full font-black text-[11px] tracking-widest">DONATE NOW</Link>
              <Link href="/our-children" className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-black text-[11px] tracking-widest backdrop-blur">MEET 47 CHILDREN</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}