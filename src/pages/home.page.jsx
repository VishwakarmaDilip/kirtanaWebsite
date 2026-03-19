import React from "react";
import * as Icon from "lucide-react";

function Home() {
  const collection = [
    {
      collectionName: "Eyeglasses",
      collectionImage:
        "https://images.unsplash.com/photo-1625591338875-e2cca9de80a0?q=80&w=1127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      collectionName: "Sunglasses",
      collectionImage:
        "https://images.unsplash.com/photo-1587466280419-78d7adc6d4a8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      collectionName: "Contact Lenses",
      collectionImage:
        "https://images.unsplash.com/photo-1530707114297-4af4b3cafe16?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="bg-[#eceee1] text-gray-800 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-3 pr-4 py-2 bg-[#cdf4ed] shadow-sm">
        <div className=" w-22">
          <img src="../../public/Logo2.png" alt="" />
        </div>
        <Icon.Menu size={30} />
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse items-center px-5 py-5 gap-5">
        <div>
          <h2 className="text-xl leading-tight mb-2 text-center">
            Stylish & Affordable <br />{" "}
            <p className="text-2xl font-semibold">Eyewear</p>
          </h2>
          <p className="text-gray-600 flex text-center">
            Find your perfect pair of glasses with our latest collection.
          </p>
        </div>

        <div className="flex justify-center w-full">
          <img src="../../public/Logo2.png" alt="" className="w-40" />
        </div>
      </section>

      {/* Our Collection */}
      <section className="py-5 mb-8">
        <h3 className="text-2xl font-semibold text-center mb-5">
          Our Collection
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {collection.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition h-40 w-40 overflow-hidden"
            >
              <div className="h-3/4 overflow-hidden">
                <img
                  src={`${item.collectionImage}`}
                  alt="glasses"
                  className=" mb-4 h-full bg-center bg-cover"
                />
              </div>
              <div className="flex justify-center items-center h-1/4">
                <h4 className="font-medium text-center">
                  {item.collectionName}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offer Section */}
      <section className="text-center py-5 px-4 bg-white">
        <h3 className="text-2xl font-semibold text-yellow-600">
          FREE EYE TEST
        </h3>
      </section>

      {/* Visit Store Section */}
      <section className="flex flex-col items-center my-8 mx-3">
        <h3 className="text-2xl font-semibold mb-5">Visit Our Store</h3>

        <div className="bg-white p-4 rounded-xl shadow-md w-full flex flex-col-reverse gap-5 ">
          <div>
            <p className="mb-4 font-medium">
              Ingle Seva Sangh, Govind Nagar, S.B. Bua Patil Marg, Next to
              Hanuman Mandir Lane, Gazdhar Bandh, Santacruz (W), Mumbai - 54
            </p>
            <div className="mb-2 text-gray-600 flex gap-2 flex-col">
              <div className="flex gap-2 items-center">
                <Icon.Phone size={15} />{" "}
                <a href="tel:+918452950819" className="text-blue-500">
                  +91 8452950819
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <Icon.Phone size={15} />{" "}
                <a href="tel:+919137789485" className="text-blue-500">
                  +91 9137789485
                </a>
              </div>
            </div>
            <div className="text-gray-600 flex items-center gap-2">
              <Icon.Clock size={15} /> <p>Mon-Sat: 10am - 10pm</p>
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg flex items-center border text-gray-500 h-60 justify-center ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1885.3172960488132!2d72.82801699999996!3d19.079796999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA0JzQ3LjMiTiA3MsKwNDknNDAuOSJF!5e0!3m2!1sen!2sin!4v1773699285066!5m2!1sen!2sin"
              width="400px"
              height="auto"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            ></iframe>
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

export default Home;
