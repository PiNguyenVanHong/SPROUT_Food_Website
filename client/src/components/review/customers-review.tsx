import { RotateCcw } from "lucide-react";
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
    <div className="w-full flex flex-col mt-14 relative">
      <div className="w-full flex items-center justify-between">
        <h2 className="font-semibold text-2xl">Customers review</h2>
        <div className="flex items-center">
          <Rating value={4.9} totalReviews={12} color="#4C7C7D" />
          <span className="ml-4 mt-1 text-sm text-muted-foreground/80 font-medium">
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
        <Button className="font-medium relative -bottom-5" size={"lg"} variant={"default"}>
          <RotateCcw className="mr-3" size={16} />
          <span>Show all</span>
        </Button>
      </div>
    </div>
  );
}

export default CustomersReview;
