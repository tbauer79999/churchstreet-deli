"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Leaf, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "Locally sourced produce and premium meats delivered daily",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every sandwich crafted with care by our passionate team",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Proudly serving our Cleveland neighbors since day one",
  },
];

export function AboutPreview() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="flex h-full items-center justify-center">
                {/* Placeholder visual representing deli atmosphere */}
                <div className="p-8 text-center">
                  <div className="mb-6 text-8xl">🏪</div>
                  <div className="space-y-2">
                    <div className="mx-auto h-2 w-24 rounded-full bg-primary/20" />
                    <div className="mx-auto h-2 w-32 rounded-full bg-secondary/20" />
                    <div className="mx-auto h-2 w-20 rounded-full bg-accent/30" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -left-4 top-1/4 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -right-4 bottom-1/4 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 left-4 rounded-2xl bg-background p-4 shadow-warm md:left-8"
            >
              <p className="font-serif text-3xl font-bold text-primary">Est. 2024</p>
              <p className="text-sm text-muted-foreground">Proudly Local</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-2 inline-block font-medium text-primary">
              Our Story
            </span>
            <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
              A Neighborhood Deli with Heart
            </h2>
            <p className="mb-6 text-muted-foreground">
              Church Street Deli was born from a simple dream: to create a place
              where the community could gather over great food. Located in the
              heart of Cleveland, we&apos;re more than just a deli - we&apos;re your
              neighbors, your friends, and your go-to spot for a delicious meal.
            </p>
            <p className="mb-8 text-muted-foreground">
              Every sandwich we make tells a story of quality ingredients,
              time-honored recipes, and the love we put into everything we do.
              From our signature Church Street Classic to our homemade soups,
              each item is crafted to bring a smile to your face.
            </p>

            {/* Values */}
            <div className="mb-8 space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button asChild>
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
