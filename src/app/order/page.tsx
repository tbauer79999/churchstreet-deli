"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { OrderForm } from "@/components/order/order-form";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/menu-data";

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

export default function OrderPage() {
  const { items, removeItem, updateQuantity, subtotal, totalItems } = useCart();

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
              Your Order
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Review your items and complete your order for pickup. We&apos;ll have
              everything ready when you arrive!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Order Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto max-w-md text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-muted p-8">
                  <ShoppingBag className="h-16 w-16 text-muted-foreground" />
                </div>
              </div>
              <h2 className="mb-4 font-serif text-2xl font-bold">
                Your cart is empty
              </h2>
              <p className="mb-8 text-muted-foreground">
                Looks like you haven&apos;t added any items yet. Browse our menu and
                add your favorites!
              </p>
              <Button asChild size="lg">
                <Link href="/menu">Browse Menu</Link>
              </Button>
            </motion.div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-5">
              {/* Cart Items */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-serif text-2xl font-bold">
                      Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
                    </h2>
                    <Button variant="link" asChild className="text-primary">
                      <Link href="/menu">+ Add More Items</Link>
                    </Button>
                  </div>

                  <Card>
                    <CardContent className="divide-y p-0">
                      {items.map(({ item, quantity }, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex gap-4 p-4"
                        >
                          {/* Item Image */}
                          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-muted text-3xl">
                            {categoryEmojis[item.category] || "🍽️"}
                          </div>

                          {/* Item Details */}
                          <div className="flex flex-1 flex-col">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {formatPrice(item.price)} each
                                </p>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>

                            <div className="mt-auto flex items-center justify-between pt-2">
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() =>
                                    updateQuantity(item.id, quantity - 1)
                                  }
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-8 text-center font-medium">
                                  {quantity}
                                </span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() =>
                                    updateQuantity(item.id, quantity + 1)
                                  }
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>

                              {/* Line Total */}
                              <span className="font-bold">
                                {formatPrice(item.price * quantity)}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Subtotal */}
                  <div className="mt-4 flex items-center justify-between rounded-lg bg-muted/50 p-4">
                    <span className="font-medium">Subtotal</span>
                    <span className="text-xl font-bold">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Order Form */}
              <div className="lg:col-span-2">
                <OrderForm />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
