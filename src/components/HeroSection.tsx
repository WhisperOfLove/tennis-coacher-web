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

        <main className="mt-8 max-w-xl sm:mt-auto sm:pb-4">
          <p className="mb-3 inline-flex rounded-full border border-white/25 bg-black/20 px-3 py-1 text-xs font-medium">
            Private Coach in UAE - Dubai
          </p>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
            Elite Private Tennis Coach
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
            className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
          >
            <ActionButton label="WhatsApp Booking" href={WHATSAPP_LINK} />
            <ActionButton label="Call Now" href={CALL_LINK} variant="secondary" />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/55 px-2 py-2 text-white sm:px-4"
              >
                <h3 className="text-xs font-semibold sm:text-base">{item.title}</h3>
                <p className="mt-0.5 text-[10px] text-white/90 sm:text-sm">
                  {item.subtitle}
                </p>
              </article>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
