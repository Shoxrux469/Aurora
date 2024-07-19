import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
  Phone,
  Mail,
  Locate,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const LinkClass = "hover:underline w-fit";

  return (
    <footer className={cn("bg-background")}>
      <div className="mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-primary">Contacts</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-secondary-foreground">
              <Phone size={20} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>info@fitness.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Locate size={20} />
              <span>123 Main St, Anytown USA</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-primary">Catalog</h4>
          <nav className="grid gap-2 text-secondary-foreground">
            <Link className={LinkClass} href="#">
              Treadmills
            </Link>
            <Link className={LinkClass} href="#">
              Ellipticals
            </Link>
            <Link className={LinkClass} href="#">
              Bikes
            </Link>
            <Link className={LinkClass} href="#">
              Weights
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-primary">Company</h4>
          <nav className="grid gap-2 text-secondary-foreground">
            <Link className={LinkClass} href="#">
              About Us
            </Link>
            <Link className={LinkClass} href="#">
              Careers
            </Link>
            <Link className={LinkClass} href="#">
              Blog
            </Link>
            <Link className={LinkClass} href="#">
              Contact
            </Link>
          </nav>
        </div>
        <div className="space-y-4 text-primary">
          <h4 className="text-lg font-bold">Follow Us</h4>
          <div className="flex gap-4">
            <Link href="#">
              <Facebook size={24} />
            </Link>
            <Link href="#">
              <Twitter size={24} />
            </Link>
            <Link href="#">
              <Instagram size={24} />
            </Link>
            <Link href="#">
              <Linkedin size={24} />
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
