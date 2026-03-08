import Link from "next/link";
import {
  ArrowRight,
  Award,
  Star,
  Calendar,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const majorAwards = [
  {
    name: "Inspire Award",
    event: "State Championship",
    year: "2024",
    description:
      "The most prestigious award in FTC, recognizing a team that embodies the FIRST philosophy and is a strong ambassador for FIRST.",
    icon: Sparkles,
  },
  {
    name: "Design Award",
    event: "Regional Championship",
    year: "2024",
    description:
      "Recognizes design elements of the robot that are both functional and aesthetic, with carefully thought-out engineering.",
    icon: Star,
  },
  {
    name: "Think Award",
    event: "League Tournament",
    year: "2023",
    description:
      "Honors a team that best reflects the journey of the engineering design process through their engineering portfolio.",
    icon: Award,
  },
];

const allAwards = [
  {
    season: "2024-25",
    awards: [
      { name: "Inspire Award", event: "State Championship", date: "April 2024" },
      { name: "Design Award", event: "Regional Championship", date: "March 2024" },
      { name: "Think Award", event: "League Tournament #3", date: "February 2024" },
      { name: "Connect Award", event: "League Tournament #2", date: "February 2024" },
    ],
  },
  {
    season: "2023-24",
    awards: [
      { name: "Think Award", event: "League Tournament", date: "February 2023" },
      { name: "Motivate Award", event: "State Championship", date: "April 2023" },
      { name: "Control Award", event: "League Tournament", date: "January 2023" },
    ],
  },
  {
    season: "2022-23",
    awards: [
      { name: "Connect Award", event: "Regional Qualifier", date: "March 2022" },
      { name: "Design Award", event: "League Tournament", date: "February 2022" },
    ],
  },
  {
    season: "2021-22",
    awards: [
      { name: "Motivate Award", event: "League Tournament", date: "February 2021" },
    ],
  },
  {
    season: "2020-21",
    awards: [
      { name: "Connect Award", event: "Virtual Competition", date: "March 2021" },
    ],
  },
];

const achievements = [
  { value: "12+", label: "Total Awards" },
  { value: "3", label: "State Appearances" },
  { value: "1", label: "Inspire Award" },
  { value: "5", label: "Seasons Competing" },
];



export default function AwardsPage() {
  return (
    <>
      <PageHero
        label="Recognition"
        title="Awards & Achievements"
        description="Celebrating our team's accomplishments throughout the years - from rookie season to Inspire Award winners."
      />

      {/* Achievement Stats */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {achievements.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-primary-foreground/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Awards */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Highlights"
            title="Major Awards"
            description="Our most prestigious recognitions from FTC competitions."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {majorAwards.map((award) => (
              <Card key={`${award.name}-${award.year}`} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <CardContent className="p-6 relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <award.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                      {award.year}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold">
                    {award.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {award.event}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground text-pretty">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Complete Award List */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Complete History"
            title="All Awards by Season"
            description="A comprehensive list of every award we've won."
          />
          <div className="space-y-8">
            {allAwards.map((season) => (
              <Card key={season.season}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h3 className="font-display text-xl font-semibold">
                      {season.season} Season
                    </h3>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {season.awards.length} award{season.awards.length !== 1 && "s"}
                    </span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {season.awards.map((award, index) => (
                      <div
                        key={index}
                        className="rounded-lg bg-muted p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="font-semibold text-sm">
                            {award.name}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {award.event}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {award.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Help Us Add to Our Trophy Case
          </h2>
          <p className="mt-6 text-lg text-accent-foreground/80">
            With your support, we can continue building award-winning robots and
            making an impact in our community.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/sponsors" className={cn(buttonVariants({ size: "lg" }))}>
              Become a Sponsor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/matches"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
              )}
            >
              See Our Results
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
