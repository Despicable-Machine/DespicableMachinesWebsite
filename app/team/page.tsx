import Link from "next/link";
import { ArrowRight, Code, Cog, Users, Briefcase, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const leadership = [
  {
    name: "Hetanshu Panditi",
    role: "Team Captain",
    grade: "11th Grade",
    bio: "Oversees day-to-day operations and ensures smooth collaboration between all sub-teams.",
    initials: "HP",
    image: "/images/team/HetanshuPanditi.JPEG",
  },
  {
    name: "Naya Horn",
    role: "Co-Captain",
    grade: "11th Grade",
    bio: "Leads the team with passion and drives our strategic direction. Specializes in project management and team coordination.",
    initials: "NH",
  },
  
];

const programmingTeam = [
  {
    name: "Jay Williams",
    role: "Lead Programmer",
    grade: "11th Grade",
    bio: "Expert in Java and autonomous programming. Leads the development of our robot's software systems.",
    initials: "JW",
    image: "/images/team/JayWilliams.jpg",
  },
  
];

const mechanicalTeam = [
  {
    name: "Hetanshu Panditi",
    role: "Lead Builder",
    grade: "11th Grade",
    bio: "Hands-on builder with expertise in assembly, fabrication, and mechanical troubleshooting.",
    initials: "HP",
    image: "/images/team/HetanshuPanditi.JPEG",
  },
  {
    name: "Naya Horn",
    role: "CAD Designer/Builder",
    grade: "11th Grade",
    bio: "Mechanical design expert with experience in CAD and precision manufacturing.",
    initials: "NH",
  },
  {
    name: "Drake Deleon",
    role: "CAD Designer",
    grade: "11th Grade",
    bio: "Creates detailed 3D models and technical drawings for all robot components.",
    initials: "DL",
    image: "/images/team/DrakeDeleon.jpg",
  },
  
];

const outreachTeam = [
  {
    name: "Varun Nair",
    role: "Outreach Lead",
    grade: "12th Grade",
    bio: "Coordinates all community events, fundraisinng, and manages our outreach initiatives.",
    initials: "VN",
  },
];



interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
  grade?: string;
  color?: "primary" | "secondary";
  image?: string;
}

function TeamMemberCard({
  name,
  role,
  bio,
  initials,
  grade,
  color = "primary",
  image,
}: TeamMemberCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-border bg-muted">
            {image ? (
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div
                className={cn(
                  "flex h-full w-full items-center justify-center",
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
            )}
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
        title="Meet The Despicable Machine"
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
      {/* Join Us CTA */}
      <section className="py-20 sm:py-28 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Interested in Joining Our Team?
          </h2>
          <p className="mt-6 text-lg text-accent-foreground/80">
            We are always looking for mentors and sponsors who want to support students passionate about engineering, programming, and robotics. Your support helps our FIRST Tech Challenge team build better robots, expand STEM outreach, and give students hands-on experience with real engineering and teamwork. If you're interested in getting involved, we’d love to connect.
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
