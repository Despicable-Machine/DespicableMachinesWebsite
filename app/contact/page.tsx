"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Youtube,
  Github,
  Send,
  CheckCircle,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  {
    icon: Phone,
    title: "Phone",
    value: "Contact via email for fastest response",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@despicablemachines",
    href: "#",
  },
  {
    icon: Youtube,
    name: "YouTube",
    handle: "Despicable Machines FTC",
    href: "#",
  },
  {
    icon: Github,
    name: "GitHub",
    handle: "despicablemachines",
    href: "https://github.com/Despicable-Machine",
  },
];

const inquiryTypes = [
  "General Inquiry",
  "Sponsorship",
  "Outreach Request",
  "Mentorship",
  "Media/Press",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        description="Have questions about our team, interested in sponsoring, or want us at your event? We'd love to hear from you!"
      />

      {/* Contact Info & Form */}
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

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-6 sm:p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="mt-6 font-display text-2xl font-bold">
                        Message Sent!
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Thank you for reaching out. We&apos;ll get back to you as
                        soon as possible.
                      </p>
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            inquiryType: "",
                            message: "",
                          });
                        }}
                        variant="outline"
                        className="mt-6"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-display text-2xl font-bold mb-6">
                        Send Us a Message
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"
                          >
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="inquiryType"
                            className="block text-sm font-medium mb-2"
                          >
                            Inquiry Type
                          </label>
                          <select
                            id="inquiryType"
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          >
                            <option value="">Select an option</option>
                            {inquiryTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium mb-2"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                            placeholder="Tell us more about your inquiry..."
                          />
                        </div>
                        <Button type="submit" size="lg" className="w-full">
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
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
                Despicable Machines is based at Barrington High School in Barrington Illinois,
                USA. We meet regularly during the school year for build sessions,
                programming workshops, and outreach planning.
              </p>
              <div className="mt-6 rounded-xl bg-card border border-border p-6">
                <h3 className="font-display font-semibold mb-4">
                  Meeting Schedule
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Build Sessions</span>
                    <span>Mon, Wed, Fri 3:30-6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Programming</span>
                    <span>Tue, Thu 3:30-5:30 PM</span>
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
            <div className="rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 lg:p-12 flex items-center justify-center aspect-square lg:aspect-auto lg:h-96">
              <div className="text-center">
                <MapPin className="mx-auto h-16 w-16 text-primary/50" />
                <p className="mt-4 font-display text-xl font-bold text-foreground/50">
                  Map Placeholder
                </p>
                <p className="text-sm text-muted-foreground">
                  Central High School
                </p>
              </div>
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
