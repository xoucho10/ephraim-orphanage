import fs from 'fs'; import path from 'path'
export async function GET(){
  const dir = path.join(process.cwd(),'public','gallery','raw')
  if(!fs.existsSync(dir)) return Response.json([])
  const files = fs.readdirSync(dir).filter(f=>/\.(jpe?g|png|webp)$/i.test(f)).sort()
  return Response.json(files.map(f=>`/gallery/raw/${f}`))
}