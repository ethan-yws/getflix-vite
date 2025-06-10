export const config = {
  auth0: {
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  },
  omdb: {
    apiKey: import.meta.env.VITE_OMDB_API_KEY,
    basePath: import.meta.env.VITE_OMDB_API_BASE_PATH,
  },
  supabase: {
    apiPath: import.meta.env.VITE_SUPABASE_API_PATH,
    anonApiKey: import.meta.env.VITE_SUPABASE_ANON_API_KEY,
  },
};
