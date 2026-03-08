import Link from "next/link";
import {
  ArrowRight,
  Cog,
  Code,
  Users,
  Trophy,
  Lightbulb,
  Heart,
  ExternalLink,
  BookOpen,
  Target,
  Rocket,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const skills = [
  {
    icon: Cog,
    title: "Mechanical Engineering",
    description:
      "Students design and build robots using CAD software, 3D printing, and hands-on fabrication.",
  },
  {
    icon: Code,
    title: "Programming",
    description:
      "Teams write code in Java to control their robots, including autonomous routines.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Collaboration is essential as students work together to solve complex problems.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Students learn to think critically and adapt quickly to new challenges.",
  },
  {
    icon: Heart,
    title: "Gracious Professionalism",
    description:
      "FTC emphasizes respect, cooperation, and supporting fellow competitors.",
  },
  {
    icon: Target,
    title: "Business Skills",
    description:
      "Teams manage budgets, seek sponsors, and market themselves professionally.",
  },
];

const competitionStructure = [
  {
    title: "League Meets",
    description:
      "Regular season events where teams compete and refine their robots.",
    icon: Cog,
  },
  {
    title: "League Tournament",
    description:
      "End-of-league competitions that determine advancement to regionals.",
    icon: Trophy,
  },
  {
    title: "Regional Championship",
    description:
      "Higher-level competition with the best teams from multiple leagues.",
    icon: Rocket,
  },
  {
    title: "State Championship",
    description:
      "The pinnacle of the season where top teams compete for world advancement.",
    icon: Target,
  },
];

const resources = [
  {
    title: "FIRST Official Website",
    url: "https://www.firstinspires.org/robotics/ftc",
    description: "The official source for all FTC information and resources.",
  },
  {
    title: "Game Manual",
    url: "https://www.firstinspires.org/resource-library/ftc/game-and-season-info",
    description: "Current season game rules, scoring, and field specifications.",
  },
  {
    title: "FTC Docs",
    url: "https://ftc-docs.firstinspires.org/",
    description: "Technical documentation for programming and robot building.",
  },
  {
    title: "Start a Team",
    url: "https://www.firstinspires.org/ways-to-help/start-a-team",
    description: "Information on how to start your own FTC team.",
  },
];

export default function AboutFTCPage() {
  return (
    <>
      <PageHero
        label="FIRST Tech Challenge"
        title="What is FTC?"
        description="FIRST Tech Challenge is the ultimate sport for the mind, combining the excitement of competition with the rewards of learning science and technology."
      />

      {/* Overview Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                label="Overview"
                title="The Ultimate STEM Competition"
                align="left"
              />
              <p className="text-muted-foreground text-pretty">
                FIRST Tech Challenge (FTC) is a robotics competition designed
                for students in grades 7-12. Teams of up to 15 members design,
                build, program, and operate robots to compete in a head-to-head
                challenge in an alliance format.
              </p>
              <p className="mt-4 text-muted-foreground text-pretty">
                Each year, teams are presented with a new game theme and
                challenge. The 2024-25 season theme is &quot;DECODE&quot; where robots must
                navigate strategic challenges in this exciting new game.
              </p>
              <p className="mt-4 text-muted-foreground text-pretty">
                FTC is part of the FIRST family of programs, which also includes
                FIRST Robotics Competition (FRC), FIRST LEGO League (FLL), and
                FIRST LEGO League Jr.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <p className="font-display text-4xl font-bold text-primary">
                    7-12
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Grade Levels
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-secondary/5 border-secondary/20">
                <CardContent className="p-6 text-center">
                  <p className="font-display text-4xl font-bold text-secondary">
                    15
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Max Team Size
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-secondary/5 border-secondary/20">
                <CardContent className="p-6 text-center">
                  <p className="font-display text-4xl font-bold text-secondary">
                    6K+
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Teams Worldwide
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <p className="font-display text-4xl font-bold text-primary">
                    50+
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Countries
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Students Learn */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Learning Outcomes"
            title="What Students Learn"
            description="FTC provides a comprehensive learning experience that goes far beyond building robots."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <Card key={skill.title}>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {skill.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Structure */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="How It Works"
            title="Competition Structure"
            description="The FTC season is structured to provide multiple opportunities for teams to compete and improve."
          />
          <div className="relative">
            <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border md:block" />
            <div className="space-y-8">
              {competitionStructure.map((stage, index) => (
                <div key={stage.title} className="relative flex gap-6 md:gap-12">
                  <div className="hidden md:flex">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <stage.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 md:hidden mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <stage.icon className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">
                          Stage {index + 1}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold">
                        {stage.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {stage.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 sm:py-28 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-secondary-foreground/20 px-4 py-1.5 text-sm font-semibold mb-6">
                Recognition
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                More Than Just Winning
              </h2>
              <p className="mt-6 text-secondary-foreground/80 text-pretty">
                FTC recognizes teams for much more than robot performance. Awards
                celebrate innovation, teamwork, community impact, and the FIRST
                Core Values.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Inspire Award - The highest team award",
                  "Think Award - For exceptional engineering process",
                  "Connect Award - For community outreach",
                  "Innovate Award - For creative design",
                  "Design Award - For engineering excellence",
                  "Motivate Award - For team spirit",
                ].map((award) => (
                  <li key={award} className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-primary" />
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-secondary-foreground/10 p-8 lg:p-12">
              <BookOpen className="h-12 w-12 text-primary mb-6" />
              <h3 className="font-display text-2xl font-bold">
                Engineering Portfolio
              </h3>
              <p className="mt-4 text-secondary-foreground/80">
                Teams document their journey through an Engineering Portfolio,
                showcasing their design process, team management, and outreach
                efforts. This portfolio is reviewed by judges at competitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Get Started"
            title="Resources & Links"
            description="Everything you need to learn more about FTC or start your own team."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {resources.map((resource) => (
              <Card key={resource.title}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold">
                        {resource.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {resource.description}
                      </p>
                    </div>
                    <ExternalLink className="h-5 w-5 shrink-0 text-muted-foreground" />
                  </div>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Visit Website
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
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
            Ready to Learn More About Our Team?
          </h2>
          <p className="mt-6 text-lg text-accent-foreground/80">
            See how Despicable Machines brings FTC to life through competition,
            innovation, and community engagement.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/about" className={cn(buttonVariants({ size: "lg" }))}>
              About Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/robot"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
              )}
            >
              See Our Robot
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
