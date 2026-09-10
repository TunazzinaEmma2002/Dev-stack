import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="font-bold text-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Dev Stack
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-sm font-medium text-gray-600 hover:text-pink-600 transition">
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-sm font-medium text-gray-700 hover:text-pink-600">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 transition">
              Sign Up
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-sm font-medium text-gray-600">
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}