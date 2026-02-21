export type Category =
  | "signature-sandwiches"
  | "soups-chili"
  | "hot-dogs"
  | "beverages"
  | "chips";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
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
    description: "Turkey, ham, bacon, cheddar & mayo",
    price: 12.00,
    category: "signature-sandwiches",
    isPopular: true,
  },
  {
    id: "blt",
    name: "BLT",
    description: "Bacon, lettuce, tomato & mayo",
    price: 9.00,
    category: "signature-sandwiches",
  },
  {
    id: "chicken-salad-sandwich",
    name: "Chicken Salad Sandwich",
    description: "Made from scratch chicken salad",
    price: 9.00,
    category: "signature-sandwiches",
  },
  {
    id: "steak-cheese",
    name: "Steak and Cheese",
    description: "Ribeye steak with provolone",
    price: 13.00,
    category: "signature-sandwiches",
    isPopular: true,
  },
  {
    id: "roasted-veggie",
    name: "Roasted Veggie",
    description: "Seasonal roasted veggies, mayo & sub dressing",
    price: 11.00,
    category: "signature-sandwiches",
    isVegetarian: true,
  },

  // Soup & Chili
  {
    id: "chicken-noodle-soup",
    name: "Chicken Noodle Soup",
    description: "Classic homestyle broth, chicken & vegetables",
    price: 6.00,
    category: "soups-chili",
    isGlutenFree: true,
  },
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
    description: "Premium Angus beef hot dog. Ask about other toppings.",
    price: 7.00,
    category: "hot-dogs",
  },

  // Beverages
  {
    id: "coffee",
    name: "Fresh Brewed Coffee",
    description: "Freshly brewed hot coffee",
    price: 2.00,
    category: "beverages",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "iced-tea",
    name: "Iced Tea",
    description: "Freshly brewed iced tea",
    price: 1.50,
    category: "beverages",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "canned-soda",
    name: "Canned Soda",
    description: "Your choice of canned soda",
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

  // Chips
  {
    id: "chips",
    name: "Chips (all types)",
    description: "Your choice of chips",
    price: 1.50,
    category: "chips",
    isVegetarian: true,
    isGlutenFree: true,
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
