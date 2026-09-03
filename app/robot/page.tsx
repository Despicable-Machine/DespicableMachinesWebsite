import Link from "next/link";
import { ArrowRight, Cog } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function RobotPage() {
  return (
    <>
      <PageHero
        label="This Year"
        title="BIOBUZZ"
        description="BIOBUZZ is this year’s FTC competition game, and our robot development is currently in progress as we design, build, and test our strategy."
      />

      {/* Robot Overview */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                label="Status"
                title="Robot Creation in Progress"
                align="left"
              />
              <p className="text-muted-foreground text-pretty">
                Our team is currently developing its robot for BIOBUZZ. The
                design and build process is still in progress as we test ideas,
                refine our strategy, and improve how we work together as a team.
              </p>
              <p className="mt-4 text-muted-foreground text-pretty">
                We are actively building, prototyping, and iterating so every
                member can contribute as the robot comes together for the season.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 border border-border">
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <Cog className="h-24 w-24 text-primary animate-spin-slow" />
                  <h3 className="mt-6 font-display text-2xl font-bold">
                    BIOBUZZ
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Development in progress
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Ready to Grow With the Team?
          </h2>
          <p className="mt-6 text-lg text-accent-foreground/80">
            We’re building BIOBUZZ together, and every member has a place in the
            process.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/team" className={cn(buttonVariants({ size: "lg" }))}>
              Meet the Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
              )}
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
