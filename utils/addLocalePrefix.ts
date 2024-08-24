export const addLocalePrefix = (
  path: string,
  locale: string = "en"
): string => {
  return `/${locale}${path}`;
};
