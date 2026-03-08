import { PageHero } from "@/components/ui/page-hero";

export default function MatchesPage() {
  return (
    <>
      <PageHero
        label="Competition"
        title="Matches & Results"
        description="Track our competition journey with match results, upcoming events, and team rankings throughout the DECODE season."
      />

      {/* FTC API Integration Placeholder */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border-2 border-dashed border-border bg-muted/50 p-12">
            <h2 className="font-display text-xl font-semibold text-foreground">
              Match Data Coming Soon
            </h2>
            <p className="mt-4 text-muted-foreground">
              This section will be populated with live data from the FTC API.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
