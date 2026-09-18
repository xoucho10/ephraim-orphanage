import Link from 'next/link'

export default function DonatePage(){
  return (
    <main className="bg-[#FFF2E5] min-h-screen">
      <section className="bg-[#0E2F44] py-16 px-6 text-center">
        <h1 className="text-4xl font-black text-white">Donate <span className="text-[#FF8C1A]">Today</span></h1>
        <p className="text-white/60 text-sm mt-3 max-w-xl mx-auto">100% goes to children. MTN Mobile Money is fastest in Uganda. International via Wise/PayPal.</p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-8 border">
          <h3 className="font-black text-[#0E2F44]">MTN Mobile Money (Uganda)</h3>
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

        <div className="bg-[#0E2F44] rounded-3xl p-8 text-white">
          <h3 className="font-black text-[#FF8C1A]">International Donors</h3>
          <div className="mt-4 space-y-3 text-[12px]">
            <div className="bg-white/5 rounded-xl p-3"><p className="text-white/50 text-[10px]">Email for Wire / Wise / PayPal</p><p className="font-bold">ephraimmatovu@outlook.com</p></div>
            <div className="bg-white/5 rounded-xl p-3"><p className="text-white/50 text-[10px]">Instagram</p><p className="font-bold">ephraimorphanagehome</p></div>
            <p className="text-white/50 text-[11px] mt-3">Message us on WhatsApp first, we will send you PayPal link or Wise details instantly.</p>
          </div>
          <Link href="https://wa.me/256752748110" className="mt-6 block bg-white text-black text-center py-3 rounded-full font-black text-sm">Chat on WhatsApp</Link>
        </div>
      </div>
    </main>
  )
}