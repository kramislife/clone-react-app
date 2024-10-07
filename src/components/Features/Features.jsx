import { featuresItems } from "../../constant/Index";

const Features = () => {
  return (
    <>
      <section>
        <div className="bg-background2 flex flex-col items-center py-10 px-4">
          <h1 className="gradient text-sm lg:text-sm text-center tracking-widest uppercase">
            Features
          </h1>
          <p className="text-3xl lg:text-4xl text-neutral-300 text-center lg:my-10 my-5 lg:leading-snug leading-normal tracking-wide">
            Discover What Makes{" "}
            <span className="gradient">
              <br />
              Elysium Unique
            </span>
          </p>
          <div className="flex flex-wrap justify-center my-3 lg:gap-8 gap-5">
            {featuresItems.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-800 text-gray-200 rounded-lg shadow-lg p-6 sm:w-1/2 lg:w-1/4 flex flex-col items-center transition-transform duration-300 lg:hover:scale-110 hover:scale-105"
              >
                <div className="flex">
                  <div className="lg:mb-20 mr-10 flex items-center justify-center  text-orange-500 rounded-full w-15 h-15">
                    {item.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
