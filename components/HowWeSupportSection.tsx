import Image from "next/image";
import Link from "next/link";
import landingImage from "../public/landing1.png";

const supportPoints = [
  "Short-term and ongoing care tailored to daily routines",
  "Respectful support that helps preserve dignity and independence",
];

export default function HowWeSupportSection() {
  return (
    <section className="bg-(--background) px-5 py-18 sm:px-6 sm:py-22 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          <div className="inline-flex rounded-full border border-(--border) bg-white px-4 py-2 text-sm font-semibold text-(--brand) shadow-[0_12px_30px_-22px_rgba(12,119,111,0.3)]">
            How we support you
          </div>

          <h2 className="mt-6 font-serif text-3xl font-normal leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
            Thoughtful homecare that helps people feel{" "}
            <em className="italic text-(--brand)">safe</em>, seen, and
            supported.
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            At Right Haven for Care, we provide personalized homecare services
            to support independence and quality of life. Whether you need
            short-term assistance or ongoing care, our professional carers help
            you live more comfortably and confidently in your own home.
          </p>

          <div className="mt-8 grid gap-4">
            {supportPoints.map((point) => (
              <div
                key={point}
                className="relative overflow-hidden rounded-[1.7rem] border border-white/80 bg-[rgba(214,241,236,0.5)] px-5 py-4 text-sm font-medium leading-7 text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.82),inset_0_-1px_0_rgba(12,119,111,0.08),0_18px_44px_-30px_rgba(12,119,111,0.18)] ring-1 ring-[rgba(255,255,255,0.55)]"
              >
                <div className="pointer-events-none absolute inset-px rounded-[1.55rem] border border-white/35" />
                <div className="relative z-10 flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-(--brand) shadow-[0_0_18px_rgba(12,119,111,0.4)]" />
                  <span>{point}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-(--brand) transition hover:text-(--brand-dark)"
            >
              Explore our services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-6 hidden h-32 w-32 rounded-full bg-(--accent) blur-3xl sm:block" />
          <div className="relative overflow-hidden rounded-4xl border border-white/75 bg-white/72 p-3 shadow-[0_30px_90px_-44px_rgba(15,23,42,0.36)] sm:p-4">
            <Image
              src={landingImage}
              alt="A caregiver assisting an older adult at home"
              preload
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="h-80 w-full rounded-[1.6rem] object-cover sm:h-105 lg:h-130"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
