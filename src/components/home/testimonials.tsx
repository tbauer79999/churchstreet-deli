"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah M.",
    text: "The Church Street Classic is absolutely divine! Best sandwich I've had in Chattanooga. The staff is so friendly, and you can really taste the quality ingredients.",
    rating: 5,
  },
  {
    name: "Michael R.",
    text: "Finally, a deli that gets it right! The Reuben is authentic, piled high, and the rye bread is perfectly toasted. This is my new lunch spot.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    text: "Love supporting local businesses, especially ones this good. The tomato basil soup paired with a half sandwich is the perfect combo. Highly recommend!",
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
            What People Say
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Loved by Our Community
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what our customers have
            to say about their Church Street Deli experience.
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
                        Verified Customer
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
