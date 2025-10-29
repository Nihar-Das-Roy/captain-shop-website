"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import ProductModal from "@/components/product-modal"

interface Subcategory {
  id: number
  name: string
  description: string
  image: string
}

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
}

export default function Category() {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [visibleProducts, setVisibleProducts] = useState<number[]>([])

  const subcategories: Subcategory[] = [
    { id: 1, name: "মাছ ও সামুদ্রিক পণ্য", description: "তাজা মাছ এবং সামুদ্রিক খাবার", image: "/diverse-products-still-life.png" },
    { id: 2, name: "শুঁটকি মাছ", description: "উচ্চমানের শুঁটকি মাছ", image: "/diverse-products-still-life.png" },
    { id: 3, name: "চিংড়ি ও কাঁকড়া", description: "তাজা চিংড়ি এবং কাঁকড়া", image: "/diverse-products-still-life.png" },
    { id: 4, name: "নোনা পণ্য", description: "ঐতিহ্যবাহী নোনা খাবার", image: "/diverse-products-still-life.png" },
    { id: 5, name: "মশলা ও মসলা", description: "বিভিন্ন ধরনের মশলা", image: "/diverse-products-still-life.png" },
    { id: 6, name: "তেল ও ঘি", description: "খাঁটি তেল এবং ঘি", image: "/diverse-products-still-life.png" },
    { id: 7, name: "চাল ও শস্য", description: "বিভিন্ন ধরনের চাল", image: "/diverse-products-still-life.png" },
    { id: 8, name: "ডাল ও বীজ", description: "পুষ্টিকর ডাল এবং বীজ", image: "/diverse-products-still-life.png" },
    { id: 9, name: "মিষ্টি ও খাবার", description: "ঐতিহ্যবাহী মিষ্টি এবং খাবার", image: "/diverse-products-still-life.png" },
    { id: 10, name: "পানীয় ও রস", description: "প্রাকৃতিক পানীয় এবং রস", image: "/diverse-products-still-life.png" },
    { id: 11, name: "সবজি ও ফল", description: "তাজা সবজি এবং ফল", image: "/diverse-products-still-life.png" },
    { id: 12, name: "দুগ্ধজাত পণ্য", description: "দই, পনির এবং অন্যান্য দুগ্ধজাত", image: "/diverse-products-still-life.png" },
    { id: 13, name: "মাংস ও পোল্ট্রি", description: "তাজা মাংস এবং পোল্ট্রি", image: "/diverse-products-still-life.png" },
    { id: 14, name: "বিশেষ অফার", description: "সীমিত সময়ের বিশেষ অফার", image: "/diverse-products-still-life.png" },
  ]

  // Generate products based on selected subcategory
  const generateProducts = (): Product[] => {
    if (!selectedSubcategory) return []

    const products: Product[] = []
    const subcategory = subcategories.find((s) => s.name === selectedSubcategory)

    for (let i = 1; i <= 8; i++) {
      products.push({
        id: i,
        name: `${subcategory?.name} - পণ্য ${i}`,
        price: 1500 + i * 100,
        image: "/diverse-products-still-life.png",
        category: "JHALOKATHI",
        description: `এটি একটি উচ্চমানের পণ্য যা আপনার প্রয়োজন পূরণ করবে। ${subcategory?.name} থেকে পণ্য নম্বর ${i}।`,
      })
    }
    return products
  }

  const allProducts = generateProducts()
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts)

  useEffect(() => {
    let filtered = allProducts

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    setFilteredProducts(filtered)

    // Trigger animations
    const timer = setTimeout(() => {
      setVisibleProducts(filtered.map((_, i) => i))
    }, 100)
    return () => clearTimeout(timer)
  }, [selectedSubcategory, searchTerm])

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001f3f] to-[#003d7a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">JHALOKATHI</h1>
          <p className="text-xl text-gray-200">আমাদের সম্পূর্ণ পণ্য সংগ্রহ অন্বেষণ করুন</p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="পণ্য খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>

            {/* Subcategory Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSubcategory(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  selectedSubcategory === null
                    ? "bg-[#001f3f] text-white"
                    : "bg-white text-[#001f3f] border border-gray-300 hover:bg-gray-50"
                }`}
              >
                সব সাবক্যাটাগরি
              </button>
              {subcategories.map((subcat) => (
                <button
                  key={subcat.id}
                  onClick={() => setSelectedSubcategory(subcat.name)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                    selectedSubcategory === subcat.name
                      ? "bg-[#001f3f] text-white"
                      : "bg-white text-[#001f3f] border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {subcat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories Grid (when no subcategory selected) */}
      {selectedSubcategory === null && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#001f3f] mb-12 text-center">সাবক্যাটাগরি নির্বাচন করুন</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {subcategories.map((subcat) => (
                <button
                  key={subcat.id}
                  onClick={() => setSelectedSubcategory(subcat.name)}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-left group"
                >
                  <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={subcat.image || "/placeholder.svg"}
                      alt={subcat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#001f3f] mb-2">{subcat.name}</h3>
                  <p className="text-gray-600 text-sm">{subcat.description}</p>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      {selectedSubcategory && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-2xl text-gray-600 mb-4">কোনো পণ্য পাওয়া যায়নি</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedSubcategory(null)
                  }}
                  className="bg-[#001f3f] hover:bg-[#003d7a] text-white"
                >
                  সব সাবক্যাটাগরি দেখুন
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-6 text-gray-600">
                  <p>
                    মোট <span className="font-bold text-[#001f3f]">{filteredProducts.length}</span> টি পণ্য পাওয়া গেছে
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className={`transition-all duration-500 ${
                        visibleProducts.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                    >
                      <ProductCard product={product} onProductClick={handleProductClick} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedProduct(null)
          }}
        />
      )}
    </>
  )
}
