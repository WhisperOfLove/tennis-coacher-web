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
        className="absolute inset-0 -z-20 bg-cover bg-center lg:bg-[position:72%_center]"
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
          <h1 className="text-[1.7rem] font-extrabold leading-tight tracking-tight text-shine-green sm:text-5xl sm:whitespace-nowrap">
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
              className="flex min-h-[94px] flex-col items-center justify-center rounded-2xl border border-white/55 px-3 py-3 text-center text-white sm:min-h-[104px] sm:px-4 sm:py-3"
            >
              <h3 className="text-[0.95rem] font-semibold sm:text-lg">{item.title}</h3>
              <p className="mt-1 text-[0.82rem] leading-snug text-white/90 sm:text-base">
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
