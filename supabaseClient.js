// supabaseClient.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://czxcvrdxpgyxfoaxuyjz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6eGN2cmR4cGd5eGZvYXh1eWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4NzU3MDMsImV4cCI6MjAzODQ1MTcwM30._3StWkLAq86DYL5kBDcL5f8AEvqesu7UygGgwiOMsKU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false,
});
