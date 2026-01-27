"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/menu-data";

const orderSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  pickupTime: z.string().min(1, "Please select a pickup time"),
  specialInstructions: z.string().optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

const generatePickupTimes = () => {
  const times: string[] = [];
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Start from next available 15-minute slot (at least 30 minutes from now)
  let startHour = currentHour;
  let startMinute = Math.ceil((currentMinute + 30) / 15) * 15;

  if (startMinute >= 60) {
    startHour += 1;
    startMinute = startMinute - 60;
  }

  // Generate times from start until 7 PM (19:00)
  for (let hour = startHour; hour < 19; hour++) {
    for (let minute = hour === startHour ? startMinute : 0; minute < 60; minute += 15) {
      const time = new Date();
      time.setHours(hour, minute, 0, 0);
      times.push(
        time.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    }
  }

  return times.slice(0, 20); // Limit to reasonable number of options
};

export function OrderForm() {
  const { items, subtotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  const tax = subtotal * 0.0975; // 9.75% tax rate for TN
  const total = subtotal + tax;
  const pickupTimes = generatePickupTimes();

  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate order number
    const orderNum = `CSD-${Date.now().toString().slice(-6)}`;
    setOrderNumber(orderNum);

    // Show confirmation
    setShowConfirmation(true);
    clearCart();
    reset();
    setIsSubmitting(false);
  };

  if (items.length === 0 && !showConfirmation) {
    return null;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border bg-card p-6 shadow-warm"
      >
        <h2 className="mb-6 font-serif text-2xl font-bold">Complete Your Order</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Customer Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-muted-foreground">
              Customer Information
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...register("name")}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(423) 555-1234"
                  {...register("phone")}
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Pickup Time */}
          <div className="space-y-4">
            <h3 className="font-semibold text-muted-foreground">Pickup Details</h3>

            <div className="space-y-2">
              <Label htmlFor="pickupTime">Preferred Pickup Time *</Label>
              <select
                id="pickupTime"
                {...register("pickupTime")}
                className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  errors.pickupTime ? "border-destructive" : "border-input"
                }`}
              >
                <option value="">Select a time...</option>
                {pickupTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {errors.pickupTime && (
                <p className="text-sm text-destructive">
                  {errors.pickupTime.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialInstructions">
                Special Instructions (Optional)
              </Label>
              <Textarea
                id="specialInstructions"
                placeholder="Any allergies, modifications, or special requests..."
                {...register("specialInstructions")}
                rows={3}
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-3 border-t pt-4">
            <h3 className="font-semibold text-muted-foreground">Order Summary</h3>

            <div className="space-y-2 text-sm">
              {items.map(({ item, quantity }) => (
                <div key={item.id} className="flex justify-between">
                  <span>
                    {item.name} x {quantity}
                  </span>
                  <span>{formatPrice(item.price * quantity)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-1 border-t pt-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Tax (9.75%)</span>
                <span>{formatPrice(tax)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">{formatPrice(total)}</span>
              </div>
            </div>
          </div>

          {/* Payment Note */}
          <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
            <p>
              <strong>Payment:</strong> Pay when you pick up your order. We accept
              cash, credit/debit cards, and mobile payments.
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting || items.length === 0}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Placing Order...
              </>
            ) : (
              `Place Order - ${formatPrice(total)}`
            )}
          </Button>
        </form>
      </motion.div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <DialogTitle className="text-center font-serif text-2xl">
              Order Confirmed!
            </DialogTitle>
            <DialogDescription className="text-center">
              Thank you for your order. We&apos;ve received it and will have it ready
              for pickup.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="rounded-lg bg-muted p-4 text-center">
              <p className="text-sm text-muted-foreground">Order Number</p>
              <p className="font-mono text-2xl font-bold text-primary">
                {orderNumber}
              </p>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              A confirmation email has been sent. Please bring this order number
              when picking up.
            </p>
          </div>
          <Button className="w-full" onClick={() => setShowConfirmation(false)}>
            Done
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
