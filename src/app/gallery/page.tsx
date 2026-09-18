export default function GalleryPage(){
  const photos = Array.from({length:12}).map((_,i)=>i)
  return (
    <main className="bg-[#0E2F44] min-h-screen">
      <section className="py-14 px-6 text-center">
        <h1 className="text-4xl font-black text-white">Life at <span className="text-[#FF8C1A]">Ephraim Home</span></h1>
        <p className="text-white/50 text-xs mt-2">Add real photos to public/gallery/ — name them 1.jpg to 12.jpg</p>
      </section>
      <div className="max-w-6xl mx-auto px-6 pb-14 grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map(n=>(
          <div key={n} className="aspect-square rounded-2xl bg-[#FFF2E5] grid place-items-center text-[#0E2F44] font-bold text-xs">Photo {n+1}</div>
        ))}
      </div>
    </main>
  )
}