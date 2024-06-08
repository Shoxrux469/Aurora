import { Button } from "@/components/ui/button";
import { DrawerTrigger, DrawerContent, Drawer } from "@/components/ui/drawer";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { ContactIcon, FacebookIcon, HomeIcon, InfoIcon, InstagramIcon, LibraryIcon, LinkedinIcon, LocateIcon, MailIcon, MenuIcon, MountainIcon, PhoneIcon, SearchIcon, TwitterIcon } from "../footer/footerIcons";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";


export function Main() {
  return (
    <div className="bg-white">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Drawer>
            <DrawerTrigger asChild>
              <Button className="lg:hidden" size="icon" variant="ghost">
                <MenuIcon className="h-6 w-6 text-[#004643]" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg">
              <div className="grid gap-4 p-6">
                <Link className="flex items-center" href="#">
                  <MountainIcon className="h-6 w-6 text-[#004643]" />
                  <span className="ml-2 text-[#004643] font-bold">Fitness</span>
                </Link>
                <nav className="grid gap-2">
                  <Link
                    className="flex items-center gap-2 text-[#004643] font-medium hover:text-[#00302f]"
                    href="#"
                  >
                    <HomeIcon className="h-5 w-5" />
                    Home
                  </Link>
                  <Link
                    className="flex items-center gap-2 text-[#004643] font-medium hover:text-[#00302f]"
                    href="#"
                  >
                    <LibraryIcon className="h-5 w-5" />
                    Catalog
                  </Link>
                  <Link
                    className="flex items-center gap-2 text-[#004643] font-medium hover:text-[#00302f]"
                    href="#"
                  >
                    <InfoIcon className="h-5 w-5" />
                    About
                  </Link>
                  <Link
                    className="flex items-center gap-2 text-[#004643] font-medium hover:text-[#00302f]"
                    href="#"
                  >
                    <ContactIcon className="h-5 w-5" />
                    Contact
                  </Link>
                </nav>
              </div>
            </DrawerContent>
          </Drawer>
          <Link className="flex items-center" href="#">
            <MountainIcon className="h-6 w-6 text-[#004643]" />
            <span className="ml-2 text-[#004643] font-bold">Fitness</span>
          </Link>
          <div className="relative w-full max-w-md">
            <Input
              className="w-full rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#004643]"
              placeholder="Search products..."
              type="text"
            />
            <Button
              className="absolute right-2 top-1/2 -translate-y-1/2"
              size="icon"
              variant="ghost"
            >
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <Link
              className="text-[#004643] font-medium hover:text-[#00302f]"
              href="#"
            >
              Contact
            </Link>
            <Button size="icon" variant="ghost">
              <MenuIcon className="h-6 w-6 text-[#004643]" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden bg-[#004643]">
        <div className="container mx-auto px-6 py-12 text-white">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="order-2 mt-6 lg:order-1 lg:mt-0">
              <h2 className="text-5xl font-bold">Spring Collection</h2>
              <p className="mt-4 text-xl">
                Discover our brand new range of fitness equipment.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-full h-[300px] bg-gray-300" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-center">Best Sellers</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-sm mx-auto">
            <div className="bg-gray-100">
              <Image
                alt="Product"
                className="w-full"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-bold">Product Name</h4>
              <p className="text-gray-600">
                Short product description goes here.
              </p>
              <Button className="mt-3">View Product</Button>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#004643] text-white">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contacts</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
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
            <h4 className="text-lg font-bold">Catalog</h4>
            <nav className="grid gap-2">
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
            <h4 className="text-lg font-bold">Company</h4>
            <nav className="grid gap-2">
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
          <div className="space-y-4">
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
        <div className="bg-[#00302f] py-4 text-center text-sm">
          © 2024 Fitness. All rights reserved.
        </div>
      </footer>
    </div>
  );
}