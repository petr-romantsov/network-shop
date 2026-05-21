export const getItemKey = (...args: unknown[]): string => {
  const itemKey = args
    .filter((item) => item !== null)
    .map(String)
    .join('-');
  return itemKey;
};
