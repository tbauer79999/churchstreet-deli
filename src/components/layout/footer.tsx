import Link from "next/link";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const hours = [
  { day: "Mon - Sat", time: "11am - 6pm" },
  { day: "Closed on Sundays", time: "" },
];

const quickLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/logo2.png"
                alt="Church Street Deli"
                width={120}
                height={43}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Fresh, delicious sandwiches, salads, and homemade soups in the heart
              of Downtown Cleveland, TN. Opening Feb 18th!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Hours</h4>
            <ul className="space-y-2">
              {hours.map((schedule) => (
                <li
                  key={schedule.day}
                  className="flex items-start gap-2 text-sm"
                >
                  <Clock className="mt-0.5 h-4 w-4 text-primary" />
                  <div>
                    <span className="font-medium">{schedule.day}</span>
                    <br />
                    <span className="text-muted-foreground">
                      {schedule.time}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  191 Church Street NE
                  <br />
                  Cleveland, TN 37311
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+14235551234"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  (423) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:hello@churchstreetdeli.com"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  hello@churchstreetdeli.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Church Street Deli. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
