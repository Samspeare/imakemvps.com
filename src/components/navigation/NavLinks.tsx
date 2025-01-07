import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, Users2, BookOpen, Phone } from "lucide-react";

interface NavLink {
  to: string;
  label: string;
  icon?: React.ElementType;
  description?: string;
}

export const NavLinks = ({ links }: { links: NavLink[] }) => {
  const location = useLocation();
  
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="group relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <motion.div
            className="flex items-center gap-1"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {link.icon && <link.icon className="w-4 h-4" />}
            <span>{link.label}</span>
          </motion.div>
          {link.description && (
            <div className="absolute hidden group-hover:block bg-background border rounded-md p-2 text-xs w-48 top-full left-1/2 -translate-x-1/2 mt-1 shadow-lg">
              {link.description}
            </div>
          )}
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