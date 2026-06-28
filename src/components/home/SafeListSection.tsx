export const SafeListSection = () => {
  return (
    <section className="bg-[#19262D] py-24">
      <div className="max-w-4xl mx-auto w-full px-6 flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <div className="bg-white border border-[#2C86B8] px-4 py-3 rounded-xl text-md w-fit">
            Sent from my sourdough starter
          </div>
          <p className="text-xl font-medium text-white">
            may not have the most
            <span className="block">formal ring to it.</span>
          </p>
        </div>
        <div className="flex flex-col items-end text-end gap-4">
          <p className="text-xl font-medium text-white w-80">
            Our Safe List allows you to revert back for certain domains.
          </p>
          <p className="text-sm text-white/60 w-80">
            Your emails will still be fun. Maybe just not for the HR lady
            you’ve been messaging on LinkedIn.
          </p>
        </div>
      </div>
    </section>
  );
};
