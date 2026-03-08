import Link from "next/link";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const featuredPost = {
  title: "Winning the Inspire Award: Our State Championship Journey",
  excerpt:
    "After five years of hard work, dedication, and countless hours in the workshop, we finally achieved our dream of winning the Inspire Award at the State Championship. Here's the story of how we got there.",
  date: "April 28, 2024",
  author: "Alex Rivera",
  readTime: "8 min read",
  category: "Competition",
  color: "bg-primary/20",
};

const posts = [
  {
    title: "Robot Reveal: Meet Our INTO THE DEEP Robot",
    excerpt:
      "We're excited to unveil our robot for the 2024-25 season. Check out the features and capabilities that make this our most advanced build yet.",
    date: "October 15, 2024",
    author: "Liam Johnson",
    readTime: "5 min read",
    category: "Robot",
    color: "bg-secondary/20",
  },
  {
    title: "League Tournament #3 Recap: First Place Finish!",
    excerpt:
      "A breakdown of our performance at the third league tournament, where we secured first place and the Think Award.",
    date: "February 24, 2025",
    author: "Maya Patel",
    readTime: "4 min read",
    category: "Competition",
    color: "bg-primary/30",
  },
  {
    title: "STEM Workshop at Oak Elementary",
    excerpt:
      "Last week, we brought our robot to Oak Elementary School and introduced over 100 students to the world of robotics and engineering.",
    date: "February 18, 2025",
    author: "Isabella Garcia",
    readTime: "3 min read",
    category: "Outreach",
    color: "bg-secondary/30",
  },
  {
    title: "Programming Tips: Autonomous Strategies for INTO THE DEEP",
    excerpt:
      "Our programming team shares insights on developing effective autonomous routines for this season's game.",
    date: "January 20, 2025",
    author: "Ethan Kim",
    readTime: "6 min read",
    category: "Technical",
    color: "bg-primary/20",
  },
  {
    title: "Build Season Kickoff: Planning for Success",
    excerpt:
      "How we organized our build season this year to maximize efficiency and team collaboration.",
    date: "September 10, 2024",
    author: "Jordan Chen",
    readTime: "4 min read",
    category: "Team",
    color: "bg-secondary/20",
  },
  {
    title: "CAD Design Best Practices for FTC",
    excerpt:
      "Lessons learned from three seasons of CAD design and how we've improved our design process.",
    date: "August 25, 2024",
    author: "Ava Thompson",
    readTime: "7 min read",
    category: "Technical",
    color: "bg-primary/30",
  },
];

const categories = [
  "All",
  "Competition",
  "Robot",
  "Technical",
  "Outreach",
  "Team",
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Updates"
        title="Team Blog"
        description="Stay up to date with the latest news, competition recaps, technical insights, and stories from Despicable Machines."
      />

      {/* Featured Post */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Featured"
            title="Latest Story"
            align="left"
          />
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className={cn("aspect-video md:aspect-auto", featuredPost.color)}>
                <div className="flex h-full items-center justify-center p-8">
                  <span className="font-display text-6xl font-bold text-foreground/20">
                    Featured
                  </span>
                </div>
              </div>
              <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold sm:text-3xl text-balance">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-muted-foreground text-pretty">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <button
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "mt-6 w-fit"
                  )}
                >
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 border-y border-border bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:bg-card/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="All Posts"
            title="Recent Updates"
            description="Browse all our blog posts, from competition recaps to technical guides."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.title} className="group cursor-pointer overflow-hidden">
                <div className={cn("aspect-video", post.color)}>
                  <div className="flex h-full items-center justify-center">
                    <Tag className="h-12 w-12 text-foreground/20" />
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>-</span>
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className={cn(buttonVariants({ variant: "outline" }))}>
              Load More Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 sm:py-28 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Never Miss an Update
          </h2>
          <p className="mt-6 text-lg text-accent-foreground/80">
            Follow us on social media or check back regularly for the latest
            news and stories from Despicable Machines.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
              Stay Connected
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/gallery"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
              )}
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
