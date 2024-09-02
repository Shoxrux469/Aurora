type Pathnames<Locales extends readonly string[]> = {
  [key: string]: string | { [K in Locales[number]]: string };
};
