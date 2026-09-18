import Link from 'next/link'

export default function WhatsAppFloat(){
  return (
    <Link 
      href="https://wa.me/256752748110?text=Hello%20Ephraim%20I%20saw%20your%20website%20ephraim-orphanage.vercel.app%20I%20want%20to%20help"
      className="fixed bottom-5 right-5 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full grid place-items-center shadow-2xl hover:scale-110 transition"
      aria-label="Chat on WhatsApp"
    >
      <span className="text-2xl">💬</span>
    </Link>
  )
}