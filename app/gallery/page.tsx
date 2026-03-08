"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "All" },
  { id: "competition", name: "Competition" },
  { id: "build", name: "Build Season" },
  { id: "outreach", name: "Outreach" },
  { id: "team", name: "Team" },
];

const photos = [
  {
    id: 1,
    category: "competition",
    title: "State Championship 2024",
    description: "Our robot on the competition field",
    color: "bg-primary/20",
  },
  {
    id: 2,
    category: "competition",
    title: "Regional Finals",
    description: "Alliance partners celebrating a win",
    color: "bg-secondary/20",
  },
  {
    id: 3,
    category: "build",
    title: "CAD Design Session",
    description: "Working on the robot design",
    color: "bg-primary/30",
  },
  {
    id: 4,
    category: "build",
    title: "Assembly Day",
    description: "Putting the robot together",
    color: "bg-secondary/30",
  },
  {
    id: 5,
    category: "outreach",
    title: "STEM Workshop",
    description: "Teaching kids about robotics",
    color: "bg-primary/20",
  },
  {
    id: 6,
    category: "outreach",
    title: "Library Demo",
    description: "Community robotics demonstration",
    color: "bg-secondary/20",
  },
  {
    id: 7,
    category: "team",
    title: "Team Photo 2024",
    description: "Our full team at competition",
    color: "bg-primary/30",
  },
  {
    id: 8,
    category: "team",
    title: "Award Ceremony",
    description: "Receiving the Inspire Award",
    color: "bg-secondary/30",
  },
  {
    id: 9,
    category: "competition",
    title: "Robot Inspection",
    description: "Passing inspection before matches",
    color: "bg-primary/20",
  },
  {
    id: 10,
    category: "build",
    title: "3D Printing",
    description: "Creating custom parts",
    color: "bg-secondary/20",
  },
  {
    id: 11,
    category: "outreach",
    title: "School Visit",
    description: "Demonstrating at local elementary",
    color: "bg-primary/30",
  },
  {
    id: 12,
    category: "team",
    title: "End of Season",
    description: "Celebrating a great season",
    color: "bg-secondary/30",
  },
];

const videos = [
  {
    id: 1,
    title: "State Championship Highlights",
    description: "Our best moments from the 2024 State Championship",
    duration: "4:32",
  },
  {
    id: 2,
    title: "Robot Reveal 2024-25",
    description: "Unveiling our INTO THE DEEP robot",
    duration: "2:45",
  },
  {
    id: 3,
    title: "Outreach Compilation",
    description: "A year of community impact",
    duration: "3:18",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const filteredPhotos =
    activeCategory === "all"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) =>
      prev === filteredPhotos.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) =>
      prev === 0 ? filteredPhotos.length - 1 : prev - 1
    );
  };

  return (
    <>
      <PageHero
        label="Media"
        title="Photo Gallery"
        description="Explore photos and videos from our competitions, build season, and community outreach events."
      />

      {/* Category Filter */}
      <section className="py-8 border-b border-border sticky top-16 bg-background z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredPhotos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => openLightbox(index)}
                className={cn(
                  "group relative aspect-square rounded-xl overflow-hidden",
                  photo.color,
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                )}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-4xl font-bold text-foreground/20">
                    {photo.id}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                    <p className="text-sm font-semibold text-white">
                      {photo.title}
                    </p>
                    <p className="text-xs text-white/70">{photo.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 rounded-full bg-background/10 p-2 text-background hover:bg-background/20"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={prevPhoto}
            className="absolute left-4 rounded-full bg-background/10 p-3 text-background hover:bg-background/20"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={nextPhoto}
            className="absolute right-4 rounded-full bg-background/10 p-3 text-background hover:bg-background/20"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="max-w-4xl max-h-[80vh] w-full mx-4">
            <div
              className={cn(
                "aspect-video rounded-2xl flex items-center justify-center",
                filteredPhotos[currentPhotoIndex].color
              )}
            >
              <span className="font-display text-6xl font-bold text-foreground/30">
                {filteredPhotos[currentPhotoIndex].id}
              </span>
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-background">
                {filteredPhotos[currentPhotoIndex].title}
              </p>
              <p className="text-sm text-background/70">
                {filteredPhotos[currentPhotoIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Videos Section */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Videos"
            title="Video Highlights"
            description="Watch our competition highlights, robot reveals, and outreach activities."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {videos.map((video) => (
              <Card key={video.id} className="group cursor-pointer overflow-hidden">
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 rounded bg-foreground/80 px-2 py-1 text-xs text-background">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-display font-semibold">{video.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Want More Content?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Follow us on social media for the latest photos, videos, and updates
            from Despicable Machines.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
              Connect With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/blog"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
