"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Search } from "lucide-react"

interface District {
  id: number
  name: string
  subcategories: { id: number; name: string }[]
}

export default function Category() {
  const [openDistrict, setOpenDistrict] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  // 🏙️ All Districts and Their Subcategories
  const districts: District[] = [
    {
      id: 1,
      name: "JHALOKATHI",
      subcategories: [
        { id: 1, name: "দোকান অর্ডার" },
        { id: 2, name: "প্রোডাক্ট সার্ভিস" },
        { id: 3, name: "Health Service" },
        { id: 4, name: "পরিবহন সার্ভিস" },
        { id: 5, name: "সুপারশপ" },
        { id: 6, name: "ফার্মেসী সার্ভিস" },
        { id: 7, name: "হোটেল এন্ড রেস্টুরেন্ট" },
        { id: 8, name: "বিউটি পার্লার এন্ড হেয়ার স্টাইল সেলুন" },
         { id: 9, name: "থানার নাম ও মোবাইল" },
        { id: 10, name: "লঞ্চ সার্ভিস" },
        { id: 11, name: "এম্বুলেন্স" },
        { id: 12, name: "পুলিশ সুপার" },
        { id: 13, name: "সিভিল সার্জন" },
        { id: 14, name: "ফার্মেসী সার্ভিস" },
        { id: 15, name: "ফায়ার সার্ভিস" },
        { id: 16, name: "ব্যাংক" },
        { id: 13, name: "ডিসকাউন্ট কার্ড" },
        { id: 14, name: "উপজেলা নির্বাহী অফিসার" },
        { id: 15, name: "জেলা প্রশাসক" },
      ],
    },
    // 👉 Future example: You can copy-paste this block and change name + subcategories
    
  ]

  // 🧠 Toggle function
  const toggleDistrict = (districtName: string) => {
    setOpenDistrict(openDistrict === districtName ? null : districtName)
  }

  // 🔍 Search filter
  const filteredDistricts = districts.map((district) => ({
    ...district,
    subcategories: district.subcategories.filter((sub) =>
      sub.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }))

  return (
    <>
      {/* 🌆 Hero Section */}
      <section className="bg-gradient-to-br from-[#001f3f] to-[#003d7a] text-white py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">বাংলাদেশ জেলার তালিকা</h1>
        <p className="text-xl text-gray-200">প্রতিটি জেলার সাবক্যাটাগরি দেখুন</p>
      </section>

      {/* 🔍 Search Section */}
      <section className="py-8 bg-gray-50 sticky top-16 z-30 shadow-sm">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative">
            <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="জেলার নাম বা সাবক্যাটাগরি খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            />
          </div>
        </div>
      </section>

      {/* 🧱 District List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          {filteredDistricts.map((district) => (
            <div
              key={district.id}
              className="mb-4 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
            >
              {/* Main Button */}
              <button
                onClick={() => toggleDistrict(district.name)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-xl font-bold text-[#001f3f] hover:bg-gray-100 transition-all"
              >
                {district.name}
                {openDistrict === district.name ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              {/* Subcategory Box Grid */}
              {openDistrict === district.name && (
                <div className="px-6 pb-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-fade-in">
                  {district.subcategories.length > 0 ? (
                    district.subcategories.map((sub) => (
                      <div
                        key={sub.id}
                        className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md hover:bg-white transition-all cursor-pointer"
                      >
                        <p className="text-gray-800 font-medium">{sub.name}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm col-span-full text-center py-4">
                      কোনো সাবক্যাটাগরি পাওয়া যায়নি
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
