export interface Template {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  featured: boolean;
  tags: string[];
  category: string;
  details: {
    technologies: string[];
    pages: number;
    responsive: boolean;
    supportedBrowsers: string[];
    features: string[];
  };
}

export const templates: Template[] = [
  {
    id: 1,
    name: "Modern E-commerce",
    description: "A fully responsive e-commerce template with product listings, cart functionality, and checkout process.",
    price: 79,
    image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
    tags: ["E-commerce", "React", "Tailwind CSS"],
    category: "Business",
    details: {
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      pages: 12,
      responsive: true,
      supportedBrowsers: ["Chrome", "Firefox", "Safari", "Edge"],
      features: ["Product catalog", "Shopping cart", "User authentication", "Order tracking", "Admin dashboard"]
    }
  },
  {
    id: 2,
    name: "Portfolio Pro",
    description: "Showcase your work with this elegant portfolio template designed for creative professionals.",
    price: 49,
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
    tags: ["Portfolio", "Creative", "Minimalist"],
    category: "Personal",
    details: {
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      pages: 5,
      responsive: true,
      supportedBrowsers: ["Chrome", "Firefox", "Safari", "Edge"],
      features: ["Project showcase", "Contact form", "Testimonials section", "Blog integration", "Social media links"]
    }
  },
  {
    id: 3,
    name: "Corporate Dashboard",
    description: "Comprehensive admin dashboard template with data visualization, user management, and reporting features.",
    price: 129,
    image: "https://images.pexels.com/photos/7172886/pexels-photo-7172886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
    tags: ["Admin", "Dashboard", "Analytics"],
    category: "Business",
    details: {
      technologies: ["React", "Material UI", "Node.js", "Express", "MongoDB"],
      pages: 20,
      responsive: true,
      supportedBrowsers: ["Chrome", "Firefox", "Safari", "Edge"],
      features: ["Data visualization", "User management", "Reports", "Task management", "Real-time notifications"]
    }
  },
  {
    id: 4,
    name: "Restaurant Website",
    description: "Elegant template for restaurants with menu display, reservation system, and location information.",
    price: 69,
    image: "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
    tags: ["Restaurant", "Food", "Reservation"],
    category: "Food & Dining",
    details: {
      technologies: ["React", "Tailwind CSS", "Node.js", "Express"],
      pages: 8,
      responsive: true,
      supportedBrowsers: ["Chrome", "Firefox", "Safari", "Edge"],
      features: ["Menu showcase", "Online reservations", "Image gallery", "Chef profiles", "Contact information"]
    }
  },
  {
    id: 5,
    name: "Real Estate Listing",
    description: "Comprehensive real estate template with property listings, search functionality, and agent profiles.",
    price: 89,
    image: "https://images.pexels.com/photos/7578986/pexels-photo-7578986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
    tags: ["Real Estate", "Property", "Listings"],
    category: "Business",
    details: {
      technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API"],
      pages: 15,
      responsive: true,
      supportedBrowsers: ["Chrome", "Firefox", "Safari", "Edge"],
      features: ["Property listings", "Advanced search", "Agent profiles", "Mortgage calculator", "Map integration"]
    }
  },
  {
    id: 6,
    name: "Fitness Tracker",
    description: "Web application template for fitness tracking with workout plans, progress monitoring, and nutrition logging.",
    price: 99,
    image: "https://images.pexels.com/photos/6473359/pexels-photo-6473359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
    tags: ["Fitness", "Health", "Tracking"],
    category: "Health & Wellness",
    details: {
      technologies: ["React", "Chart.js", "Node.js", "Express", "MongoDB"],
      pages: 10,
      responsive: true,
      supportedBrowsers: ["Chrome", "Firefox", "Safari", "Edge"],
      features: ["Workout tracking", "Nutrition logger", "Progress charts", "Goal setting", "Community features"]
    }
  },
  {
    id: 7,
    name: "Educational Platform",
    description: "E-learning template with course listings, student dashboard, and instructor management features.",
    price: 119,
    image: "https://images.pexels.com/photos/5989934/pexels-photo-5989934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
    tags: ["Education", "E-learning", "Courses"],
    category: "Education",
    details: {
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Socket.io"],
      pages: 18,
      responsive: true,
      supportedBrowsers: ["Chrome", "Firefox", "Safari", "Edge"],
      features: ["Course catalog", "Student dashboard", "Instructor portal", "Video lessons", "Assignment submission"]
    }
  },
  {
    id: 8,
    name: "Travel Blog",
    description: "Beautiful blog template for travel enthusiasts with photo galleries, interactive maps, and social sharing.",
    price: 59,
    image: "https://images.pexels.com/photos/6382633/pexels-photo-6382633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
    tags: ["Blog", "Travel", "Photography"],
    category: "Blog",
    details: {
      technologies: ["WordPress", "Custom Theme", "PHP", "MySQL"],
      pages: 7,
      responsive: true,
      supportedBrowsers: ["Chrome", "Firefox", "Safari", "Edge"],
      features: ["Blog posts", "Photo galleries", "Comments", "Social sharing", "Newsletter subscription"]
    }
  }
];