import { Button } from "@/components/ui/button";

export const StackSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto w-full px-6 flex flex-col gap-6">
        <h2 className="text-4xl font-medium">
          Built on top of Google Apps Script.
        </h2>
        <div className="flex flex-col gap-3">
          <p className="text-gray-500">
            No external servers, third-party data access, or anyone snooping on
            your emails.
          </p>
          <p className="text-gray-500">Works with any personal Gmail account.</p>
        </div>
        <Button size={"lg"} className="w-fit">
          Try it today
        </Button>
      </div>
    </section>
  );
};
