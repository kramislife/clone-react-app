import logo from "../../assets/logo.png";
import { footer } from "../../constant/Index";
import Socials from "./Socials";
import Reserved from "./Reserved";
import GetStarted from "./GetStarted";

const Footer = () => {
  return (
    <footer>
      <div className="bg-background2 py-10 px-6 lg:px-14 border-t border-neutral-700/80">
        <div className="flex justify-center lg:justify-start">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-16 w-16" />
            <span className="gradient text-xl tracking-tighter">
              Elysium VR
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 justify-around lg:justify-start lg:gap-10 lg:space-x-24 pt-10">
          {footer.map((item) => (
            <div key={item.id} className="pl-3">
              <h6 className="text-lg tracking-tighter text-neutral-500 font-semibold">
                {item.title}
              </h6>
              <ul className="pt-4">
                {item.links.map((link) => (
                  <li key={link.id} className="py-2">
                    <a
                      href={link.path}
                      className="text-neutral-400 text-sm tracking-wide"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col lg:justify-evenly justify-evenly ">
            {/* Get Started */}
            <GetStarted />
            <div className="flex">
              {/* Social Media */}
              <Socials />
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
