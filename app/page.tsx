import Link from "next/link";
import { ArrowRight, Cog, Users, Heart, Trophy, Target, Zap } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const stats = [
  { value: "5+", label: "Years Competing" },
  { value: "5", label: "Team Members" },
  { value: "200+", label: "Estimated Community Hours" },
  { value: "3", label: "Major Awards" },
];

const features = [
  {
    icon: Cog,
    title: "Engineering Excellence",
    description:
      "We design, build, and program competition-ready robots using industry-standard tools and techniques.",
  },
  {
    icon: Users,
    title: "Teamwork & Leadership",
    description:
      "Our team fosters collaboration, communication, and leadership skills that extend beyond robotics.",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description:
      "We give back through STEM education, mentoring younger teams, and community outreach events.",
  },
];

const recentResults = [
  {
    event: "State Tournament",
    result: "Semi-Finalist",
    award: "Cooper Division Semi-Finalist",
  },
  {
    event: "State Tournament",
    result: "Winner",
    award: "Motivate Award",
  },
  {
    event: "Regional Tournament",
    result: "Winner",
    award: "Inspire Award",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-accent text-accent-foreground">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-60 w-60 rounded-full bg-primary/20 blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground mb-6">
                FIRST Tech Challenge Team
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Building the Future,{" "}
                <span className="text-primary">One Robot at a Time</span>
              </h1>
              <p className="mt-6 text-lg text-accent-foreground/80 max-w-xl text-pretty">
                We are The Despicable Machine, a group of students who care
                deeply about building robots, learning together, and helping
                the next generation of engineers get excited about STEM.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Meet Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/robot"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent")}
                >
                  See Our Robot
                </Link>
              </div>
            </div>

            {/* Robot Showcase Card */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 backdrop-blur-sm border border-accent-foreground/10">
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary">
                    <Cog className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">
                    BIOBUZZ 2026-2027
                  </h3>
                  <p className="mt-2 text-accent-foreground/70">
                    Robot in development
                  </p>
                  <Link
                    href="/robot"
                    className="mt-6 text-primary font-semibold hover:underline flex items-center gap-1"
                  >
                    Explore Features
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-primary-foreground/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About FTC Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                label="About FIRST Tech Challenge"
                title="Where Innovation Meets Competition"
                align="left"
              />
              <p className="text-muted-foreground text-pretty">
                FIRST Tech Challenge (FTC) is a robotics competition for
                students in grades 7-12. Teams design, build, and program
                robots to compete in an alliance format against other teams.
              </p>
              <p className="mt-4 text-muted-foreground text-pretty">
                Beyond the technical skills, FTC also teaches Gracious
                Professionalism, which is all about respect, teamwork, and
                carrying yourself with integrity both on and off the field.
              </p>
              <Link
                href="/about-ftc"
                className={cn(buttonVariants({ variant: "secondary" }), "mt-8")}
              >
                Learn More About FTC
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Target className="mx-auto h-10 w-10 text-primary" />
                    <p className="mt-3 font-display font-semibold">Innovation</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/5 border-secondary/20">
                  <CardContent className="p-6 text-center">
                    <Zap className="mx-auto h-10 w-10 text-secondary" />
                    <p className="mt-3 font-display font-semibold">Technology</p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 pt-8">
                <Card className="bg-secondary/5 border-secondary/20">
                  <CardContent className="p-6 text-center">
                    <Users className="mx-auto h-10 w-10 text-secondary" />
                    <p className="mt-3 font-display font-semibold">Teamwork</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Trophy className="mx-auto h-10 w-10 text-primary" />
                    <p className="mt-3 font-display font-semibold">Competition</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What We Do"
            title="Engineering Excellence & Community Impact"
            description="Our team combines technical skills with a passion for giving back to our community."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardContent className="p-8">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground text-pretty">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Results Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Competition Updates"
            title="Recent Results"
            description="Check out how we've been performing this season."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {recentResults.map((result, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                      {result.result}
                    </span>
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {result.event}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Award: {result.award}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/matches"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              View All Matches
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Outreach Stats Section */}
      <section className="py-20 sm:py-28 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-secondary-foreground/20 px-4 py-1.5 text-sm font-semibold mb-6">
                Community Outreach
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Making a Difference Beyond the Competition
              </h2>
              <p className="mt-6 text-secondary-foreground/80 text-pretty">
                We believe in giving back to our community through STEM
                education, mentoring, and outreach events. Every year, we reach
                hundreds of students and inspire them to explore robotics and
                engineering.
              </p>
              <Link
                href="/outreach"
                className={cn(
                  buttonVariants(),
                  "mt-8 bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
                )}
              >
                Explore Our Outreach
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-secondary-foreground/10 p-6 text-center">
                <p className="font-display text-4xl font-bold">200+</p>
                <p className="mt-2 text-sm text-secondary-foreground/70">
                  Estimated Community Hours
                </p>
              </div>
              <div className="rounded-2xl bg-secondary-foreground/10 p-6 text-center">
                <p className="font-display text-4xl font-bold">15+</p>
                <p className="mt-2 text-sm text-secondary-foreground/70">
                  Events Hosted
                </p>
              </div>
              <div className="rounded-2xl bg-secondary-foreground/10 p-6 text-center">
                <p className="font-display text-4xl font-bold">83</p>
                <p className="mt-2 text-sm text-secondary-foreground/70">
                  FLL teams from 18 states, through a 5-week workshop
                </p>
              </div>
              <div className="rounded-2xl bg-secondary-foreground/10 p-6 text-center">
                <p className="font-display text-4xl font-bold">3</p>
                <p className="mt-2 text-sm text-secondary-foreground/70">
                  Teams Mentored
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Ready to Support the Next Generation of Engineers?
          </h2>
          <p className="mt-6 text-lg text-accent-foreground/80 text-pretty">
            Whether you want to sponsor our team, volunteer with us, or just
            learn more about what we do, we&apos;d love to hear from you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/sponsors"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
              )}
            >
              Sponsorship Info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
