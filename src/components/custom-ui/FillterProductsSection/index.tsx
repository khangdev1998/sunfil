'use client'
import { useState, useCallback } from "react";
import ProductCard from "../ProductCard";
import { FilterSidebar } from "./FilterSidebar";
import { products } from "../../../app/api/data";
import FilterHeader from "./FilterHeader";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import LoadingSpinner from "../../LoadingSpinner";

const ITEMS_PER_PAGE = 8;

const FilterProductsSection = () => {
  const [displayedItems, setDisplayedItems] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const hasMore = displayedItems < products.length;

  const loadMore = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);
    // Simulate network delay
    setTimeout(() => {
      setDisplayedItems((prev) => Math.min(prev + ITEMS_PER_PAGE, products.length));
      setIsLoading(false);
    }, 800);
  }, [isLoading]);

  const loadMoreRef = useInfiniteScroll(loadMore, hasMore);

  return (
    <div className="grid grid-cols-[315px_1fr] gap-5">
      <FilterSidebar />

      <div className="space-y-7">
        <FilterHeader />
        <div className="grid grid-cols-4 gap-5">
          {products.slice(0, displayedItems).map((product) => (
            <ProductCard useLabel key={product.id} product={product} />
          ))}
        </div>
        {hasMore && (
          <div ref={loadMoreRef}>
            {isLoading && <LoadingSpinner />}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterProductsSection;
