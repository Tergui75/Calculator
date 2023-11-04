import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lqxwqhjnehztziulwiju.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxeHdxaGpuZWh6dHppdWx3aWp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMjM1NjksImV4cCI6MjAxNDU5OTU2OX0.BZc37KoCAsNqPZsLlFCOfUaoxExAjplRpcanPA8HDlw";
const supabase = createClient(supabaseUrl, supabaseKey);
console.log('init supabase:', supabase)
export default function useSupabase() {
  return { supabase };
}
