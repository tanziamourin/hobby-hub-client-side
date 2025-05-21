import React, { useContext, useState,  } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { HiLogin } from "react-icons/hi";
import { PiCashRegister } from "react-icons/pi";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../Contexts/AuthContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   document.body.classList.add(
  //     "bg-gradient-to-br",
  //     "from-white",
  //     "to-blue-50",
  //     "dark:from-gray-900",
  //     "dark:to-gray-800"
  //   );
  // }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const baseLinkClass = "transition duration-300 nav-link";
  const activeLinkClass =
    "active-link";

  const buttonClass =
    "px-3 py-1 text-sm rounded-full border border-primary text-primary transition duration-300";

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? activeLinkClass : baseLinkClass} block lg:inline-block py-2`
        }
        onClick={() => setMenuOpen(false)} // Close menu on link click (mobile)
      >
        Home
      </NavLink>
      <NavLink
        to="/groups"
        className={({ isActive }) =>
          `${isActive ? activeLinkClass : baseLinkClass} block lg:inline-block py-2`
        }
        onClick={() => setMenuOpen(false)}
      >
        All Groups
      </NavLink>
      {user && (
        <>
          <NavLink
            to="/createGroup"
            className={({ isActive }) =>
              `${isActive ? activeLinkClass : baseLinkClass} block lg:inline-block py-2`
            }
            onClick={() => setMenuOpen(false)}
          >
            Create Group
          </NavLink>
          <NavLink
            to="/myGroups"
            className={({ isActive }) =>
              `${isActive ? activeLinkClass : baseLinkClass} block lg:inline-block py-2`
            }
            onClick={() => setMenuOpen(false)}
          >
            My Groups
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className=" w-11/12 mx-auto top-0 z-50 backdrop-blur-md   border-b border-gray-200  shadow-sm transition">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold transition duration-300">
          <span className="text">Hobby</span>
          <span className="text"> Hub</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks}
          {!user ? (
            <>
              <NavLink to="/login">
                <button className={`${buttonClass} hover:gradient-hover flex items-center gap-1`}>
                  Login <HiLogin />
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className={`${buttonClass} hover:gradient-hover flex items-center gap-1`}>
                  Register <PiCashRegister />
                </button>
              </NavLink>
              <ThemeToggle />
            </>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className={`${buttonClass} hover:gradient-hover`}
              >
                Logout
              </button>
              <img
                onClick={() => navigate("/my-profile")}
                src={user.photoURL || "/default-user.png"}
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer hover:ring-2 hover:background transition"
                title={user.displayName}
              />
              <ThemeToggle />
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          {menuOpen ? (
            <X
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-primary"
            />
          ) : (
            <Menu
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer text-primary"
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 p-4 space-y-4 border-t dark:border-gray-700">
          {navLinks}
          <hr className="border-gray-300 dark:border-gray-600" />
          {!user ? (
            <>
              <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                <button className={`${buttonClass} hover:gradient-hover flex items-center gap-1`}>
                  Login <HiLogin />
                </button>
              </NavLink>
              <NavLink to="/register" onClick={() => setMenuOpen(false)}>
                <button className={`${buttonClass} hover:gradient-hover flex items-center gap-1`}>
                  Register <PiCashRegister />
                </button>
              </NavLink>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className={`${buttonClass} hover:gradient-hover`}
              >
                Logout
              </button>
              <img
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/my-profile");
                }}
                src={user.photoURL || "/default-user.png"}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
                title={user.displayName}
              />
            </>
          )}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
