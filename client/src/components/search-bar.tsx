import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

function SearchBar() {
  return (
    <div className="relative">
      <Input placeholder="Search" className="hidden lg:block pr-8 bg-white" />
      <Search className="lg:absolute lg:right-2 lg:top-2.5 w-6 h-6 lg:h-4 lg:w-4 text-muted-foreground" />
    </div>
  );
}

export default SearchBar;
