import { useRef } from "react";
import { REVIEWS } from "../constants/review";
import { ReviewCard } from "./ReviewCard/ReviewCard";

export function ReviewSlider(): JSX.Element {
  const reviewSliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (reviewSliderRef.current) {
      reviewSliderRef.current.scrollTo({
        left: reviewSliderRef.current.scrollLeft - 125,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (reviewSliderRef.current) {
      reviewSliderRef.current.scrollTo({
        left: reviewSliderRef.current.scrollLeft + 125,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mb-20">
      <div
        className="flex flex-col md:flex-row overflow-x-auto gap-6 md:gap-9"
        ref={reviewSliderRef}
      >
        {REVIEWS.map((review) => (
          <ReviewCard
            key={review.author}
            author={review.author}
            message={review.message}
          />
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2"
        onClick={scrollLeft}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2"
        onClick={scrollRight}
      >
        &gt;
      </button>
    </div>
  );
}
