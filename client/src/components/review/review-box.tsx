import { format } from "date-fns";

import Rating from "@/components/review/rating";

interface ReviewBoxProps {
  name: string;
  content: string;
  rating: number;
  createdDate: Date;
}

function ReviewBox({ name, content, rating, createdDate }: ReviewBoxProps) {
  return (
    <div className="w-full flex flex-col gap-3 px-8 py-6 rounded-xl bg-white">
      <div className="flex items-center justify-between">
        <h4 className="inline-block w-1/2 text-lg font-medium">{name}</h4>
        <span className="text-7xl text-muted-foreground/30 h-6">“</span>
      </div>
      <div className="pr-6">{content}</div>
      <div className="flex items-center justify-between">
        <div className="text-muted-foreground/80 text-sm font-medium">{format(createdDate, "MMMM d, yyyy")}</div>
        <Rating key={name} value={rating} isHidden={true} size="w-4 h-4" color="#383634" />
      </div>
    </div>
  );
}

export default ReviewBox;
