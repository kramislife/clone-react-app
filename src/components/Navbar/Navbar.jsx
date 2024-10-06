import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { NavItems } from "../../constant/Index";
import { Button } from "../ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="lg:mx-10 mx-4 relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-3" src={logo} alt="logo" />
              <span className="text-xl tracking-tighter">Virtual R</span>
            </div>

            <ul className="hidden lg:flex items-center ml-14 space-x-14">
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

            <div className="lg:hidden flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {isOpen && (
            <>
              <div className="lg:hidden absolute top-16 -right-1 w-80 bg-neutral-900 rounded-md p-4">
                <ul>
                  {NavItems.map((item) => (
                    <li
                      key={item.id}
                      className="mb-6 p-2 hover:bg-neutral-800 rounded-md"
                    >
                      <a href={item.path} className="text-white">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col space-y-4">
                  <Button variant="border">Sign in</Button>
                  <Button variant="gradient">Create Account</Button>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
