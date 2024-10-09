import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../../ui/button";

const GetStarted = () => {
  return (
    <div className=" w-full space-y-2 lg:space-y-5">
      <Label htmlFor="email" className="text-neutral-500">
        Try Elysium VR for Free
      </Label>
      <div className="lg:relative flex flex-col">
        <Input
          className="bg-foreground border border-neutral-700/80 rounded-md w-[40vh]"
          type="email"
          id="email"
          placeholder="Enter your email"
        />
        <div className="hidden lg:flex lg:absolute top-0 right-0">
          <Button variant="gradient" className="rounded-l-none">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
