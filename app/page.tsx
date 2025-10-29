"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import ProductModal from "@/components/product-modal"
import ScrollAnimation from "@/components/scroll-animation"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "প্রিমিয়াম পণ্য ১",
    price: 2500,
    image: "/diverse-products-still-life.png",
    category: "JHALOKATHI",
    description: "উচ্চমানের পণ্য যা আপনার প্রত্যাশা অতিক্রম করবে।",
  },
  {
    id: 2,
    name: "প্রিমিয়াম পণ্য ২",
    price: 3000,
    image: "/diverse-products-still-life.png",
    category: "JHALOKATHI",
    description: "বিশেষভাবে নির্বাচিত এবং পরীক্ষিত পণ্য।",
  },
  {
    id: 3,
    name: "প্রিমিয়াম পণ্য ৩",
    price: 2800,
    image: "/diverse-products-still-life.png",
    category: "JHALOKATHI",
    description: "আপনার পরিবারের জন্য নিখুঁত পছন্দ।",
  },
  {
    id: 4,
    name: "প্রিমিয়াম পণ্য ৪",
    price: 3200,
    image: "/diverse-products-still-life.png",
    category: "JHALOKATHI",
    description: "সীমিত সংস্করণ এবং একচেটিয়া ডিজাইন।",
  },
]

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [visibleProducts, setVisibleProducts] = useState<number[]>([])

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setVisibleProducts(featuredProducts.map((_, i) => i))
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % featuredProducts.length)
  }

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length)
  }

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#001f3f] to-[#003d7a] text-white overflow-hidden">
        {/* Wave Animation Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <defs>
              <pattern id="wave" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <path
                  d="M0,60 Q30,30 60,60 T120,60"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  className="animate-wave"
                />
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#wave)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Captain Shop</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-balance">আপনার বিশ্বস্ত অনলাইন শপিং গন্তব্য</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#d4af37] hover:bg-[#e8c547] text-[#001f3f] font-bold text-lg px-8 py-6">
                এখনই কেনাকাটা করুন
              </Button>
              <Button className="bg-white hover:bg-gray-100 text-[#001f3f] font-bold text-lg px-8 py-6">আরও জানুন</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-12 text-center">বৈশিষ্ট্যযুক্ত পণ্য</h2>

          {/* Carousel */}
          <div className="relative mb-8">
            <div className="overflow-hidden rounded-lg">
              <div className="relative h-96 bg-gray-100 flex items-center justify-center">
                <img
                  src={featuredProducts[carouselIndex].image || "/placeholder.svg"}
                  alt={featuredProducts[carouselIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{featuredProducts[carouselIndex].name}</h3>
                  <p className="text-[#d4af37] text-2xl font-bold">৳{featuredProducts[carouselIndex].price}</p>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#001f3f] hover:bg-[#003d7a] text-white p-3 rounded-full transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#001f3f] hover:bg-[#003d7a] text-white p-3 rounded-full transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCarouselIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === carouselIndex ? "bg-[#d4af37]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ScrollAnimation key={product.id} delay={index * 50}>
                <ProductCard product={product} onProductClick={handleProductClick} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-[#001f3f] to-[#003d7a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">কেন আমাদের বেছে নিন?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "দ্রুত ডেলিভারি", description: "সারা দেশে দ্রুত এবং নিরাপদ ডেলিভারি সেবা" },
              { title: "সেরা মূল্য", description: "প্রতিযোগিতামূলক মূল্যে সর্বোচ্চ মানের পণ্য" },
              { title: "গ্রাহক সেবা", description: "২৪/৭ গ্রাহক সহায়তা এবং সহজ রিটার্ন নীতি" },
            ].map((feature, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#d4af37] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-[#001f3f] mb-4">নিউজলেটার সাবস্ক্রাইব করুন</h2>
            <p className="text-gray-600 mb-8">সর্বশেষ অফার এবং আপডেট পান সরাসরি আপনার ইনবক্সে</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="আপনার ইমেইল"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
              <button className="bg-[#d4af37] hover:bg-[#e8c547] text-[#001f3f] font-bold px-8 py-3 rounded-lg transition-colors">
                সাবস্ক্রাইব
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

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
