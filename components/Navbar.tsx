const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/thazinnwewinofficial",
    brandColor: "hex-#1877F2", // Tailwind doesn't support hex in class names easily without config, so we use style or dynamic classes
    hoverClass: "hover:bg-[#1877F2]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/thazin-nwe-win-8192391b1/", // placeholder if unknown
    hoverClass: "hover:bg-[#0A66C2]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/thazin_nwe_win?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    hoverClass: "hover:bg-[#E4405F]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Wikipedia",
    href: "https://en.wikipedia.org/wiki/Thazin_Nwe_Win",
    hoverClass: "hover:bg-[#636466]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Bookings", href: "#bookings" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-2 px-10 flex justify-between items-center glass">
      {/* Logo */}
      <div className="text-gold font-serif text-2xl font-bold tracking-widest">
        TZNW
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="text-white/80 hover:text-gold transition-colors last:text-gold">
            {link.label}
          </a>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 items-center">
        {socialLinks.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className={`w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-900/80 border border-white/10 text-white/60 transition-all duration-300 hover:text-white hover:scale-110 hover:shadow-xl ${s.hoverClass}`}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}
