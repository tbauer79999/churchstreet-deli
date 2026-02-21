"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MenuItem, formatPrice } from "@/lib/menu-data";

interface MenuItemCardProps {
  item: MenuItem;
}

const categoryEmojis: Record<string, string> = {
  breakfast: "🍳",
  "traditional-favorites": "🍔",
  "signature-sandwiches": "🥪",
  "house-specials": "⭐",
  "hot-dogs": "🌭",
  "soups-chili": "🍲",
  salads: "🥗",
  beverages: "🥤",
  desserts: "🍰",
};

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-warm">
      <CardContent className="p-0">
        {/* Image/Emoji Placeholder */}
        <div className="relative aspect-[3/2] bg-gradient-to-br from-muted to-muted/50">
          <div className="flex h-full items-center justify-center text-5xl">
            {categoryEmojis[item.category] || "🍽️"}
          </div>

          {/* Badges */}
          <div className="absolute left-3 top-3 flex flex-wrap gap-1">
            {item.isPopular && (
              <Badge className="bg-primary/90">Popular</Badge>
            )}
            {item.isVegetarian && (
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Vegetarian
              </Badge>
            )}
            {item.isGlutenFree && (
              <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                GF
              </Badge>
            )}
          </div>
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
          <p className="text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
