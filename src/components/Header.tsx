import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-[#0E2F44] border-b border-white/10 sticky top-0 z-[100] shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-6 h-[84px] lg:h-[100px]">
        {/* HUGE LOGO - IDENTITY FROM DISTANCE */}
        <Link href="/" className="flex items-center gap-3 lg:gap-4 group">
          <img
            src="/logo.png"
            alt="Ephraim Orphanage Home Logo"
            className="w-[64px] h-[64px] lg:w-[84px] lg:h-[84px] rounded-[12px] lg:rounded-[16px] bg-white p-1.5 lg:p-2 object-contain shadow-[0_0_25px_rgba(255,255,255,0.25)] border-2 border-white group-hover:scale-105 group-hover:shadow-[0_0_35px_rgba(255,140,26,0.4)] transition-all duration-300"
          />
          <div className="leading-[0.85]">
            <h1 className="font-black leading-none">
              <span className="block text-white text-[18px] lg:text-[24px] tracking-tight">EPHRAIM</span>
              <span className="block text-[#FF8C1A] text-[16px] lg:text-[20px] tracking-tight -mt-0.5">ORPHANAGE HOME</span>
            </h1>
            <span className="hidden lg:block text-[9px] tracking-[0.25em] text-white/40 font-bold mt-1">EST. 2019 • KAMPALA, UGANDA</span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-7 text-[13px] font-bold text-white/70 items-center">
          <Link href="/" className="text-[#FF8C1A] border-b-2 border-[#FF8C1A] pb-1">Home</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/programs" className="hover:text-white transition">Programs</Link>
          <Link href="/gallery" className="hover:text-white transition">Gallery</Link>
          <Link href="/get-involved" className="hover:text-white transition">Get Involved</Link>
        </nav>

        <Link
          href="/donate"
          className="bg-[#FF8C1A] hover:bg-[#ff9a36] text-black px-6 lg:px-8 py-3 lg:py-3.5 rounded-full font-black text-[13px] lg:text-[14px] shadow-[0_0_20px_rgba(255,140,26,0.3)] hover:shadow-[0_0_30px_rgba(255,140,26,0.5)] hover:-translate-y-0.5 transition-all"
        >
          Donate Now
        </Link>
      </div>
    </header>
  )
}