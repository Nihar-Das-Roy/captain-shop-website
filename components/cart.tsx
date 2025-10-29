"use client"

import { useState } from "react"
import { X, Trash2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

interface CartProps {
  isOpen: boolean
  onClose: () => void
  cartCount: number
  setCartCount: (count: number) => void
}

export default function Cart({ isOpen, onClose, cartCount, setCartCount }: CartProps) {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "পণ্য ১",
      price: 1500,
      quantity: 1,
      image: "/diverse-products-still-life.png",
    },
  ])

  const handleRemoveItem = (id: number) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
    setCartCount(newItems.length)
  }

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(id)
    } else {
      setItems(items.map((item) => (item.id === id ? { ...item, quantity } : item)))
    }
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="flex-1 bg-black bg-opacity-50" onClick={onClose}></div>

      {/* Cart Panel */}
      <div className="w-full max-w-md bg-white shadow-2xl animate-slide-in-right overflow-y-auto flex flex-col">
        <div className="sticky top-0 bg-gradient-to-r from-[#001f3f] to-[#003d7a] text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">আপনার কার্ট</h2>
          <button onClick={onClose} className="p-1 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6">
            <p className="text-gray-500 text-center mb-4">আপনার কার্ট খালি</p>
            <Button onClick={onClose} className="bg-[#001f3f] hover:bg-[#003d7a] text-white">
              কেনাকাটা চালিয়ে যান
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 p-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg animate-fade-in-up">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-[#001f3f]">{item.name}</h3>
                    <p className="text-[#d4af37] font-bold">৳{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="ml-auto p-1 hover:bg-red-100 rounded"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="flex justify-between text-lg font-bold text-[#001f3f]">
                <span>মোট:</span>
                <span className="text-[#d4af37]">৳{total}</span>
              </div>
              <Link href="/checkout" onClick={onClose} className="block">
                <Button className="w-full bg-[#d4af37] hover:bg-[#e8c547] text-[#001f3f] font-bold">চেকআউট করুন</Button>
              </Link>
              <Button onClick={onClose} className="w-full bg-gray-200 hover:bg-gray-300 text-[#001f3f] font-bold">
                কেনাকাটা চালিয়ে যান
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
