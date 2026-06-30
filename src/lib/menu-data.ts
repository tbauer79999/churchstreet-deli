export type Category =
  | "signature-sandwiches"
  | "soups-chili"
  | "hot-dogs"
  | "beverages"
  | "sides-extras"
  | "desserts"
  | "bowls";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  /** Upper bound for items priced as a range (e.g. Cheesecake $4 - $5). */
  priceMax?: number;
  category: Category;
  image?: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

export const menuItems: MenuItem[] = [
  // Signature Sandwiches
  {
    id: "italian",
    name: "Italian",
    description: "Ham, salami, capicola, prosciutto, provolone, mayo & sub dressing",
    price: 12.00,
    category: "signature-sandwiches",
    isPopular: true,
  },
  {
    id: "deli-club",
    name: "The Deli Club",
    description: "Turkey, ham, bacon, cheddar & mayo — Make it spicy!",
    price: 12.00,
    category: "signature-sandwiches",
    isPopular: true,
  },
  {
    id: "blt",
    name: "BLT",
    description: "Bacon, lettuce, tomato & mayo",
    price: 10.00,
    category: "signature-sandwiches",
  },
  {
    id: "chicken-salad-sandwich",
    name: "Chicken Salad",
    description: "Made from scratch",
    price: 10.00,
    category: "signature-sandwiches",
  },
  {
    id: "egg-salad-sandwich",
    name: "Egg Salad",
    description: "Made from scratch",
    price: 10.00,
    category: "signature-sandwiches",
  },
  {
    id: "tuna-salad-sandwich",
    name: "Tuna Salad",
    description: "Made from scratch",
    price: 12.00,
    category: "signature-sandwiches",
  },
  {
    id: "pimento-cheese-sandwich",
    name: "Siss's Pimento Cheese",
    description: "Hand-shredded in house",
    price: 10.00,
    category: "signature-sandwiches",
    isVegetarian: true,
  },
  {
    id: "kentucky-derby",
    name: "Kentucky Derby",
    description: "Siss's Pimento Cheese, Bacon with Bourbon BBQ",
    price: 13.00,
    category: "signature-sandwiches",
  },
  {
    id: "steak-cheese",
    name: "Steak and Cheese",
    description: "Ribeye steak with provolone — Make it spicy!",
    price: 13.00,
    category: "signature-sandwiches",
    isPopular: true,
  },
  {
    id: "blackened-chicken-sandwich",
    name: "Robert's Blacken Chicken",
    description:
      "Cooked on a black stone flat-top — Make it a Lorenzo by adding Siss's Pimento Cheese for $2 more!",
    price: 12.00,
    category: "signature-sandwiches",
  },
  {
    id: "roasted-veggie",
    name: "Roasted Veggie",
    description: "Seasonal roasted veggies, provolone, mayo & sub dressing",
    price: 11.00,
    category: "signature-sandwiches",
    isVegetarian: true,
  },

  // Soup & Chili
  {
    id: "house-chili",
    name: "House Chili",
    description: "Slow-cooked savory ground beef with beans",
    price: 6.00,
    category: "soups-chili",
    isGlutenFree: true,
  },

  // Hot Dogs
  {
    id: "angus-beef-dog",
    name: "Angus Beef Dog",
    description: "Add Chili, Cheese & Onion $2. Ask about other toppings.",
    price: 7.00,
    category: "hot-dogs",
  },

  // Beverages
  {
    id: "canned-soda",
    name: "Canned Sodas",
    description: "Coke products",
    price: 1.50,
    category: "beverages",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "bottled-water",
    name: "Bottled Water",
    description: "Refreshing bottled water",
    price: 1.50,
    category: "beverages",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "iced-tea",
    name: "Iced Tea",
    description: "Sweet and Unsweet",
    price: 1.50,
    category: "beverages",
    isVegetarian: true,
    isGlutenFree: true,
  },

  // Sides & Extras
  {
    id: "chips",
    name: "Better Made Chips",
    description:
      "Original, 4 flavors of BBQ, Salt & Vinegar, Sour Cream & Onion",
    price: 1.50,
    category: "sides-extras",
    isVegetarian: true,
  },
  {
    id: "side-salad",
    name: "Side Salad",
    description: "Potato, Pasta, or Macaroni",
    price: 1.50,
    category: "sides-extras",
    isVegetarian: true,
  },
  {
    id: "deviled-eggs",
    name: "Deviled Eggs",
    description: "Made from scratch — get a pack of 4 for $3",
    price: 1.50,
    category: "sides-extras",
    isVegetarian: true,
    isGlutenFree: true,
  },

  // Desserts
  {
    id: "cheesecake",
    name: "Cheesecake",
    description: "Ask us about our current rotating specialty flavors!",
    price: 4.00,
    priceMax: 5.00,
    category: "desserts",
    isVegetarian: true,
  },
  {
    id: "fruit-cups",
    name: "Fruit Cups",
    description: "A refreshing, classic mix of traditional fruit",
    price: 4.00,
    category: "desserts",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "pudding-cups",
    name: "Pudding Cups",
    description:
      "Featuring our staple Banana pudding alongside other rotating sweet flavors",
    price: 3.00,
    category: "desserts",
    isVegetarian: true,
  },
  {
    id: "cookies",
    name: "Cookies",
    description: "Freshly baked in-house daily!",
    price: 1.00,
    category: "desserts",
    isVegetarian: true,
  },

  // Bowls — each size is its own item so the cart can price them individually
  {
    id: "chicken-salad-bowl-small",
    name: "Chicken Salad Bowl (Small)",
    description: "Made from scratch chicken salad",
    price: 6.00,
    category: "bowls",
  },
  {
    id: "chicken-salad-bowl-medium",
    name: "Chicken Salad Bowl (Medium)",
    description: "Made from scratch chicken salad",
    price: 9.00,
    category: "bowls",
  },
  {
    id: "chicken-salad-bowl-large",
    name: "Chicken Salad Bowl (Large)",
    description: "Made from scratch chicken salad",
    price: 12.00,
    category: "bowls",
  },
  {
    id: "egg-salad-bowl-small",
    name: "Egg Salad Bowl (Small)",
    description: "Made from scratch egg salad",
    price: 6.00,
    category: "bowls",
    isVegetarian: true,
  },
  {
    id: "egg-salad-bowl-medium",
    name: "Egg Salad Bowl (Medium)",
    description: "Made from scratch egg salad",
    price: 9.00,
    category: "bowls",
    isVegetarian: true,
  },
  {
    id: "egg-salad-bowl-large",
    name: "Egg Salad Bowl (Large)",
    description: "Made from scratch egg salad",
    price: 12.00,
    category: "bowls",
    isVegetarian: true,
  },
  {
    id: "tuna-salad-bowl-small",
    name: "Tuna Salad Bowl (Small)",
    description: "Made from scratch tuna salad",
    price: 8.00,
    category: "bowls",
  },
  {
    id: "tuna-salad-bowl-medium",
    name: "Tuna Salad Bowl (Medium)",
    description: "Made from scratch tuna salad",
    price: 10.00,
    category: "bowls",
  },
  {
    id: "tuna-salad-bowl-large",
    name: "Tuna Salad Bowl (Large)",
    description: "Made from scratch tuna salad",
    price: 12.00,
    category: "bowls",
  },
  {
    id: "potato-salad-bowl-small",
    name: "Potato, Pasta & Macaroni Salad Bowl (Small)",
    description: "House-made potato, pasta, or macaroni salad",
    price: 3.00,
    category: "bowls",
    isVegetarian: true,
  },
  {
    id: "potato-salad-bowl-medium",
    name: "Potato, Pasta & Macaroni Salad Bowl (Medium)",
    description: "House-made potato, pasta, or macaroni salad",
    price: 6.00,
    category: "bowls",
    isVegetarian: true,
  },
  {
    id: "potato-salad-bowl-large",
    name: "Potato, Pasta & Macaroni Salad Bowl (Large)",
    description: "House-made potato, pasta, or macaroni salad",
    price: 9.00,
    category: "bowls",
    isVegetarian: true,
  },
  {
    id: "pimento-cheese-bowl-small",
    name: "Siss's Pimento Cheese Bowl (Small)",
    description: "Hand-shredded in house",
    price: 8.00,
    category: "bowls",
    isVegetarian: true,
  },
  {
    id: "pimento-cheese-bowl-medium",
    name: "Siss's Pimento Cheese Bowl (Medium)",
    description: "Hand-shredded in house",
    price: 10.00,
    category: "bowls",
    isVegetarian: true,
  },
  {
    id: "pimento-cheese-bowl-large",
    name: "Siss's Pimento Cheese Bowl (Large)",
    description: "Hand-shredded in house",
    price: 12.00,
    category: "bowls",
    isVegetarian: true,
  },
];

export const getItemsByCategory = (category: Category): MenuItem[] => {
  return menuItems.filter((item) => item.category === category);
};

export const getPopularItems = (): MenuItem[] => {
  return menuItems.filter((item) => item.isPopular);
};

export const getItemById = (id: string): MenuItem | undefined => {
  return menuItems.find((item) => item.id === id);
};

export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

export const formatItemPrice = (item: MenuItem): string => {
  if (item.priceMax && item.priceMax !== item.price) {
    return `${formatPrice(item.price)} - ${formatPrice(item.priceMax)}`;
  }
  return formatPrice(item.price);
};
