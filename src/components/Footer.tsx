import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 sm:py-12 mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">I Make MVPs</h3>
            <p className="text-gray-600">
              Turning ideas into reality through AI-powered development.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <p className="text-gray-600">
              Get in touch to discuss your next project.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-center text-sm sm:text-base text-gray-600">
            © {new Date().getFullYear()} I Make MVPs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;