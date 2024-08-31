// app/page.tsx

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center h-[400px] relative px-3 py-3"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col text-center items-center justify-center text-white h-full">
          <h1 className="text-4xl font-bold mb-4">
            Find Your Perfect Rental Home
          </h1>
          <p className="text-lg mb-6">
            Browse thousands of rental properties across the city.
          </p>
          <a
            href="#search"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full"
          >
            Start Searching
          </a>
        </div>
      </section>

      {/* Search Bar Section */}
      <section id="search" className="w-full max-w-4xl mt-8">
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <input
            type="text"
            placeholder="Search by city, area, or property..."
            className="flex-grow p-2 border border-gray-300 rounded-l-lg"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg">
            Search
          </button>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="w-full max-w-5xl mt-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Rentals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Property Card */}
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/sample-property.jpg"
                  alt="Sample Property"
                  width={300}
                  height={200}
                  className="w-full"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    Cozy Apartment in Downtown
                  </h3>
                  <p className="text-gray-700">$1,200 / month</p>
                  <p className="text-gray-500 text-sm mb-4">
                    2 Beds • 1 Bath • 900 sq ft
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 font-semibold"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-blue-500 text-white py-12 mt-16 text-center rounded-2xl ">
        <h2 className="text-2xl font-bold mb-4">
          Ready to find your next home?
        </h2>
        <p className="mb-6">Join thousands of satisfied renters today.</p>
        <a
          href="#"
          className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-gray-100"
        >
          Sign Up Now
        </a>
      </section>
    </main>
  );
}
