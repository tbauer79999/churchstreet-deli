export type Category =
  | "breakfast"
  | "traditional-favorites"
  | "signature-sandwiches"
  | "house-specials"
  | "hot-dogs"
  | "soups-chili"
  | "salads"
  | "beverages"
  | "desserts";

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

export const categories: { id: Category; name: string; description: string }[] = [
  {
    id: "breakfast",
    name: "Breakfast Biscuits & Wraps",
    description: "Start your day right with our hearty breakfast options",
  },
  {
    id: "traditional-favorites",
    name: "Traditional Favorites",
    description: "Classic sandwiches and burgers that never go out of style",
  },
  {
    id: "signature-sandwiches",
    name: "Signature Sandwiches",
    description: "All sandwiches come with lettuce, tomato & a pickle spear. Prices include chips and a tea, coffee, or canned soft drink.",
  },
  {
    id: "house-specials",
    name: "House Specials",
    description: "Our unique creations you won't find anywhere else",
  },
  {
    id: "hot-dogs",
    name: "Hot Dogs",
    description: "Premium Angus beef hot dogs with your choice of toppings",
  },
  {
    id: "soups-chili",
    name: "Soup & Chili",
    description: "Homemade soups and chili, made fresh daily",
  },
  {
    id: "salads",
    name: "Fresh Salads",
    description: "Crisp, fresh salads made to order",
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Refreshing drinks to complete your meal",
  },
  {
    id: "desserts",
    name: "Pastries & Desserts",
    description: "Sweet treats to finish your meal",
  },
];

export const menuItems: MenuItem[] = [
  // Breakfast Biscuits & Wraps
  {
    id: "egg-cheese",
    name: "Egg & Cheese",
    description: "Fresh eggs and melted cheese on your choice of biscuit or wrap",
    price: 3.00,
    category: "breakfast",
  },
  {
    id: "sausage-egg",
    name: "Sausage & Egg",
    description: "Savory sausage with fresh eggs on your choice of biscuit or wrap",
    price: 4.00,
    category: "breakfast",
  },
  {
    id: "sausage-egg-cheese",
    name: "Sausage, Egg & Cheese",
    description: "Classic breakfast combo with sausage, eggs, and cheese",
    price: 5.00,
    category: "breakfast",
    isPopular: true,
  },
  {
    id: "steak-egg",
    name: "Steak & Egg",
    description: "Tender steak with fresh eggs on your choice of biscuit or wrap",
    price: 6.00,
    category: "breakfast",
  },
  {
    id: "steak-egg-cheese",
    name: "Steak, Egg & Cheese",
    description: "Premium steak, eggs, and cheese for a hearty breakfast",
    price: 7.00,
    category: "breakfast",
    isPopular: true,
  },

  // Traditional Favorites
  {
    id: "chicken-sandwich",
    name: "Chicken Sandwich",
    description: "Breaded chicken breast with lettuce, tomato & mayo",
    price: 10.00,
    category: "traditional-favorites",
    isPopular: true,
  },
  {
    id: "hamburger",
    name: "Hamburger",
    description: "Beef patty with lettuce, tomato, pickle & mayo",
    price: 10.00,
    category: "traditional-favorites",
    isPopular: true,
  },

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

  // House Specials
  {
    id: "cheese-turnover",
    name: "Cheese Turnover",
    description: "Served with marinara",
    price: 6.00,
    category: "house-specials",
    isVegetarian: true,
  },

  // Hot Dogs
  {
    id: "angus-beef-dog",
    name: "Angus Beef Dog",
    description: "Premium Angus beef hot dog",
    price: 7.00,
    category: "hot-dogs",
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

  // Salads
  {
    id: "house-garden-salad",
    name: "House Garden Salad",
    description: "Mixed greens, cucumbers, tomatoes, & shredded cheese. Dressings: Ranch, Italian, Thousand Island, Greek",
    price: 8.00,
    category: "salads",
    isVegetarian: true,
    isGlutenFree: true,
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
    price: 1.00,
    category: "beverages",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "canned-soda",
    name: "Canned Soda",
    description: "Your choice of canned soda",
    price: 1.00,
    category: "beverages",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "bottled-water",
    name: "Bottled Water",
    description: "Refreshing bottled water",
    price: 1.00,
    category: "beverages",
    isVegetarian: true,
    isGlutenFree: true,
  },

  // Desserts
  {
    id: "pastries-desserts",
    name: "Pastries and Desserts",
    description: "Coming Soon!",
    price: 0.00,
    category: "desserts",
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
