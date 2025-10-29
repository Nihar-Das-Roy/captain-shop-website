"use client"

import type React from "react"

import { useState } from "react"
import { ChevronRight, MapPin, Truck, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Checkout() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    shippingMethod: "standard",
    paymentMethod: "card",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const cartItems = [
    { id: 1, name: "পণ্য ১", price: 1500, quantity: 1 },
    { id: 2, name: "পণ্য ২", price: 2000, quantity: 1 },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCost = formData.shippingMethod === "express" ? 300 : 100
  const total = subtotal + shippingCost

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001f3f] to-[#003d7a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">চেকআউট</h1>
          <p className="text-gray-200 mt-2">আপনার অর্ডার সম্পূর্ণ করুন</p>
        </div>
      </section>

      {/* Checkout Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step Indicator */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                        step <= currentStep ? "bg-[#d4af37] text-[#001f3f]" : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {step}
                    </div>
                    {step < 3 && (
                      <div
                        className={`flex-1 h-1 mx-2 transition-colors ${
                          step < currentStep ? "bg-[#d4af37]" : "bg-gray-300"
                        }`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Step Labels */}
              <div className="flex justify-between mb-8 text-sm font-medium">
                <span className={currentStep >= 1 ? "text-[#001f3f]" : "text-gray-500"}>ঠিকানা</span>
                <span className={currentStep >= 2 ? "text-[#001f3f]" : "text-gray-500"}>শিপিং</span>
                <span className={currentStep >= 3 ? "text-[#001f3f]" : "text-gray-500"}>পেমেন্ট</span>
              </div>

              {/* Step 1: Address */}
              {currentStep === 1 && (
                <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-up">
                  <h2 className="text-2xl font-bold text-[#001f3f] mb-6 flex items-center gap-2">
                    <MapPin className="w-6 h-6" />
                    ডেলিভারি ঠিকানা
                  </h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="প্রথম নাম"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="শেষ নাম"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="ইমেইল"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="ফোন নম্বর"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="ঠিকানা"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="city"
                        placeholder="শহর"
                        value={formData.city}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                      />
                      <input
                        type="text"
                        name="postalCode"
                        placeholder="পোস্টাল কোড"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Shipping */}
              {currentStep === 2 && (
                <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-up">
                  <h2 className="text-2xl font-bold text-[#001f3f] mb-6 flex items-center gap-2">
                    <Truck className="w-6 h-6" />
                    শিপিং পদ্ধতি
                  </h2>
                  <div className="space-y-4">
                    {[
                      { id: "standard", label: "স্ট্যান্ডার্ড শিপিং", desc: "৩-৫ দিন", cost: 100 },
                      { id: "express", label: "এক্সপ্রেস শিপিং", desc: "১-২ দিন", cost: 300 },
                    ].map((method) => (
                      <label
                        key={method.id}
                        className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                      >
                        <input
                          type="radio"
                          name="shippingMethod"
                          value={method.id}
                          checked={formData.shippingMethod === method.id}
                          onChange={handleChange}
                          className="w-4 h-4"
                        />
                        <div className="ml-4 flex-1">
                          <p className="font-bold text-[#001f3f]">{method.label}</p>
                          <p className="text-sm text-gray-600">{method.desc}</p>
                        </div>
                        <p className="font-bold text-[#d4af37]">৳{method.cost}</p>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-up">
                  <h2 className="text-2xl font-bold text-[#001f3f] mb-6 flex items-center gap-2">
                    <CreditCard className="w-6 h-6" />
                    পেমেন্ট পদ্ধতি
                  </h2>
                  <div className="space-y-4">
                    {[
                      { id: "card", label: "ক্রেডিট/ডেবিট কার্ড" },
                      { id: "mobile", label: "মোবাইল ব্যাংকিং" },
                      { id: "cod", label: "ক্যাশ অন ডেলিভারি" },
                    ].map((method) => (
                      <label
                        key={method.id}
                        className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={formData.paymentMethod === method.id}
                          onChange={handleChange}
                          className="w-4 h-4"
                        />
                        <span className="ml-4 font-medium text-[#001f3f]">{method.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                <Button
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-[#001f3f] font-bold disabled:opacity-50"
                >
                  পূর্ববর্তী
                </Button>
                <Button
                  onClick={handleNextStep}
                  disabled={currentStep === 3}
                  className="flex-1 bg-[#001f3f] hover:bg-[#003d7a] text-white font-bold disabled:opacity-50 gap-2"
                >
                  পরবর্তী <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Place Order Button */}
              {currentStep === 3 && (
                <Button className="w-full mt-4 bg-[#d4af37] hover:bg-[#e8c547] text-[#001f3f] font-bold py-3">
                  অর্ডার নিশ্চিত করুন
                </Button>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
                <h3 className="text-xl font-bold text-[#001f3f] mb-6">অর্ডার সারসংক্ষেপ</h3>

                {/* Items */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-medium text-[#001f3f]">৳{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>সাবটোটাল:</span>
                    <span>৳{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>শিপিং:</span>
                    <span>৳{shippingCost}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-[#001f3f] pt-4 border-t border-gray-200">
                    <span>মোট:</span>
                    <span className="text-[#d4af37]">৳{total}</span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2">✓ নিরাপদ পেমেন্ট</p>
                  <p className="flex items-center gap-2">✓ সহজ রিটার্ন</p>
                  <p className="flex items-center gap-2">✓ দ্রুত ডেলিভারি</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
