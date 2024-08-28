import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { ShopName, socialLinks } from "@/constants";
import { getTranslations } from "next-intl/server";
import { Locate, Mail, Phone } from "lucide-react";

const Footer = async () => {
  const LinkClass = "hover:underline w-fit";

  const t = await getTranslations("Footer");

  const contactInfo = [
    { Icon: Phone, text: t("contacts.phone") },
    { Icon: Mail, text: t("contacts.email") },
    { Icon: Locate, text: t("contacts.address") },
  ];

  const catalogLinks = [
    { text: t("catalog.treadmills") },
    { text: t("catalog.ellipticals") },
    { text: t("catalog.bikes") },
    { text: t("catalog.weights") },
  ];

  const companyLinks = [
    { text: t("company.about_us") },
    { text: t("company.careers") },
    { text: t("company.blog") },
    { text: t("company.contact") },
  ];

  return (
    <footer className={cn("bg-background px-8")}>
      <div className="mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-primary">
            {t("contacts.title")}
          </h4>
          <div className="flex flex-col gap-2">
            {contactInfo.map(({ Icon, text }, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-secondary-foreground"
              >
                <Icon size={20} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-bold text-primary">
            {t("catalog.title")}
          </h4>
          <nav className="grid gap-2 text-secondary-foreground">
            {catalogLinks.map(({ text }, index) => (
              <Link key={index} className={LinkClass} href="#">
                {text}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-bold text-primary">
            {t("company.title")}
          </h4>
          <nav className="grid gap-2 text-secondary-foreground">
            {companyLinks.map(({ text }, index) => (
              <Link key={index} className={LinkClass} href="#">
                {text}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4 text-primary">
          <h4 className="text-lg font-bold">{t("follow_us")}</h4>
          <div className="flex gap-4">
            {socialLinks.map(({ Icon, href }, index) => (
              <Link key={index} href={href}>
                <Icon size={24} />
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Input
              className="flex-1 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder={t("email_placeholder")}
              type="email"
            />
            <Button className="rounded-full">{t("subscribe")}</Button>
          </div>
        </div>
      </div>
      <div className="text-primary bg-background py-4 text-center text-sm">
        © 2024 {ShopName}. {t("all_rights_reserved")}
      </div>
    </footer>
  );
};

export default Footer;
