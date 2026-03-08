import Link from "next/link";
import { ArrowRight, Code, Cog, Users, Briefcase, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const leadership = [
  {
    name: "Alex Rivera",
    role: "Team Captain",
    grade: "12th Grade",
    bio: "Leads the team with passion and drives our strategic direction. Specializes in project management and team coordination.",
    initials: "AR",
  },
  {
    name: "Jordan Chen",
    role: "Co-Captain",
    grade: "11th Grade",
    bio: "Oversees day-to-day operations and ensures smooth collaboration between all sub-teams.",
    initials: "JC",
  },
];

const programmingTeam = [
  {
    name: "Maya Patel",
    role: "Lead Programmer",
    grade: "11th Grade",
    bio: "Expert in Java and autonomous programming. Created our award-winning autonomous routines.",
    initials: "MP",
  },
  {
    name: "Ethan Kim",
    role: "Autonomous Specialist",
    grade: "10th Grade",
    bio: "Focuses on computer vision and sensor integration for precision autonomous control.",
    initials: "EK",
  },
  {
    name: "Sofia Martinez",
    role: "Driver Control",
    grade: "10th Grade",
    bio: "Develops and optimizes our driver-controlled programs for smooth operation.",
    initials: "SM",
  },
];

const mechanicalTeam = [
  {
    name: "Liam Johnson",
    role: "Lead Builder",
    grade: "12th Grade",
    bio: "Mechanical design expert with experience in CAD and precision manufacturing.",
    initials: "LJ",
  },
  {
    name: "Ava Thompson",
    role: "CAD Designer",
    grade: "11th Grade",
    bio: "Creates detailed 3D models and technical drawings for all robot components.",
    initials: "AT",
  },
  {
    name: "Noah Williams",
    role: "Fabrication",
    grade: "10th Grade",
    bio: "Skilled in 3D printing, machining, and hands-on assembly work.",
    initials: "NW",
  },
  {
    name: "Emma Davis",
    role: "Intake Systems",
    grade: "9th Grade",
    bio: "Specializes in game piece manipulation and intake mechanism design.",
    initials: "ED",
  },
];

const outreachTeam = [
  {
    name: "Isabella Garcia",
    role: "Outreach Lead",
    grade: "11th Grade",
    bio: "Coordinates all community events and manages our outreach initiatives.",
    initials: "IG",
  },
  {
    name: "Oliver Brown",
    role: "Social Media",
    grade: "10th Grade",
    bio: "Manages our online presence and creates engaging content for our followers.",
    initials: "OB",
  },
  {
    name: "Charlotte Lee",
    role: "Sponsorship",
    grade: "11th Grade",
    bio: "Leads sponsor relations and helps secure funding for our team.",
    initials: "CL",
  },
];

const mentors = [
  {
    name: "John Smith",
    role: "Lead Mentor",
    bio: "Mechanical engineer with 15 years of industry experience at a Fortune 500 company.",
    initials: "JS",
  },
  {
    name: "Sarah Johnson",
    role: "Programming Mentor",
    bio: "Software developer at a tech startup, passionate about teaching the next generation.",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Business Mentor",
    bio: "Marketing professional who helps with outreach, sponsorships, and team branding.",
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Coach",
    bio: "High school STEM teacher and the team's faculty advisor.",
    initials: "ER",
  },
];

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
  grade?: string;
  color?: "primary" | "secondary";
}

function TeamMemberCard({
  name,
  role,
  bio,
  initials,
  grade,
  color = "primary",
}: TeamMemberCardProps) {
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
            <h3 className="font-display text-lg font-semibold truncate">
              {name}
            </h3>
            <p
              className={cn(
                "text-sm font-medium",
                color === "primary" ? "text-primary" : "text-secondary"
              )}
            >
              {role}
            </p>
            {grade && (
              <p className="text-xs text-muted-foreground">{grade}</p>
            )}
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground text-pretty">{bio}</p>
      </CardContent>
    </Card>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        label="Our Team"
        title="Meet the Despicable Machines"
        description="A talented group of students and mentors working together to build amazing robots and make a positive impact in our community."
      />

      {/* Leadership Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Team Leadership
              </h2>
              <p className="text-muted-foreground">
                The driving force behind our team
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {leadership.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Programming Team */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
              <Code className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Programming Team
              </h2>
              <p className="text-muted-foreground">
                The brains behind our robot&apos;s intelligence
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programmingTeam.map((member) => (
              <TeamMemberCard key={member.name} {...member} color="secondary" />
            ))}
          </div>
        </div>
      </section>

      {/* Mechanical Team */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Cog className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Mechanical Team
              </h2>
              <p className="text-muted-foreground">
                The builders who bring our designs to life
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mechanicalTeam.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Outreach Team */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
              <Briefcase className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Outreach & Business Team
              </h2>
              <p className="text-muted-foreground">
                Connecting our team with the community
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {outreachTeam.map((member) => (
              <TeamMemberCard key={member.name} {...member} color="secondary" />
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Mentors & Coaches
              </h2>
              <p className="text-muted-foreground">
                Guiding our team to success
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mentors.map((mentor) => (
              <TeamMemberCard key={mentor.name} {...mentor} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 sm:py-28 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Interested in Joining Our Team?
          </h2>
          <p className="mt-6 text-lg text-accent-foreground/80">
            We&apos;re always looking for passionate students who want to learn
            about robotics, engineering, and teamwork. Reach out to learn more
            about how to get involved!
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
              )}
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
