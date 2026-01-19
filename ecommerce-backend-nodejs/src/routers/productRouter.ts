import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { ProductModel } from "../models/productModel";

export const productRouter = express.Router();

// GET /api/products
productRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find();
    res.json(products);
  })
);

// GET /api/products/categories
productRouter.get(
  "/categories",
  asyncHandler(async (req, res) => {
    const categories = await ProductModel.find().distinct("category");
    res.json(categories);
  })
);

// GET /api/products/search
productRouter.get(
  "/search",
  asyncHandler(async (req: Request, res: Response) => {
    const category = (req.query.category || "") as string;
    const query = (req.query.query || "") as string;
    const price = (req.query.price || "") as string;
    const rating = (req.query.rating || "") as string;
    const order = (req.query.order || "") as string;

    const queryFilter =
      query && query !== "all"
        ? {
            name: {
              $regex: query,
              $options: "i",
            },
          }
        : {};

    const categoryFilter = category && category !== "all" ? { category } : {};

    // Parse price filter (e.g., "50-100")
    const priceFilter =
      price && price !== "all"
        ? {
            price: {
              $gte: Number(price.split("-")[0]),
              $lte: Number(price.split("-")[1]),
            },
          }
        : {};

    const ratingFilter =
      rating && rating !== "all"
        ? {
            rating: {
              $gte: Number(rating),
            },
          }
        : {};

    // FIXED: Typed strictly as a Record of string keys to 1 or -1
    const sortOrder: { [key: string]: 1 | -1 } =
      order === "featured"
        ? { featured: -1 }
        : order === "lowest"
        ? { price: 1 }
        : order === "highest"
        ? { price: -1 }
        : order === "toprated"
        ? { rating: -1 }
        : order === "newest"
        ? { createdAt: -1 }
        : { _id: -1 };

    const products = await ProductModel.find({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
    }).sort(sortOrder); // No longer needs 'as any'

    res.json({ products });
  })
);

// GET /api/products/slug/:slug
productRouter.get(
  "/slug/:slug",
  asyncHandler(async (req, res) => {
    const product = await ProductModel.findOne({ slug: req.params.slug });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  })
);
