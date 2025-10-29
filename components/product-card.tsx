"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import HoverCard from "./hover-card"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
}

interface ProductCardProps {
  product: Product
  onProductClick: (product: Product) => void
}

export default function ProductCard({ product, onProductClick }: ProductCardProps) {
  return (
    <HoverCard>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer">
        <div className="relative overflow-hidden h-48 bg-gray-100">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <Button
              onClick={() => onProductClick(product)}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#d4af37] hover:bg-[#e8c547] text-[#001f3f] font-bold gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              বিস্তারিত দেখুন
            </Button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-[#001f3f] mb-2 line-clamp-2">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-[#d4af37] font-bold text-lg">৳{product.price}</span>
            <span className="text-xs bg-[#001f3f] text-white px-2 py-1 rounded">{product.category}</span>
          </div>
        </div>
      </div>
    </HoverCard>
  )
}
