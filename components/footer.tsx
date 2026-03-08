import Link from "next/link";
import { Instagram, Youtube, Github, Mail } from "lucide-react";

const footerLinks = {
  team: [
    { name: "About Us", href: "/about" },
    { name: "Team Members", href: "/team" },
    { name: "Our Robot", href: "/robot" },
    { name: "Awards", href: "/awards" },
  ],
  competition: [
    { name: "Matches", href: "/matches" },
    { name: "About FTC", href: "/about-ftc" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
  ],
  connect: [
    { name: "Contact Us", href: "/contact" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Outreach", href: "/outreach" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "YouTube", href: "#", icon: Youtube },
  { name: "GitHub", href: "#", icon: Github },
  { name: "Email", href: "mailto:team@despicablemachines.org", icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <span className="font-display text-xl font-bold text-primary-foreground">
                  DM
                </span>
              </div>
              <div>
                <span className="font-display text-xl font-bold">
                  Despicable Machines
                </span>
                <p className="text-sm text-accent-foreground/70">
                  FTC Team #6200
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-accent-foreground/70">
              Building robots, inspiring minds, and making a difference in our
              community through FIRST Tech Challenge.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-full bg-accent-foreground/10 p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                Team
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.team.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-accent-foreground/70 transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                Competition
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.competition.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-accent-foreground/70 transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                Connect
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.connect.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-accent-foreground/70 transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-accent-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-accent-foreground/50">
              &copy; {new Date().getFullYear()} Despicable Machines. All rights
              reserved.
            </p>
            <p className="text-sm text-accent-foreground/50">
              Proudly competing in FIRST Tech Challenge
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
