export default function Footer() {
  return (
    <>
      <footer className="bg-[#0A2233] py-10 px-6 grid md:grid-cols-3 gap-8 text-[12px] text-white/80">
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-lg bg-[#FF8C1A] grid place-items-center font-black text-black">E</div>
          <div>
            <p className="font-black text-[#FF8C1A] leading-tight">EPHRAIM<br/>ORPHANAGE HOME</p>
            <p className="text-[10px] mt-1">We Lift Orphans from Surviving to thriving (Psalms 22:6)</p>
          </div>
        </div>
        <div>
          <h4 className="font-black text-[#FF8C1A] mb-2">Contact Us</h4>
          <p>Whatsapp: 0752 748110</p>
          <p>Instagram: ephraimorphanagehome</p>
          <p>ephraimmatovu@outlook.com</p>
        </div>
        <div className="md:text-right">
          <h4 className="font-black text-[#FF8C1A] mb-2">Location</h4>
          <p>Uganda, East Africa</p>
          <p>Supporting orphans since 2018</p>
        </div>
      </footer>
      <div className="bg-[#08202F] text-center text-[10px] py-3 text-white/40">© 2024 Ephraim Orphanage Home | All Rights Reserved | Registered Charity</div>
    </>
  )
}