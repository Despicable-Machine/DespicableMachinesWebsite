import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Star,
  Gem,
  Award,
  Target,
  Users,
  Megaphone,
  CheckCircle,
  Mail,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sponsorTiers = [
  {
    name: "Platinum",
    amount: "$2,500+",
    icon: Gem,
    color: "primary",
    benefits: [
      "Logo on robot",
      "Logo on team shirts",
      "Featured on website homepage",
      "Social media recognition",
      "Team visit or presentation",
      "VIP competition access",
      "Quarterly impact reports",
    ],
  },
  {
    name: "Gold",
    amount: "$1,000+",
    icon: Star,
    color: "primary",
    benefits: [
      "Logo on team shirts",
      "Featured on website",
      "Social media recognition",
      "Team visit or presentation",
      "Bi-annual impact reports",
    ],
  },
  {
    name: "Silver",
    amount: "$500+",
    icon: Award,
    color: "secondary",
    benefits: [
      "Name on website",
      "Social media recognition",
      "Thank you certificate",
      "Annual impact report",
    ],
  },
  {
    name: "Bronze",
    amount: "$100+",
    icon: Heart,
    color: "secondary",
    benefits: [
      "Name on website",
      "Thank you certificate",
      "Newsletter updates",
    ],
  },
];

const currentSponsors = {
  platinum: [
    { name: "TechCorp Industries", logo: "TC" },
    { name: "Innovation Labs", logo: "IL" },
  ],
  gold: [
    { name: "Engineering Solutions", logo: "ES" },
    { name: "Future Makers Inc", logo: "FM" },
    { name: "STEM Foundation", logo: "SF" },
  ],
  silver: [
    { name: "Local Hardware Store", logo: "LH" },
    { name: "Community Bank", logo: "CB" },
    { name: "Smith & Associates", logo: "SA" },
    { name: "Tech Services LLC", logo: "TS" },
  ],
  bronze: [
    { name: "Johnson Family", logo: "JF" },
    { name: "Chen Family", logo: "CF" },
    { name: "Williams Family", logo: "WF" },
    { name: "Martinez Family", logo: "MF" },
    { name: "Local Pizza Shop", logo: "LP" },
    { name: "Downtown Cafe", logo: "DC" },
  ],
};

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

          {/* Platinum Sponsors */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Gem className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">
                Platinum Sponsors
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {currentSponsors.platinum.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex items-center gap-4 rounded-2xl bg-primary/5 border border-primary/20 p-6"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-primary-foreground font-display text-xl font-bold">
                    {sponsor.logo}
                  </div>
                  <span className="font-display text-lg font-semibold">
                    {sponsor.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">
                Gold Sponsors
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {currentSponsors.gold.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex items-center gap-4 rounded-xl bg-card border border-border p-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary font-display font-bold">
                    {sponsor.logo}
                  </div>
                  <span className="font-medium">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-5 w-5 text-secondary" />
              <h3 className="font-display text-lg font-semibold">
                Silver Sponsors
              </h3>
            </div>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
              {currentSponsors.silver.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex items-center gap-3 rounded-lg bg-muted p-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary/10 text-secondary text-sm font-bold">
                    {sponsor.logo}
                  </div>
                  <span className="text-sm font-medium truncate">
                    {sponsor.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bronze Sponsors */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Heart className="h-5 w-5 text-secondary" />
              <h3 className="font-display text-lg font-semibold">
                Bronze Sponsors
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {currentSponsors.bronze.map((sponsor) => (
                <span
                  key={sponsor.name}
                  className="rounded-full bg-muted px-4 py-2 text-sm font-medium"
                >
                  {sponsor.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Partnership Levels"
            title="Sponsorship Tiers"
            description="Choose a sponsorship level that works for you and help us achieve our goals."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sponsorTiers.map((tier) => (
              <Card
                key={tier.name}
                className={cn(
                  tier.name === "Platinum" && "ring-2 ring-primary"
                )}
              >
                <CardContent className="p-6">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl",
                      tier.color === "primary"
                        ? "bg-primary/10"
                        : "bg-secondary/10"
                    )}
                  >
                    <tier.icon
                      className={cn(
                        "h-6 w-6",
                        tier.color === "primary"
                          ? "text-primary"
                          : "text-secondary"
                      )}
                    />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold">
                    {tier.name}
                  </h3>
                  <p
                    className={cn(
                      "text-2xl font-bold mt-1",
                      tier.color === "primary"
                        ? "text-primary"
                        : "text-secondary"
                    )}
                  >
                    {tier.amount}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {tier.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 shrink-0 text-green-500 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Funds Are Used */}
      <section className="py-20 sm:py-28">
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
