export default function ChildCard({ name }: { name: string }) {
  return (
    <div className="bg-white rounded-2xl p-4 border text-center">
      <div className="w-full h-32 rounded-xl bg-[#FFF2E5] grid place-items-center text-2xl">👶</div>
      <p className="font-bold mt-2 text-[#0E2F44] text-sm">{name}</p>
      <p className="text-[10px] text-gray-500">Needs Sponsor</p>
    </div>
  )
}