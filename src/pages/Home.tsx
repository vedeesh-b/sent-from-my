import { HeroSection } from "@/components/home/HeroSection";
import { SafeListSection } from "@/components/home/SafeListSection";
import { StackSection } from "@/components/home/StackSection";
import { StorySection } from "@/components/home/StorySection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StorySection />
      <SafeListSection />
      <StackSection />
    </div>
  );
}
