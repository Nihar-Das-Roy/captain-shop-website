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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("আপনার বার্তা পাঠানো হয়েছে। ধন্যবাদ!")
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001f3f] to-[#003d7a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">যোগাযোগ করুন</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">আমাদের সাথে যোগাযোগ করুন এবং আপনার প্রশ্নের উত্তর পান।</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            {[
              {
                icon: Phone,
                title: "ফোন",
                content: "01334762288",
                subtext: "আমাদের অফিস নাম্বার",
              },
              {
                icon: Mail,
                title: "ইমেইল",
                content: "masbsl.com@gmail.com",
                subtext: "আমরা ২৪ ঘন্টার মধ্যে উত্তর দেব",
              },
              {
                icon: MapPin,
                title: "ঠিকানা",
                content: "বাগেরহাট, খুলনা",
                subtext: "আমাদের অফিস পরিদর্শন করুন",
              },
            ].map((info, index) => {
              const Icon = info.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#001f3f] mb-2">{info.title}</h3>
                  <p className="text-gray-700 font-semibold mb-1">{info.content}</p>
                  <p className="text-sm text-gray-600">{info.subtext}</p>
                </div>
              )
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 animate-slide-in-left">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#001f3f] mb-2">বার্তা</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="আপনার বার্তা"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
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
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden animate-slide-in-right">
              <div className="w-full h-full min-h-96 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#001f3f] mx-auto mb-4" />
                  <p className="text-gray-600 font-semibold">Google Map এখানে প্রদর্শিত হবে</p>
                  <p className="text-sm text-gray-500 mt-2">বাগেরহাট, খুলনা</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#001f3f] mb-12 text-center">সাধারণ প্রশ্ন</h2>
          <div className="space-y-4">
            {[
              {
                q: "ডেলিভারি কত সময় লাগে?",
                a: "ঢাকায় ২৪-৪৮ ঘন্টা এবং সারা দেশে ৩-৫ দিন লাগে।",
              },
              {
                q: "রিটার্ন নীতি কী?",
                a: "আপনি ৩০ দিনের মধ্যে যেকোনো পণ্য ফেরত দিতে পারেন এবং সম্পূর্ণ অর্থ ফেরত পাবেন।",
              },
              {
                q: "পেমেন্ট পদ্ধতি কী?",
                a: "আমরা ক্রেডিট কার্ড, ডেবিট কার্ড, মোবাইল ব্যাংকিং এবং ক্যাশ অন ডেলিভারি গ্রহণ করি।",
              },
              {
                q: "আমি কীভাবে আমার অর্ডার ট্র্যাক করতে পারি?",
                a: "আপনি আপনার অ্যাকাউন্টে লগইন করে অর্ডার স্ট্যাটাস দেখতে পারেন।",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-[#001f3f] mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
