
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  popular?: boolean;
}

export interface Review {
  id: number;
  userId: number;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
  likes: number;
  dislikes: number;
}

export interface CafeImage {
  id: number;
  url: string;
  alt: string;
}

export interface Cafe {
  id: number;
  name: string;
  description: string;
  mainImage: string;
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  email: string;
  website: string;
  rating: number;
  reviewCount: number;
  priceLevel: 1 | 2 | 3;
  openingHours: {
    [key: string]: string;
  };
  amenities: string[];
  tags: string[];
  menu: {
    drinks: MenuItem[];
    food: MenuItem[];
  };
  reviews: Review[];
  images: CafeImage[];
  trending?: boolean;
}

export const cafes: Cafe[] = [
  {
    id: 1,
    name: "Cozy Corner Café",
    description: "A charming neighborhood café with artisanal coffee and homemade pastries in a warm, inviting atmosphere.",
    mainImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    address: "123 Maple Street",
    city: "Portland",
    zipCode: "97201",
    phone: "(503) 555-1234",
    email: "hello@cozycornercafe.com",
    website: "www.cozycornercafe.com",
    rating: 4.7,
    reviewCount: 128,
    priceLevel: 2,
    openingHours: {
      "Monday": "7:00 AM - 6:00 PM",
      "Tuesday": "7:00 AM - 6:00 PM",
      "Wednesday": "7:00 AM - 6:00 PM",
      "Thursday": "7:00 AM - 6:00 PM",
      "Friday": "7:00 AM - 8:00 PM",
      "Saturday": "8:00 AM - 8:00 PM",
      "Sunday": "8:00 AM - 5:00 PM"
    },
    amenities: ["Wi-Fi", "Outdoor Seating", "Wheelchair Accessible", "Vegan Options", "Gluten-Free Options"],
    tags: ["Quiet", "Cozy", "Artisanal Coffee", "Breakfast", "Pet-Friendly"],
    menu: {
      drinks: [
        { id: 1, name: "Espresso", description: "Bold and rich espresso shot", price: 3.50 },
        { id: 2, name: "Cappuccino", description: "Equal parts espresso, steamed milk, and foam", price: 4.75, popular: true },
        { id: 3, name: "Latte", description: "Espresso with steamed milk and a light layer of foam", price: 4.50 },
        { id: 4, name: "Mocha", description: "Espresso with chocolate and steamed milk", price: 5.25 },
        { id: 5, name: "Americano", description: "Espresso diluted with hot water", price: 3.75 }
      ],
      food: [
        { id: 6, name: "Avocado Toast", description: "Sourdough bread topped with avocado, cherry tomatoes, and microgreens", price: 8.95, popular: true },
        { id: 7, name: "Blueberry Muffin", description: "Homemade muffin packed with fresh blueberries", price: 3.95 },
        { id: 8, name: "Breakfast Sandwich", description: "Egg, cheese, and your choice of protein on a croissant", price: 7.95 },
        { id: 9, name: "Quiche of the Day", description: "Fresh-baked quiche with seasonal ingredients", price: 6.95 }
      ]
    },
    reviews: [
      {
        id: 1,
        userId: 101,
        userName: "Emma Johnson",
        userAvatar: "https://randomuser.me/api/portraits/women/12.jpg",
        rating: 5,
        comment: "My favorite local café! The atmosphere is so cozy and the lattes are absolutely perfect. I come here almost every morning to work, and the staff always remembers my order.",
        date: "2023-11-15",
        likes: 24,
        dislikes: 1
      },
      {
        id: 2,
        userId: 102,
        userName: "Michael Chen",
        userAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 4,
        comment: "Great coffee and pastries. The avocado toast is a must-try! Only giving 4 stars because it gets pretty crowded on weekends and it's hard to find seating.",
        date: "2023-10-28",
        likes: 15,
        dislikes: 2
      }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", alt: "Cozy Corner Café interior" },
      { id: 2, url: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", alt: "Cozy Corner Café outdoor seating" },
      { id: 3, url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", alt: "Latte art" }
    ],
    trending: true
  },
  {
    id: 2,
    name: "Urban Brew",
    description: "A modern, hip coffee shop known for specialty brews and creative latte art in a vibrant downtown setting.",
    mainImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    address: "456 Pine Avenue",
    city: "Seattle",
    zipCode: "98101",
    phone: "(206) 555-5678",
    email: "info@urbanbrew.com",
    website: "www.urbanbrew.com",
    rating: 4.5,
    reviewCount: 203,
    priceLevel: 3,
    openingHours: {
      "Monday": "6:30 AM - 7:00 PM",
      "Tuesday": "6:30 AM - 7:00 PM",
      "Wednesday": "6:30 AM - 7:00 PM",
      "Thursday": "6:30 AM - 7:00 PM",
      "Friday": "6:30 AM - 9:00 PM",
      "Saturday": "7:00 AM - 9:00 PM",
      "Sunday": "7:00 AM - 6:00 PM"
    },
    amenities: ["Wi-Fi", "Power Outlets", "Workspace", "Single-Origin Coffee", "Pour-Over Bar"],
    tags: ["Trendy", "Specialty Coffee", "Latte Art", "Work-Friendly", "CBD-Infused Drinks"],
    menu: {
      drinks: [
        { id: 1, name: "Pour-Over", description: "Hand-poured single-origin coffee", price: 5.50, popular: true },
        { id: 2, name: "Flat White", description: "Espresso with microfoam", price: 4.95 },
        { id: 3, name: "Cold Brew", description: "Smooth, 18-hour steeped cold coffee", price: 5.25 },
        { id: 4, name: "Nitro Cold Brew", description: "Cold brew infused with nitrogen", price: 5.75, popular: true },
        { id: 5, name: "CBD Latte", description: "Signature latte with CBD oil", price: 7.50 }
      ],
      food: [
        { id: 6, name: "Açai Bowl", description: "Açai blend topped with granola and fresh fruits", price: 11.95 },
        { id: 7, name: "Prosciutto & Fig Sandwich", description: "Artisan bread with prosciutto, fig jam, and arugula", price: 12.95, popular: true },
        { id: 8, name: "Vegan Energy Bites", description: "Raw energy balls with nuts, dates, and cacao", price: 4.50 },
        { id: 9, name: "Seasonal Grain Bowl", description: "Ancient grains with seasonal vegetables and tahini dressing", price: 13.95 }
      ]
    },
    reviews: [
      {
        id: 1,
        userId: 103,
        userName: "Alex Rodriguez",
        userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        comment: "Urban Brew has the best specialty coffee in the city. Their pour-over is worth every penny, and the baristas really know their craft. Great place to work remotely too!",
        date: "2023-11-05",
        likes: 31,
        dislikes: 2
      },
      {
        id: 2,
        userId: 104,
        userName: "Sophia Lin",
        userAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
        rating: 4,
        comment: "I love the ambiance and their CBD latte is amazing! A bit pricey but the quality justifies it. Would be 5 stars if they had more vegan food options.",
        date: "2023-10-20",
        likes: 18,
        dislikes: 1
      }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", alt: "Urban Brew interior" },
      { id: 2, url: "https://images.unsplash.com/photo-1509042239860-f0b0c7cb1c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", alt: "Latte art at Urban Brew" },
      { id: 3, url: "https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", alt: "Barista at work" }
    ],
    trending: true
  },
  {
    id: 3,
    name: "Rustic Bean",
    description: "A rustic, farm-to-table café focused on organic coffee and locally-sourced ingredients in a converted old barn.",
    mainImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    address: "789 Oak Lane",
    city: "Burlington",
    zipCode: "05401",
    phone: "(802) 555-9012",
    email: "hello@rusticbean.com",
    website: "www.rusticbean.com",
    rating: 4.8,
    reviewCount: 156,
    priceLevel: 2,
    openingHours: {
      "Monday": "Closed",
      "Tuesday": "7:30 AM - 4:00 PM",
      "Wednesday": "7:30 AM - 4:00 PM",
      "Thursday": "7:30 AM - 4:00 PM",
      "Friday": "7:30 AM - 4:00 PM",
      "Saturday": "8:00 AM - 5:00 PM",
      "Sunday": "8:00 AM - 3:00 PM"
    },
    amenities: ["Farm-to-Table", "Organic Coffee", "Local Ingredients", "Wood-Fire Bakery", "Children's Play Area"],
    tags: ["Rustic", "Organic", "Family-Friendly", "Sustainable", "Seasonal Menu"],
    menu: {
      drinks: [
        { id: 1, name: "Organic Drip Coffee", description: "Locally roasted organic beans", price: 3.75 },
        { id: 2, name: "Maple Latte", description: "Espresso with local maple syrup and steamed milk", price: 5.50, popular: true },
        { id: 3, name: "Herbal Tea", description: "Seasonal herbal blend", price: 4.25 },
        { id: 4, name: "Farmhouse Chai", description: "Housemade chai with organic spices", price: 5.00 },
        { id: 5, name: "Beetroot Latte", description: "Caffeine-free latte with beetroot and cinnamon", price: 5.25 }
      ],
      food: [
        { id: 6, name: "Farm Breakfast", description: "Two eggs, sourdough toast, seasonal vegetables, and local sausage", price: 14.95, popular: true },
        { id: 7, name: "Wood-Fired Sourdough", description: "Fresh-baked sourdough with cultured butter and honey", price: 6.50 },
        { id: 8, name: "Seasonal Soup", description: "Made daily with local produce", price: 8.95 },
        { id: 9, name: "Harvest Salad", description: "Mixed greens with seasonal vegetables, apple, and maple vinaigrette", price: 12.95 }
      ]
    },
    reviews: [
      {
        id: 1,
        userId: 105,
        userName: "James Wilson",
        userAvatar: "https://randomuser.me/api/portraits/men/72.jpg",
        rating: 5,
        comment: "This place is a gem! The converted barn is so charming, and you can taste the care they put into their food. My family loves coming here on weekends for the farm breakfast.",
        date: "2023-11-12",
        likes: 27,
        dislikes: 0
      },
      {
        id: 2,
        userId: 106,
        userName: "Emily Foster",
        userAvatar: "https://randomuser.me/api/portraits/women/33.jpg",
        rating: 5,
        comment: "The maple latte is to die for! Love that they source everything locally and seasonally. It's worth the drive out of town.",
        date: "2023-09-30",
        likes: 19,
        dislikes: 1
      }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", alt: "Rustic Bean exterior" },
      { id: 2, url: "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", alt: "Wood-fired oven at Rustic Bean" },
      { id: 3, url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", alt: "Farm breakfast plate" }
    ]
  },
  {
    id: 4,
    name: "Digital Nomad Coffee",
    description: "A tech-friendly workspace café with high-speed internet, ample power outlets, and excellent espresso for remote workers.",
    mainImage: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    address: "101 Tech Boulevard",
    city: "Austin",
    zipCode: "78701",
    phone: "(512) 555-3456",
    email: "info@digitalnomadcoffee.com",
    website: "www.digitalnomadcoffee.com",
    rating: 4.6,
    reviewCount: 218,
    priceLevel: 2,
    openingHours: {
      "Monday": "7:00 AM - 10:00 PM",
      "Tuesday": "7:00 AM - 10:00 PM",
      "Wednesday": "7:00 AM - 10:00 PM",
      "Thursday": "7:00 AM - 10:00 PM",
      "Friday": "7:00 AM - 10:00 PM",
      "Saturday": "8:00 AM - 10:00 PM",
      "Sunday": "8:00 AM - 8:00 PM"
    },
    amenities: ["High-Speed Wi-Fi", "Power Outlets at Every Table", "Meeting Rooms", "Phone Booths", "Printing Services"],
    tags: ["Work-Friendly", "Tech Hub", "Late Hours", "Meeting Space", "Productivity"],
    menu: {
      drinks: [
        { id: 1, name: "Power Espresso", description: "Double shot espresso with a touch of raw cacao", price: 4.25, popular: true },
        { id: 2, name: "Focus Cold Brew", description: "Cold brew with MCT oil and cinnamon", price: 5.75 },
        { id: 3, name: "Productivity Matcha", description: "Ceremonial grade matcha with oat milk", price: 5.50 },
        { id: 4, name: "Bulletproof Coffee", description: "Coffee blended with grass-fed butter and MCT oil", price: 6.25 },
        { id: 5, name: "Herbal Brain Boost", description: "Herbal tea with ginkgo, rosemary, and mint", price: 4.75 }
      ],
      food: [
        { id: 6, name: "Brain Food Bowl", description: "Quinoa, avocado, kale, nuts, and protein of choice", price: 13.95, popular: true },
        { id: 7, name: "Smart Sandwich", description: "Turkey, avocado, sprouts, and hummus on whole grain bread", price: 11.95 },
        { id: 8, name: "Coder's Energy Bar", description: "Housemade bar with nuts, seeds, and dark chocolate", price: 4.50 },
        { id: 9, name: "Focus Smoothie", description: "Blueberry, banana, spinach, almond butter, and adaptogenic mushrooms", price: 8.95 }
      ]
    },
    reviews: [
      {
        id: 1,
        userId: 107,
        userName: "David Thompson",
        userAvatar: "https://randomuser.me/api/portraits/men/52.jpg",
        rating: 5,
        comment: "This is my go-to place for remote work. The internet is lightning fast, they have enough outlets for everyone, and the Focus Cold Brew keeps me productive all day.",
        date: "2023-11-08",
        likes: 42,
        dislikes: 1
      },
      {
        id: 2,
        userId: 108,
        userName: "Rachel Kim",
        userAvatar: "https://randomuser.me/api/portraits/women/62.jpg",
        rating: 4,
        comment: "Great workspace environment. I love the phone booths for private calls. The only downside is it can get quite busy around midday and seating becomes limited.",
        date: "2023-10-15",
        likes: 29,
        dislikes: 3
      }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", alt: "Digital Nomad Coffee workspace" },
      { id: 2, url: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", alt: "Remote worker at Digital Nomad Coffee" },
      { id: 3, url: "https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", alt: "Power Espresso with latte art" }
    ],
    trending: true
  },
  {
    id: 5,
    name: "The Bookworm Café",
    description: "A quiet café-bookstore hybrid with an extensive book collection, cozy reading nooks, and literary-themed drinks.",
    mainImage: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2slMjBjYWZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    address: "222 Literary Lane",
    city: "Boston",
    zipCode: "02116",
    phone: "(617) 555-7890",
    email: "read@bookwormcafe.com",
    website: "www.bookwormcafe.com",
    rating: 4.9,
    reviewCount: 184,
    priceLevel: 2,
    openingHours: {
      "Monday": "8:00 AM - 9:00 PM",
      "Tuesday": "8:00 AM - 9:00 PM",
      "Wednesday": "8:00 AM - 9:00 PM",
      "Thursday": "8:00 AM - 9:00 PM",
      "Friday": "8:00 AM - 10:00 PM",
      "Saturday": "9:00 AM - 10:00 PM",
      "Sunday": "9:00 AM - 8:00 PM"
    },
    amenities: ["Book Browsing", "Reading Nooks", "Book Club Meetings", "Author Events", "Free Bookmarks"],
    tags: ["Quiet", "Literary", "Cozy", "Book Club", "Poetry Readings"],
    menu: {
      drinks: [
        { id: 1, name: "Sherlock's Earl Grey Latte", description: "Earl Grey tea latte with vanilla and lavender", price: 5.50, popular: true },
        { id: 2, name: "Gatsby Mint Mojito Cold Brew", description: "Cold brew with mint and lime", price: 5.95 },
        { id: 3, name: "Hemingway Americano", description: "Espresso diluted with hot water", price: 3.95 },
        { id: 4, name: "Jane Austen's London Fog", description: "Earl Grey tea with vanilla and steamed milk", price: 4.95 },
        { id: 5, name: "Poe's Raven Mocha", description: "Dark chocolate mocha with blackberry", price: 5.75, popular: true }
      ],
      food: [
        { id: 6, name: "Oliver Twist Grilled Cheese", description: "Three-cheese blend on artisan sourdough", price: 9.95 },
        { id: 7, name: "Little Women's Scones", description: "Freshly baked scones with clotted cream and jam", price: 5.95, popular: true },
        { id: 8, name: "Great Expectations Quiche", description: "Daily quiche served with mixed greens", price: 10.95 },
        { id: 9, name: "Walden Trail Mix Cookie", description: "Oatmeal cookie with nuts, seeds, and dried fruits", price: 3.95 }
      ]
    },
    reviews: [
      {
        id: 1,
        userId: 109,
        userName: "Jennifer Moore",
        userAvatar: "https://randomuser.me/api/portraits/women/82.jpg",
        rating: 5,
        comment: "Heaven for book lovers! I spent an entire rainy afternoon here with Poe's Raven Mocha and their amazing scones. The reading nooks are so comfortable, and I even discovered my new favorite novel.",
        date: "2023-11-10",
        likes: 35,
        dislikes: 0
      },
      {
        id: 2,
        userId: 110,
        userName: "Thomas Black",
        userAvatar: "https://randomuser.me/api/portraits/men/90.jpg",
        rating: 5,
        comment: "As a writer, this is my sanctuary. The staff respects quiet time, and they host amazing author events. Their literary-themed menu items are clever and delicious.",
        date: "2023-10-25",
        likes: 27,
        dislikes: 1
      }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2slMjBjYWZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", alt: "The Bookworm Café interior" },
      { id: 2, url: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tzaGVsZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", alt: "Book collection at The Bookworm Café" },
      { id: 3, url: "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZSUyMHJlYWRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", alt: "Cozy reading nook" }
    ]
  },
  {
    id: 6,
    name: "Artisan Bakery & Café",
    description: "A European-style bakery and café known for its artisanal bread, French pastries, and traditional espresso drinks.",
    mainImage: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3d4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJha2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    address: "333 Flour Avenue",
    city: "San Francisco",
    zipCode: "94110",
    phone: "(415) 555-2468",
    email: "bonjour@artisanbakery.com",
    website: "www.artisanbakery.com",
    rating: 4.7,
    reviewCount: 231,
    priceLevel: 2,
    openingHours: {
      "Monday": "7:00 AM - 5:00 PM",
      "Tuesday": "7:00 AM - 5:00 PM",
      "Wednesday": "7:00 AM - 5:00 PM",
      "Thursday": "7:00 AM - 5:00 PM",
      "Friday": "7:00 AM - 5:00 PM",
      "Saturday": "7:00 AM - 6:00 PM",
      "Sunday": "8:00 AM - 4:00 PM"
    },
    amenities: ["Fresh-Baked Bread", "Pastry Case", "Take-Home Loaves", "Coffee Beans for Sale", "French Press Table Service"],
    tags: ["European", "Bakery", "Artisanal", "Fresh Bread", "Pastries"],
    menu: {
      drinks: [
        { id: 1, name: "Classic Espresso", description: "Traditional espresso shot", price: 3.25 },
        { id: 2, name: "Café au Lait", description: "Equal parts coffee and steamed milk", price: 4.25 },
        { id: 3, name: "French Press", description: "Single-origin beans, serves two", price: 6.95, popular: true },
        { id: 4, name: "Café Mocha", description: "Espresso with dark chocolate and steamed milk", price: 5.25 },
        { id: 5, name: "Lavender Honey Latte", description: "Espresso with lavender-infused honey and milk", price: 5.75 }
      ],
      food: [
        { id: 6, name: "Croissant", description: "Traditional butter croissant", price: 3.95 },
        { id: 7, name: "Pain au Chocolat", description: "Chocolate-filled croissant", price: 4.50, popular: true },
        { id: 8, name: "Artisan Sourdough Loaf", description: "Naturally leavened sourdough bread", price: 8.95 },
        { id: 9, name: "Quiche Lorraine", description: "Classic quiche with bacon and Gruyère", price: 9.95 },
        { id: 10, name: "Seasonal Fruit Tart", description: "Buttery crust with vanilla pastry cream and fresh fruit", price: 6.95, popular: true }
      ]
    },
    reviews: [
      {
        id: 1,
        userId: 111,
        userName: "Sarah Mitchell",
        userAvatar: "https://randomuser.me/api/portraits/women/55.jpg",
        rating: 5,
        comment: "The most authentic French pastries in the city! Their croissants are perfectly flaky and buttery, and I love watching the bakers work their magic in the open kitchen.",
        date: "2023-11-02",
        likes: 39,
        dislikes: 0
      },
      {
        id: 2,
        userId: 112,
        userName: "Pierre Dubois",
        userAvatar: "https://randomuser.me/api/portraits/men/42.jpg",
        rating: 4,
        comment: "As a French expat, I appreciate their attention to traditional baking methods. The sourdough is excellent, though I wish they offered more variety of classic French breads.",
        date: "2023-10-18",
        likes: 24,
        dislikes: 2
      }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3d4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJha2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", alt: "Artisan Bakery & Café interior" },
      { id: 2, url: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFrZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", alt: "Fresh pastries display" },
      { id: 3, url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", alt: "Artisan bread loaves" }
    ]
  }
];
