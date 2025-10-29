"use client"

import { useState } from "react"
import { X, Plus, Edit2, Trash2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SellerPanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function SellerPanel({ isOpen, onClose }: SellerPanelProps) {
  const [shopName, setShopName] = useState("আমার দোকান")
  const [showOnFront, setShowOnFront] = useState(false)
  const [categories, setCategories] = useState(["JHALOKATHI"])
  const [newCategory, setNewCategory] = useState("")

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory])
      setNewCategory("")
    }
  }

  const handleRemoveCategory = (index: number) => {
    setCategories(categories.filter((_, i) => i !== index))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="flex-1 bg-black bg-opacity-50" onClick={onClose}></div>

      {/* Panel */}
      <div className="w-full max-w-md bg-white shadow-2xl animate-slide-in-right overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-[#001f3f] to-[#003d7a] text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">বিক্রেতা প্যানেল</h2>
          <button onClick={onClose} className="p-1 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Shop Name */}
          <div>
            <label className="block text-sm font-bold text-[#001f3f] mb-2">দোকানের নাম</label>
            <input
              type="text"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            />
          </div>

          {/* Show on Front Toggle */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-bold text-[#001f3f]">সামনে দেখান</p>
              <p className="text-sm text-gray-600">হোম পেজে আপনার দোকান প্রদর্শন করুন</p>
            </div>
            <button
              onClick={() => setShowOnFront(!showOnFront)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                showOnFront ? "bg-[#d4af37]" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  showOnFront ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <h3 className="font-bold text-[#001f3f] mb-3">দ্রুত কাজ</h3>
            <Button className="w-full bg-[#001f3f] hover:bg-[#003d7a] text-white justify-start gap-2">
              <Plus className="w-4 h-4" />
              পণ্য যোগ করুন
            </Button>
            <Button className="w-full bg-[#001f3f] hover:bg-[#003d7a] text-white justify-start gap-2">
              <Edit2 className="w-4 h-4" />
              ক্যাটাগরি সম্পাদনা করুন
            </Button>
            <Button className="w-full bg-[#001f3f] hover:bg-[#003d7a] text-white justify-start gap-2">
              <Eye className="w-4 h-4" />
              অর্ডার দেখুন
            </Button>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-[#001f3f] mb-3">ক্যাটাগরি</h3>
            <div className="space-y-2 mb-3">
              {categories.map((cat, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-[#001f3f]">{cat}</span>
                  <button
                    onClick={() => handleRemoveCategory(index)}
                    className="p-1 hover:bg-red-100 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add Category */}
            <div className="flex gap-2">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="নতুন ক্যাটাগরি"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-sm"
              />
              <Button onClick={handleAddCategory} className="bg-[#d4af37] hover:bg-[#e8c547] text-[#001f3f] font-bold">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Logout */}
          <Button onClick={onClose} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
            লগআউট
          </Button>
        </div>
      </div>
    </div>
  )
}
