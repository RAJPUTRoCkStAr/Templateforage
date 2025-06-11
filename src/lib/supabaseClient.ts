import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https";
const supabaseAnonKey = "eyKg";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please connect to Supabase by clicking the "Connect to Supabase" button in the top right.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
