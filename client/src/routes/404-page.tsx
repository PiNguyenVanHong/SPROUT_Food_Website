import { Button } from "@/components/ui/button";

function NotFoundPage() {
    return (
        <div className="w-full h-full flex flex-col items-center gap-10 py-20">
            <h1 className="font-semibold text-3xl">Opps, this page couldn't be found</h1>
            <div className="w-1/2">
                <img src="@/assets/404.png" alt="404 Image" />
            </div>
            <div className="flex items-center gap-5">
                <Button className="bg-foreground-red text-background hover:opacity-80 hover:bg-foreground-red transition duration-300" size={"lg"}>
                    Go to homepage
                </Button>
                <Button variant={"red"} size={"lg"}>
                    Report a bug
                </Button>
            </div>
        </div>
    );
};

export default NotFoundPage;