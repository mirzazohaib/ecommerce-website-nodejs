import bcrypt from 'bcryptjs'
import { Product } from './models/productModel'
import { User } from './models/userModel'

export const sampleProducts: Product[] = [
  {
    name: 'Nike Shirt',
    slug: 'nike-shirt',
    image: '../images/nike-shirt.jpg',
    category: 'Shirts',
    brand: 'Nike',
    price: 100,
    countInStock: 0,
    description: 'high quality shirt',
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: 'Zara Shirt',
    slug: 'zara-shirt',
    image: '../images/zara-shirt.jpg',
    category: 'Shirts',
    brand: 'Zara',
    price: 150,
    countInStock: 23,
    description: 'high quality shirt',
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Mango Shirt',
    slug: 'mango-shirt',
    image: '../images/mango-shirt.jpg',
    category: 'Shirts',
    brand: 'Zara',
    price: 170,
    countInStock: 23,
    description: 'high quality shirt',
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Zara Pants',
    slug: 'zara-pants',
    image: '../images/zara-pants.jpg',
    category: 'Pants',
    brand: 'Zara',
    price: 220,
    countInStock: 13,
    description: 'high quality pants',
    rating: 4.0,
    numReviews: 10,
  },
  {
    name: 'Diesel Jeans',
    slug: 'diesel-jeans',
    image: '../images/diesel-jeans.jpg',
    category: 'Jeans',
    brand: 'Diesel',
    price: 270,
    countInStock: 50,
    description: 'Slim-fitting style',
    rating: 4.9,
    numReviews: 45,
  },
]

export const sampleUsers: User[] = [
  {
    name: 'Joe',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'user@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
]
