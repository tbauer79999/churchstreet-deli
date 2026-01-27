"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjQ1MTMiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJIMjR2LTJoMTJ6bTAtOHYySDI0di0yaDEyem0wIDR2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />

      <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
              Now Open in Chattanooga
            </motion.div>

            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Fresh. Local.{" "}
              <span className="text-gradient">Delicious.</span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Handcrafted sandwiches, subs, and salads made with the finest
              ingredients. Experience the taste of Chattanooga&apos;s newest
              neighborhood deli.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button asChild size="lg" className="text-base">
                <Link href="/order">
                  Order Online
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="/menu">View Full Menu</Link>
              </Button>
            </div>

            {/* Quick Info */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Church Street, Chattanooga</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Open Daily 7AM - 7PM</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-square max-w-lg overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-2">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-muted/50">
                {/* Placeholder for hero image - using emoji grid for now */}
                <div className="grid grid-cols-3 gap-4 p-8">
                  <div className="flex aspect-square items-center justify-center rounded-2xl bg-background/80 text-5xl shadow-warm">
                    🥪
                  </div>
                  <div className="flex aspect-square items-center justify-center rounded-2xl bg-background/80 text-5xl shadow-warm">
                    🥗
                  </div>
                  <div className="flex aspect-square items-center justify-center rounded-2xl bg-background/80 text-5xl shadow-warm">
                    🍲
                  </div>
                  <div className="flex aspect-square items-center justify-center rounded-2xl bg-background/80 text-5xl shadow-warm">
                    🥖
                  </div>
                  <div className="flex aspect-square items-center justify-center rounded-2xl bg-background/80 text-5xl shadow-warm">
                    🧀
                  </div>
                  <div className="flex aspect-square items-center justify-center rounded-2xl bg-background/80 text-5xl shadow-warm">
                    🥒
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -right-4 rounded-2xl bg-background p-4 shadow-warm md:-bottom-6 md:-right-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="font-serif text-lg font-bold">4.9 Rating</p>
                  <p className="text-xs text-muted-foreground">
                    200+ Happy Customers
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
