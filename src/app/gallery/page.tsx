export default function GalleryPage(){
  return (
    <main className="bg-[#0E2F44] min-h-screen">
      <section className="py-14 px-6 text-center">
        <h1 className="text-4xl font-black text-white">Life at <span className="text-[#FF8C1A]">Ephraim Home</span></h1>
        <p className="text-white/50 text-sm mt-2">10 real moments — 150+ children loved daily in Uganda</p>
      </section>
      <div className="max-w-6xl mx-auto px-6 pb-14 grid grid-cols-2 md:grid-cols-5 gap-3">
        {[1,2,3,4,5,6,7,8,9,10].map(n=>(
          <img key={n} src={`/hero${n}.jpg`} alt={`Ephraim gallery ${n}`} className="h-[240px] w-full object-cover rounded-2xl hover:scale-[1.02] transition" />
        ))}
      </div>
    </main>
  )
}