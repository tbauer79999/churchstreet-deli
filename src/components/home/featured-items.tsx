"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPopularItems, formatPrice } from "@/lib/menu-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function FeaturedItems() {
  const popularItems = getPopularItems().slice(0, 4);

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
            Customer Favorites
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Most Popular Items
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover why these delicious creations keep our customers coming
            back for more. Each one crafted with care and the finest ingredients.
          </p>
        </motion.div>

        {/* Items Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {popularItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Card className="group overflow-hidden transition-all duration-300 hover:shadow-warm">
                <CardContent className="p-0">
                  {/* Image Placeholder */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-muted/50">
                    <div className="flex h-full items-center justify-center text-6xl">
                      {item.category === "signature-sandwiches" && "🥪"}
                      {item.category === "hot-dogs" && "🌭"}
                      {item.category === "soups-chili" && "🍲"}
                      {item.category === "beverages" && "🥤"}
                      {item.category === "chips" && "🍟"}
                    </div>

                    {/* Popular Badge */}
                    <Badge className="absolute left-3 top-3 gap-1 bg-primary/90">
                      <Star className="h-3 w-3 fill-current" />
                      Popular
                    </Badge>

                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h3 className="font-serif text-lg font-semibold leading-tight">
                        {item.name}
                      </h3>
                      <span className="whitespace-nowrap font-bold text-primary">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/menu">
              View Full Menu
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
