export default () => {
  if (process.env.NODE_ENV === "development") return process.env.DEV_HOST;
  if (process.env.NODE_ENV === "production") return process.env.PROD_HOST;
};
