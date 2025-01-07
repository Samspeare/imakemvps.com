import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Server, Info, HeadphonesIcon, Users, BookOpen } from "lucide-react";

interface NavLink {
  to: string;
  label: string;
  icon?: React.ElementType;
  description?: string;
}

export const mainNavLinks: NavLink[] = [
  {
    to: "/",
    label: "Home",
    icon: Home,
    description: "Return to the homepage"
  },
  {
    to: "/plans",
    label: "Plans",
    icon: Server,
    description: "View our VPS hosting plans"
  },
  {
    to: "/about",
    label: "About",
    icon: Info,
    description: "Learn more about our company"
  },
  {
    to: "/support",
    label: "Support",
    icon: HeadphonesIcon,
    description: "Get help and documentation"
  },
  {
    to: "/creators",
    label: "Creators",
    icon: Users,
    description: "Special tools for content creators"
  },
  {
    to: "/blog",
    label: "Blog",
    icon: BookOpen,
    description: "Read our latest articles"
  }
];

export const NavLinks = ({ links = mainNavLinks, isMobile = false }: { links?: NavLink[], isMobile?: boolean }) => {
  const location = useLocation();
  
  const baseClasses = "group relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors";
  const mobileClasses = "block w-full px-3 py-2";
  const desktopClasses = "px-3 py-2";
  
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
        >
          <motion.div
            className="flex items-center gap-1"
            whileHover={{ y: isMobile ? 0 : -2 }}
            transition={{ duration: 0.2 }}
          >
            {link.icon && <link.icon className="w-4 h-4" />}
            <span>{link.label}</span>
          </motion.div>
          {!isMobile && link.description && (
            <div className="absolute hidden group-hover:block bg-background border rounded-md p-2 text-xs w-48 top-full left-1/2 -translate-x-1/2 mt-1 shadow-lg">
              {link.description}
            </div>
          )}
          {!isMobile && location.pathname === link.to && (
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