exports.getSession = () => {
  return {
    CLIENT_ID: require(meta.env.VITE_CLIENT_ID),
    CLIENT_SECRET: require(meta.env.VITE_CLIENT_SECRET),
    REDIRECT_URL: require(meta.env.VITE_REDIRECT_URL),
    AUTH_CODE: require(meta.env.VITE_AUTH_CODE),
  };
};
