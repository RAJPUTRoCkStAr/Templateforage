import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://quzqlftqbigfchnlpdsu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1enFsZnRxYmlnZmNobmxwZHN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxMDEzOTcsImV4cCI6MjA2MzY3NzM5N30.6wFYcCdVkTSreOmVA1p2FQ1_uzEgT5RkBkgloJiwDKg";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please connect to Supabase by clicking the "Connect to Supabase" button in the top right.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);