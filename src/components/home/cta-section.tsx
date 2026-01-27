"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Taste the Difference?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
            Order online for quick pickup or give us a call. We can&apos;t wait to
            serve you the best deli experience in Chattanooga!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base"
            >
              <Link href="/order">
                Order Online Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-base text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="tel:+14235551234">
                <Phone className="mr-2 h-4 w-4" />
                Call (423) 555-1234
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
