import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center">
      <div className="max-w-4xl mx-auto w-full px-6 flex flex-col gap-6">
        <h1 className="text-7xl font-medium tracking-tight text-gray-900">
          404
        </h1>
        <p className="text-gray-500 text-xl">This page doesn't exist.</p>
        <Button size="lg" className="w-fit">
          <Link to="/">Go home</Link>
        </Button>
      </div>
    </section>
  );
}
