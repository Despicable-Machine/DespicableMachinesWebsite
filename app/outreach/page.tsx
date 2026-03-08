import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Users,
  GraduationCap,
  Calendar,
  MapPin,
  Clock,
  Star,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const impactStats = [
  { value: "500+", label: "Volunteer Hours", icon: Clock },
  { value: "1000+", label: "Students Reached", icon: Users },
  { value: "15+", label: "Events Hosted", icon: Calendar },
  { value: "3", label: "Teams Mentored", icon: Heart },
];

const initiatives = [
  {
    title: "STEM Workshops",
    description:
      "Hands-on workshops teaching robotics, coding, and engineering fundamentals to elementary and middle school students.",
    icon: Lightbulb,
    frequency: "Monthly",
  },
  {
    title: "Team Mentorship",
    description:
      "We mentor rookie FTC teams, sharing our knowledge and experience to help them succeed in their first seasons.",
    icon: GraduationCap,
    frequency: "Weekly",
  },
  {
    title: "Library Programs",
    description:
      "Free robotics demonstrations and activities at local libraries to make STEM accessible to all.",
    icon: BookOpen,
    frequency: "Bi-weekly",
  },
  {
    title: "School Visits",
    description:
      "We bring our robot to schools to inspire students and spark interest in STEM careers.",
    icon: Star,
    frequency: "As requested",
  },
];

const events = [
  {
    name: "Spring STEM Fair",
    date: "April 12, 2025",
    location: "Community Center",
    description:
      "Interactive robotics demonstrations and hands-on activities for families.",
    status: "upcoming",
  },
  {
    name: "Girls in STEM Day",
    date: "March 22, 2025",
    location: "Central High School",
    description:
      "Special workshop encouraging young women to explore engineering and technology.",
    status: "upcoming",
  },
  {
    name: "Library Robotics Day",
    date: "February 28, 2025",
    location: "Public Library",
    description:
      "Free community event with robot demos and coding activities for kids.",
    status: "past",
  },
  {
    name: "Elementary School Visit",
    date: "February 15, 2025",
    location: "Oak Elementary",
    description:
      "Classroom visits introducing robotics to 4th and 5th grade students.",
    status: "past",
  },
];

const mentoredTeams = [
  {
    name: "Rising Gears",
    number: "FTC 12345",
    status: "Rookie Team",
    description:
      "A first-year team we've been mentoring since the start of this season.",
  },
  {
    name: "Tech Tigers",
    number: "FTC 23456",
    status: "2nd Year",
    description:
      "Helping with programming and autonomous development.",
  },
  {
    name: "Robo Wildcats",
    number: "FTC 34567",
    status: "Rookie Team",
    description:
      "Providing guidance on team organization and build strategies.",
  },
];

export default function OutreachPage() {
  return (
    <>
      <PageHero
        label="Community Impact"
        title="Outreach & STEM Education"
        description="We believe in giving back to our community by inspiring the next generation of engineers, scientists, and innovators."
      />

      {/* Impact Stats */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto h-8 w-8 text-primary-foreground/80" />
                <p className="mt-2 font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
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

      {/* Mission Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                label="Our Mission"
                title="Inspiring Future Innovators"
                align="left"
              />
              <p className="text-muted-foreground text-pretty">
                At Despicable Machines, we know that our impact extends far
                beyond the competition field. Through our outreach programs, we
                strive to make STEM education accessible, engaging, and fun for
                students of all backgrounds.
              </p>
              <p className="mt-4 text-muted-foreground text-pretty">
                We particularly focus on reaching underrepresented groups in
                STEM, including students from low-income families and young
                women. Everyone deserves the opportunity to discover the joy of
                engineering and innovation.
              </p>
              <p className="mt-4 text-muted-foreground text-pretty">
                Our team members gain valuable leadership and communication
                skills by teaching and mentoring others, creating a cycle of
                learning that benefits everyone involved.
              </p>
            </div>
            <div className="rounded-3xl bg-secondary/10 p-8 lg:p-12 border border-secondary/20">
              <Heart className="h-12 w-12 text-secondary mb-6" />
              <h3 className="font-display text-2xl font-bold">
                Gracious Professionalism
              </h3>
              <p className="mt-4 text-muted-foreground">
                FIRST&apos;s concept of Gracious Professionalism - encouraging
                high-quality work, emphasizing the value of others, and
                respecting individuals and the community - guides all of our
                outreach efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Programs"
            title="Our Initiatives"
            description="We engage with our community through a variety of programs and activities."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {initiatives.map((initiative) => (
              <Card key={initiative.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary/10">
                      <initiative.icon className="h-7 w-7 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-lg font-semibold">
                          {initiative.title}
                        </h3>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {initiative.frequency}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground text-pretty">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Events"
            title="Community Events"
            description="Join us at upcoming events or see what we've been up to."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {events.map((event) => (
              <Card
                key={event.name}
                className={cn(
                  event.status === "past" && "opacity-75"
                )}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-semibold",
                        event.status === "upcoming"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {event.status === "upcoming" ? "Upcoming" : "Past Event"}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {event.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {event.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Mentorship */}
      <section className="py-20 sm:py-28 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-secondary-foreground/20 px-4 py-1.5 text-sm font-semibold mb-4">
              Mentorship
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Teams We Mentor
            </h2>
            <p className="mt-4 text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              We share our experience with newer teams to help them succeed.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {mentoredTeams.map((team) => (
              <div
                key={team.number}
                className="rounded-2xl bg-secondary-foreground/10 p-6 border border-secondary-foreground/10"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-secondary-foreground/70">
                    {team.number}
                  </span>
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    {team.status}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold">
                  {team.name}
                </h3>
                <p className="mt-2 text-sm text-secondary-foreground/70">
                  {team.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-accent p-8 lg:p-12 text-accent-foreground text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Want Us at Your Event?
            </h2>
            <p className="mt-6 text-lg text-accent-foreground/80 max-w-2xl mx-auto">
              We love sharing our passion for robotics with the community!
              Invite us to your school, library, or community center for a
              demonstration or workshop.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
                Request a Visit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/sponsors"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                )}
              >
                Support Our Outreach
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
