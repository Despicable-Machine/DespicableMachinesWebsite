import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Linkedin,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const studentMentors = [
  {
    name: "Student Mentor",
    role: "Mechanical Engineering Student",
    detail: "University student",
    bio: "A Barrington FTC alum who brings college experience and a familiar perspective to the team.",
    initials: "SM",
    linkedin: "https://www.linkedin.com/",
  },
];

const professionalMentors = [
  {
    name: "Professional Mentor",
    role: "Mechanical Engineering",
    bio: "Shares professional engineering experience and helps students turn ideas into practical solutions.",
    initials: "PM",
    linkedin: "https://www.linkedin.com/",
  },
];

interface MentorCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
  detail?: string;
  linkedin: string;
  color?: "primary" | "secondary";
}

function MentorCard({
  name,
  role,
  bio,
  initials,
  detail,
  linkedin,
  color = "primary",
}: MentorCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl",
              color === "primary" ? "bg-primary/10" : "bg-secondary/10"
            )}
          >
            <span
              className={cn(
                "font-display text-xl font-bold",
                color === "primary" ? "text-primary" : "text-secondary"
              )}
            >
              {initials}
            </span>
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold">{name}</h3>
            <p
              className={cn(
                "text-sm font-medium",
                color === "primary" ? "text-primary" : "text-secondary"
              )}
            >
              {role}
            </p>
            {detail && <p className="text-xs text-muted-foreground">{detail}</p>}
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground text-pretty">{bio}</p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
      </CardContent>
    </Card>
  );
}

export default function MentorsPage() {
  return (
    <>
      <PageHero
        label="Mentorship"
        title="Meet Our Mentors"
        description="Our mentors support the team with the experience, encouragement, and practical advice that help students keep growing."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                label="Student Mentors"
                title="Barrington FTC Alumni"
                description="Student mentors are Barrington FTC alumni who share what they have learned and help current members find their footing."
                align="left"
              />
              <div className="grid gap-6">
                {studentMentors.map((mentor) => (
                  <MentorCard key={mentor.name} {...mentor} />
                ))}
              </div>
            </div>
            <div>
              <SectionHeader
                label="Professional Mentors"
                title="Experience That Helps Us Grow"
                description="Professional mentors bring real-world knowledge and practical guidance to the shop."
                align="left"
              />
              <div className="grid gap-6">
                {professionalMentors.map((mentor) => (
                  <MentorCard key={mentor.name} {...mentor} color="secondary" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Want to become a mentor?
          </h2>
          <p className="mt-6 text-lg text-accent-foreground/80">
            We would love to hear from people who want to share their experience
            and support students passionate about engineering, programming, and
            robotics.
          </p>
          <div className="mt-10">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
              Become a Mentor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
