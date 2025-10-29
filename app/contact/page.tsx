"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("https://formspree.io/f/movpwjrn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("✅ আপনার বার্তা পাঠানো হয়েছে। ধন্যবাদ!")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        alert("❌ বার্তা পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("⚠️ সার্ভারে সমস্যা হয়েছে। পরে চেষ্টা করুন।")
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001f3f] to-[#003d7a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">যোগাযোগ করুন</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            আমাদের সাথে যোগাযোগ করুন এবং আপনার প্রশ্নের উত্তর পান।
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Phone, title: "ফোন", content: "01334762288", subtext: "আমাদের অফিস নাম্বার" },
              { icon: Mail, title: "ইমেইল", content: "masbsl.com@gmail.com", subtext: "আমরা ২৪ ঘন্টার মধ্যে উত্তর দেব" },
              { icon: MapPin, title: "ঠিকানা", content: "বাগেরহাট, খুলনা", subtext: "আমাদের অফিস পরিদর্শন করুন" },
            ].map((info, index) => {
              const Icon = info.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <Icon className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#001f3f] mb-2">{info.title}</h3>
                  <p className="text-gray-700 font-semibold mb-1">{info.content}</p>
                  <p className="text-sm text-gray-600">{info.subtext}</p>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#001f3f] mb-6">আমাদের কাছে বার্তা পাঠান</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[#001f3f] mb-2">নাম</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="আপনার নাম"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#001f3f] mb-2">ইমেইল</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="আপনার ইমেইল"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#001f3f] mb-2">বিষয়</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="বিষয়"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#001f3f] mb-2">বার্তা</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="আপনার বার্তা লিখুন"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37]"
                    required
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-[#d4af37] hover:bg-[#e8c547] text-[#001f3f] font-bold gap-2">
                  <Send className="w-4 h-4" />
                  বার্তা পাঠান
                </Button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#001f3f] mx-auto mb-4" />
                <p className="text-gray-600 font-semibold">Google Map এখানে প্রদর্শিত হবে</p>
                <p className="text-sm text-gray-500 mt-2">বাগেরহাট, খুলনা</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
