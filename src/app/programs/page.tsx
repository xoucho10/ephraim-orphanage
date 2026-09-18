import ProgramCard from '@/components/ProgramCard'

export default function ProgramsPage(){
  const list = [
    {title:"Education Support",desc:"Fees, uniforms, books. 150+ kids in school."},
    {title:"Food & Nutrition",desc:"3 meals/day, porridge, fruits."},
    {title:"Healthcare",desc:"Malaria treatment, checkups, medicine."},
    {title:"Shelter",desc:"Safe dorms, beds, love."},
    {title:"Spiritual Growth",desc:"Sunday school, Psalms 22:6 values."},
    {title:"Skills & Farming",desc:"Tailoring, agriculture for teens."},
  ]
  return (
    <main className="bg-white min-h-screen">
      <section className="bg-[#0E2F44] py-16 px-6 text-center"><h1 className="text-4xl font-black text-white">Our <span className="text-[#FF8C1A]">Programs</span></h1></section>
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-4">
        {list.map(p=> <ProgramCard key={p.title} title={p.title} desc={p.desc} />)}
      </div>
    </main>
  )
}