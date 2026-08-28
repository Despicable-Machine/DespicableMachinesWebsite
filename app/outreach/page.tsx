import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Lightbulb,
  Star,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const initiatives = [
  {
    title: "Breaking the Code with Gabriella",
    description:
      "We published Breaking the Code with Gabriella, a book created to inspire young learners to explore STEM, coding, and problem-solving with confidence. This project reflects our commitment to making technology and creativity more accessible and welcoming for the next generation.",
    icon: BookOpen,
    frequency: "Published",
    href: "https://www.breakingthecodewithgabriella.com/",
    cta: "Visit the Website",
  },
  {
    title: "STEM Workshops",
    description:
      "Hands-on experiences teaching robotics, coding, and engineering fundamentals to students in our community.",
    icon: Lightbulb,
    frequency: "Monthly",
  },
  {
    title: "School Visits",
    description:
      "We bring our robot and team energy to classrooms and school events to spark interest in STEM careers.",
    icon: Star,
    frequency: "As requested",
  },
  {
    title: "Community Robotics Days",
    description:
      "Interactive demos and family-friendly activities that make STEM fun, welcoming, and approachable for everyone.",
    icon: Heart,
    frequency: "Seasonal",
  },
];

const futureOutreachIdeas = [
  {
    title: "School STEM Nights",
    description: "Future community events centered on robotics demos, coding challenges, and student engagement.",
  },
  {
    title: "Robotics Demo Days",
    description: "Hands-on displays that let students explore the design process and learn how robots work.",
  },
  {
    title: "Community Author Talks",
    description: "Future speaking events and Q&A sessions connected to our published work and STEM outreach goals.",
  },
  {
    title: "FLL Team Mentorship",
    description: "Mentoring local FIRST LEGO League teams to help younger students develop their skills and confidence in STEM fields.",
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
                At The Despicable Machine, we know that our impact extends far
                beyond the competition field. Through our outreach programs, we
                strive to make STEM education accessible, engaging, and fun for
                students of all backgrounds.
              </p>
              <p className="mt-4 text-muted-foreground text-pretty">
                We focus on helping students build confidence in engineering,
                technical thinking, and creativity while creating spaces where
                everyone feels welcome to explore STEM.
              </p>
              <p className="mt-4 text-muted-foreground text-pretty">
                Our team members gain valuable leadership and communication
                skills by teaching and inspiring others, creating a cycle of
                learning that benefits everyone involved.
              </p>
            </div>
            <div className="rounded-3xl bg-secondary/10 p-8 lg:p-12 border border-secondary/20">
              <Heart className="h-12 w-12 text-secondary mb-6" />
              <h3 className="font-display text-2xl font-bold">
                Gracious Professionalism
              </h3>
              <p className="mt-4 text-muted-foreground">
                We lead with curiosity, respect, and support as we build a more
                welcoming and inclusive STEM community for the next generation.
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
            title="Our Outreach"
            description="We create opportunities for students to explore robotics, creativity, and STEM in a welcoming environment."
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
                      <div className="flex items-center justify-between gap-3">
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
                      {initiative.href ? (
                        <a
                          href={initiative.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                        >
                          {initiative.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Outreach Ideas */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Future Ideas"
            title="More Outreach Opportunities to Add Later"
            description="These are ideas we can expand into future programs as the team grows."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {futureOutreachIdeas.map((idea) => (
              <Card key={idea.title}>
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-semibold">
                    {idea.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">
                    {idea.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-accent p-8 lg:p-12 text-accent-foreground text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Want to reach out to us?
            </h2>
            <p className="mt-6 text-lg text-accent-foreground/80 max-w-2xl mx-auto">
              We love sharing our passion for robotics and STEM with schools,
              libraries, and community groups. Reach out to collaborate or book
              a visit with our team.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://drive.google.com/file/d/1VlR2nIzO-vU0lVpxxMnMDbWGAkj_X9BT/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                )}
              >
                Sponsor Packet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Packet CTA */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card className="border-dashed border-primary/30 bg-primary/5">
            <CardContent className="p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight">
                Interested in sponsoring us?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                We appreciate every form of support. Review our sponsor packet to learn about partnership opportunities and how your contribution helps our team grow.
              </p>
              <a
                href="https://drive.google.com/file/d/1VlR2nIzO-vU0lVpxxMnMDbWGAkj_X9BT/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "mt-8")}
              >
                View Sponsor Packet
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
