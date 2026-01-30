import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import productPowerRack from "@/assets/product-power-rack.jpg";
import productDumbbells from "@/assets/product-dumbbells.jpg";
import productBarbell from "@/assets/product-barbell.jpg";
import productCableMachine from "@/assets/product-cable-machine.jpg";
import productBench from "@/assets/product-bench.jpg";
import productTreadmill from "@/assets/product-treadmill.jpg";
import productKettlebells from "@/assets/product-kettlebells.jpg";
import productLegPress from "@/assets/product-leg-press.jpg";

const products = [
  {
    name: "Commercial Power Rack",
    price: 1299,
    originalPrice: 1599,
    image: productPowerRack,
    category: "Strength",
    isSale: true,
  },
  {
    name: "Rubber Hex Dumbbell Set",
    price: 849,
    image: productDumbbells,
    category: "Free Weights",
    isNew: true,
  },
  {
    name: "Olympic Barbell Set",
    price: 599,
    image: productBarbell,
    category: "Free Weights",
  },
  {
    name: "Cable Crossover Machine",
    price: 2499,
    image: productCableMachine,
    category: "Machines",
  },
  {
    name: "Adjustable Weight Bench",
    price: 349,
    originalPrice: 449,
    image: productBench,
    category: "Benches",
    isSale: true,
  },
  {
    name: "Commercial Treadmill",
    price: 3299,
    image: productTreadmill,
    category: "Cardio",
    isNew: true,
  },
  {
    name: "Competition Kettlebell Set",
    price: 429,
    image: productKettlebells,
    category: "Free Weights",
  },
  {
    name: "Leg Press Machine",
    price: 1899,
    image: productLegPress,
    category: "Machines",
  },
];

const Products = () => {
  return (
    <section id="products" className="section-padding bg-dark-surface">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-brand-orange/20 text-brand-orange rounded-full text-sm font-semibold mb-4 tracking-wider">
            OUR EQUIPMENT
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading mb-4">
            FEATURED <span className="text-brand-orange">PRODUCTS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Professional-grade gym equipment for home gyms, commercial facilities, 
            and fitness centers. Built to last, designed to perform.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Strength", "Cardio", "Free Weights", "Machines", "Benches"].map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "cta" : "secondary"}
              className={index === 0 ? "text-base" : "text-base hover:text-brand-orange"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="cta" size="xl" className="gap-2">
            VIEW ALL PRODUCTS
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
