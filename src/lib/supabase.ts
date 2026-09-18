import { createClient } from '@supabase/supabase-js'

function getEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    return "https://placeholder.supabase.co"
  }
  return value
}

const url = getEnv('NEXT_PUBLIC_SUPABASE_URL')
const key = getEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY')

export const supabase = createClient(url, key)