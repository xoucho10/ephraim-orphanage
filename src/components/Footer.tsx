export default function Footer() {
  return (
    <footer className="bg-[#0A1C2B] border-t border-white/10">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* LEFT - HUGE LOGO IDENTITY - SAME AS HEADER */}
        <div className="flex gap-4">
          <img
            src="/logo.png"
            alt="Ephraim Orphanage Home"
            className="w-[64px] h-[64px] lg:w-[72px] lg:h-[72px] rounded-[14px] bg-white p-1.5 object-contain shadow-[0_0_20px_rgba(255,255,255,0.15)] border-2 border-white shrink-0"
          />
          <div className="leading-[1.1]">
            <div className="font-black text-[15px]">
              <span className="block text-white">EPHRAIM</span>
              <span className="block text-[#FF8C1A]">ORPHANAGE HOME</span>
            </div>
            <p className="text-[11px] text-white/60 mt-1.5 max-w-[220px] leading-[1.4]">
              We Lift Orphans from Surviving to thriving (Psalms 22:6)
            </p>
          </div>
        </div>

        {/* CENTER - CONTACT */}
        <div className="text-[13px]">
          <div className="font-black text-[#FF8C1A] mb-3">Contact Us</div>
          <div className="text-white/70 space-y-1 leading-6">
            <div>Whatsapp: 0752 748110</div>
            <div>Instagram: ephraimorphanagehome</div>
            <div>ephraimmatovu@outlook.com</div>
          </div>
        </div>

        {/* RIGHT - LOCATION */}
        <div className="text-[13px] md:text-right">
          <div className="font-black text-[#FF8C1A] mb-3">Location</div>
          <div className="text-white/70 leading-6">
            Uganda, East Africa<br/>
            Supporting orphans since 2018
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] text-white/40">
          <div>© 2024 Ephraim Orphanage Home | All Rights Reserved | Registered Charity</div>
          <div className="flex items-center gap-2">© 2026 Ephraim Orphanage. Built with ❤️ for 47 children.</div>
        </div>
      </div>
    </footer>
  )
}