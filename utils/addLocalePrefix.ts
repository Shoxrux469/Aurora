export const addLocalePrefix = (path: string, locale: string): string => {
  return `/${locale}${path}`;
};
