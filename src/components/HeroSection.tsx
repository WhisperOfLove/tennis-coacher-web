import { ActionButton } from "@/components/ActionButton";

const WHATSAPP_LINK = "https://wa.me/971500000000";
const CALL_LINK = "tel:+971500000000";

export function HeroSection() {
  const highlights = [
    { title: "All Levels", subtitle: "Beginner to advanced" },
    { title: "Kids & Adults", subtitle: "Ages 5 and up" },
    { title: "Flexible Hours", subtitle: "Mornings & evenings" },
  ];

  return (
    <section className="relative isolate h-[100svh] overflow-hidden text-white">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/tennis.png')" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#122131]/45 via-[#122131]/68 to-[#122131]/92" />

      <div className="mx-auto flex h-[100svh] w-full max-w-6xl flex-col px-4 pb-5 pt-4 sm:px-8 sm:pb-8 sm:pt-6">
        <header className="flex items-center justify-between rounded-full border border-white/20 bg-[#1d3348]/45 px-4 py-2 backdrop-blur-md">
          <span className="text-sm font-semibold tracking-wide text-[#bcff2f]">
            Mohammad Moslem
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

        <main className="mt-5 max-w-xl pb-44 sm:mt-10 md:mt-14 lg:mt-16">
          <p className="mb-3 inline-flex rounded-full border border-white/25 bg-black/20 px-3 py-1 text-xs font-medium">
            Private Coach in UAE - Dubai
          </p>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
            Elite Private Tennis Coach
          </h1>
          <p
            id="about"
            className="mt-12 max-w-lg text-base font-semibold leading-7 text-white/95 sm:text-lg"
          >
            One-on-one sessions that improve technique, footwork, and match
            confidence. Fast progress plans tailored to your level and schedule.
          </p>

        </main>

        <div className="pointer-events-none absolute inset-x-4 bottom-28 z-20 grid grid-cols-3 gap-2 sm:inset-x-8 sm:mx-auto sm:max-w-xl sm:gap-3 md:max-w-lg">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/55 px-2 py-2 text-center text-white sm:px-3"
            >
              <h3 className="text-xs font-semibold sm:text-sm">{item.title}</h3>
              <p className="mt-0.5 text-[10px] leading-snug text-white/90 sm:text-xs">
                {item.subtitle}
              </p>
            </article>
          ))}
        </div>

        <div
          id="contact"
          className="fixed inset-x-4 bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] z-30 grid grid-cols-1 gap-3 sm:inset-x-8 sm:mx-auto sm:max-w-md sm:grid-cols-2 sm:bottom-6 md:max-w-lg"
        >
          <ActionButton label="WhatsApp Booking" href={WHATSAPP_LINK} />
          <ActionButton label="Call Now" href={CALL_LINK} variant="secondary" />
        </div>
      </div>
    </section>
  );
}
