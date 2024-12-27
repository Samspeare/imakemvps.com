import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [user, setUser] = useState(null);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]
  );
  
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["none", "0 4px 6px -1px rgba(0, 0, 0, 0.1)"]
  );

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast({
        title: "Signed out successfully",
      });
    } catch (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const isAdmin = user?.email === "sam@imakemvps.com";

  const links = [
    { to: "/", label: "Home" },
    { to: "/use-cases", label: "Use Cases" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
    ...(user ? [{ to: "/dashboard", label: "Dashboard" }] : []),
    ...(isAdmin ? [{ to: "/admin/blog", label: "Manage Blog" }] : []),
  ];

  return (
    <motion.nav
      style={{
        backgroundColor,
        boxShadow,
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold magical-text-gradient">
                I Make MVPs
              </span>
            </Link>
          </motion.div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
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

            {user ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  onClick={handleSignOut}
                  className="text-sm font-medium hover:text-primary"
                >
                  Sign Out
                </Button>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">
                  <div className="relative p-[2px] overflow-hidden rounded-full group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary animate-magical-gradient bg-[length:200%_auto]"></div>
                    <button className="relative px-8 py-2 rounded-full bg-background text-primary hover:text-primary-dark font-medium text-sm transition-colors duration-200">
                      Schedule A Consult
                    </button>
                  </div>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;