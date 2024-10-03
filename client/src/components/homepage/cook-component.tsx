import { ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function CookComponent() {
  return (
    <div className="lg:my-20">
      <div className="max-w-7xl w-full mx-auto flex flex-col justify-start border-t-2 border-background-darker pt-10 lg:pt-20">
        <div className="flex items-center gap-4">
          <ChefHat className="-rotate-6" size={32} />
          <h1 className="text-3xl font-semibold">What to cook?</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 lg:mt-20">
          <div className="bg-foreground-red/10 p-8 lg:px-20 lg:py-14 rounded-xl flex lg:flex-col items-center justify-between shrink-0 grow-0">
            <div className="flex flex-col items-start lg:items-center gap-2">
              <h1 className="text-xl lg:text-3xl font-semibold text-foreground-red tracking-wide">
                Watermelon
              </h1>
              <p className="uppercase text-foreground/70 text-xs font-bold tracking-widest">
                Recipes with anna grace
              </p>
              <Button
                className="block lg:hidden lg:py-5 shadow-lg"
                variant={"red_outline"}
                size={"lg"}
              >
                Read more
              </Button>
            </div>
            <div>
              <img src="./cook/1.svg" alt="" />
            </div>
            <div className="hidden lg:block">
              <Button className="py-5 shadow-lg" variant={"red_outline"}>
                Read more
              </Button>
            </div>
          </div>
          <div className="bg-foreground-green/10 p-8 lg:px-20 lg:py-14 rounded-xl flex lg:flex-col items-center justify-between shrink-0 grow-0">
            <div className="w-2/4 lg:w-full flex flex-col items-start lg:items-center gap-2">
              <h1 className="text-xl lg:text-3xl font-semibold tracking-wide text-foreground-green">
                Asparagus
              </h1>
              <p className="uppercase text-foreground/70 text-xs font-bold tracking-widest">
                Recipes with anna grace
              </p>
              <Button
                className="block lg:hidden lg:py-5 shadow-lg"
                variant={"green_outline"}
                size={"lg"}
              >
                Read more
              </Button>
            </div>
            <div className="h-40 lg:h-full">
              <img src="./cook/2.svg" alt="" />
            </div>
            <div className="hidden lg:block">
              <Button className="py-5 shadow-lg" variant={"green_outline"}>
                Read more
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex-1 flex items-center justify-between pl-10 bg-foreground-green/80 rounded-xl">
              <div className="flex flex-col items-start justify-between space-y-5">
                <h1 className="text-4xl font-bold text-background">200 +</h1>
                <span className="text-white">Healthy recipes</span>
                <Button
                  className="bg-transparent border border-background text-background"
                  variant={"outline"}
                  size={"lg"}
                >
                  View all
                </Button>
              </div>
              <div className="w-1/2 h-full">
                <img src="./cook/3.svg" alt="" />
              </div>
            </div>
            <div className="bg-background-darker rounded-xl p-10 flex flex-col items-center gap-4">
              <h3 className="font-medium">Don't miss the new posts</h3>
              <Input className="bg-white" placeholder="Your email" />
              <Button className="w-full" variant={"green"} size={"lg"}>
                Subscribe now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookComponent;
