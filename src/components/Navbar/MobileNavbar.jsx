import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { NavItems } from "@constant/Index";
import { NavLink, useNavigate } from "react-router-dom";

// Mobile Navbar component to be used in the Navbar component on smaller screens
const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  // Function to handle navigation and close the navbar
  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close the navbar
  };

  return (
    <>
      <div className="lg:hidden flex flex-col justify-end">
        <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-14 -right-3 w-80 bg-neutral-900 rounded-md p-4">
          <ul>
            {NavItems.map((item) => (
              <li
                key={item.id}
                className="mb-6 p-2 hover:bg-neutral-800 rounded-md"
              >
                <NavLink
                  to={item.path}
                  className="text-white"
                  onClick={() => {
                    handleNavigation(item.path); // Close navbar on link click
                  }}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-4">
            <Button
              onClick={() => handleNavigation("/login")} // Close navbar on sign-in click
              variant="border"
            >
              Sign in
            </Button>
            <Button
              onClick={() => handleNavigation("/register")} // Close navbar on create account click
              variant="gradient"
            >
              Create Account
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
