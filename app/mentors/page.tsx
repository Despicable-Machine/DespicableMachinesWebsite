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
    name: "Aiden Anderson",
    role: "Undergraduate at UIUC • CS + Physics",
    detail: "Student Mentor",
    bio: "Aiden is a Barrington FTC alum and brings his experience in computer science and physics to support students in engineering, coding, and problem-solving.",
    initials: "AA",
    image: "/images/Mentors/AidenAnderson.JPG",
    linkedin: "https://www.linkedin.com/in/aidan-anderson-189189299/",
  },
];

const professionalMentors = [
  {
    name: "Jeff Williams",
    role: "Business Leader | Executive",
    bio: "Jeff shares practical leadership and business strategy insight that helps students connect technical work with growth, operations, and real-world impact.",
    initials: "JW",
    image: "/images/Mentors/JeffWilliams.jpeg",
    linkedin: "https://www.linkedin.com/in/williams-jeffrey/",
  },
];

interface MentorCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
  detail?: string;
  image?: string;
  linkedin: string;
  color?: "primary" | "secondary";
}

function MentorCard({
  name,
  role,
  bio,
  initials,
  detail,
  image,
  linkedin,
  color = "primary",
}: MentorCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "flex h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-border bg-muted",
              color === "primary" ? "bg-primary/10" : "bg-secondary/10"
            )}
          >
            {image ? (
              <img src={image} alt={name} className="h-full w-full object-cover" />
            ) : (
              <span
                className={cn(
                  "flex h-full w-full items-center justify-center font-display text-xl font-bold",
                  color === "primary" ? "text-primary" : "text-secondary"
                )}
              >
                {initials}
              </span>
            )}
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
                title="Student Mentors"
                description="Student mentors are Barrington alumni or students who want to give back to the community by sharing their experience and helping current members find their footing."
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
