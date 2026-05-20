import { Link } from "react-router-dom";
import { TbShoppingBag } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const STATS = [
  { icon: <TbShoppingBag size="2em" />, value: "10.5k", label: "Sellers active our site", highlight: false },
  { icon: <RiMoneyDollarCircleLine size="2em" />, value: "33k", label: "Monthly Product Sale", highlight: true },
  { icon: <TbShoppingBag size="2em" />, value: "45.5k", label: "Customer active in our site", highlight: false },
  { icon: <TbShoppingBag size="2em" />, value: "25k", label: "Annual gross sale in our site", highlight: false },
];

const TEAM = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=350&fit=crop&crop=face",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=350&fit=crop&crop=face",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=350&fit=crop&crop=face",
  },
];

const PERKS = [
  {
    icon: <LiaShippingFastSolid size="2.2em" />,
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    icon: <MdOutlineSupportAgent size="2.2em" />,
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
  },
  {
    icon: <RiMoneyDollarCircleLine size="2.2em" />,
    title: "MONEY BACK GUARANTEE",
    desc: "We return money within 30 days",
  },
];

const About = () => (
  <div className="w-full">
    {/* Breadcrumb */}
    <div className="custom-container mx-auto py-6">
      <nav className="text-sm text-gray-500 flex items-center gap-2">
        <Link to="/" className="hover:text-[var(--color-accentbkp)] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[var(--text)] font-medium">About</span>
      </nav>
    </div>

    {/* ── Our Story ── */}
    <section className="custom-container mx-auto mb-20">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <h2 className="font-bold text-4xl leading-tight">Our Story</h2>
          <p className="text-gray-600 text-sm leading-7">
            Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh.
            Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.
          </p>
          <p className="text-gray-600 text-sm leading-7">
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 rounded-lg overflow-hidden max-h-[420px]">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&h=500&fit=crop"
            alt="Shopping"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

    {/* ── Stats ── */}
    <section className="custom-container mx-auto mb-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map(({ icon, value, label, highlight }) => (
          <div
            key={label}
            className={`flex flex-col items-center justify-center gap-3 py-8 px-4 rounded border transition-all
              ${highlight
                ? "bg-[var(--color-accentbkp)] text-white border-[var(--color-accentbkp)]"
                : "border-gray-200 hover:border-[var(--color-accentbkp)] hover:shadow-md"
              }`}
          >
            {/* Icon in circle */}
            <div className={`w-14 h-14 rounded-full flex items-center justify-center
              ${highlight ? "bg-white bg-opacity-20" : "bg-[var(--backgroundbkp)]"}`}>
              <span className={highlight ? "text-white" : "text-[var(--text)]"}>{icon}</span>
            </div>
            <h4 className={`font-bold text-3xl ${highlight ? "text-white" : ""}`}>{value}</h4>
            <p className={`text-xs text-center leading-relaxed ${highlight ? "text-white opacity-90" : "text-gray-500"}`}>{label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ── Team ── */}
    <section className="custom-container mx-auto mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {TEAM.map(({ name, role, image }) => (
          <div key={name} className="flex flex-col gap-3">
            {/* Photo */}
            <div className="rounded-lg overflow-hidden h-[320px] bg-[var(--backgroundbkp)]">
              <img src={image} alt={name} className="w-full h-full object-cover object-top" />
            </div>
            {/* Info */}
            <div>
              <p className="font-semibold text-base">{name}</p>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="text-gray-500 hover:text-[var(--color-accentbkp)] transition-colors" aria-label="Twitter">
                <FaTwitter size="1em" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[var(--color-accentbkp)] transition-colors" aria-label="Instagram">
                <FaInstagram size="1em" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[var(--color-accentbkp)] transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn size="1em" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel dots */}
      <div className="flex justify-center gap-2 mt-8">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === 0 ? "bg-[var(--color-accentbkp)] w-6" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </section>

    {/* ── Perks ── */}
    <section className="custom-container mx-auto mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {PERKS.map(({ icon, title, desc }) => (
          <div key={title} className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[var(--text)] flex items-center justify-center text-white">
                {icon}
              </div>
            </div>
            <p className="font-bold text-sm tracking-wide">{title}</p>
            <p className="text-xs text-gray-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
