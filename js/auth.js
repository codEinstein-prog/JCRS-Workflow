import { supabase } from './supabase.js'

export async function requireAuth() {
  const { data } = await supabase.auth.getSession()
  if (!data.session) {
    window.location.href = '/index.html'
  }
}