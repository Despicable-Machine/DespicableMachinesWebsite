import Link from "next/link";
import { ArrowRight, Target, Lightbulb, Users, Heart, Award } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from engineering to outreach.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creative problem-solving and aren't afraid to try new approaches.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "We believe that together we can achieve more than any individual alone.",
  },
  {
    icon: Heart,
    title: "Gracious Professionalism",
    description:
      "We compete with integrity, respect our peers, and support our community.",
  },
];

const awards = [
  {
    name: "Cooper Division Semi-Finalist",
    event: "State Tournament",
    year: "2024",
  },
  { name: "Motivate Award Winner", event: "State Tournament", year: "2024" },
  { name: "Inspire Award Winner", event: "Regional Tournament", year: "2024" },
];





export default function AboutPage() {
  return (
    <>
      <PageHero
        label="2026-2027"
        title="BIOBUZZ"
        description="We are a dedicated team of students passionate about robotics, STEM education, and making a positive impact in our community as we build for the 2026-2027 BIOBUZZ season."
      />

      {/* Mission Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                label="Our Mission"
                title="Inspiring Through Innovation"
                align="left"
              />
              <p className="text-muted-foreground text-pretty">
                The Despicable Machine exists to inspire students to explore STEM
                through hands-on robotics experiences. We believe that building
                robots is about more than engineering. It is also about learning
                how to solve problems, work with others, and grow as leaders.
              </p>
              <p className="mt-4 text-muted-foreground text-pretty">
                We focus on building strong technical skills, leadership, and
                teamwork while helping students grow as confident problem-solvers.
              </p>
            </div>
            <div className="rounded-3xl bg-primary/10 p-8 lg:p-12">
              <blockquote className="text-lg italic text-foreground">
                &quot;Our goal is not just to build great robots, but to build great
                people who will go on to change the world.&quot;
              </blockquote>
              <p className="mt-4 font-display font-semibold text-primary">
                Team Motto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Values"
            title="What Drives Us"
            description="These core values guide everything we do, both on and off the competition field."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 sm:py-28 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Recognition"
            title="Awards & Achievements"
            description="We're proud of what our team has accomplished over the years."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((award, index) => (
              <div
                key={index}
                className="rounded-xl bg-accent-foreground/5 p-6 border border-accent-foreground/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">{award.name}</h3>
                    <p className="text-sm text-accent-foreground/70">
                      {award.event}
                    </p>
                    <p className="text-xs text-accent-foreground/50 mt-1">
                      {award.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/awards"
              className={cn(buttonVariants(), "bg-primary text-primary-foreground")}
            >
              View All Awards
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
