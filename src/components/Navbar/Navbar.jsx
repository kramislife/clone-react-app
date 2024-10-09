import logo from "@assets/logo.png";
import { NavItems } from "@constant/Index";
import { Button } from "../ui/button";
import MobileNavbar from "./MobileNavbar";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="lg:mx-10 mx-4 relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-3" src={logo} alt="logo" />
              <NavLink to="/">
                <span className="gradient text-xl tracking-tighter">
                  Elysium VR
                </span>
              </NavLink>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center ml-14 space-x-14">
              {NavItems.map((item) => (
                <li key={item.id} className="text-md ml-3 tracking-widest">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "gradient font-bold"
                        : "text-gray-600 hover:text-gray-300"
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Buttons for Sign In and Create Account */}
            <div className="hidden lg:flex items-center gap-2">
              <Button onClick={() => navigate("/login")} variant="border">
                Sign in
              </Button>
              <Button onClick={() => navigate("/register")} variant="gradient">
                Create Account
              </Button>
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
