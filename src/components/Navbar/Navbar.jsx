import logo from "@assets/logo.png";
import { NavItems } from "@constant/Index";
import { Button } from "../ui/button";
import MobileNavbar from "./MobileNavbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="lg:mx-10 mx-4 relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-3" src={logo} alt="logo" />
              <span className="gradient text-xl tracking-tighter">
                Elysium VR
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center ml-14 space-x-14">
              {NavItems.map((item) => (
                <li key={item.id} className="ml-3">
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>

            {/* Desktop Buttons for Sign In and Create Account */}
            <div className="hidden lg:flex items-center gap-2">
              <Button variant="border">Sign in</Button>
              <Button variant="gradient">Create Account</Button>
            </div>

            {/* Mobile Navigation Component */}
            <MobileNavbar />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
