"use client"

import { useState, useEffect } from "react"
import { Truck, RotateCcw, Headphones, Lock, Gift, Clock } from "lucide-react"

export default function Service() {
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const [visibleServices, setVisibleServices] = useState<number[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleServices([0, 1, 2, 3, 4, 5])
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const services = [
    {
      icon: Truck,
      title: "দ্রুত ডেলিভারি",
      description: "সারা দেশে দ্রুত এবং নিরাপদ ডেলিভারি সেবা",
      details: "আমরা ২৪-৪৮ ঘন্টার মধ্যে ঢাকায় এবং ৩-৫ দিনে সারা দেশে ডেলিভারি প্রদান করি।",
    },
    {
      icon: RotateCcw,
      title: "সহজ রিটার্ন",
      description: "৩০ দিনের মধ্যে সম্পূর্ণ অর্থ ফেরত নীতি",
      details: "যদি আপনি সন্তুষ্ট না হন, আমরা কোনো প্রশ্ন ছাড়াই সম্পূর্ণ অর্থ ফেরত দেব।",
    },
    {
      icon: Headphones,
      title: "গ্রাহক সহায়তা",
      description: "২৪/৭ গ্রাহক সেবা এবং সহায়তা",
      details: "আমাদের দক্ষ টিম সর্বদা আপনার সেবায় নিয়োজিত থাকে এবং যেকোনো সমস্যার সমাধান করে।",
    },
    {
      icon: Lock,
      title: "নিরাপদ পেমেন্ট",
      description: "সম্পূর্ণ সুরক্ষিত এবং এনক্রিপ্টেড পেমেন্ট",
      details: "আমরা সর্বশেষ এনক্রিপশন প্রযুক্তি ব্যবহার করে আপনার পেমেন্ট তথ্য সুরক্ষিত রাখি।",
    },
    {
      icon: Gift,
      title: "বিশেষ অফার",
      description: "নিয়মিত ছাড় এবং প্রচারমূলক অফার",
      details: "আমাদের সদস্যরা এক্সক্লুসিভ ডিল এবং প্রাথমিক অ্যাক্সেস পান নতুন পণ্যে।",
    },
    {
      icon: Clock,
      title: "সময়মত সেবা",
      description: "সময়মত ডেলিভারি এবং সেবা প্রদান",
      details: "আমরা প্রতিশ্রুতিবদ্ধ যে আপনার অর্ডার সময়মতো পৌঁছাবে এবং সেবা দ্রুত হবে।",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001f3f] to-[#003d7a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">আমাদের সেবা</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            আমরা আপনার শপিং অভিজ্ঞতা সহজ এবং আনন্দদায়ক করতে প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer ${
                    visibleServices.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                >
                  <div className="bg-gradient-to-br from-[#001f3f] to-[#003d7a] p-6 text-white">
                    <Icon className="w-12 h-12 mb-4 text-[#d4af37]" />
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    {expandedService === index && (
                      <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in-up">
                        <p className="text-gray-700">{service.details}</p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#001f3f] mb-12 text-center">কেন আমাদের সেবা বেছে নিন?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "আমরা গ্রাহক সন্তুষ্টিকে সর্বোচ্চ অগ্রাধিকার দিই",
              "আমাদের দল সর্বদা আপনার সেবায় প্রস্তুত",
              "আমরা স্বচ্ছতা এবং সততায় বিশ্বাস করি",
              "আমাদের সেবা সাশ্রয়ী এবং নির্ভরযোগ্য",
            ].map((reason, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#001f3f] font-bold">✓</span>
                </div>
                <p className="text-gray-700 text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
