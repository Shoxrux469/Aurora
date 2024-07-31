import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { catalogLinks, companyLinks, contactInfo, socialLinks } from "@/constants";

const Footer = () => {
  const LinkClass = "hover:underline w-fit";

  return (
    <footer className={cn("bg-background px-8")}>
      <div className="mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-primary">Contacts</h4>
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
          <h4 className="text-lg font-bold text-primary">Catalog</h4>
          <nav className="grid gap-2 text-secondary-foreground">
            {catalogLinks.map((link, index) => (
              <Link key={index} className={LinkClass} href="#">
                {link}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-bold text-primary">Company</h4>
          <nav className="grid gap-2 text-secondary-foreground">
            {companyLinks.map((link, index) => (
              <Link key={index} className={LinkClass} href="#">
                {link}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4 text-primary">
          <h4 className="text-lg font-bold">Follow Us</h4>
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
              placeholder="Enter your email"
              type="email"
            />
            <Button className="rounded-full">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="text-primary bg-background py-4 text-center text-sm">
        © 2024 Fitness. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
