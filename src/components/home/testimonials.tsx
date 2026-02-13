"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Opening Soon!",
    text: "Church Street Deli opens February 18th! Be among our first customers and help us become a beloved part of Downtown Cleveland. We can't wait to serve you!",
    rating: 5,
  },
  {
    name: "Join Us!",
    text: "We're bringing handcrafted sandwiches, fresh salads, and homemade soups to Church Street. Made with quality ingredients and lots of love. Opening Feb 18th!",
    rating: 5,
  },
  {
    name: "Grand Opening",
    text: "Follow us for updates, special promotions, and behind-the-scenes peeks as we prepare to open. We're excited to become your new favorite lunch spot!",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block font-medium text-primary">
            Grand Opening February 18th
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Coming to Downtown Cleveland
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We&apos;re thrilled to announce our grand opening! Here&apos;s what makes
            Church Street Deli special, and we can&apos;t wait to share it with you.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-warm">
                <CardContent className="flex h-full flex-col p-6">
                  {/* Quote Icon */}
                  <Quote className="mb-4 h-8 w-8 text-primary/30" />

                  {/* Rating */}
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="mb-6 flex-1 text-muted-foreground">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Feb 18, 2026
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
