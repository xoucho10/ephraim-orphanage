type Props = { title: string; desc: string }
export default function ProgramCard({ title, desc }: Props) {
  return (
    <div className="bg-white rounded-2xl p-5 border">
      <div className="w-10 h-10 rounded-lg bg-[#FFF2E5] grid place-items-center">❤️</div>
      <h3 className="font-black mt-3 text-[#0E2F44] text-sm">{title}</h3>
      <p className="text-[11px] text-gray-600 mt-1">{desc}</p>
    </div>
  )
}