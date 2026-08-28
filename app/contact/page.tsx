"use client";

import Link from "next/link";
import { Mail, MapPin, Instagram } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "despicablemachinebhs@gmail.com",
    href: "mailto:despicablemachinebhs@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Barrington Highschool, Barrington, IL",
    href: "https://bhs.barrington220.org/",
  },
  
];

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@despicablemachines",
    href: "#",
  },
];

export default function ContactPage() {

  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        description="Have questions about our team, interested in sponsoring, or want us at your event? We'd love to hear from you!"
      />

      {/* Contact Info */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <SectionHeader
                label="Contact Info"
                title="Reach Out to Us"
                align="left"
              />
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold">
                        {item.title}
                      </h3>
                      {item.href !== "#" ? (
                        <a
                          href={item.href}
                          target = "_blank"
                          rel = "noopener nonreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="font-display text-lg font-semibold mb-6">
                  Follow Us
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      target = "_blank"
                      rel = "noopener nonreferrer"
                      href={social.href}
                      className="flex items-center gap-4 rounded-xl bg-muted p-4 transition-colors hover:bg-muted/80"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                        <social.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">{social.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {social.handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* School Info */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                label="Our Base"
                title="School Information"
                align="left"
              />
              <p className="text-muted-foreground text-pretty">
                The Despicable Machine is based at Barrington High School in Barrington Illinois,
                USA. We meet regularly during the school year for build sessions,
                programming workshops, and outreach planning.
              </p>
              <div className="mt-6 rounded-xl bg-card border border-border p-6">
                <h3 className="font-display font-semibold mb-4">
                  Meeting Schedule
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between">
                    <span>General Workshop</span>
                    <span>Mon, Tue, Thu 3:30-4:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Build Sessions</span>
                    <span>Wed, Fri 4:15-6:15 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday Build</span>
                    <span>Sat 9:00 AM - 2:00 PM</span>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-muted-foreground">
                  Schedule may vary during competition season. Contact us for
                  current hours.
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-4 lg:p-6 flex items-center justify-center aspect-square lg:aspect-auto lg:h-96 overflow-hidden">
              <img
                src="/images/school/BHS.jpg"
                alt="Barrington High School"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Quick Links"
            title="Looking for Something Specific?"
            description="Check out these popular pages for more information."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Sponsorship Info", href: "/sponsors", desc: "Support our team" },
              { name: "Outreach Programs", href: "/outreach", desc: "Community events" },
              { name: "Meet the Team", href: "/team", desc: "Our members" },
              { name: "Competition Results", href: "/matches", desc: "Match history" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-xl bg-card border border-border p-6 transition-all hover:shadow-md hover:border-primary/50"
              >
                <h3 className="font-display font-semibold">{link.name}</h3>
                <p className="text-sm text-muted-foreground">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
