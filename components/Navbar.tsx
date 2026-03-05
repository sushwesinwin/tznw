import { navLinks } from "../lib/constants";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-2 px-10 flex justify-between items-center glass">
      {/* Logo */}
      <div className="text-gold font-serif text-2xl font-bold tracking-widest">
        TZNW
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase items-center">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="text-white/80 hover:text-gold transition-colors last:text-gold">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
