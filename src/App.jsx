import React, { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6 space-y-12 transition-all duration-300">
      <div className="flex justify-end">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Luis Gonzalez</h1>
        <p className="text-xl">Computer Science Student / Real Estate Professional</p>
        <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300">
          Driven by logic and led by ambition — I combine tech and real estate to solve real-world problems and connect people to opportunities.
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow transition">
            <h3 className="font-semibold">Personal Portfolio Website</h3>
            <p className="text-gray-700 dark:text-gray-300">
              My own developer portfolio, built with React and Tailwind CSS. It features a professional bio, resume, and project showcase. Deployed live using Vercel.
            </p>
            <a href="https://luis-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm mt-2 inline-block">
              View Live Site
            </a>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow transition">
            <h3 className="font-semibold">C++ Practice Repository</h3>
            <p className="text-gray-700 dark:text-gray-300">
              A collection of hands-on exercises and practice code while learning C++. Covers topics like pointers, arrays, loops, functions, and more.
            </p>
            <a href="https://github.com/LuisGonzalez10/cpp-practice" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm mt-2 inline-block">
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
