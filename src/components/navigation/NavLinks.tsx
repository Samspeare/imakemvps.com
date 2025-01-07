import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface NavLink {
  to: string;
  label: string;
}

export const NavLinks = ({ links }: { links: NavLink[] }) => {
  const location = useLocation();
  
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <motion.span
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {link.label}
          </motion.span>
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
    </>
  );
};