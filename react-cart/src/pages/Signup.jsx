import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Signup = () => {
  const { navigate, setUser } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    // Simulate account creation — replace with your actual auth call
    setUser({ name, email });
    navigate("/");
  };

  return (
    <div className="min-h-[80vh] flex">
      {/* Left decorative panel — same as login for visual consistency */}
      <SidePanel />

      {/* Right: form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-16">
        <div className="w-full max-w-sm flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-2xl !text-2xl">Create an account</h4>
            <p className="text-gray-500 text-sm">Enter your details below</p>
          </div>

          {error && (
            <p className="text-[var(--color-accentbkp)] text-sm">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-b border-gray-300 focus:border-[var(--color-accentbkp)] outline-none py-2 text-sm transition-colors bg-transparent"
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-gray-300 focus:border-[var(--color-accentbkp)] outline-none py-2 text-sm transition-colors bg-transparent"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b border-gray-300 focus:border-[var(--color-accentbkp)] outline-none py-2 text-sm transition-colors bg-transparent"
            />

            <button
              type="submit"
              className="mt-1 w-full py-3 rounded text-white bg-[var(--color-accentbkp)] hover:opacity-90 transition-opacity cursor-pointer text-sm font-medium"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <hr className="flex-1 border-gray-200" />
            <span className="text-gray-400 text-xs">OR</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          {/* Google sign-up */}
          <button className="flex items-center justify-center gap-3 border border-gray-300 rounded py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors w-full cursor-pointer">
            <GoogleIcon />
            Sign up with Google
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-[var(--text)] font-semibold underline hover:text-[var(--color-accentbkp)] !text-[var(--text)]">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

/* ── Decorative left panel ───────────────────────── */
const SidePanel = () => (
  <div className="hidden md:flex w-1/2 bg-[var(--backgroundbkp)] items-center justify-center relative overflow-hidden">
    <div className="absolute w-72 h-72 rounded-full bg-[var(--color-accentbkp)] opacity-10 -top-16 -left-16" />
    <div className="absolute w-56 h-56 rounded-full bg-[var(--color-accentbkp)] opacity-10 bottom-10 right-0" />

    <div className="relative z-10 flex flex-col items-center gap-4 px-12 text-center">
      <div className="w-56 h-56 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Star burst / welcome graphic */}
          <circle cx="100" cy="100" r="70" fill="#DB4444" opacity="0.12"/>
          <circle cx="100" cy="100" r="50" fill="#DB4444" opacity="0.18"/>
          {/* Person silhouette */}
          <circle cx="100" cy="75" r="22" fill="#DB4444" opacity="0.85"/>
          <path d="M55 155 Q55 115 100 115 Q145 115 145 155" fill="#DB4444" opacity="0.85"/>
          {/* Check badge */}
          <circle cx="138" cy="65" r="18" fill="white"/>
          <polyline points="129,65 136,72 149,58" stroke="#DB4444" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <h5 className="font-bold text-xl !text-xl text-[var(--text)]">Join Exclusive</h5>
      <p className="text-gray-500 text-sm leading-relaxed">
        Create your account and enjoy exclusive deals, track orders, and save your favourite items.
      </p>

      {/* Mini trust badges */}
      <div className="flex flex-col gap-2 mt-2 text-left w-full">
        {["Free express delivery on first order", "Exclusive member-only deals", "Easy returns & refunds"].map((text) => (
          <div key={text} className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[var(--color-accentbkp)] flex items-center justify-center flex-shrink-0">
              <svg width="8" height="8" viewBox="0 0 8 8">
                <polyline points="1,4 3,6 7,2" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-xs text-gray-600">{text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ── Google SVG icon ─────────────────────────────── */
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
    <path d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 6.293C4.672 4.165 6.656 3.58 9 3.58z" fill="#EA4335"/>
  </svg>
);

export default Signup;
