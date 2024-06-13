import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  LocateIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "./footerIcons";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className={cn("bg-background")}>
      <div className="mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-primary">Contacts</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-secondary-foreground">
              <PhoneIcon className="h-5 w-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="h-5 w-5" />
              <span>info@fitness.com</span>
            </div>
            <div className="flex items-center gap-2">
              <LocateIcon className="h-5 w-5" />
              <span>123 Main St, Anytown USA</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-primary">Catalog</h4>
          <nav className="grid gap-2 text-secondary-foreground">
            <Link className="hover:underline" href="#">
              Treadmills
            </Link>
            <Link className="hover:underline" href="#">
              Ellipticals
            </Link>
            <Link className="hover:underline" href="#">
              Bikes
            </Link>
            <Link className="hover:underline" href="#">
              Weights
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-primary">Company</h4>
          <nav className="grid gap-2 text-secondary-foreground">
            <Link className="hover:underline" href="#">
              About Us
            </Link>
            <Link className="hover:underline" href="#">
              Careers
            </Link>
            <Link className="hover:underline" href="#">
              Blog
            </Link>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
          </nav>
        </div>
        <div className="space-y-4 text-primary">
          <h4 className="text-lg font-bold">Follow Us</h4>
          <div className="flex gap-4">
            <Link className="hover:text-gray-300" href="#">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link className="hover:text-gray-300" href="#">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link className="hover:text-gray-300" href="#">
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link className="hover:text-gray-300" href="#">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
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
