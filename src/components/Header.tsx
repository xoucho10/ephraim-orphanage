import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-[#0E2F44] border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg bg-[#FF8C1A] grid place-items-center font-black text-black">E</div>
          <h1 className="font-black text-[#FF8C1A] leading-none text-[13px]">EPHRAIM<br/>ORPHANAGE HOME</h1>
        </Link>
        <nav className="hidden md:flex gap-6 text-[12px] font-bold text-white/80">
          <Link href="/" className="text-[#FF8C1A]">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/get-involved">Get Involved</Link>
        </nav>
        <Link href="/donate" className="bg-[#FF8C1A] text-black px-5 py-2 rounded-full font-black text-[12px]">Donate Now</Link>
      </div>
    </header>
  )
}