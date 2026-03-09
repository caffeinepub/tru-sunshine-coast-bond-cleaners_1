import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/generated/tru-bond-logo-transparent.dim_300x100.png"
              alt="Tru Sunshine Coast Bond Cleaners logo"
              className="h-12 w-auto"
            />
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <Link
              data-ocid="nav.home.link"
              to="/"
              className={`hover:text-teal-600 transition-colors ${
                isActive("/") ? "text-teal-600" : "text-gray-700"
              }`}
            >
              Home
            </Link>
            <Link
              data-ocid="nav.services.link"
              to="/services"
              className={`hover:text-teal-600 transition-colors ${
                isActive("/services") ? "text-teal-600" : "text-gray-700"
              }`}
            >
              Services
            </Link>
            <Link
              data-ocid="nav.about.link"
              to="/about"
              className={`hover:text-teal-600 transition-colors ${
                isActive("/about") ? "text-teal-600" : "text-gray-700"
              }`}
            >
              About
            </Link>
            <Link
              data-ocid="nav.contact.link"
              to="/contact"
              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Get a Quote
            </Link>
          </nav>
          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-gray-700 mb-1" />
            <div className="w-6 h-0.5 bg-gray-700 mb-1" />
            <div className="w-6 h-0.5 bg-gray-700" />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-3 flex flex-col gap-3 text-sm font-semibold">
            <Link
              data-ocid="nav.home.link"
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-teal-600"
            >
              Home
            </Link>
            <Link
              data-ocid="nav.services.link"
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-teal-600"
            >
              Services
            </Link>
            <Link
              data-ocid="nav.about.link"
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-teal-600"
            >
              About
            </Link>
            <Link
              data-ocid="nav.contact.link"
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-teal-600 text-white px-4 py-2 rounded-lg text-center"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="/assets/generated/tru-bond-logo-transparent.dim_300x100.png"
              alt="Tru Sunshine Coast Bond Cleaners logo"
              className="h-10 w-auto mb-3 brightness-200"
            />
            <p className="text-gray-400 text-sm">
              Sunshine Coast's trusted bond cleaning specialists. We get your
              bond back, guaranteed!
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-teal-400">Our Services</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>
                <Link
                  to="/services/bond-cleaning"
                  className="hover:text-teal-400"
                >
                  Bond Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/carpet-cleaning"
                  className="hover:text-teal-400"
                >
                  Carpet Steam Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/end-of-lease"
                  className="hover:text-teal-400"
                >
                  End of Lease Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/oven-cleaning"
                  className="hover:text-teal-400"
                >
                  Oven &amp; Kitchen Deep Clean
                </Link>
              </li>
              <li>
                <Link
                  to="/services/window-cleaning"
                  className="hover:text-teal-400"
                >
                  Window Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/bathroom-kitchen"
                  className="hover:text-teal-400"
                >
                  Bathroom &amp; Toilet Cleaning
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-teal-400">Contact Us</h3>
            <p className="text-gray-400 text-sm mb-2">
              Sunshine Coast, QLD, Australia
            </p>
            <a
              href="https://wa.me/61488841883"
              className="text-teal-400 hover:underline text-sm"
            >
              WhatsApp: 0488 841 883
            </a>
            <p className="text-gray-500 text-xs mt-4">
              &copy; {new Date().getFullYear()} Tru Sunshine Coast Bond
              Cleaners. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
