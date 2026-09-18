import Link from 'next/link'

export default function DonatePage(){
  return (
    <main className="bg-[#FFF2E5] min-h-screen">
      <section className="bg-[#0E2F44] py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 flex gap-2">
          <img src="/hero1.jpg" className="w-1/3 h-full object-cover" alt="" />
          <img src="/hero2.jpg" className="w-1/3 h-full object-cover" alt="" />
          <img src="/hero3.jpg" className="w-1/3 h-full object-cover" alt="" />
        </div>
        <div className="relative">
          <h1 className="text-4xl font-black text-white">Donate <span className="text-[#FF8C1A]">Today</span></h1>
          <p className="text-white/60 text-sm mt-3 max-w-xl mx-auto">100% goes to 47 children. MTN MoMo fastest in Uganda. International via GoFundMe / Wise / PayPal.</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        {/* MTN MoMo - Uganda */}
        <div className="bg-white rounded-3xl p-8 border">
          <h3 className="font-black text-[#0E2F44] text-sm">🇺🇬 MTN Mobile Money</h3>
          <div className="mt-4 bg-[#FF8C1A]/10 rounded-2xl p-4">
            <p className="text-[10px] font-bold text-[#0E2F44]/60">NUMBER</p>
            <p className="text-2xl font-black text-[#0E2F44]">0752 748110</p>
            <p className="text-[11px] text-gray-600">Name: Ephraim Matovu / Ephraim Orphanage Home</p>
          </div>
          <ul className="mt-4 text-[12px] text-gray-600 space-y-2">
            <li>• $10 = Feeds 1 child for 7 days</li>
            <li>• $30 = School for 1 child for 1 month</li>
            <li>• $50 = Full care for 1 child for 1 month</li>
          </ul>
          <Link href="https://wa.me/256752748110?text=Hello%20Ephraim%20I%20want%20to%20donate" className="mt-6 block bg-[#FF8C1A] text-black text-center py-3 rounded-full font-black text-sm">Confirm on WhatsApp</Link>
        </div>

        {/* GoFundMe - International - NEW BUTTON */}
        <div className="bg-[#00B964] rounded-3xl p-8 text-white">
          <h3 className="font-black text-white text-sm">🌍 International (GoFundMe)</h3>
          <p className="text-white/80 text-[12px] mt-2">Best for USA / UK / Europe donors. Tax receipt included.</p>
          <div className="mt-4 bg-white rounded-2xl p-2">
            <img src="/hero9.jpg" alt="Donate kids" className="w-full h-[110px] object-cover rounded-xl" />
          </div>
          <p className="text-white text-[11px] mt-3">47 kids need you — 30 boys, 17 girls, 1 disabled girl needs special care.</p>
          <a href="https://www.gofundme.com/f/support-ephraims-mission-for-orphans" target="_blank" className="mt-4 block bg-white text-[#00B964] text-center py-3 rounded-full font-black text-sm">Donate on GoFundMe →</a>
          <p className="text-[10px] text-white/70 text-center mt-2">Secure • Verified • Instant</p>
        </div>

        {/* Wise / PayPal */}
        <div className="bg-[#0E2F44] rounded-3xl p-8 text-white">
          <h3 className="font-black text-[#FF8C1A] text-sm">Wise / PayPal / Wire</h3>
          <div className="mt-4 space-y-3 text-[12px]">
            <div className="bg-white/5 rounded-xl p-3"><p className="text-white/50 text-[10px]">Email for Wire / Wise / PayPal</p><p className="font-bold">ephraimmatovu@outlook.com</p></div>
            <div className="bg-white/5 rounded-xl p-3"><p className="text-white/50 text-[10px]">Instagram</p><p className="font-bold">ephraimorphanagehome</p></div>
            <div className="bg-white/5 rounded-xl p-3"><p className="text-white/50 text-[10px]">WhatsApp Direct</p><p className="font-bold">+256 752 748110</p></div>
          </div>
          <Link href="https://wa.me/256752748110" className="mt-6 block bg-white text-black text-center py-3 rounded-full font-black text-sm">Chat on WhatsApp</Link>
        </div>
      </div>

      {/* Photos strip */}
      <div className="max-w-6xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-5 gap-2">
          {[4,5,6,7,8,9,10,1,2,3].map(n=>(
            <img key={n} src={`/hero${n}.jpg`} alt={`child ${n}`} className="h-[80px] w-full object-cover rounded-xl" />
          ))}
        </div>
      </div>
    </main>
  )
}