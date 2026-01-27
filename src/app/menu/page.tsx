"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuItemCard } from "@/components/menu/menu-item-card";
import { categories, getItemsByCategory, Category } from "@/lib/menu-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("sandwiches");
  const items = getItemsByCategory(activeCategory);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              Our Menu
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore our selection of handcrafted sandwiches, subs, fresh salads,
              hearty soups, and more. Everything is made fresh daily with quality
              ingredients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Tabs
              value={activeCategory}
              onValueChange={(value) => setActiveCategory(value as Category)}
              className="w-full"
            >
              <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="rounded-full border border-border bg-background px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>

          {/* Category Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-8"
            >
              <h2 className="mb-2 font-serif text-2xl font-bold">
                {currentCategory?.name}
              </h2>
              <p className="text-muted-foreground">
                {currentCategory?.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Items Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {items.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <MenuItemCard item={item} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dietary Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 rounded-lg bg-muted/50 p-6 text-center"
          >
            <h3 className="mb-2 font-semibold">Dietary Information</h3>
            <p className="text-sm text-muted-foreground">
              Items marked with <span className="text-green-600">Vegetarian</span>{" "}
              contain no meat. Items marked with{" "}
              <span className="text-amber-600">GF</span> are gluten-free or can be
              made gluten-free upon request. Please inform us of any allergies.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
