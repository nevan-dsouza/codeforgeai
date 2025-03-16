
import { createClient } from '@supabase/supabase-js';

// Using the values from src/integrations/supabase/client.ts
const supabaseUrl = "https://kesqapdxmrrcopqxvqdk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtlc3FhcGR4bXJyY29wcXh2cWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNDM3NzIsImV4cCI6MjA1NzcxOTc3Mn0.b1neLEa0QP8VfpVJZwEHtLK7TmFgGwlYs3EQs2Xq9o0";

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase configuration');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
