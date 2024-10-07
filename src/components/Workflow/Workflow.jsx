import React from "react";
import Code from "../../assets/code2.png";
import { workFlow } from "../../constant/Index";

const Workflow = () => {
  return (
    <section>
      <div className="bg-foreground flex flex-col items-center py-10 px-4">
        <h1 className="gradient text-sm lg:text-sm text-center tracking-widest uppercase">
          Workflow
        </h1>
        <p className="text-3xl lg:text-4xl text-neutral-300 text-center lg:my-10 my-5 lg:leading-snug leading-normal tracking-wide">
          Your Pathway to{" "}
          <span className="gradient">
            <br />
            Immersive Reality
          </span>
        </p>

        <div className="flex flex-wrap justify-center items-center lg:px-10 px-3">
          <div className=" py-10 lg:w-1/2">
            <img src={Code} alt="" className="lg:h-full h-[80vh] rounded-md" />
          </div>
          <div className="flex lg:w-1/2">
            <div>
              {workFlow.map((item) => (
                <div
                  key={item.id}
                  className="flex lg:items-start items-center py-5 transition transform duration-300 hover:scale-105 hover:bg-neutral-900 rounded-md px-3"
                >
                  <div className="flex justify-center text-orange-500 rounded-full w-15 h-15 mr-10 ml-2 pt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
