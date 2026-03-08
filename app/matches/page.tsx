import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Trophy,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
  Award,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const upcomingEvents = [
  {
    name: "League Tournament #4",
    date: "March 15, 2025",
    location: "Central High School",
    type: "League",
  },
  {
    name: "Regional Championship",
    date: "April 5, 2025",
    location: "State University Arena",
    type: "Regional",
  },
  {
    name: "State Championship",
    date: "April 26, 2025",
    location: "Convention Center",
    type: "State",
  },
];

const matchResults = [
  {
    event: "League Tournament #3",
    date: "Feb 22, 2025",
    matches: [
      { match: "Q1", alliance: "Red", score: 142, oppScore: 118, result: "Win" },
      { match: "Q2", alliance: "Blue", score: 156, oppScore: 134, result: "Win" },
      { match: "Q3", alliance: "Red", score: 128, oppScore: 145, result: "Loss" },
      { match: "Q4", alliance: "Blue", score: 161, oppScore: 122, result: "Win" },
      { match: "SF1", alliance: "Red", score: 148, oppScore: 139, result: "Win" },
      { match: "F1", alliance: "Blue", score: 167, oppScore: 158, result: "Win" },
    ],
    placement: "1st Place",
    awards: ["Think Award"],
  },
  {
    event: "League Tournament #2",
    date: "Feb 8, 2025",
    matches: [
      { match: "Q1", alliance: "Blue", score: 134, oppScore: 128, result: "Win" },
      { match: "Q2", alliance: "Red", score: 145, oppScore: 152, result: "Loss" },
      { match: "Q3", alliance: "Blue", score: 158, oppScore: 141, result: "Win" },
      { match: "Q4", alliance: "Red", score: 139, oppScore: 126, result: "Win" },
      { match: "SF1", alliance: "Blue", score: 151, oppScore: 147, result: "Win" },
      { match: "F1", alliance: "Red", score: 162, oppScore: 168, result: "Loss" },
    ],
    placement: "3rd Place",
    awards: ["Connect Award"],
  },
  {
    event: "League Tournament #1",
    date: "Jan 25, 2025",
    matches: [
      { match: "Q1", alliance: "Red", score: 125, oppScore: 118, result: "Win" },
      { match: "Q2", alliance: "Blue", score: 138, oppScore: 142, result: "Loss" },
      { match: "Q3", alliance: "Red", score: 147, oppScore: 131, result: "Win" },
      { match: "Q4", alliance: "Blue", score: 152, oppScore: 138, result: "Win" },
    ],
    placement: "5th Place",
    awards: [],
  },
];

const teamStats = [
  { label: "Matches Played", value: "24" },
  { label: "Win Rate", value: "75%" },
  { label: "Avg Score", value: "148" },
  { label: "High Score", value: "167" },
];

const rankings = {
  league: { rank: 2, teams: 18 },
  regional: { rank: 8, teams: 42 },
  opr: 78.5,
};

export default function MatchesPage() {
  return (
    <>
      <PageHero
        label="Competition"
        title="Matches & Results"
        description="Track our competition journey with match results, upcoming events, and team rankings throughout the season."
      />

      {/* Stats Overview */}
      <section className="py-12 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {teamStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
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

      {/* Upcoming Events */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Schedule"
            title="Upcoming Events"
            description="Mark your calendars for our upcoming competitions."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Card key={event.name}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-semibold",
                        event.type === "State"
                          ? "bg-primary text-primary-foreground"
                          : event.type === "Regional"
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {event.type}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {event.name}
                  </h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
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

      {/* Rankings */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Standings"
            title="Current Rankings"
            description="See where we stand in league and regional rankings."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-4 font-display text-4xl font-bold">
                  #{rankings.league.rank}
                </p>
                <p className="mt-1 font-semibold">League Rank</p>
                <p className="text-sm text-muted-foreground">
                  of {rankings.league.teams} teams
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Trophy className="mx-auto h-8 w-8 text-secondary" />
                <p className="mt-4 font-display text-4xl font-bold">
                  #{rankings.regional.rank}
                </p>
                <p className="mt-1 font-semibold">Regional Rank</p>
                <p className="text-sm text-muted-foreground">
                  of {rankings.regional.teams} teams
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-4 font-display text-4xl font-bold">
                  {rankings.opr}
                </p>
                <p className="mt-1 font-semibold">OPR</p>
                <p className="text-sm text-muted-foreground">
                  Offensive Power Rating
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Match Results */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Results"
            title="Match History"
            description="Detailed results from our competitions this season."
          />
          <div className="space-y-8">
            {matchResults.map((event) => (
              <Card key={event.event}>
                <CardContent className="p-6">
                  {/* Event Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-display text-xl font-semibold">
                        {event.event}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {event.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {event.awards.map((award) => (
                        <span
                          key={award}
                          className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                        >
                          <Award className="h-3 w-3" />
                          {award}
                        </span>
                      ))}
                      <span className="rounded-full bg-secondary px-4 py-1 text-sm font-semibold text-secondary-foreground">
                        {event.placement}
                      </span>
                    </div>
                  </div>

                  {/* Match Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-3 text-left text-sm font-semibold text-muted-foreground">
                            Match
                          </th>
                          <th className="py-3 text-left text-sm font-semibold text-muted-foreground">
                            Alliance
                          </th>
                          <th className="py-3 text-center text-sm font-semibold text-muted-foreground">
                            Our Score
                          </th>
                          <th className="py-3 text-center text-sm font-semibold text-muted-foreground">
                            Opp Score
                          </th>
                          <th className="py-3 text-right text-sm font-semibold text-muted-foreground">
                            Result
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {event.matches.map((match) => (
                          <tr
                            key={match.match}
                            className="border-b border-border/50 last:border-0"
                          >
                            <td className="py-3 text-sm font-medium">
                              {match.match}
                            </td>
                            <td className="py-3">
                              <span
                                className={cn(
                                  "rounded px-2 py-0.5 text-xs font-semibold",
                                  match.alliance === "Red"
                                    ? "bg-red-100 text-red-700"
                                    : "bg-blue-100 text-blue-700"
                                )}
                              >
                                {match.alliance}
                              </span>
                            </td>
                            <td className="py-3 text-center text-sm font-semibold">
                              {match.score}
                            </td>
                            <td className="py-3 text-center text-sm text-muted-foreground">
                              {match.oppScore}
                            </td>
                            <td className="py-3 text-right">
                              <span
                                className={cn(
                                  "inline-flex items-center gap-1 text-sm font-medium",
                                  match.result === "Win"
                                    ? "text-green-600"
                                    : "text-red-500"
                                )}
                              >
                                {match.result === "Win" ? (
                                  <CheckCircle2 className="h-4 w-4" />
                                ) : (
                                  <XCircle className="h-4 w-4" />
                                )}
                                {match.result}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FTC API Note */}
      <section className="py-12 bg-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            Match data can be integrated with the official FTC API for
            real-time results. Contact us to learn more about our data
            integration capabilities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Come Watch Us Compete!
          </h2>
          <p className="mt-6 text-lg text-accent-foreground/80">
            FTC competitions are free to attend. Come see robots in action and
            cheer for Despicable Machines!
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
              Get Event Details
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/gallery"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
              )}
            >
              Competition Photos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
