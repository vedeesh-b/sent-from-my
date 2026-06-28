import tweetCard from "@/assets/tweet.png";

export const StorySection = () => {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto w-full px-6 flex flex-row justify-between items-center">
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-medium">
            End your emails
            <span className="block">with a story</span>
          </h2>
          <div className="flex flex-col gap-4 w-90">
            <p className="text-gray-500">
              Right now, your email signature might be empty, or have the
              dreaded{" "}
              <span className="text-sky-700 underline underline-offset-2">
                ‘Sent from my iPhone’
              </span>
              .
            </p>
            <p className="text-gray-500">
              But why let iPhones have all the fun? We’re in an era of
              technology where you can send a tweet from your refrigerator.
            </p>
            <p className="text-gray-500">
              With this Gmail Add-On, your signature will auto-rotate every hour
              with a different theme.
            </p>
          </div>
        </div>
        <img
          src={tweetCard}
          className="w-84"
          alt="Meme tweet from LG Smart Refrigerator"
        />
      </div>
    </section>
  );
};
