import Link from "next/link";
import {
  ArrowRight,
  Cog,
  Cpu,
  Gauge,
  Hand,
  MoveVertical,
  Eye,
  Code,
  Settings,
  Zap,
  Target,
  Clock,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const robotFeatures = [
  {
    icon: Hand,
    title: "Precision Intake",
    description:
      "Custom-designed intake system capable of collecting game pieces from multiple angles with high efficiency.",
    stats: "0.8s pickup time",
  },
  {
    icon: MoveVertical,
    title: "Linear Lift",
    description:
      "High-torque linear slide system for precise vertical movement and sample placement.",
    stats: "24\" extension",
  },
  {
    icon: Cog,
    title: "Mecanum Drive",
    description:
      "Omnidirectional drivetrain allowing strafing and precise positioning during matches.",
    stats: "360° movement",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "OpenCV-powered vision system for autonomous sample detection and alignment.",
    stats: "15fps processing",
  },
];

const specs = [
  { label: "Dimensions", value: '18" x 18" x 15"', icon: Settings },
  { label: "Weight", value: "38 lbs", icon: Gauge },
  { label: "Motors", value: "8 DC Motors", icon: Zap },
  { label: "Sensors", value: "12 Total", icon: Cpu },
];

const autonomousFeatures = [
  {
    title: "Path Planning",
    description:
      "Our autonomous uses advanced path planning algorithms to navigate the field efficiently.",
  },
  {
    title: "Vision Processing",
    description:
      "Real-time computer vision identifies game elements and adjusts strategies accordingly.",
  },
  {
    title: "Sensor Fusion",
    description:
      "Combines data from multiple sensors for accurate positioning and movement.",
  },
  {
    title: "Error Recovery",
    description:
      "Built-in error handling ensures the robot can recover from unexpected situations.",
  },
];

const buildProcess = [
  {
    phase: "Design",
    description: "CAD modeling, prototyping, and iterative design refinement.",
    duration: "4 weeks",
  },
  {
    phase: "Build",
    description: "Manufacturing, assembly, and initial testing of components.",
    duration: "6 weeks",
  },
  {
    phase: "Program",
    description: "Driver control, autonomous routines, and system integration.",
    duration: "Ongoing",
  },
  {
    phase: "Test",
    description: "Competition simulations, stress testing, and optimization.",
    duration: "Continuous",
  },
];

const performanceStats = [
  { label: "Autonomous Points", value: "45+", description: "Average per match" },
  { label: "Cycle Time", value: "8s", description: "Sample to basket" },
  { label: "Reliability", value: "98%", description: "Match completion rate" },
  { label: "Matches Won", value: "75%", description: "This season" },
];

export default function RobotPage() {
  return (
    <>
      <PageHero
        label="2024-25 Season"
        title="Meet Our Robot"
        description="Designed and built for INTO THE DEEP - our most advanced robot yet, featuring precision mechanics and intelligent autonomous systems."
      />

      {/* Robot Overview */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                label="Overview"
                title="Engineering Excellence"
                align="left"
              />
              <p className="text-muted-foreground text-pretty">
                Our 2024-25 season robot is designed specifically for the INTO
                THE DEEP challenge. Every component has been carefully
                engineered to maximize performance while maintaining reliability
                throughout the competition season.
              </p>
              <p className="mt-4 text-muted-foreground text-pretty">
                The robot features a compact design that fits within the 18&quot;
                cube starting size while expanding to reach all scoring
                positions. Our iterative design process involved over 50
                prototypes before settling on the final configuration.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {specs.map((spec) => (
                  <div key={spec.label} className="text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <spec.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mt-2 font-display text-lg font-bold">
                      {spec.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{spec.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 border border-border">
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <Cog className="h-24 w-24 text-primary animate-spin-slow" />
                  <h3 className="mt-6 font-display text-2xl font-bold">
                    INTO THE DEEP
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Season 2024-25 Robot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Capabilities"
            title="Key Robot Features"
            description="Every mechanism is designed with purpose, precision, and performance in mind."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {robotFeatures.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-lg font-semibold">
                          {feature.title}
                        </h3>
                        <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                          {feature.stats}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground text-pretty">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomous Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {autonomousFeatures.map((feature, index) => (
                  <Card
                    key={feature.title}
                    className={cn(
                      index % 2 === 1 && "mt-8"
                    )}
                  >
                    <CardContent className="p-4">
                      <h4 className="font-display font-semibold">
                        {feature.title}
                      </h4>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                  <Code className="h-6 w-6 text-secondary" />
                </div>
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                  Programming
                </span>
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Intelligent Autonomous
              </h2>
              <p className="mt-6 text-muted-foreground text-pretty">
                Our autonomous period is where we truly shine. Using a
                combination of computer vision, sensor fusion, and advanced
                algorithms, our robot can navigate the field and score
                consistently without any driver input.
              </p>
              <p className="mt-4 text-muted-foreground text-pretty">
                The code is written in Java using the FTC SDK, with custom
                libraries for path following and vision processing. We use
                RoadRunner for motion profiling and implement PID controllers
                for precise movement.
              </p>
              <Link
                href="/matches"
                className={cn(buttonVariants({ variant: "secondary" }), "mt-8")}
              >
                See It In Action
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section className="py-20 sm:py-28 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-secondary-foreground/20 px-4 py-1.5 text-sm font-semibold mb-4">
              Development
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Build Process
            </h2>
            <p className="mt-4 text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              From concept to competition - our iterative development approach.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {buildProcess.map((phase, index) => (
              <div
                key={phase.phase}
                className="rounded-2xl bg-secondary-foreground/10 p-6 border border-secondary-foreground/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </span>
                  <Clock className="h-4 w-4 text-secondary-foreground/50" />
                  <span className="text-sm text-secondary-foreground/70">
                    {phase.duration}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold">
                  {phase.phase}
                </h3>
                <p className="mt-2 text-sm text-secondary-foreground/70">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Results"
            title="Competition Performance"
            description="Our robot's performance metrics from this season's competitions."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {performanceStats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardContent className="p-6">
                  <Target className="mx-auto h-8 w-8 text-primary" />
                  <p className="mt-4 font-display text-4xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-semibold">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
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
            Want to See Our Robot in Action?
          </h2>
          <p className="mt-6 text-lg text-accent-foreground/80">
            Check out our match videos and competition results to see how our
            robot performs on the field.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/matches" className={cn(buttonVariants({ size: "lg" }))}>
              View Match Results
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/gallery"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
              )}
            >
              Photo Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
