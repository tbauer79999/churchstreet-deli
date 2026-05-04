export type Category =
  | "signature-sandwiches"
  | "soups-chili"
  | "hot-dogs"
  | "beverages"
  | "chips"
  | "desserts"
  | "bowls";

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
    price: 10.00,
    category: "signature-sandwiches",
  },
  {
    id: "chicken-salad-sandwich",
    name: "Chicken Salad Sandwich",
    description: "Made from scratch",
    price: 10.00,
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
  {
    id: "meatball-sandwich",
    name: "Meatball Sandwich",
    description: "Hearty meatballs with marinara",
    price: 13.00,
    category: "signature-sandwiches",
  },
  {
    id: "pimento-cheese-sandwich",
    name: "Pimento Cheese Sandwich",
    description: "House-made pimento cheese",
    price: 9.00,
    category: "signature-sandwiches",
    isVegetarian: true,
  },
  {
    id: "tuna-salad-sandwich",
    name: "Tuna Salad Sandwich",
    description: "Made from scratch tuna salad",
    price: 12.00,
    category: "signature-sandwiches",
  },
  {
    id: "blackened-chicken-sandwich",
    name: "Blackened Chicken Sandwich",
    description: "Seasoned blackened chicken breast",
    price: 12.00,
    category: "signature-sandwiches",
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
  {
    id: "hot-dog-toppings",
    name: "Add Chili, Cheese & Onion",
    description: "Loaded topping combo for any hot dog",
    price: 2.00,
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

  // Desserts
  {
    id: "banana-pudding-cups",
    name: "Banana Pudding Cups",
    description: "Creamy homemade banana pudding",
    price: 3.00,
    category: "desserts",
    isVegetarian: true,
  },
  {
    id: "cookies",
    name: "Cookies",
    description: "Freshly baked cookies",
    price: 1.00,
    category: "desserts",
    isVegetarian: true,
  },
  {
    id: "brownies",
    name: "Brownies",
    description: "Rich chocolate brownies (when available)",
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
    id: "potato-salad-bowl-small",
    name: "Potato Salad Bowl (Small)",
    description: "House-made potato salad",
    price: 3.00,
    category: "bowls",
    isVegetarian: true,
  },
  {
    id: "potato-salad-bowl-medium",
    name: "Potato Salad Bowl (Medium)",
    description: "House-made potato salad",
    price: 6.00,
    category: "bowls",
    isVegetarian: true,
  },
  {
    id: "potato-salad-bowl-large",
    name: "Potato Salad Bowl (Large)",
    description: "House-made potato salad",
    price: 9.00,
    category: "bowls",
    isVegetarian: true,
  },
  {
    id: "pimento-cheese-bowl-small",
    name: "Pimento Cheese Bowl (Small)",
    description: "House-made pimento cheese",
    price: 6.00,
    category: "bowls",
    isVegetarian: true,
  },
  {
    id: "pimento-cheese-bowl-medium",
    name: "Pimento Cheese Bowl (Medium)",
    description: "House-made pimento cheese",
    price: 9.00,
    category: "bowls",
    isVegetarian: true,
  },
  {
    id: "pimento-cheese-bowl-large",
    name: "Pimento Cheese Bowl (Large)",
    description: "House-made pimento cheese",
    price: 12.00,
    category: "bowls",
    isVegetarian: true,
  },
  {
    id: "hot-slaw-bowl-small",
    name: "Hot Slaw Bowl (Small)",
    description: "Warm, tangy slaw",
    price: 6.00,
    category: "bowls",
    isVegetarian: true,
  },
  {
    id: "hot-slaw-bowl-medium",
    name: "Hot Slaw Bowl (Medium)",
    description: "Warm, tangy slaw",
    price: 9.00,
    category: "bowls",
    isVegetarian: true,
  },
  {
    id: "hot-slaw-bowl-large",
    name: "Hot Slaw Bowl (Large)",
    description: "Warm, tangy slaw",
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
