import Link from 'next/link'

export default function AboutPage(){
  return (
    <main className="bg-[#FFF2E5] min-h-screen">
      {/* LUXURY HERO */}
      <section className="bg-[#0E2F44] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#FF8C1A]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-30%] right-[-10%] w-[700px] h-[700px] bg-white/10 rounded-full blur-[130px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur rounded-full px-4 py-1.5">
              <div className="w-1.5 h-1.5 bg-[#FF8C1A] rounded-full animate-pulse" />
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/70">EST. 2019 • MUKONO, UGANDA</p>
            </div>
            <h1 className="mt-8 text-6xl md:text-[84px] font-black leading-[0.85] tracking-tighter text-white">
              About <span className="text-[#FF8C1A]">Us</span>
            </h1>
            <p className="mt-6 text-[15px] leading-relaxed text-white/60 max-w-xl">
              We Lift Orphans from Surviving to Thriving — <span className="text-white font-bold">Psalms 22:6</span><br/>
              47 children, one family, one mission. No child left behind.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl">
            {[
              { k:"47", v:"Children Loved", s:"30 Boys • 17 Girls" },
              { k:"2019", v:"Founded", s:"From 2 to 47" },
              { k:"100%", v:"Goes To Kids", s:"Fully Transparent" },
              { k:"1", v:"Disabled Girl", s:"Special Care" },
            ].map(i=>(
              <div key={i.k} className="bg-white/[0.06] backdrop-blur border border-white/10 rounded-[1.5rem] p-5">
                <p className="text-3xl font-black text-white">{i.k}</p>
                <p className="text-[11px] font-black tracking-widest text-[#FF8C1A] mt-1">{i.v}</p>
                <p className="text-[9px] text-white/40 mt-1">{i.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY - EDITORIAL LUXURY */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
        <div>
          <p className="text-[10px] font-black tracking-[0.3em] text-[#FF8C1A]">THE ORIGIN</p>
          <h2 className="mt-4 text-[36px] md:text-[48px] font-black leading-[0.9] tracking-tight text-[#0E2F44]">
            I Was Once<br/>An Orphan. I Know<br/>The Pain.
          </h2>
          <div className="mt-8 space-y-5 text-[14px] leading-[1.8] text-[#0E2F44]/70">
            <p className="text-[17px] leading-[1.6] font-medium text-[#0E2F44]">
              Ephraim Orphanage Home is a community-based orphanage in Uganda, East Africa, founded in 2019 by <span className="underline decoration-[#FF8C1A] decoration-4 underline-offset-4">Ephraim Matovu</span>. What started with 2 children under a tree now cares for 47 vulnerable children.
            </p>
            <p>
              I was raised by Compassion International after losing my own parents. I know the cold, the hunger, the silence of having no one. After COVID-19, many children in Mukono lost parents to HIV/AIDS, poverty and abandonment. The church could no longer help. I found them — and I became their family.
            </p>
            <p>
              Today we rent a small home. We share everything. We believe every child deserves to grow up in a loving environment where their needs are met and their future is secured. We provide food, shelter, education, healthcare and spiritual nourishment.
            </p>
            <div className="bg-[#0E2F44] rounded-[1.5rem] p-8 mt-8">
              <p className="text-[#FF8C1A] font-black text-[10px] tracking-widest">WHY WE EXIST</p>
              <p className="mt-3 text-white font-black text-[18px] leading-snug">
                Many children lost parents to HIV/AIDS, poverty and abandonment. We become their family. God defends the orphans — Psalms 22:6
              </p>
            </div>
          </div>
        </div>

        {/* LUXURY IMAGE STACK + TIMELINE */}
        <div className="space-y-6">
          <div className="rounded-[2rem] overflow-hidden bg-white p-2 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)]">
            <img src="/hero1.jpg" alt="" className="rounded-[1.5rem] h-[340px] w-full object-cover" />
            <div className="p-5 flex justify-between items-center">
              <p className="text-[11px] font-black text-[#0E2F44]">EPHRAIM MATOVU — FOUNDER</p>
              <p className="text-[10px] text-[#0E2F44]/50">Since 2019</p>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border">
            <p className="text-[10px] font-black tracking-widest text-[#0E2F44]/40">JOURNEY</p>
            <div className="mt-6 space-y-6 relative">
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[#0E2F44]/10" />
              {[
                { y:"2019", t:"2 children under a mango tree" },
                { y:"2021", t:"13 children after COVID crisis" },
                { y:"2023", t:"32 children, church help stops" },
                { y:"2026", t:"47 children — 30 boys, 17 girls, 1 disabled" },
              ].map(j=>(
                <div key={j.y} className="relative flex gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF8C1A] mt-1.5 shrink-0" />
                  <div>
                    <p className="text-[11px] font-black text-[#FF8C1A]">{j.y}</p>
                    <p className="text-[13px] font-bold text-[#0E2F44]">{j.t}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES - LUXURY CARDS */}
      <section className="bg-[#0E2F44] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end">
            <h3 className="text-4xl font-black text-white leading-[0.9]">What We<br/><span className="text-[#FF8C1A]">Believe.</span></h3>
            <p className="text-white/40 text-[11px] max-w-xs text-right hidden md:block">Luxury means every child has dignity — clean bed, school uniform, 3 meals, love.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {[
              { n:"01", t:"Dignity", d:"No child begs. Every child has a bed, uniform, and name known." },
              { n:"02", t:"Transparency", d:"MTN MoMo 0752 748110 public. GoFundMe verified. Every shilling tracked." },
              { n:"03", t:"Family, Not Facility", d:"We are mothers, brothers, sisters. 24/7 love, not just shelter." },
            ].map(c=>(
              <div key={c.n} className="group bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] rounded-[2rem] p-8 transition">
                <p className="text-[#FF8C1A] font-black text-[10px]">{c.n}</p>
                <p className="mt-4 text-white font-black text-[20px]">{c.t}</p>
                <p className="mt-3 text-white/50 text-[12px] leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/donate" className="inline-block bg-[#FF8C1A] text-black px-10 py-4 rounded-full font-black text-[11px] tracking-[0.2em]">SUPPORT THE 47 CHILDREN →</Link>
          </div>
        </div>
      </section>
    </main>
  )
}