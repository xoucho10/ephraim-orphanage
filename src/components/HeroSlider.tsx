export default function HeroSlider(){
  return (
    <div className="relative rounded-[2.5rem] bg-[#FFF2E5] p-2 rotate-1">
      <div className="rounded-[2rem] overflow-hidden bg-white">
        {/* Main large */}
        <img src="/hero1.jpg" alt="Ephraim main" className="w-full h-[300px] object-cover" />
        {/* Small grid 4 */}
        <div className="grid grid-cols-4 gap-2 p-2">
          <img src="/hero2.jpg" className="h-[80px] w-full object-cover rounded-xl" alt="" />
          <img src="/hero3.jpg" className="h-[80px] w-full object-cover rounded-xl" alt="" />
          <img src="/hero4.jpg" className="h-[80px] w-full object-cover rounded-xl" alt="" />
          <img src="/hero5.jpg" className="h-[80px] w-full object-cover rounded-xl" alt="" />
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 bg-[#FF8C1A] rounded-2xl px-6 py-4 shadow-xl">
        <p className="font-black text-black text-sm">150+ CHILDREN</p>
        <p className="text-[10px] text-black/70 font-bold">10 REAL PHOTOS LIVE</p>
      </div>
      <div className="absolute -top-3 -right-3 bg-white rounded-full px-4 py-2 shadow-xl">
        <p className="font-black text-[#0E2F44] text-[11px]">✦ Psalms 22:6</p>
      </div>
    </div>
  )
}