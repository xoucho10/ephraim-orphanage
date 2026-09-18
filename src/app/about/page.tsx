export default function AboutPage(){
  return (
    <main className="bg-white min-h-screen">
      <section className="bg-[#0E2F44] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-black text-white">About <span className="text-[#FF8C1A]">Us</span></h1>
          <p className="text-white/60 text-sm mt-3">We Lift Orphans from Surviving to Thriving — Psalms 22:6</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-6 py-10 text-[13px] leading-6 text-gray-700 space-y-4">
        <p>Ephraim Orphanage Home is a community-based orphanage in Uganda, East Africa, founded in 2018 by Ephraim Matovu. What started with 5 children now cares for 150+ vulnerable children.</p>
        <p>We believe every child deserves to grow up in a loving environment where their needs are met and their future is secured. We provide food, shelter, education, healthcare and spiritual nourishment.</p>
        <p className="font-black text-[#0E2F44]">Why we exist: Many children lost parents to HIV/AIDS, poverty and abandonment. We become their family.</p>
      </div>
    </main>
  )
}