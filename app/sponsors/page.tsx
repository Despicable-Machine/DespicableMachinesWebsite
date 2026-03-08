import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Target,
  Users,
  Megaphone,
  CheckCircle,
  Mail,
  Award,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const currentSponsors = [
  { name: "TechCorp Industries", logo: "TC" },
  { name: "Innovation Labs", logo: "IL" },
  { name: "Engineering Solutions", logo: "ES" },
  { name: "Future Makers Inc", logo: "FM" },
  { name: "STEM Foundation", logo: "SF" },
  { name: "Local Hardware Store", logo: "LH" },
  { name: "Community Bank", logo: "CB" },
  { name: "Smith & Associates", logo: "SA" },
];

const howFundsAreUsed = [
  {
    icon: Target,
    title: "Competition Fees",
    description: "Registration and event fees for competitions throughout the season.",
    percentage: "25%",
  },
  {
    icon: Award,
    title: "Robot Parts",
    description: "Motors, sensors, structural components, and electronics.",
    percentage: "40%",
  },
  {
    icon: Users,
    title: "Outreach Programs",
    description: "Materials and supplies for community STEM education events.",
    percentage: "20%",
  },
  {
    icon: Megaphone,
    title: "Team Operations",
    description: "Team shirts, marketing materials, and workspace supplies.",
    percentage: "15%",
  },
];

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        label="Support Our Team"
        title="Our Sponsors"
        description="We are grateful for the generous support of our sponsors who make our robotics journey possible."
      />

      {/* Current Sponsors */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Thank You"
            title="Current Sponsors"
            description="These organizations and individuals make our work possible."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {currentSponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex items-center gap-4 rounded-2xl bg-card border border-border p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground font-display text-lg font-bold">
                  {sponsor.logo}
                </div>
                <span className="font-display font-semibold">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Funds Are Used */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Transparency"
            title="How Your Support Helps"
            description="Every dollar goes directly toward supporting our team and mission."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {howFundsAreUsed.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10">
                    <item.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <p className="mt-4 font-display text-3xl font-bold text-primary">
                    {item.percentage}
                  </p>
                  <h3 className="mt-2 font-display font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20 sm:py-28 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-secondary-foreground/20 px-4 py-1.5 text-sm font-semibold mb-6">
                Why Sponsor
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Invest in the Next Generation
              </h2>
              <p className="mt-6 text-secondary-foreground/80 text-pretty">
                By sponsoring Despicable Machines, you&apos;re not just supporting a
                robotics team - you&apos;re investing in the engineers, scientists,
                and leaders of tomorrow.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Inspire students to pursue STEM careers",
                  "Support hands-on, project-based learning",
                  "Connect with your community",
                  "Build your brand with a positive cause",
                  "Tax-deductible contributions",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-secondary-foreground/10 p-8 lg:p-12 border border-secondary-foreground/10">
              <Mail className="h-12 w-12 text-primary mb-6" />
              <h3 className="font-display text-2xl font-bold">
                Ready to Support Us?
              </h3>
              <p className="mt-4 text-secondary-foreground/80">
                Contact us to discuss sponsorship opportunities or to make a
                donation. We&apos;re happy to work with you to find a partnership
                that meets your goals.
              </p>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-6 bg-primary text-primary-foreground"
                )}
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* In-Kind Donations */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="Other Ways to Help"
            title="In-Kind Donations"
            description="Can't make a financial contribution? We also accept donated materials, services, and expertise."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "Robot parts & materials",
              "3D printing services",
              "Professional mentorship",
              "Workspace or storage",
              "Transportation help",
              "Marketing services",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg bg-muted p-4 text-sm font-medium"
              >
                {item}
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "secondary" }), "mt-8")}
          >
            Inquire About Donations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
