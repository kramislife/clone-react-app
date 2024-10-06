import logo from "../../assets/logo.png";
import { NavItems } from "../../constant/Index";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-3" src={logo} alt="logo" />
              <span className="text-xl tracking-tighter">Virtual R</span>
            </div>

            <ul className="hidden lg:flex items-center ml-14 space-x-12">
              {NavItems.map((item) => (
                <li key={item.id} className="ml-3">
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex items-center gap-2">
              <Button variant="border">Sign in</Button>
              <Button variant="gradient">Create Account</Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
