"use client";

import { motion } from "framer-motion";

import { getItemsByCategory, formatPrice } from "@/lib/menu-data";
import { Badge } from "@/components/ui/badge";

function MenuSection({
  title,
  subtitle,
  items,
  delay = 0,
}: {
  title: string;
  subtitle?: string;
  items: ReturnType<typeof getItemsByCategory>;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mb-8"
    >
      <h2 className="mb-1 border-b-2 border-primary pb-2 font-serif text-2xl font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mb-3 text-sm font-medium text-primary">{subtitle}</p>
      )}
      <ul className="divide-y divide-border">
        {items.map((item) => (
          <li key={item.id} className="flex items-start justify-between gap-4 py-3">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold">{item.name}</span>
                {item.isPopular && (
                  <Badge className="bg-primary/90 text-xs">Popular</Badge>
                )}
                {item.isVegetarian && (
                  <Badge variant="secondary" className="bg-green-100 text-xs text-green-700">
                    Vegetarian
                  </Badge>
                )}
                {item.isGlutenFree && (
                  <Badge variant="secondary" className="bg-amber-100 text-xs text-amber-700">
                    GF
                  </Badge>
                )}
              </div>
              {item.description && (
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
            <span className="whitespace-nowrap font-bold text-primary">
              {formatPrice(item.price)}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function MenuPage() {
  const sandwiches = getItemsByCategory("signature-sandwiches");
  const soups = getItemsByCategory("soups-chili");
  const hotDogs = getItemsByCategory("hot-dogs");
  const beverages = getItemsByCategory("beverages");
  const chips = getItemsByCategory("chips");

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
              Everything made fresh daily with quality ingredients.
              All sandwiches come with lettuce, tomato & a pickle spear.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Content - 2 Column Layout */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

            {/* Left Column: Signature Sandwiches */}
            <div>
              <MenuSection
                title="Signature Sandwiches"
                subtitle="Make it a combo for $2 more (chips & drink)"
                items={sandwiches}
                delay={0.1}
              />
            </div>

            {/* Right Column: Soup & Chili, Hot Dogs, Beverages, Chips */}
            <div>
              <MenuSection
                title="Soup & Chili"
                items={soups}
                delay={0.2}
              />
              <MenuSection
                title="Hot Dogs"
                items={hotDogs}
                delay={0.3}
              />
              <MenuSection
                title="Beverages"
                items={beverages}
                delay={0.4}
              />
              <MenuSection
                title="Chips"
                items={chips}
                delay={0.5}
              />
            </div>
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 rounded-lg bg-primary/10 p-6 text-center"
          >
            <p className="font-semibold text-primary">🎁 Gift cards coming soon!</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
