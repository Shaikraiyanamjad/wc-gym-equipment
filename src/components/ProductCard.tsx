import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  isNew,
  isSale 
}: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-brand-orange/50 transition-all duration-500 hover:shadow-card-lg">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {isNew && (
          <span className="px-3 py-1 bg-brand-blue text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
            New
          </span>
        )}
        {isSale && (
          <span className="px-3 py-1 bg-brand-orange text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
            Sale
          </span>
        )}
      </div>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="secondary" size="lg" className="gap-2">
            <Eye className="w-5 h-5" />
            Quick View
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs text-brand-orange font-semibold uppercase tracking-wider">
          {category}
        </span>
        <h3 className="font-heading text-xl mt-1 mb-3 text-foreground group-hover:text-brand-orange transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-bold text-foreground">
            ${price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              ${originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button variant="buy" className="flex-1 gap-2">
            Buy Now
          </Button>
          <Button variant="cart" size="icon">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
