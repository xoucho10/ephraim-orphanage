"use client"
import { useState, useEffect } from "react"
import { ShieldCheck, ArrowRight, Play, Heart, X, Menu, MapPin, Phone, CheckCircle } from "lucide-react"
import Image from "next/image"

const heroImages = [
  "/hero1.jpg","/hero2.jpg","/hero3.jpg","/hero4.jpg","/hero5.jpg",
  "/hero6.jpg","/hero7.jpg","/hero8.jpg","/hero9.jpg","/hero10.jpg",
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [count47, setCount47] = useState(0)
  const [realMoments, setRealMoments] = useState<string[]>([])
  const [lightbox, setLightbox] = useState<string|null>(null)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c+1) % heroImages.length), 4500)
    return () => clearInterval(t)
  }, [])
  useEffect(() => {
    let i=0
    const t = setInterval(()=>{ if(i<47){i++; setCount47(i)} else clearInterval(t)}, 25)
    return ()=>clearInterval(t)
  }, [])
  useEffect(() => {
    fetch('/api/gallery').then(r=>r.json()).then((files:string[])=>{
      setRealMoments(files.length? files.slice(0,12) : heroImages.slice(0,12))
    }).catch(()=> setRealMoments(heroImages.slice(0,12)))
  }, [])

  return (
    <main className="bg-[#FFFDF9] text-[#102A3C] overflow-x-hidden">
      {/* HEADER - FIXED VISIBILITY */}
      <header className="fixed top-0 w-full z-[100] bg-[#0D2335]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 h-[64px] flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Ephraim" className="w-8 h-8 rounded bg-white p-1 object-contain" />
            <span className="font-black text-white text-[12px] leading-[1] tracking-tight">EPHRAIM<br/><span className="text-[#FF8A1A]">ORPHANAGE HOME</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-[12px] font-semibold text-white/70">
            <a href="#" className="text-white">Home</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#donate">Get Involved</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#donate" className="hidden md:inline-flex bg-[#FF8A1A] text-[#102A3C] font-black text-[12px] px-5 py-2.5 rounded-full hover:bg-[#ff9a36]">Donate Now</a>
            <button onClick={()=>setMobileMenu(!mobileMenu)} className="md:hidden text-white p-2">{mobileMenu? <X/> : <Menu/>}</button>
          </div>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-[#0D2335] border-t border-white/10 px-6 py-6 space-y-4 text-white">
            <a href="#about" onClick={()=>setMobileMenu(false)}>About</a><br/>
            <a href="#gallery" onClick={()=>setMobileMenu(false)}>Gallery</a><br/>
            <a href="#donate" onClick={()=>setMobileMenu(false)} className="inline-block mt-2 bg-[#FF8A1A] text-[#102A3C] font-black px-6 py-3 rounded-full">Donate Now</a>
          </div>
        )}
      </header>

      {/* HERO - EDGE TO EDGE + MOBILE OPTIMIZED */}
      <section className="relative h-[92vh] min-h-[600px] lg:min-h-[700px] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-[#102A3C] pt-[64px]">
        <div className="absolute inset-0">
          {heroImages.map((src, idx)=>(
            <div key={src} className={`absolute inset-0 transition-opacity duration-[1500ms] ${idx===current?'opacity-100':'opacity-0'}`}>
              <Image src={src} alt="" fill sizes="100vw" className="object-cover object-[50%_30%]" priority={idx===0} unoptimized />
              <div className="absolute inset-0 bg-[#102A3C]/60"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#102A3C] via-[#102A3C]/70 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A3C] via-transparent to-transparent"></div>
            </div>
          ))}
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-[10px] tracking-widest text-white/80 mb-5">
              <span className="w-1.5 h-1.5 bg-[#FF8A1A] rounded-full animate-pulse"></span> LIVE FROM KAMPALA • EST. 2019
            </div>
            <h1 className="font-black text-white text-[38px] sm:text-[48px] lg:text-[72px] leading-[0.9] tracking-tight max-w-[600px]">
              WE LIFT<br/><span className="text-[#FF8A1A]">ORPHANS</span><br/>FROM<br/>SURVIVING<br/>TO THRIVING.
            </h1>
            <p className="mt-5 max-w-[520px] text-[14px] lg:text-[15px] leading-6 text-[#D1DCE5]">
              I am Ephraim Matovu, once an orphan raised by Compassion. In 2019 I found 2 orphans under a tree.
              Today we are <b className="text-white text-[18px]">{count47} children</b> — 30 boys, 17 girls.
              <br/><span className="text-white/90 font-bold mt-2 inline-block bg-white/10 px-2 py-1 rounded">Psalms 82:3 — Defend the orphans.</span>
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#donate" className="bg-[#FF8A1A] text-[#102A3C] font-black text-[13px] px-7 py-4 rounded-full inline-flex items-center gap-2 hover:-translate-y-0.5 transition">Donate Now <ArrowRight size={18}/></a>
              <a href="#about" className="bg-white/10 backdrop-blur border border-white/20 text-white text-[13px] font-semibold px-6 py-4 rounded-full hover:bg-white/20 transition inline-flex items-center gap-2"><Play size={16}/> Watch Story</a>
            </div>
            <div className="mt-8 grid grid-cols-4 gap-4 max-w-[480px] border-t border-white/10 pt-5">
              <div><div className="font-black text-white text-2xl lg:text-3xl">{count47}</div><div className="text-[10px] tracking-widest text-white/40">CHILDREN</div></div>
              <div><div className="font-black text-white text-2xl lg:text-3xl">30</div><div className="text-[10px] tracking-widest text-white/40">BOYS</div></div>
              <div><div className="font-black text-white text-2xl lg:text-3xl">17</div><div className="text-[10px] tracking-widest text-white/40">GIRLS</div></div>
              <div className="border-l border-white/10 pl-4"><div className="font-bold text-white text-[11px] flex items-center gap-1"><ShieldCheck size={14} className="text-[#FF8A1A]"/> 100% Transparent</div><div className="text-[10px] text-white/50 leading-3 mt-1">MTN MoMo: 0752 748110</div></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, i)=>(<button key={i} onClick={()=>setCurrent(i)} className={`h-1.5 rounded-full transition-all ${i===current?'w-8 bg-[#FF8A1A]':'w-2 bg-white/30'}`} />))}
        </div>
      </section>

      {/* GALLERY - FIXED TYPO + LIGHTBOX + MOBILE 2 COLS */}
      <section id="gallery" className="bg-[#FEF6EC] py-12 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <h2 className="font-black text-[22px] lg:text-[28px] leading-[1.1]">Real Moments.<br/><span className="text-[#FF8A1A]">Real Children.</span> Real Hope.</h2>
            <div className="text-[10px] text-gray-500 bg-white px-3 py-1 rounded-full border">Showing {realMoments.length} • Tap to enlarge</div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
            {realMoments.map((src,i)=>(
              <button key={src+i} onClick={()=>setLightbox(src)} className="group relative aspect-[4/5] rounded-[16px] overflow-hidden bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left">
                <Image src={src} alt="" fill sizes="(max-width:768px) 50vw, 16vw" className="object-cover object-top group-hover:scale-110 transition duration-700" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-2.5">
                  <span className="text-white text-[11px] font-bold flex items-center gap-1"><Heart size={12} className="fill-[#FF8A1A] text-[#FF8A1A]"/> Loved • #{i+1}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="/gallery" className="inline-flex bg-[#FF8A1A] text-[#102A3C] font-black text-[12px] tracking-widest px-8 py-3.5 rounded-full hover:bg-[#ff9a36] transition">VIEW ALL 80 PHOTOS →</a>
          </div>
        </div>
      </section>

      {/* STORY - BIG NUMBERS ORANGE */}
      <section id="about" className="bg-white py-12 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
            <div className="relative rounded-[20px] overflow-hidden h-[320px] lg:h-[420px]"><Image src={heroImages[0]} alt="" fill sizes="50vw" className="object-cover object-top" unoptimized /></div>
            <div className="space-y-3">
              <div className="relative rounded-[20px] overflow-hidden h-[155px] lg:h-[204px]"><Image src={heroImages[1]} alt="" fill sizes="25vw" className="object-cover object-top" unoptimized /></div>
              <div className="relative rounded-[20px] overflow-hidden h-[155px] lg:h-[204px]"><Image src={realMoments[0] || heroImages[2]} alt="" fill sizes="25vw" className="object-cover object-top" unoptimized /></div>
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] text-[#FF8A1A] font-black mb-3">OUR STORY • FROM 2 TO 47</div>
            <h2 className="font-black text-[30px] lg:text-[44px] leading-[0.95] mb-4">I Was Once<br/>An Orphan Too.</h2>
            <p className="text-[14px] lg:text-[15px] leading-6 text-gray-600">Raised by Compassion International. After COVID, 47 orphans lost everything. Church help stopped. So we started Ephraim Orphanage Home. <b className="text-[#102A3C] bg-[#FEF6EC] px-1 rounded">$10 = 7 Days Food, $30 = School, $50 = Full Care.</b></p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="bg-[#FEF6EC] border border-[#FF8A1A]/20 p-4 rounded-xl"><div className="font-black text-[22px] text-[#FF8A1A]">47</div><div className="text-[10px] font-bold opacity-70 leading-tight">Total Children</div></div>
              <div className="bg-[#FEF6EC] border border-[#FF8A1A]/20 p-4 rounded-xl"><div className="font-black text-[22px] text-[#FF8A1A]">2019</div><div className="text-[10px] font-bold opacity-70 leading-tight">Since Started</div></div>
              <div className="bg-[#102A3C] text-white p-4 rounded-xl"><div className="font-black text-[22px] text-[#FF8A1A]">100%</div><div className="text-[10px] font-bold opacity-70 leading-tight">Goes to Kids</div></div>
            </div>
            <div className="mt-6 flex items-center gap-3 bg-white border border-gray-100 shadow-sm p-3 rounded-full w-fit">
              <img src="/logo.png" alt="" className="w-10 h-10 rounded-full bg-[#FEF6EC] p-1 object-contain" />
              <div><div className="font-black text-[13px]">Ephraim Matovu - Founder</div><div className="text-[11px] text-gray-500 flex items-center gap-1"><MapPin size={10}/> Kampala, Uganda • Verified</div></div>
              <CheckCircle size={18} className="text-green-500 ml-2"/>
            </div>
          </div>
        </div>
      </section>

      {/* DONATION - CONVERTING */}
      <section id="donate" className="bg-[#102A3C] py-12 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-black text-white text-[28px] lg:text-[42px] leading-[0.9]">How Your Donation<br/><span className="text-[#FF8A1A]">Transforms Lives</span></h2>
            <p className="text-white/50 text-[11px] mt-3">Direct • No middleman • Video updates on WhatsApp</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
            {[
              {title:"Food for a Week", price:"$10", ugx:"UGX 38k", img:heroImages[3], desc:"7 days of 3 balanced meals for 1 child", popular:false},
              {title:"School for a Month", price:"$30", ugx:"UGX 115k", img:heroImages[4], desc:"Fees, uniform, books & pens", popular:true},
              {title:"Full Care Package", price:"$50", ugx:"UGX 190k", img:heroImages[5], desc:"Food + School + Medical + Clothes", popular:false},
            ].map(card=>(
              <div key={card.title} className={`relative bg-[#FFF8EE] rounded-[22px] p-2.5 hover:-translate-y-1 transition-all ${card.popular?'ring-2 ring-[#FF8A1A] shadow-[0_20px_60px_rgba(255,138,26,0.3)]':''}`}>
                {card.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF8A1A] text-[#102A3C] text-[10px] font-black px-4 py-1 rounded-full">MOST POPULAR</div>}
                <div className="relative rounded-[16px] overflow-hidden aspect-[16/10]"><Image src={card.img} alt={card.title} fill sizes="33vw" className="object-cover" unoptimized /><div className="absolute top-3 left-3 bg-[#102A3C] text-white text-[10px] font-black px-3 py-1 rounded-full">{card.price} / {card.ugx}</div></div>
                <div className="p-4">
                  <div className="font-black text-[16px]">{card.title}</div>
                  <div className="text-[12px] text-gray-600 mt-1 leading-4">{card.desc}</div>
                  <button className={`mt-4 w-full font-black text-[12px] py-3.5 rounded-full transition ${card.popular?'bg-[#FF8A1A] text-[#102A3C]':'bg-[#102A3C] text-white hover:bg-black'}`}>Donate {card.price} Now →</button>
                  <div className="mt-2 text-[10px] text-center text-gray-400">MTN MoMo: 0752 748110</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-[10px] text-white/60">
            <span className="bg-white/10 px-3 py-1 rounded-full flex items-center gap-1"><ShieldCheck size={12}/> GoFundMe Verified</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">✓ 100% to Kids</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">✓ WhatsApp Updates</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#08131E] text-white/60 py-10">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between gap-6 text-[11px]">
          <div><div className="text-white font-black">EPHRAIM ORPHANAGE HOME</div><div className="mt-1 flex items-center gap-2"><MapPin size={12}/> Kampala, Uganda • Est. 2019</div><div className="mt-1 flex items-center gap-2"><Phone size={12}/> WhatsApp: 0752 748110</div></div>
          <div className="text-right md:text-right">© 2026 Ephraim Orphanage. Built with ❤️ for 47 children.<br/>All donations go directly to children.</div>
        </div>
      </footer>

      {/* STICKY DONATE MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-[90] md:hidden bg-white border-t p-3 flex gap-3">
        <a href="https://wa.me/256752748110" className="flex-1 bg-[#102A3C] text-white text-center font-black text-[12px] py-3.5 rounded-full">WhatsApp</a>
        <a href="#donate" className="flex-[1.5] bg-[#FF8A1A] text-[#102A3C] text-center font-black text-[12px] py-3.5 rounded-full">Donate $10 Now</a>
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="fixed inset-0 z-[200] bg-black/90 p-4 flex items-center justify-center" onClick={()=>setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white bg-white/10 p-2 rounded-full"><X/></button>
          <div className="relative w-full max-w-[900px] aspect-[4/3]"><Image src={lightbox} alt="" fill className="object-contain" unoptimized /></div>
        </div>
      )}
    </main>
  )
}