import React from "react";
import * as Icon from "lucide-react";

function App() {
  return (
    <div className="bg-[#f6f1eb] text-gray-800 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-3 pr-4 py-2 bg-white shadow-sm">
        <h1 className="text-2xl font-bold tracking-wide">EYEWEAR</h1>
        <Icon.Menu />
      </nav>

      {/* Hero Section */}
      <section className="flex items-center px-5 py-5">
        <div>
          <h2 className="text-xl leading-tight mb-4">
            Stylish & Affordable <br />{" "}
            <p className="text-2xl font-semibold">Eyewear</p>
          </h2>
          <p className="text-sm text-gray-600">
            Find your perfect pair of glasses with our latest collection.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083"
            alt="Glasses"
            className="rounded-xl shadow-lg w-64"
          />
        </div>
      </section>

      {/* Offer Section */}
      <section className="text-center py-5 px-4 bg-white">
        <h3 className="text-2xl font-semibold mb-2">
          Special Offer: <span className="text-yellow-600">Up to 50% Off!</span>
        </h3>
        <p className="text-gray-600 text-sm">
          Limited time offer — don’t miss out on our best deals!
        </p>
      </section>

      {/* Popular Styles */}
      <section className="py-5 mb-8">
        <h3 className="text-2xl font-semibold text-center mb-5">
          Popular Styles
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {["Classic Black", "Retro Tortoise", "Modern Clear"].map(
            (item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition h-40 w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1602703522866-fb486308da5d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="glasses"
                  className="rounded-tl-lg rounded-tr-lg mb-4"
                />
                <h4 className="font-medium text-center">{item}</h4>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Visit Store Section */}
      <section className="flex flex-col items-center my-8 mx-3">
        <h3 className="text-2xl font-semibold mb-5">Visit Our Store</h3>

        <div className="bg-white p-4 rounded-xl shadow-md w-full flex ">
          <div className="w-2/3">
            <p className="mb-4 font-medium">123 Eyewear St., Your City</p>
            <div className="mb-2 text-gray-600 flex gap-2 text-sm">
              <Icon.Phone size={15} /> <p>+1 234 567 8900</p>
            </div>
            <div className="text-gray-600 text-sm flex items-center gap-2"><Icon.Clock size={15}/> <p>Mon-Sat: 10am - 10pm</p></div>
          </div>

          <div className="bg-gray-200 rounded-lg flex items-center border text-gray-500 w-1/3 justify-center ">
            <p className="text-xs">Map Location Here</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-5 text-center">
        <h3 className="text-2xl font-semibold mb-5">Why Choose Us?</h3>

        <div className="flex justify-between items-center flex-wrap px-8">
          <div className="flex flex-col items-center">
            <Icon.ShieldCheck />
            <h4 className="font-semibold">Premium Quality</h4>
            <p className="text-gray-600 text-xs">
              High-quality, durable frames
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Icon.Undo2 />
            <h4 className="font-semibold">Easy Returns</h4>
            <p className="text-gray-600 text-xs">30-day hassle-free returns</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-[#f0e7dc] text-sm">
        © 2026 Eyewear. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
