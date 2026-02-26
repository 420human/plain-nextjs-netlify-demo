"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-8 sticky top-0 z-10">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
          My Website
        </Link>
        <div className="space-x-6">
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
            Features
          </a>
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
            About
          </a>
          <a
            href="#features"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
