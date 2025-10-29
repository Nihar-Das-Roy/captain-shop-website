import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#001f3f] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#d4af37]">Captain Shop</h3>
            <p className="text-gray-300 text-sm">আপনার বিশ্বস্ত অনলাইন শপিং গন্তব্য যেখানে গুণমান এবং সেবা সর্বোচ্চ।</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-[#d4af37]">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#d4af37] transition-colors">
                  হোম
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#d4af37] transition-colors">
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link href="/category" className="hover:text-[#d4af37] transition-colors">
                  পণ্য
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition-colors">
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-[#d4af37]">যোগাযোগ করুন</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>01334762288</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <span>masbsl.com@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] mt-1" />
                <span>বাগেরহাট, খুলনা</span>
              </li>
            </ul>
          </div>

    

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>&copy; 2025 Captain Shop.সর্বাধিকার সংরক্ষিত।</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
