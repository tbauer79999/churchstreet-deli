"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Clock, Heart, Leaf, MapPin, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Leaf,
    title: "Fresh & Local",
    description:
      "We source our ingredients from local farms and suppliers whenever possible. Fresh produce arrives daily, ensuring every bite is packed with flavor.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Every sandwich is crafted by hand with care and attention. We take pride in what we make, and it shows in every delicious bite.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We're not just a deli—we're your neighbors. We believe in building relationships and giving back to the Chattanooga community that supports us.",
  },
  {
    icon: Award,
    title: "Quality Always",
    description:
      "From our premium meats to our house-made sauces, we never compromise on quality. You deserve the best, and that's exactly what we deliver.",
  },
];

const timeline = [
  {
    year: "2023",
    title: "The Dream Begins",
    description:
      "After years of dreaming and planning, we started developing our concept for a neighborhood deli that would bring the community together.",
  },
  {
    year: "Early 2024",
    title: "Finding Our Home",
    description:
      "We found the perfect location on historic Church Street—a space with character that felt just right for our vision.",
  },
  {
    year: "Mid 2024",
    title: "Grand Opening",
    description:
      "Church Street Deli officially opened its doors, welcoming our first customers and beginning our journey as Chattanooga's newest neighborhood spot.",
  },
  {
    year: "Today",
    title: "Growing Together",
    description:
      "Every day we're grateful for our amazing customers. We continue to refine our recipes and expand our offerings based on your feedback.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-2 inline-block font-medium text-primary">
                Our Story
              </span>
              <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
                A Neighborhood Deli Built on Passion
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Church Street Deli was born from a love of great food and a
                desire to create a gathering place for our community. We
                believe that a sandwich isn&apos;t just a meal—it&apos;s an experience
                that brings people together.
              </p>
              <p className="text-muted-foreground">
                Located in the heart of Chattanooga, Tennessee, we&apos;re proud to
                serve our neighbors with handcrafted sandwiches, fresh salads,
                homemade soups, and warm hospitality that keeps you coming back.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4 text-8xl">👨‍🍳</div>
                  <p className="font-serif text-xl font-semibold">
                    Crafted with Care
                  </p>
                  <p className="text-sm text-muted-foreground">Since 2024</p>
                </div>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 left-4 right-4 grid grid-cols-3 gap-3 md:-bottom-8"
              >
                <div className="rounded-xl bg-background p-4 text-center shadow-warm">
                  <p className="font-serif text-2xl font-bold text-primary">
                    1000+
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Happy Customers
                  </p>
                </div>
                <div className="rounded-xl bg-background p-4 text-center shadow-warm">
                  <p className="font-serif text-2xl font-bold text-primary">
                    30+
                  </p>
                  <p className="text-xs text-muted-foreground">Menu Items</p>
                </div>
                <div className="rounded-xl bg-background p-4 text-center shadow-warm">
                  <p className="font-serif text-2xl font-bold text-primary">
                    4.9
                  </p>
                  <p className="text-xs text-muted-foreground">Star Rating</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="mb-2 inline-block font-medium text-primary">
              What We Stand For
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              These principles guide everything we do, from selecting
              ingredients to serving you with a smile.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full transition-all hover:shadow-warm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-serif text-lg font-semibold">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="mb-2 inline-block font-medium text-primary">
              Our Journey
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              How We Got Here
            </h2>
          </motion.div>

          <div className="mx-auto max-w-3xl">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative mb-8 flex gap-6 last:mb-0"
              >
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="h-full w-0.5 bg-border" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <span className="mb-1 inline-block font-medium text-primary">
                    {item.year}
                  </span>
                  <h3 className="mb-2 font-serif text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="mb-2 inline-block font-medium text-primary">
                Visit Us
              </span>
              <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
                Come Say Hello!
              </h2>
              <p className="mb-6 text-muted-foreground">
                We&apos;d love to welcome you to Church Street Deli. Whether you&apos;re
                stopping by for a quick lunch, meeting friends, or picking up an
                order, you&apos;re always welcome here.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">
                      123 Church Street
                      <br />
                      Chattanooga, TN 37402
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-muted-foreground">
                      Mon-Fri: 7AM - 7PM
                      <br />
                      Sat: 8AM - 6PM
                      <br />
                      Sun: 9AM - 4PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/order">Order Online</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted"
            >
              {/* Map Placeholder */}
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 h-16 w-16 text-primary/50" />
                  <p className="font-serif text-lg font-semibold">
                    123 Church Street
                  </p>
                  <p className="text-muted-foreground">Chattanooga, TN 37402</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
