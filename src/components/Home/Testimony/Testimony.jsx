import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { testimony } from "@constant/Index";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimony = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-neutral-400"
        }`}
      />
    ));
  };

  return (
    <section>
      <div className="bg-foreground flex flex-col items-center py-10 px-4">
        <h1 className="gradient text-sm lg:text-sm text-center tracking-widest uppercase">
          Testimony
        </h1>
        <p className="text-sm lg:text-lg text-neutral-400 text-center my-5 lg:w-3/4 leading-relaxed">
          See what our users are saying about Elysium VR! From seamless
          collaboration to immersive experiences, discover how our platform is
          transforming workflows and bringing visions to life.
        </p>

        <div className="flex flex-wrap gap-8 justify-center mt-14">
          {testimony.map((item) => (
            <div key={item.id} className="relative">
              <Card className="border border-orange-800 lg:w-[300px] w-[350px] lg:h-[60vh] h-[50vh] flex flex-col items-center">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <Avatar className="w-24 h-24 border-4 border-gray-800 rounded-full">
                    <AvatarImage src={item.image} alt={item.name} />
                  </Avatar>
                </div>
                <CardHeader className="space-y-4 pt-20">
                  <div className="flex items-center justify-center">
                    <CardTitle>{item.name}</CardTitle>
                  </div>
                  <CardDescription>{item.title}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col justify-between flex-grow px-3 text-neutral-300 text-center">
                  <p className="text-sm text-neutral-300 leading-loose flex-grow">
                    {item.description}
                  </p>
                  <div className="flex justify-center">
                    {renderStars(item.rating)}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
