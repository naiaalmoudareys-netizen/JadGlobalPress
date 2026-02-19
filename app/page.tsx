import Image from "next/image";
import {
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import jadGlobalLogo from "../Jad Global Black logo.png";
import { alkhaleejPressLinks } from "../alkhaleej/links";

const linkButtonClass =
  "w-full py-4 px-6 rounded-2xl bg-neutral-100 border border-neutral-200/80 shadow-sm text-sm font-bold uppercase tracking-wide text-neutral-800 transition-all duration-200 hover:bg-neutral-200/80 hover:shadow-md hover:border-neutral-300";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center font-sans">
      {/* Fixed left / right navigation arrows */}
      <button
        type="button"
        aria-label="Previous"
        className="fixed left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 bg-white/90 shadow-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        aria-label="Next"
        className="fixed right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 bg-white/90 shadow-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <main className="w-full max-w-[600px] px-6 py-12 sm:py-16 flex flex-col items-center">
        {/* Header & Logo */}
        <header className="flex flex-col items-center text-center w-full mb-10 sm:mb-12">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-neutral-100 flex items-center justify-center mb-5 overflow-hidden shrink-0 ring-1 ring-neutral-200/80">
            <Image
              src={jadGlobalLogo}
              alt="JAD Global"
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-neutral-500 mb-2">@jadglobal</p>
          <h1 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 tracking-tight">
            JAD Global Real Estate Development
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md">
            Your wellness is our foundation, your wellness is not an add-on.
            It&apos;s the essence.
          </p>
        </header>

        {/* Primary CTA */}
        <section className="w-full mb-10 sm:mb-12 flex flex-col items-center">
          <a
            href="https://jadglobal.ae/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkButtonClass} text-center`}
          >
            VISIT OUR WEBSITE
          </a>
        </section>

        {/* Social media section */}
        <section className="w-full flex flex-col items-center mb-12 sm:mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-5">
            Explore our social media
          </h2>
          <div className="flex items-center justify-center gap-6">
            <a
              href="tel:600523523"
              aria-label="Phone"
              className="text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://maps.app.goo.gl/gYYGqmrf7hhcvzKSA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Location"
              className="text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/106873916/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.instagram.com/jadglobal/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61580711979554"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </section>

        {/* Company profile */}
        <section className="w-full">
          <h2 className="text-center text-base sm:text-lg font-bold text-neutral-900 mb-6 uppercase tracking-wide">
            Company profile
          </h2>
          <div className="flex flex-col gap-3 mb-8">
            <a
              href="/JADGlobal_CompanyProfile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={linkButtonClass}
            >
              View company profile (PDF)
            </a>
          </div>
          <h3 className="text-center text-base sm:text-lg font-bold text-neutral-900 mb-4 uppercase tracking-wide">
            Press
          </h3>
          <div className="flex flex-col gap-3">
            {alkhaleejPressLinks.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkButtonClass} normal-case text-left`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
