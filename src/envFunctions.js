export function getSession() {
  return {
    CLIENT_ID: import.meta.env.VITE_CLIENT_ID,
    CLIENT_SECRET: import.meta.env.VITE_CLIENT_SECRET,
    REDIRECT_URL: import.meta.env.VITE_REDIRECT_URL,
    AUTH_CODE: import.meta.env.VITE_AUTH_CODE,
  };
}
