"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React from "react";

const Productlisting = ({ products }: { products: Product[] }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const category = searchParams.get("category") || "";
  const brand = searchParams.get("brand") || "";
  const priceRange = searchParams.get("priceRange") || "";
  const sort = searchParams.get("sort") || "price";

  const filteredProducts = products
    .filter((product) => (category ? product.category === category : true))
    .filter((product) => (brand ? product.brand === brand : true))
    .filter((product) => {
      if (priceRange) {
        const [minPrice, maxPrice] = priceRange.split("-").map(Number);
        return product.price >= minPrice && product.price <= maxPrice;
      }
      return true;
    })
    .sort((a, b) => {
      if (sort === "price") return a.price - b.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    const name = e.target.name;
    params.set(name, option);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Product Listings
        </h1>

        <div className="flex justify-between">
          {/* Product Listing on the Left */}
          <div className="w-full md:w-2/3 grid grid-cols-1 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 flex items-center"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-lg mr-6"
                />
                <div>
                  <h2 className="text-2xl font-bold">{product.name}</h2>
                  <p className="text-gray-300">{product.brand}</p>
                  <p className="text-lg font-bold">${product.price}</p>
                  <p className="text-yellow-400">{product.rating} / 5</p>
                </div>
              </div>
            ))}
          </div>

          {/* Filter Section on the Right */}
          <div className="w-full md:w-1/3 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg ml-6">
            <h2 className="text-2xl font-semibold mb-4">Filters</h2>
            <div className="mb-4">
              <label className="block text-sm mb-2">Category:</label>
              <select
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg"
                name="category"
                value={category}
                onChange={handleChange}
              >
                <option value="">All</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-2">Brand:</label>
              <select
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg"
                name="brand"
                value={brand}
                onChange={handleChange}
              >
                <option value="">All</option>
                <option value="apple">Apple</option>
                <option value="samsung">Samsung</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-2">Price Range:</label>
              <select
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg"
                name={"priceRange"}
                value={priceRange}
                onChange={handleChange}
              >
                <option value="">All</option>
                <option value="0-500">0 - 500</option>
                <option value="500-1000">500 - 1000</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">Sort By:</label>
              <select
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg"
                name="sort"
                value={sort}
                onChange={handleChange}
              >
                <option value="price">Price</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productlisting;

interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  rating: number;
  stock: number;
  color: string;
  size: string;
  description: string;
  imageUrl: string;
  isOnSale: boolean;
}

const products = [
  {
    id: "1",
    name: "iPhone 14",
    category: "electronics",
    brand: "Apple",
    price: 999,
    rating: 4.8,
    stock: 25,
    color: "Black",
    size: "128GB",
    description: "Latest iPhone model with A15 Bionic chip and 5G support.",
    imageUrl: "https://picsum.photos/id/200/200/300",
    isOnSale: true,
  },
  {
    id: "2",
    name: "Galaxy S22",
    category: "electronics",
    brand: "Samsung",
    price: 799,
    rating: 4.6,
    stock: 30,
    color: "Phantom White",
    size: "256GB",
    description:
      "Samsung’s flagship phone with stunning camera and performance.",
    imageUrl: "https://picsum.photos/id/100/200/300",
    isOnSale: false,
  },
  {
    id: "3",
    name: "MacBook Air M2",
    category: "electronics",
    brand: "Apple",
    price: 1199,
    rating: 4.9,
    stock: 15,
    color: "Space Gray",
    size: "512GB",
    description:
      "Ultra-thin, ultra-fast MacBook with M2 chip for unmatched performance.",
    imageUrl: "https://picsum.photos/id/9/200/300",
    isOnSale: false,
  },
  {
    id: "4",
    name: "Sony WH-1000XM5",
    category: "electronics",
    brand: "Sony",
    price: 349,
    rating: 4.7,
    stock: 50,
    color: "Silver",
    size: "One Size",
    description:
      "Industry-leading noise-canceling headphones with premium sound.",
    imageUrl: "https://picsum.photos/id/45/200/300",
    isOnSale: true,
  },
  {
    id: "5",
    name: "Nike Air Max 270",
    category: "clothing",
    brand: "Nike",
    price: 150,
    rating: 4.5,
    stock: 100,
    color: "Black/White",
    size: "10",
    description: "Stylish and comfortable Nike shoes with Air cushioning.",
    imageUrl: "https://picsum.photos/id/20/200/300",
    isOnSale: true,
  },
];
