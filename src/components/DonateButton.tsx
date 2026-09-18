import Link from 'next/link'
export default function DonateButton() {
  return (
    <Link href="/donate" className="bg-[#FF8C1A] text-black px-6 py-3 rounded-full font-black text-sm inline-block">
      Donate Now ❤️
    </Link>
  )
}