"use client"

import { X, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
}

interface ProductModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in-up p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-[#001f3f] to-[#003d7a] text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <button onClick={onClose} className="p-1 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">ক্যাটাগরি: {product.category}</p>
              <p className="text-gray-700 mb-4">{product.description}</p>
            </div>

            {/* Price */}
            <div className="border-t border-b border-gray-200 py-4">
              <p className="text-4xl font-bold text-[#d4af37]">৳{product.price}</p>
              <p className="text-sm text-gray-600 mt-2">সীমিত স্টক উপলব্ধ</p>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-bold text-[#001f3f] mb-2">পরিমাণ</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  −
                </button>
                <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-[#d4af37] hover:bg-[#e8c547] text-[#001f3f] font-bold py-3 gap-2">
                <ShoppingCart className="w-5 h-5" />
                কার্টে যোগ করুন
              </Button>
              <Button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`w-full font-bold py-3 gap-2 ${
                  isFavorite
                    ? "bg-red-100 hover:bg-red-200 text-red-600"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                {isFavorite ? "পছন্দ থেকে সরান" : "পছন্দে যোগ করুন"}
              </Button>
            </div>

            {/* Features */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <p className="font-bold text-[#001f3f]">বৈশিষ্ট্য:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ সম্পূর্ণ মানের নিশ্চয়তা</li>
                <li>✓ সহজ রিটার্ন নীতি</li>
                <li>✓ দ্রুত ডেলিভারি</li>
                <li>✓ নিরাপদ পেমেন্ট</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
