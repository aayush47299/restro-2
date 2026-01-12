export interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    category: 'Starters',
    items: [
      {
        name: 'French Onion Soup',
        description: 'Classic caramelized onion soup with gruyère cheese and crispy croutons',
        price: 450,
        image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Caprese Salad',
        description: 'Fresh mozzarella, heirloom tomatoes, basil, and balsamic reduction',
        price: 550,
        image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Crispy Calamari',
        description: 'Lightly fried squid rings with spicy aioli and lemon',
        price: 650,
        image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Bruschetta Trio',
        description: 'Toasted artisan bread with tomato-basil, mushroom, and olive tapenade',
        price: 500,
        image: 'https://images.pexels.com/photos/1431306/pexels-photo-1431306.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
  },
  {
    category: 'Main Course',
    items: [
      {
        name: 'Beef Wellington',
        description: 'Premium beef fillet wrapped in puff pastry with mushroom duxelles and red wine jus',
        price: 2200,
        image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Grilled Salmon',
        description: 'Fresh Atlantic salmon with herb butter, asparagus, and lemon risotto',
        price: 1450,
        image: 'https://images.pexels.com/photos/3662136/pexels-photo-3662136.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Truffle Risotto',
        description: 'Creamy arborio rice infused with black truffle oil, parmesan, and wild mushrooms',
        price: 1250,
        image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Lamb Rack',
        description: 'Herb-crusted lamb rack with rosemary jus and roasted vegetables',
        price: 1950,
        image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Chicken Supreme',
        description: 'Pan-seared chicken breast with truffle mashed potatoes and seasonal greens',
        price: 1150,
        image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Seafood Pasta',
        description: 'Linguine with prawns, mussels, and clams in white wine garlic sauce',
        price: 1350,
        image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
  },
  {
    category: 'Breads',
    items: [
      {
        name: 'Garlic Butter Naan',
        description: 'Soft and fluffy naan brushed with garlic butter and fresh coriander',
        price: 120,
        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Sourdough Bread Basket',
        description: 'Artisan sourdough slices with whipped butter and olive oil',
        price: 180,
        image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Cheese Focaccia',
        description: 'Rosemary focaccia topped with mozzarella and parmesan',
        price: 200,
        image: 'https://images.pexels.com/photos/5710159/pexels-photo-5710159.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
  },
  {
    category: 'Desserts',
    items: [
      {
        name: 'Chocolate Soufflé',
        description: 'Rich dark chocolate soufflé with vanilla bean ice cream',
        price: 650,
        image: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla custard with caramelized sugar crust',
        price: 550,
        image: 'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Tiramisu',
        description: 'Traditional Italian coffee-soaked ladyfingers with mascarpone cream',
        price: 600,
        image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Lemon Tart',
        description: 'Tangy lemon curd in a buttery pastry shell with meringue',
        price: 500,
        image: 'https://images.pexels.com/photos/6607388/pexels-photo-6607388.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
  },
  {
    category: 'Beverages',
    items: [
      {
        name: 'Fresh Juice Selection',
        description: 'Orange, apple, pineapple, or mixed fruit juice',
        price: 250,
        image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Signature Mocktails',
        description: 'Virgin mojito, fruit punch, or tropical paradise',
        price: 350,
        image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Artisan Coffee',
        description: 'Espresso, cappuccino, latte, or americano',
        price: 200,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        name: 'Premium Tea Collection',
        description: 'Earl Grey, chamomile, green tea, or jasmine',
        price: 180,
        image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
  },
];
