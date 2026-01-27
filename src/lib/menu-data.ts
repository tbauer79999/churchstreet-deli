export type Category =
  | "sandwiches"
  | "subs"
  | "salads"
  | "soups"
  | "sides"
  | "drinks";

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
    id: "sandwiches",
    name: "Sandwiches",
    description: "Classic deli sandwiches on fresh-baked bread",
  },
  {
    id: "subs",
    name: "Subs",
    description: "Hearty submarine sandwiches loaded with toppings",
  },
  {
    id: "salads",
    name: "Salads",
    description: "Fresh, crisp salads made to order",
  },
  {
    id: "soups",
    name: "Soups",
    description: "Homemade soups, perfect for any day",
  },
  {
    id: "sides",
    name: "Sides",
    description: "The perfect accompaniment to any meal",
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Refreshing beverages to complete your order",
  },
];

export const menuItems: MenuItem[] = [
  // Sandwiches
  {
    id: "church-street-classic",
    name: "The Church Street Classic",
    description: "Our signature sandwich with smoked turkey, honey ham, Swiss cheese, lettuce, tomato, and our secret house sauce on freshly baked sourdough.",
    price: 12.99,
    category: "sandwiches",
    isPopular: true,
  },
  {
    id: "turkey-club",
    name: "Turkey Club",
    description: "Triple-decker with oven-roasted turkey, crispy bacon, lettuce, tomato, and mayo on toasted white bread.",
    price: 11.99,
    category: "sandwiches",
    isPopular: true,
  },
  {
    id: "classic-reuben",
    name: "Classic Reuben",
    description: "Tender corned beef, sauerkraut, Swiss cheese, and thousand island dressing on grilled marble rye.",
    price: 13.49,
    category: "sandwiches",
    isPopular: true,
  },
  {
    id: "chicken-salad",
    name: "Chicken Salad Sandwich",
    description: "House-made chicken salad with celery, herbs, and a touch of lemon on a buttery croissant.",
    price: 10.99,
    category: "sandwiches",
  },
  {
    id: "blt-deluxe",
    name: "BLT Deluxe",
    description: "Thick-cut applewood smoked bacon, fresh lettuce, ripe tomatoes, and garlic aioli on toasted sourdough.",
    price: 10.49,
    category: "sandwiches",
  },
  {
    id: "veggie-delight",
    name: "Veggie Delight",
    description: "Grilled zucchini, roasted red peppers, fresh mozzarella, spinach, and pesto on ciabatta.",
    price: 10.99,
    category: "sandwiches",
    isVegetarian: true,
  },
  {
    id: "roast-beef-cheddar",
    name: "Roast Beef & Cheddar",
    description: "Thin-sliced roast beef with sharp cheddar, horseradish cream, and crispy onions on a Kaiser roll.",
    price: 12.49,
    category: "sandwiches",
  },
  {
    id: "ham-swiss",
    name: "Ham & Swiss",
    description: "Black forest ham, Swiss cheese, Dijon mustard, and pickles on fresh baked rye.",
    price: 10.99,
    category: "sandwiches",
  },

  // Subs
  {
    id: "italian-sub",
    name: "Italian Sub",
    description: "Genoa salami, capicola, ham, provolone, lettuce, tomatoes, onions, peppers, and Italian dressing on a hoagie roll.",
    price: 13.99,
    category: "subs",
    isPopular: true,
  },
  {
    id: "meatball-sub",
    name: "Meatball Sub",
    description: "House-made meatballs smothered in marinara sauce and melted mozzarella on a toasted hoagie.",
    price: 12.99,
    category: "subs",
  },
  {
    id: "philly-cheesesteak",
    name: "Philly Cheesesteak",
    description: "Thinly sliced ribeye with sautéed peppers, onions, and melted provolone on a soft hoagie roll.",
    price: 14.49,
    category: "subs",
    isPopular: true,
  },
  {
    id: "chicken-parm-sub",
    name: "Chicken Parmesan Sub",
    description: "Breaded chicken cutlet with marinara, melted mozzarella, and parmesan on a toasted hoagie.",
    price: 13.49,
    category: "subs",
  },
  {
    id: "tuna-sub",
    name: "Tuna Sub",
    description: "Our famous tuna salad with lettuce, tomato, and red onion on a soft hoagie roll.",
    price: 11.99,
    category: "subs",
  },

  // Salads
  {
    id: "garden-salad",
    name: "Garden Salad",
    description: "Mixed greens, cherry tomatoes, cucumbers, carrots, and red onion with your choice of dressing.",
    price: 8.99,
    category: "salads",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "caesar-salad",
    name: "Classic Caesar",
    description: "Crisp romaine, parmesan cheese, croutons, and house-made Caesar dressing.",
    price: 9.99,
    category: "salads",
    isVegetarian: true,
  },
  {
    id: "chef-salad",
    name: "Chef Salad",
    description: "Mixed greens topped with turkey, ham, Swiss, cheddar, hard-boiled egg, tomatoes, and cucumbers.",
    price: 12.99,
    category: "salads",
    isGlutenFree: true,
  },
  {
    id: "cobb-salad",
    name: "Cobb Salad",
    description: "Grilled chicken, bacon, avocado, blue cheese, hard-boiled egg, and tomatoes over mixed greens.",
    price: 13.99,
    category: "salads",
    isPopular: true,
    isGlutenFree: true,
  },
  {
    id: "greek-salad",
    name: "Greek Salad",
    description: "Romaine, feta cheese, kalamata olives, red onion, cucumber, tomatoes, and Greek dressing.",
    price: 10.99,
    category: "salads",
    isVegetarian: true,
    isGlutenFree: true,
  },

  // Soups
  {
    id: "soup-of-day",
    name: "Soup of the Day",
    description: "Ask about today's freshly made soup selection. Served with crackers.",
    price: 5.99,
    category: "soups",
  },
  {
    id: "chicken-noodle",
    name: "Chicken Noodle Soup",
    description: "Classic comfort - tender chicken, egg noodles, carrots, and celery in savory broth.",
    price: 5.99,
    category: "soups",
  },
  {
    id: "tomato-basil",
    name: "Tomato Basil Soup",
    description: "Creamy tomato soup with fresh basil. Perfect with a grilled cheese!",
    price: 5.99,
    category: "soups",
    isVegetarian: true,
  },
  {
    id: "loaded-potato",
    name: "Loaded Potato Soup",
    description: "Creamy potato soup topped with bacon, cheddar, sour cream, and chives.",
    price: 6.49,
    category: "soups",
  },
  {
    id: "chili",
    name: "Hearty Chili",
    description: "Slow-cooked beef and bean chili with a kick. Topped with cheddar and onions.",
    price: 6.99,
    category: "soups",
    isGlutenFree: true,
  },

  // Sides
  {
    id: "chips",
    name: "Kettle Chips",
    description: "Crispy kettle-cooked potato chips.",
    price: 1.99,
    category: "sides",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "pickle-spear",
    name: "Pickle Spear",
    description: "Crunchy kosher dill pickle.",
    price: 0.99,
    category: "sides",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "coleslaw",
    name: "Coleslaw",
    description: "Creamy house-made coleslaw.",
    price: 2.99,
    category: "sides",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "potato-salad",
    name: "Potato Salad",
    description: "Classic potato salad with a tangy mustard dressing.",
    price: 3.49,
    category: "sides",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "mac-cheese",
    name: "Mac & Cheese",
    description: "Creamy, cheesy macaroni - a comfort food classic.",
    price: 4.49,
    category: "sides",
    isVegetarian: true,
  },
  {
    id: "fruit-cup",
    name: "Fresh Fruit Cup",
    description: "Seasonal fresh fruit medley.",
    price: 3.99,
    category: "sides",
    isVegetarian: true,
    isGlutenFree: true,
  },

  // Drinks
  {
    id: "fountain-drink",
    name: "Fountain Drink",
    description: "Coca-Cola, Diet Coke, Sprite, Lemonade, or Sweet Tea.",
    price: 2.49,
    category: "drinks",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "bottled-water",
    name: "Bottled Water",
    description: "Refreshing purified water.",
    price: 1.99,
    category: "drinks",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "coffee",
    name: "Fresh Brewed Coffee",
    description: "Locally roasted coffee, served hot.",
    price: 2.49,
    category: "drinks",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "iced-tea",
    name: "Fresh Brewed Iced Tea",
    description: "Sweet or unsweet, just like grandma made.",
    price: 2.49,
    category: "drinks",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: "lemonade",
    name: "Fresh Squeezed Lemonade",
    description: "Made fresh daily with real lemons.",
    price: 3.49,
    category: "drinks",
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
