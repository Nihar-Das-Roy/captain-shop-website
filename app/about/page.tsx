"use client"

import { useState, useEffect } from "react"
import { Award, Users, Zap } from "lucide-react"

export default function About() {
  const [visibleSections, setVisibleSections] = useState<number[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSections([0, 1, 2, 3])
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const timeline = [
    { year: "২০২০", title: "প্রতিষ্ঠা", description: "Captain Shop এর যাত্রা শুরু হয়েছিল একটি ছোট স্বপ্ন থেকে" },
    { year: "২০২১", title: "সম্প্রসারণ", description: "আমরা আমাদের পণ্য পরিসীমা এবং গ্রাহক বেস দ্বিগুণ করেছি" },
    { year: "২০২২", title: "স্বীকৃতি", description: "সেরা অনলাইন শপিং প্ল্যাটফর্মের জন্য পুরস্কার জিতেছি" },
    { year: "২০২৩", title: "উদ্ভাবন", description: "নতুন প্রযুক্তি এবং সেবা চালু করেছি" },
  ]

  const team = [
    { name: "রহিম আহমেদ", role: "প্রতিষ্ঠাতা ও সিইও", image: "👨‍💼" },
    { name: "ফাতিমা খান", role: "পণ্য পরিচালক", image: "👩‍💼" },
    { name: "করিম হোসেন", role: "প্রযুক্তি প্রধান", image: "👨‍💻" },
    { name: "সালমা বেগম", role: "গ্রাহক সেবা প্রধান", image: "👩‍💼" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001f3f] to-[#003d7a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">আমাদের সম্পর্কে</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Captain Shop হল বাংলাদেশের শীর্ষস্থানীয় অনলাইন শপিং প্ল্যাটফর্ম যা গুণমান এবং সেবায় বিশ্বাস করে।
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div
              className={`transition-all duration-500 ${
                visibleSections.includes(0) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="bg-gradient-to-br from-[#001f3f] to-[#003d7a] text-white p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">আমাদের মিশন</h2>
                <p className="text-gray-200 leading-relaxed">
                  প্রতিটি গ্রাহকের জন্য সর্বোচ্চ মানের পণ্য এবং সেবা প্রদান করা। আমরা বিশ্বাস করি যে অনলাইন শপিং সহজ, নিরাপদ এবং আনন্দদায়ক
                  হওয়া উচিত।
                </p>
              </div>
            </div>

            {/* Vision */}
            <div
              className={`transition-all duration-500 ${
                visibleSections.includes(1) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="bg-gradient-to-br from-[#d4af37] to-[#e8c547] text-[#001f3f] p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">আমাদের দৃষ্টিভঙ্গি</h2>
                <p className="leading-relaxed">
                  বাংলাদেশে অনলাইন শপিং এর ভবিষ্যৎ নেতা হওয়া। আমরা প্রযুক্তি এবং উদ্ভাবনের মাধ্যমে গ্রাহক অভিজ্ঞতা উন্নত করতে প্রতিশ্রুতিবদ্ধ।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#001f3f] mb-12 text-center">আমাদের যাত্রা</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex gap-8 transition-all duration-500 ${
                  visibleSections.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#001f3f] to-[#003d7a] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && <div className="w-1 h-16 bg-[#d4af37] mt-4"></div>}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-[#001f3f] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#001f3f] mb-12 text-center">আমাদের দল</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-500 ${
                  visibleSections.includes(3) ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-[#001f3f] mb-1">{member.name}</h3>
                <p className="text-[#d4af37] font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-[#001f3f] to-[#003d7a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">আমাদের মূল্যবোধ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "গুণমান", description: "আমরা সর্বদা সর্বোচ্চ মানের পণ্য নিশ্চিত করি" },
              { icon: Users, title: "গ্রাহক কেন্দ্রিক", description: "গ্রাহক সন্তুষ্টি আমাদের প্রথম অগ্রাধিকার" },
              { icon: Zap, title: "উদ্ভাবন", description: "আমরা ক্রমাগত উন্নতি এবং উদ্ভাবনে বিশ্বাস করি" },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <Icon className="w-16 h-16 mx-auto mb-4 text-[#d4af37]" />
                  <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-200">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
