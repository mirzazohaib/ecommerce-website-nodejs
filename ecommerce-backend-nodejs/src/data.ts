import bcrypt from "bcryptjs";
import { Product } from "./models/productModel";
import { User } from "./models/userModel";

export const sampleProducts: Product[] = [
  // --- Shirts ---
  {
    name: "Nike Slim Shirt",
    slug: "nike-slim-shirt",
    image: "../images/nike-shirt.jpg",
    category: "Shirts",
    brand: "Nike",
    price: 120,
    countInStock: 10,
    description: "High quality slim shirt",
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: "Adidas Fit Shirt",
    slug: "adidas-fit-shirt",
    image: "../images/nike-shirt.jpg", // Using placeholder if image missing
    category: "Shirts",
    brand: "Adidas",
    price: 100,
    countInStock: 20,
    description: "Adidas fit shirt for sports",
    rating: 4.0,
    numReviews: 10,
  },
  {
    name: "Lacoste Free Shirt",
    slug: "lacoste-free-shirt",
    image: "../images/nike-shirt.jpg",
    category: "Shirts",
    brand: "Lacoste",
    price: 220,
    countInStock: 0,
    description: "Lacoste free shirt",
    rating: 4.8,
    numReviews: 17,
  },
  // --- Pants ---
  {
    name: "Nike Slim Pant",
    slug: "nike-slim-pant",
    image: "../images/zara-pants.jpg",
    category: "Pants",
    brand: "Nike",
    price: 78,
    countInStock: 15,
    description: "High quality slim pant",
    rating: 4.5,
    numReviews: 14,
  },
  {
    name: "Puma Fit Pant",
    slug: "puma-fit-pant",
    image: "../images/zara-pants.jpg",
    category: "Pants",
    brand: "Puma",
    price: 65,
    countInStock: 5,
    description: "Puma fit pant for running",
    rating: 4.5,
    numReviews: 10,
  },
  // --- Accessories (For "Gifts" link) ---
  {
    name: "Classic Leather Watch",
    slug: "classic-leather-watch",
    image: "../images/john-hardy-chain-racelet.jpg", // Placeholder
    category: "Accessories",
    brand: "Fossil",
    price: 150,
    countInStock: 30,
    description: "Elegant leather watch for all occasions",
    rating: 4.6,
    numReviews: 25,
  },
  {
    name: "Travel Backpack",
    slug: "travel-backpack",
    image: "../images/fjallravenfoldsack-backpack.jpg",
    category: "Accessories",
    brand: "Fjallraven",
    price: 85,
    countInStock: 12,
    description: "Durable backpack for hiking and travel",
    rating: 4.7,
    numReviews: 40,
  },
  // --- Shoes (For "Deals" link) ---
  {
    name: "Running Sneakers",
    slug: "running-sneakers",
    image: "../images/diesel-jeans.jpg", // Placeholder
    category: "Shoes",
    brand: "Nike",
    price: 55, // Lower price for "Deals"
    countInStock: 50,
    description: "Lightweight running shoes",
    rating: 4.2,
    numReviews: 18,
  },
];

export const sampleUsers: User[] = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "user@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
];
