import { useQuery } from '@tanstack/react-query'
import apiClient from '../api/apiClient'
import { Product } from '../types/Product'

// Get All Products
export const useGetProductsQuery = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: async () => (await apiClient.get<Product[]>(`products`)).data
  })

// Get Product Details
export const useGetProductDetailsBySlugQuery = (slug: string) =>
  useQuery({
    queryKey: ['products', slug],
    queryFn: async () => (await apiClient.get<Product>(`products/slug/${slug}`)).data
  })

// Get Categories
export const useGetCategoriesQuery = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: async () => (await apiClient.get<string[]>(`products/categories`)).data
  })

// Search Products
export const useSearchProductQuery = (query: {
  category: string
  order: string
  page: number
  price: string
  query: string
  rating: string
}) =>
  useQuery({
    queryKey: ['products-search', query],
    queryFn: async () =>
      (
        await apiClient.get<{
          products: Product[]
          page: number
          pages: number
          countProducts: number
        }>(
          `/products/search?page=${query.page}&query=${query.query}&category=${query.category}&price=${query.price}&rating=${query.rating}&order=${query.order}`
        )
      ).data
  })
