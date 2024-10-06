import { RotateCcw, Star } from "lucide-react";
import { Button } from "../ui/button";
import Rating from "./rating";
import ReviewBox from "./review-box";

const reviews = [
  {
    name: "Alexander",
    createdDate: new Date("2021-02-10"),
    content:
      "This apricots are very beautiful to look at and quite appetizing.",
    rating: 4,
  },
  {
    name: "Christine",
    createdDate: new Date("2021-01-25"),
    content:
      "I eat it instead of candy, add it to yogurt and porridge! Very healthy and tasty!",
    rating: 5,
  },
  {
    name: "Andrew",
    createdDate: new Date("2021-01-25"),
    content: "Thanks to the store for the fast delivery!",
    rating: 5,
  },
];

function CustomersReview() {
  return (
    <div className="w-full flex flex-col mt-0 lg:mt-14 relative">
      <div className="w-full flex items-center justify-between truncate">
        <h2 className="font-semibold text-xl lg:text-2xl">Customers review</h2>
        <div className="flex items-center">
          <div className="flex items-center mr-1 lg:gap-2 lg:hidden">
            <span className="relative">
              <Star className="w-5 h-5 text-gray-300" fill="currentColor" />
              <span
                style={{
                  width: `${Math.min(
                    100,
                    Math.max(0, (4.4 / 5) * 100)
                  )}%`,
                }}
                className="absolute top-0 left-0 overflow-hidden"
              >
                <Star className="w-5 h-5 text-foreground-green" fill="currentColor" />
              </span>
            </span>
          </div>
          <Rating
          size="w-5 h-5 hidden lg:block"
            value={4.4}
            totalReviews={12}
            color="#4C7C7D"
          />
          <span className="ml-1 lg:ml-4 mt-0 lg:mt-1 text-sm text-muted-foreground/80 font-medium">
            (9 reviews)
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-3 mt-8">
        {reviews.map((item) => (
          <ReviewBox
            key={item.name}
            name={item.name}
            content={item.content}
            rating={item.rating}
            createdDate={item.createdDate}
          />
        ))}
      </div>
      <div className="w-full text-center pt-40 bg-gradient-to-t from-background to-transparent absolute bottom-0">
        <Button
          className="font-medium relative -bottom-5"
          size={"lg"}
          variant={"default"}
        >
          <RotateCcw className="mr-3" size={16} />
          <span>Show all</span>
        </Button>
      </div>
    </div>
  );
}

export default CustomersReview;
