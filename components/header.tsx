"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import LoginModal from "./login-modal"
import Cart from "./cart"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")
  const [cartCount, setCartCount] = useState(0)

  const handleLogin = (name: string) => {
    setIsLoggedIn(true)
    setUserName(name)
    setIsLoginOpen(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserName("")
  }

  const navLinks = [
    { href: "/", label: "হোম" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
    { href: "/service", label: "সেবা" },
    { href: "/category", label: "ক্যাটাগরি" },
    { href: "/contact", label: "যোগাযোগ" },
  ]

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#001f3f] to-[#003d7a] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚓</span>
              </div>
              <span className="font-bold text-xl text-[#001f3f] hidden sm:inline">Captain Shop</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#001f3f] hover:text-[#d4af37] transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Cart Icon */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ShoppingCart className="w-6 h-6 text-[#001f3f]" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-[#d4af37] text-[#001f3f] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Login/User Section */}
              {isLoggedIn ? (
                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-[#001f3f]">{userName}</p>
                  </div>
                  <button onClick={handleLogout} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <LogOut className="w-5 h-5 text-[#001f3f]" />
                  </button>
                </div>
              ) : (
                <Button
                  onClick={() => setIsLoginOpen(true)}
                  className="hidden sm:inline-flex bg-[#001f3f] hover:bg-[#003d7a] text-white"
                >
                  লগইন
                </Button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6 text-[#001f3f]" /> : <Menu className="w-6 h-6 text-[#001f3f]" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2 animate-fade-in-up">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-[#001f3f] hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {!isLoggedIn && (
                <Button
                  onClick={() => {
                    setIsLoginOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="w-full bg-[#001f3f] hover:bg-[#003d7a] text-white"
                >
                  লগইন
                </Button>
              )}
            </nav>
          )}
        </div>
      </header>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
    </>
  )
}
