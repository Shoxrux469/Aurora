import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TranslationKeys } from "@/interfaces/translationKeys";

export async function getTranslations(
  locale: string
): Promise<TranslationKeys> {
  const translations = (await serverSideTranslations(locale, [
    "home",
  ])) as TranslationKeys;
  return translations;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...((await serverSideTranslations(locale, ["home"])) as TranslationKeys),
    },
  };
}
