import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-customblack py-14 mt-10">
      <div className="custom-container mx-auto">
        {/* Top grid: 5 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b border-gray-700">

          {/* Column 1 — Brand + Subscribe */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Link to="/" className="!no-underline">
              <span className="text-2xl font-bold text-white">Exclusive</span>
            </Link>
            <p className="text-white font-medium text-sm">Subscribe</p>
            <p className="text-gray-400 text-xs leading-relaxed">
              Get 10% off your first order
            </p>
            {/* Email subscribe input */}
            <div className="flex items-center border border-gray-500 rounded overflow-hidden w-full max-w-[220px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white text-xs placeholder-gray-500 px-3 py-2 outline-none flex-1 min-w-0"
              />
              <button
                className="px-3 py-2 text-white hover:text-[var(--color-accentbkp)] transition-colors"
                aria-label="Subscribe"
              >
                ➔
              </button>
            </div>
          </div>

          {/* Column 2 — Support */}
          <div className="flex flex-col gap-4">
            <h6 className="text-white font-semibold text-sm !text-sm">Support</h6>
            <address className="not-italic text-gray-400 text-xs leading-6 flex flex-col gap-1">
              <span>111 Bijoy sarani, Dhaka,</span>
              <span>DH 1515, Bangladesh.</span>
              <a href="mailto:exclusive@gmail.com" className="hover:text-white transition-colors !text-gray-400">
                exclusive@gmail.com
              </a>
              <a href="tel:+88015-88888-9999" className="hover:text-white transition-colors !text-gray-400">
                +88015-88888-9999
              </a>
            </address>
          </div>

          {/* Column 3 — Account */}
          <div className="flex flex-col gap-4">
            <h6 className="text-white font-semibold text-sm !text-sm">Account</h6>
            <ul className="flex flex-col gap-2 text-gray-400 text-xs">
              {[
                { label: "My Account", to: "/my-orders" },
                { label: "Login / Register", to: "/" },
                { label: "Cart", to: "/cart" },
                { label: "Wishlist", to: "/" },
                { label: "Shop", to: "/products" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="hover:text-white transition-colors !text-gray-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Quick Link */}
          <div className="flex flex-col gap-4">
            <h6 className="text-white font-semibold text-sm !text-sm">Quick Link</h6>
            <ul className="flex flex-col gap-2 text-gray-400 text-xs">
              {[
                { label: "Privacy Policy", to: "/" },
                { label: "Terms Of Use", to: "/" },
                { label: "FAQ", to: "/" },
                { label: "Contact", to: "/contact" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="hover:text-white transition-colors !text-gray-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Download App */}
          <div className="flex flex-col gap-4">
            <h6 className="text-white font-semibold text-sm !text-sm">Download App</h6>
            <p className="text-gray-500 text-[10px]">Save $3 with App New User Only</p>

            {/* QR + store badges row */}
            <div className="flex flex-row gap-3 items-center">
              {/* QR placeholder */}
              <div className="w-16 h-16 bg-white rounded flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 40 40" className="w-12 h-12" fill="none">
                  {/* Simple QR-looking pattern */}
                  {[0,1,2,3,4,5,6].map(r =>
                    [0,1,2,3,4,5,6].map(c => {
                      const qr = [
                        [1,1,1,0,1,1,1],
                        [1,0,1,0,1,0,1],
                        [1,0,1,0,1,0,1],
                        [0,0,0,0,0,0,0],
                        [1,0,1,0,1,0,1],
                        [1,0,1,0,1,0,1],
                        [1,1,1,0,1,1,1],
                      ];
                      return qr[r][c] ? (
                        <rect key={`${r}-${c}`} x={c*5+2} y={r*5+2} width="4" height="4" fill="#111"/>
                      ) : null;
                    })
                  )}
                </svg>
              </div>
              {/* Store badge buttons */}
              <div className="flex flex-col gap-2">
                <a href="#" className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 text-white text-[10px] px-2.5 py-1.5 rounded transition-colors border border-gray-600">
                  <span className="text-base">▶</span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[8px] text-gray-400">GET IT ON</span>
                    <span className="font-semibold">Google Play</span>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 text-white text-[10px] px-2.5 py-1.5 rounded transition-colors border border-gray-600">
                  <span className="text-base"></span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[8px] text-gray-400">Download on the</span>
                    <span className="font-semibold">App Store</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex flex-row gap-4 mt-2">
              {[
                { Icon: FaFacebookF, href: "#" },
                { Icon: FaTwitter, href: "#" },
                { Icon: FaInstagram, href: "#" },
                { Icon: FaLinkedinIn, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="social"
                >
                  <Icon size="1.1em" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <p className="text-center text-gray-500 text-xs pt-6">
          © Copyright Rimel 2022. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
