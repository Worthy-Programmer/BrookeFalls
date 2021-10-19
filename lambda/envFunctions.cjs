exports.getSession = () => {
  return {
    CLIENT_ID: require(process.env.CLIENT_ID),
    CLIENT_SECRET: require(process.env.CLIENT_SECRET),
    REDIRECT_URL: require(process.env.REDIRECT_URL),
    AUTH_CODE: require(process.env.AUTH_CODE),
  };
};
