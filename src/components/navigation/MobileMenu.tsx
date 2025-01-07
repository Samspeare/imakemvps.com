import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { NavLinks } from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  links: Array<{
    to: string;
    label: string;
    icon?: React.ElementType;
    description?: string;
  }>;
  handleSignOut?: () => void;
  user: any;
}

export const MobileMenu = ({
  isOpen,
  setIsOpen,
  links,
  handleSignOut,
  user,
}: MobileMenuProps) => {
  return (
    <div className="sm:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              <NavLinks links={links} isMobile={true} />
              {user ? (
                <Button
                  variant="ghost"
                  onClick={() => {
                    handleSignOut?.();
                    setIsOpen(false);
                  }}
                  className="w-full text-left text-sm font-medium hover:text-primary"
                >
                  Sign Out
                </Button>
              ) : (
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  <div className="relative p-[2px] overflow-hidden rounded-full group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary animate-magical-gradient bg-[length:200%_auto]"></div>
                    <button className="relative w-full px-8 py-2 rounded-full bg-background text-primary hover:text-primary-dark font-medium text-sm transition-colors duration-200">
                      Schedule A Consultation
                    </button>
                  </div>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};