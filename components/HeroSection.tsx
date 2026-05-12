import Image from "next/image";
import heroImage from "../public/hero.webp";

const careHighlights = [
  "Personalised home support",
  "Companionship and daily assistance",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(215,241,235,0.95),transparent_35%),linear-gradient(180deg,#fffdf8_0%,#ffffff_62%,#f6fbfa_100%)]" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:grid-cols-[1fr_1.03fr] lg:items-center lg:gap-12 lg:px-8 lg:pt-18">
        <div className="max-w-3xl">
          <div className="promo-pill inline-flex rounded-full border border-(--border) bg-white/80 px-4 py-2 text-sm font-semibold text-(--brand) shadow-sm backdrop-blur-md">
            Promotional Offer! Care services starting from just GBP 19 per hour
          </div>

          <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-[3.7rem] lg:text-[4.35rem]">
            Your care, our commitment
            <br />
            Compassion delivered at home
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
            We take pride in being conveniently located near you, offering
            exceptional care services to individuals throughout many
            communities.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {careHighlights.map((item, index) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-[1.8rem] border border-white/80 bg-[rgba(214,241,236,0.58)] px-5 py-5 text-sm font-medium leading-6 text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.82),inset_0_-1px_0_rgba(12,119,111,0.08),0_18px_44px_-30px_rgba(12,119,111,0.22)] ring-1 ring-[rgba(255,255,255,0.55)] transition hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.88),inset_0_-1px_0_rgba(12,119,111,0.1),0_22px_52px_-30px_rgba(12,119,111,0.26)]"
                style={{
                  transform: index === 1 ? "translateY(3px)" : "translateY(0)",
                }}
              >
                <div className="pointer-events-none absolute inset-[1px] rounded-[1.65rem] border border-white/35" />
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/95" />
                <div className="pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-[rgba(12,119,111,0.12)]" />
                <div className="pointer-events-none absolute right-3 top-2 h-10 w-20 rounded-full border border-white/45 opacity-60" />
                <div className="relative z-10 flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-(--brand) shadow-[0_0_18px_rgba(12,119,111,0.4)] animate-pulse [animation-duration:2.4s]" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:-mr-16">
          <div className="absolute -left-6 top-8 hidden h-40 w-40 rounded-full bg-(--accent) blur-3xl sm:block" />
          <div className="absolute -bottom-8 right-0 h-36 w-36 rounded-full bg-[rgba(12,119,111,0.14)] blur-3xl" />

          <div className="relative overflow-hidden rounded-4xl border border-white/70 bg-white/70 p-3 shadow-[0_32px_90px_-38px_rgba(15,23,42,0.42)] backdrop-blur-md sm:p-4">
            <div className="rounded-3xl bg-[#d9eaee]">
              <Image
                src={heroImage}
                alt="Caregiver supporting an older adult at home"
                preload
                quality={100}
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="h-[320px] w-full rounded-3xl object-cover object-[68%_36%] sm:h-[380px] lg:h-[470px]"
              />
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/80 bg-white/78 p-5 shadow-lg backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--brand)">
                Compassion delivered at home
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Friendly carers, dependable visits, and thoughtful support for
                everyday living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
