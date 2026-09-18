import Link from 'next/link'

const programs = [
  {
    n:"01",
    title:"Education Support",
    price:"$30 / mo",
    image:"/hero6.jpg",
    impact:"1 child in school for 1 month",
    stats:"47 kids need school • 13 not in school due to fees",
    desc:"Fees, uniforms, books, exams. 30 boys, 17 girls dreaming of becoming teachers, doctors, pastors.",
    color:"bg-[#FFF2E5]",
  },
  {
    n:"02",
    title:"Food & Nutrition",
    price:"$10 / week",
    image:"/hero3.jpg",
    impact:"Feeds 1 child 21 meals",
    stats:"3 meals/day • Porridge, posho, beans, fruits",
    desc:"No child goes to bed hungry. 47 plates daily. Your $10 is 7 days of life.",
    color:"bg-[#0E2F44]",
    dark:true
  },
  {
    n:"03",
    title:"Healthcare",
    price:"$25 / mo",
    image:"/hero8.jpg",
    impact:"Medicine + checkups",
    stats:"Malaria treatment, first aid, special care for 1 disabled girl",
    desc:"Malaria is our biggest enemy. 1 girl is completely disabled and needs monthly medication.",
    color:"bg-white",
  },
  {
    n:"04",
    title:"Shelter & Love",
    price:"$50 / mo",
    image:"/hero2.jpg",
    impact:"Full care for 1 child",
    stats:"Rent, beds, blankets, 24/7 mama care",
    desc:"Safe dorms, clean beds, motherly love. We are not a facility, we are a family.",
    color:"bg-[#FF8C1A]",
  },
  {
    n:"05",
    title:"Spiritual Growth",
    price:"Priceless",
    image:"/hero5.jpg",
    impact:"Psalms 22:6 values",
    stats:"Sunday school, prayer, hope",
    desc:"We raise children with faith. God defends the orphans. We teach forgiveness and future.",
    color:"bg-[#FFF2E5]",
  },
  {
    n:"06",
    title:"Skills & Farming",
    price:"$40 one-time",
    image:"/hero10.jpg",
    impact:"Tailoring, agriculture",
    stats:"For teens 13-17 to become self-reliant",
    desc:"Teens learn tailoring, farming, computer. So when they leave at 18, they can survive.",
    color:"bg-[#0E2F44]",
    dark:true
  },
]

export default function ProgramsPage(){
  return (
    <main className="bg-[#F8F5F1] min-h-screen">
      {/* LUXURY HERO */}
      <section className="bg-[#0E2F44] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-[800px] h-[800px] bg-[#FF8C1A]/10 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <p className="text-[10px] font-black tracking-[0.4em] text-[#FF8C1A]">6 WAYS TO TRANSFORM A LIFE</p>
          <h1 className="mt-6 text-5xl md:text-[64px] font-black leading-[0.9] tracking-tighter text-white">
            Our <span className="text-[#FF8C1A]">Programs</span>
          </h1>
          <p className="mt-4 text-white/50 text-[13px] max-w-xl mx-auto">
            Not charity. Investment. Each dollar is tracked. 100% goes to 47 children — 0752 748110 MTN MoMo • GoFundMe verified.
          </p>
        </div>
      </section>

      {/* LUXURY GRID - LIKE PRODUCT STORE */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p)=>(
            <div key={p.n} className={`${p.color} rounded-[2.2rem] overflow-hidden border border-black/5 group hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] transition-all duration-500`}>
              {/* Image */}
              <div className="relative p-3">
                <img src={p.image} alt={p.title} className="w-full h-[200px] object-cover rounded-[1.6rem]" />
                <div className="absolute top-6 left-6 bg-black text-white text-[9px] font-black tracking-widest px-3 py-1.5 rounded-full">
                  {p.n}
                </div>
                <div className="absolute bottom-6 right-6 bg-white text-black text-[10px] font-black px-3 py-1.5 rounded-full shadow-xl">
                  {p.price}
                </div>
              </div>
              {/* Content */}
              <div className="p-7">
                <h3 className={`text-[20px] font-black leading-tight tracking-tight ${p.dark? 'text-white' : 'text-[#0E2F44]'}`}>{p.title}</h3>
                <p className={`mt-2 text-[11px] font-bold ${p.dark? 'text-[#FF8C1A]' : 'text-[#FF8C1A]'}`}>{p.impact.toUpperCase()} • {p.stats}</p>
                <p className={`mt-4 text-[12px] leading-relaxed ${p.dark? 'text-white/60' : 'text-[#0E2F44]/60'}`}>{p.desc}</p>

                <Link href="/donate" className={`mt-6 flex justify-between items-center w-full rounded-full px-5 py-3 text-[11px] font-black tracking-widest transition ${p.dark? 'bg-white text-black hover:bg-[#FF8C1A]' : 'bg-[#0E2F44] text-white hover:bg-black'}`}>
                  <span>FUND THIS PROGRAM</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LUXURY IMPACT STRIP */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-[#0E2F44] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-10">
            <div><p className="text-4xl font-black text-white">47</p><p className="text-[10px] text-white/40 tracking-widest font-black">CHILDREN</p></div>
            <div><p className="text-4xl font-black text-[#FF8C1A]">100%</p><p className="text-[10px] text-white/40 tracking-widest font-black">TO KIDS</p></div>
            <div><p className="text-4xl font-black text-white">2019</p><p className="text-[10px] text-white/40 tracking-widest font-black">SINCE</p></div>
          </div>
          <div className="flex gap-3">
            <Link href="/donate" className="bg-[#FF8C1A] text-black px-8 py-3 rounded-full font-black text-[11px] tracking-widest">DONATE NOW</Link>
            <Link href="https://wa.me/256752748110" className="bg-white/10 border border-white/10 text-white px-8 py-3 rounded-full font-black text-[11px] tracking-widest backdrop-blur">WHATSAPP</Link>
          </div>
        </div>
      </section>
    </main>
  )
}