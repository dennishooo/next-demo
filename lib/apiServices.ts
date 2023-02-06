export const apiServices = {
  get: (...args) => fetch(...args).then((res) => res.json()),
};
