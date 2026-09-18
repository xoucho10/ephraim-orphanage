export default function Stats() {
  const items = [
    { k: "150+", v: "Children Supported" },
    { k: "7+", v: "Years Serving" },
    { k: "100%", v: "Love & Care" },
  ]
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((i) => (
        <div key={i.v} className="bg-[#FF8C1A]/10 border border-[#FF8C1A]/20 rounded-2xl p-4 text-center">
          <p className="text-2xl font-black text-[#FF8C1A]">{i.k}</p>
          <p className="text-[10px] text-white/70 mt-1">{i.v}</p>
        </div>
      ))}
    </div>
  )
}