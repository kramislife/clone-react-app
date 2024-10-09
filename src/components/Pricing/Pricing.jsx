import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { pricingItems } from "../../constant/Index";
import { CircleCheck } from "lucide-react";

const Pricing = () => {
  const mostUsed = (item) => item.mostUsed; // Function to check if the plan is most used

  return (
    <section>
      <div className="bg-background2 flex flex-col items-center py-10 px-4">
        <h1 className="gradient text-sm lg:text-sm text-center tracking-widest uppercase">
          Pricing
        </h1>
        <p className="text-3xl lg:text-4xl text-neutral-300 text-center lg:my-10 my-5 lg:leading-snug leading-normal tracking-wide">
          Choose the perfect plan and step into your{" "}
          <span className="gradient">
            <br />
            virtual adventure today!
          </span>
        </p>

        <div className="flex flex-wrap gap-6 justify-center">
          {pricingItems.map((item) => (
            <Card
              key={item.id}
              className="border border-orange-800 lg:w-[300px] w-[350px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <CardHeader className="space-y-4 pb-10">
                <div className="flex items-center">
                  <CardTitle>{item.title}</CardTitle>
                  {mostUsed(item) && (
                    <span className="ml-2 text-md gradient">Most Popular</span>
                  )}
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow space-y-4">
                <span className="text-4xl">
                  {item.price}{" "}
                  <span className="text-sm text-neutral-400">/month</span>
                </span>
                <ul className="space-y-3 pt-5">
                  {item.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex text-sm text-neutral-400 gap-4 items-center"
                    >
                      <CircleCheck className="text-green-500 size-5" />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button className="w-full">Select Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
