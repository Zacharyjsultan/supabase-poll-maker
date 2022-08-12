const SUPABASE_URL = 'https://ttldeenxxjworwkqykdt.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bGRlZW54eGp3b3J3a3F5a2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2NDc5MTMsImV4cCI6MTk3NTIyMzkxM30.jEFkrL00S4lZ9cr9E2YhS5KP-GPwcdDh89zvFcsM0kg';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function startNewPoll(data) {
    //same as first soccer push data to supabase 
    const resp = await client.from('polls').insert(data);
    if (resp.error) {
        throw new Error(resp.error.message);
    }
    return resp.data;
}

// display polls in supabase export to fetch and render in js use(.select * for everything)
export async function fetchPolls() {
    const resp = await client.from('polls').select('*');
    if (resp.error) {
        throw new Error(resp.error.message);
    }
    return resp.data;
}