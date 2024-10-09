import logo from "../../assets/logo.png";
import { footer } from "../../constant/Index";
import Socials from "./Socials";
import Reserved from "./Reserved";
import GetStarted from "./GetStarted";

import { socials } from "../../constant/Index";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer>
      <div className="bg-background2 py-10 px-4 border-t border-neutral-700/80">
        <div className="flex flex-col">
          <div className="flex items-center lg:justify-start justify-center lg:px-12 gap-2 lg:mb-0 mb-10">
            <img src={logo} alt="logo" className="h-12 w-12" />
            <p className="gradient text-xl tracking-tighter">Elysium VR </p>
          </div>
          <div className="grid grid-cols-2 lg:flex lg:flex-row lg:space-x-24 lg:gap-14 lg:ml-14 lg:pt-10 lg:pb-5 gap-5">
            {footer.map((item) => (
              <div key={item.id} className="space-y-4 lg:p-0 pl-8 py-5">
                <h6 className="text-2xl lg:text-sm text-neutral-500 font-semibold">
                  {item.title}
                </h6>
                <ul className="lg:space-y-2 space-y-1">
                  {item.links.map((link) => (
                    <li key={link.id} className="lg:py-0 py-2">
                      <a
                        className="lg:text-sm text-md font-extralight text-neutral-300"
                        href={link.path}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col items-center relative w-full lg:max-w-sm">
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
              <div className="flex flex-col space-y-4 mt-5">
                <div>
                  <h6 className="gradient font-semibold text-lg tracking-tight">
                    Connect with us
                  </h6>
                </div>
                <div className="flex space-x-5">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-neutral-300 transition-transform duration-300 hover:scale-125  ${
                        index === 0 && "hover:text-blue-600"
                      } 
            ${index === 1 && "hover:text-pink-500"} 
            ${index === 2 && "hover:text-sky-400"} 
            ${index === 3 && "hover:text-blue-700"}
            ${index === 4 && "hover:text-green-600"}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* All Right Reserved Section */}
      <Reserved />
    </footer>
  );
};

export default Footer;
