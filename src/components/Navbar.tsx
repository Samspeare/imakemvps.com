import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-primary">I Make MVPs</span>
          </Link>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;