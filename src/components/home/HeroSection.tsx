import { Button } from "@/components/ui/button";
import SplashCard from "@/components/SplashCard";

export const HeroSection = () => {
  return (
    <section className="min-h-[calc(100svh-8rem)] flex items-center">
      <div className="max-w-4xl mx-auto w-full px-6 flex flex-row justify-between items-center">
        <div className="flex flex-col gap-6 items-start">
          <h1 className="text-7xl font-medium tracking-tight text-gray-900">
            sent from my
          </h1>
          <p className="text-gray-500 text-xl flex flex-col">
            <span>Custom signatures rotating every hour,</span>
            <span>because your emails deserve better.</span>
          </p>
          <Button size={"lg"} className="w-fit">Add to Gmail</Button>
        </div>
        <SplashCard />
      </div>
    </section>
  );
};
