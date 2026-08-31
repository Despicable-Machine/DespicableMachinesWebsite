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
    name: "Diamond",
    amount: "$5,000+",
    icon: Gem,
    color: "primary",
    benefits: [
      "Premier logo placement",
      "Featured on all major team materials",
      "Priority recognition on website and social media",
      "Invitation to team events and presentations",
      "Quarterly impact reports",
    ],
  },
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
  gold: [
    {
      name: "Main Street Smiles",
      logo: "MS",
      image: "/images/Sponsors/MainStreetSmiles.png",
    },
    {
      name: "Motorola",
      logo: "M",
      image: "/images/Sponsors/Motorola.png",
    },
  ],
  silver: [
    {
      name: "Swiss Automations",
      logo: "SA",
      image: "/images/Sponsors/SwissAutomations.jpg",
    },
    {
      name: "Coil Craft",
      logo: "CB",
      image: "/images/Sponsors/CoilCraft.jpg",
    },
  ],
  bronze: [],
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

          {/* Diamond Sponsors */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Gem className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">
                Diamond Sponsors
              </h3>
            </div>
            <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6 text-center text-muted-foreground">
              No diamond sponsors yet.
            </div>
          </div>

          {/* Platinum Sponsors */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Gem className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">
                Platinum Sponsors
              </h3>
            </div>
            <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6 text-center text-muted-foreground">
              No platinum sponsors yet.
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
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {currentSponsors.gold.map((sponsor) => {
                const imageSizeClass =
                  sponsor.name === "Motorola"
                    ? "h-20 w-24"
                    : sponsor.name === "Main Street Smiles"
                      ? "h-16 w-[9.5rem]"
                      : "h-12 w-12";
                const imageContainerClass =
                  sponsor.name === "Main Street Smiles"
                    ? "overflow-hidden rounded-full bg-white/80"
                    : "overflow-hidden bg-transparent";

                return (
                  <div
                    key={sponsor.name}
                    className="flex items-center justify-start gap-4 rounded-xl border border-border bg-card p-4 text-left"
                  >
                    <div
                      className={cn(
                        "flex shrink-0 items-center justify-center",
                        imageSizeClass,
                        imageContainerClass
                      )}
                    >
                      {sponsor.image ? (
                        <img
                          src={sponsor.image}
                          alt={sponsor.name}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-primary font-display font-bold">
                          {sponsor.logo}
                        </div>
                      )}
                    </div>
                    <span className="font-medium">{sponsor.name}</span>
                  </div>
                );
              })}
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
                  <div className="flex h-10 w-10 shrink-0 overflow-hidden rounded border border-border bg-secondary/10">
                    {sponsor.image ? (
                      <img
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-secondary text-sm font-bold">
                        {sponsor.logo}
                      </div>
                    )}
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
            <div className="rounded-2xl border border-dashed border-secondary/30 bg-secondary/5 p-6 text-center text-muted-foreground">
              No bronze sponsors yet.
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {sponsorTiers.map((tier) => (
              <Card
                key={tier.name}
                className={cn(
                  tier.name === "Diamond" && "ring-2 ring-primary"
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
                By sponsoring The Despicable Machine, you&apos;re not just supporting a
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
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-primary text-primary-foreground"
                  )}
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1VlR2nIzO-vU0lVpxxMnMDbWGAkj_X9BT/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "secondary" }),
                    "bg-secondary-foreground/10 text-secondary-foreground border border-secondary-foreground/20"
                  )}
                >
                  Sponsor Packet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}