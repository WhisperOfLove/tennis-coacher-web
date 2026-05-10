import { ActionButton } from "@/components/ActionButton";

const WHATSAPP_LINK = "https://wa.me/971500000000";
const CALL_LINK = "tel:+971500000000";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden text-white">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/tennis.png')" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#122131]/45 via-[#122131]/68 to-[#122131]/92" />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 pb-10 pt-6 sm:px-8">
        <header className="flex items-center justify-between rounded-full border border-white/20 bg-[#1d3348]/45 px-4 py-2 backdrop-blur-md">
          <span className="text-sm font-semibold tracking-widest text-[#bcff2f]">
            DUBAI TENNIS
          </span>
          <nav className="flex items-center gap-4 text-xs font-medium text-white/85">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        <main className="mt-auto max-w-xl pb-6 pt-20 sm:pt-28">
          <p className="mb-3 inline-flex rounded-full border border-white/25 bg-black/20 px-3 py-1 text-xs font-medium">
            Private Coach in UAE - Dubai
          </p>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
            Elite Private Tennis Coach for Busy Professionals
          </h1>
          <p
            id="about"
            className="mt-4 max-w-lg text-sm leading-7 text-white/90 sm:text-base"
          >
            One-on-one sessions that improve technique, footwork, and match
            confidence. Fast progress plans tailored to your level and schedule.
          </p>

          <div
            id="contact"
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
          >
            <ActionButton label="WhatsApp Booking" href={WHATSAPP_LINK} />
            <ActionButton label="Call Now" href={CALL_LINK} variant="secondary" />
          </div>
        </main>
      </div>
    </section>
  );
}
