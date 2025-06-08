export const config = {
    auth0: {
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
        anonApiKey: import.meta.env.VITE_AUTH0_ANON_API_KEY,
    },
    omdb: {
        apiKey: import.meta.env.VITE_OMDB_API_KEY,
        basePath: import.meta.env.VITE_OMDB_API_BASE_PATH,
    },
};
