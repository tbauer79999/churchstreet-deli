"use client";

import { motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";

export function AnnouncementBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-primary"
    >
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-center md:gap-5 md:text-left">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20 shadow-warm">
            <Sparkles className="h-7 w-7 text-primary-foreground" />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-center gap-2 md:justify-start">
              <Clock className="h-4 w-4 text-primary-foreground/90" />
              <span className="text-sm font-bold uppercase tracking-wider text-primary-foreground/90">
                Special Hours · June 5th
              </span>
            </div>
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary-foreground md:text-3xl lg:text-4xl">
              We&apos;re Open LATE for the Friday Night Festivities!
            </h2>
            <p className="mt-1 text-base text-primary-foreground/90 md:text-lg">
              Join us as we stay open late to serve the community — we look
              forward to seeing you!
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
