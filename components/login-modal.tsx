"use client"

import type React from "react"

import { useState } from "react"
import { X, Mail, Lock, Facebook, Cookie as Google } from "lucide-react"
import { Button } from "@/components/ui/button"
import SellerPanel from "./seller-panel"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onLogin: (name: string) => void
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
}

export default function LoginModal({ isOpen, onClose, onLogin, isLoggedIn, setIsLoggedIn }: LoginModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showSellerPanel, setShowSellerPanel] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      const name = email.split("@")[0]
      onLogin(name)
      setShowSellerPanel(true)
      setEmail("")
      setPassword("")
    }
  }

  if (!isOpen && !showSellerPanel) return null

  return (
    <>
      {/* Login Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in-up">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 animate-scale-in">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-[#001f3f]">লগইন করুন</h2>
              <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#001f3f] mb-2">ইমেইল</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="আপনার ইমেইল"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-[#001f3f] mb-2">পাসওয়ার্ড</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="আপনার পাসওয়ার্ড"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-[#001f3f] hover:bg-[#003d7a] text-white font-bold py-2">
                লগইন করুন
              </Button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">অথবা</span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Facebook</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Google className="w-5 h-5 text-red-600" />
                  <span className="text-sm font-medium">Google</span>
                </button>
              </div>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-gray-600">
                অ্যাকাউন্ট নেই?{" "}
                <button type="button" className="text-[#d4af37] font-bold hover:underline">
                  সাইন আপ করুন
                </button>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Seller Panel */}
      {showSellerPanel && isLoggedIn && (
        <SellerPanel
          isOpen={showSellerPanel}
          onClose={() => {
            setShowSellerPanel(false)
            setIsLoggedIn(false)
          }}
        />
      )}
    </>
  )
}
