import Link from 'next/link'

type Props = {
  title: string
  desc: string
}

const cardConfig: Record<string, { price: string; img: string; href: string; tag?: string }> = {
  "Education": { price: "$30/MO", img: "/hero6.jpg", href: "/donate?amount=30&program=education", tag: "13 NEED SCHOOL" },
  "Food": { price: "$10/WEEK", img: "/hero3.jpg", href: "/donate?amount=10&program=food", tag: "MOST URGENT" },
  "Healthcare": { price: "$25", img: "/hero8.jpg", href: "/donate?amount=25&program=health", tag: "1 DISABLED GIRL" },
  "Shelter": { price: "$50", img: "/hero2.jpg", href: "/donate?amount=50&program=shelter" },
  "Faith": { price: "PRAY", img: "/hero5.jpg", href: "/get-involved" },
  "Skills": { price: "$40", img: "/hero10.jpg", href: "/donate?amount=40&program=skills" },
}

export default function ProgramCard({ title, desc }: Props){
  const key = Object.keys(cardConfig).find(k => title.includes(k)) || "Education"
  const cfg = cardConfig[key]

  return (
    <Link href={cfg.href} className="group bg-white rounded-[1.8rem] overflow-hidden border border-black/5 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 block">
      <div className="relative h-[150px] overflow-hidden">
        <img src={cfg.img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[9px] font-black text-[#0E2F44] shadow">{cfg.price}</div>
        {cfg.tag && <div className="absolute top-3 right-3 bg-[#FF8C1A] px-2.5 py-1 rounded-full text-[8px] font-black text-black">{cfg.tag}</div>}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full grid place-items-center font-black text-[14px] group-hover:bg-[#FF8C1A] transition">→</div>
      </div>
      <div className="p-5">
        <h4 className="text-[14px] font-black text-[#0E2F44] leading-tight">{title}</h4>
        <p className="mt-1.5 text-[11px] text-[#0E2F44]/60 leading-relaxed">{desc}</p>
      </div>
    </Link>
  )
}