"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Our Team", href: "/about" },
      { name: "About FTC", href: "/about-ftc" },
    ],
  },
  { name: "Team", href: "/team" },
  { name: "Robot", href: "/robot" },
  { name: "Matches", href: "/matches" },
  { name: "Outreach", href: "/outreach" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Awards", href: "/awards" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-accent/95 backdrop-blur-sm border-b border-accent-foreground/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 py-1 sm:gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-accent-foreground/10 bg-primary/10 shadow-sm ring-2 ring-primary/10 sm:h-11 sm:w-11">
              <img
                src="/images/Misc/Icon.png"
                alt="The Despicable Machine icon"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="hidden font-display text-lg font-bold tracking-tight text-accent-foreground sm:block sm:text-xl">
              The Despicable Machine
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-foreground/10">
                    {item.name}
                    <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>
                  <div
                    className={cn(
                      "absolute left-0 top-full mt-1 w-48 rounded-lg bg-accent p-2 shadow-lg border border-accent-foreground/10 transition-all",
                      openDropdown === item.name
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-accent-foreground transition-colors hover:bg-accent-foreground/10"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-foreground/10"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-all hover:bg-secondary/90 hover:shadow-lg"
            >
              Support Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-lg p-1.5 text-accent-foreground hover:bg-accent-foreground/10 sm:p-2 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-screen pb-4" : "max-h-0"
          )}
        >
          <div className="space-y-1 pt-2">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.name ? null : item.name
                      )
                    }
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-accent-foreground hover:bg-accent-foreground/10"
                  >
                    {item.name}
                      <ChevronDown
                        className={cn(
                        "h-3.5 w-3.5 transition-transform sm:h-4 sm:w-4",
                        openDropdown === item.name && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all",
                      openDropdown === item.name ? "max-h-40" : "max-h-0"
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block rounded-lg px-6 py-2 text-sm text-accent-foreground/70 hover:bg-accent-foreground/10"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-accent-foreground hover:bg-accent-foreground/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="mt-4 block rounded-full bg-secondary px-5 py-2.5 text-center text-sm font-semibold text-secondary-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
