import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Code,
  Cog,
  GraduationCap,
  Linkedin,
  Users,
} from "lucide-react";
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
    image: "/images/team/NayaHorn.jpg",
  },
  
];

const programmingTeam = [
  {
    name: "Jay Williams",
    role: "Lead Programmer/UI UX Designer",
    grade: "11th Grade",
    bio: "Expert in Java and autonomous programming. Leads the development of our robot's software systems and designs a polished user experience.",
    initials: "JW",
    image: "/images/team/JayWilliams.jpg",
  },
  {
    name: "Ethan John",
    role: "Programmer",
    grade: "10th Grade",
    bio: "Contributes to software development and helps build reliable robot controls and automation logic.",
    initials: "EJ",
    image: "/images/team/EthanJohn.JPG",
  },
  {
    name: "Logan Tuchband",
    role: "Programmer",
    grade: "9th Grade",
    bio: "Supports the programming team with software development, testing, and refining robot functionality.",
    initials: "LT",
    image: "/images/team/LoganTuchband.JPG",
  },
  {
    name: "Evan Chaturvedi",
    role: "Programmer",
    grade: "9th Grade",
    bio: "Helps develop and refine control systems while supporting the team with software testing and improvements.",
    initials: "EC",
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
    image: "/images/team/NayaHorn.jpg",
  },
  {
    name: "Drake Deleon",
    role: "CAD Designer",
    grade: "11th Grade",
    bio: "Creates detailed 3D models and technical drawings for all robot components.",
    initials: "DL",
    image: "/images/team/DrakeDeleon.jpg",
  },
  {
    name: "Nic Szela",
    role: "Builder/Human Driver",
    grade: "11th Grade",
    bio: "Builds and supports the robot structure while also helping drive the robot during competition.",
    initials: "NS",
  },
  
];

const outreachTeam = [
  {
    name: "Varun Nair",
    role: "Outreach Lead",
    grade: "12th Grade",
    bio: "Coordinates all community events, fundraisinng, and manages our outreach initiatives.",
    initials: "VN",
    image: "/images/team/VarunNair.jpg",
  },
];

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

      {/* Mentors */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Mentorship"
            title="Meet Our Mentors"
            description="Our mentors support the team with the experience, encouragement, and practical advice that help students keep growing."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-display text-2xl font-bold">Student Mentors</h3>
                  <p className="text-sm text-muted-foreground">
                    Barrington FTC alumni sharing what they have learned
                  </p>
                </div>
              </div>
              <div className="grid gap-6">
                {studentMentors.map((mentor) => (
                  <MentorCard key={mentor.name} {...mentor} />
                ))}
              </div>
            </div>
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-secondary" />
                <div>
                  <h3 className="font-display text-2xl font-bold">Professional Mentors</h3>
                  <p className="text-sm text-muted-foreground">
                    Professionals who bring real-world experience to the shop
                  </p>
                </div>
              </div>
              <div className="grid gap-6">
                {professionalMentors.map((mentor) => (
                  <MentorCard key={mentor.name} {...mentor} color="secondary" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 sm:py-28 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Want to become a mentor?
          </h2>
          <p className="mt-6 text-lg text-accent-foreground/80">
            We are always glad to hear from people who want to support students passionate about engineering, programming, and robotics. If you would like to share your experience with our team, we would love to hear from you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
              Become a Mentor
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
