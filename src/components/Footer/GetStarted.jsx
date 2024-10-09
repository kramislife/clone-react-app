import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

const GetStarted = () => {
  return (
    <div className=" space-y-4">
      <Label
        htmlFor="email"
        className="text-md font-semibold text-neutral-500 tracking-tight"
      >
        Try Elysium VR for free
      </Label>
      <div className="border rounded-md border-neutral-700/80">
        <Input
          type="email"
          placeholder="Enter your email"
          className="bg-foreground lg:w-full lg:border-none w-full"
        />
        <Button
          className="absolute flex bg-orange-600 rounded-md rounded-l-none top-10 lg:right-0 right-0"
          type="submit"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default GetStarted;
