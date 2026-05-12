import Link from "next/link";

export default function JoinCareSection() {
  return (
    <section className="px-5 py-18 sm:px-6 sm:py-22 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200/70 bg-white px-8 py-16 shadow-[0_28px_80px_-42px_rgba(15,23,42,0.14)] sm:px-16 sm:py-20">
          {/* Decorative corner arcs */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-64 w-64 opacity-[0.045]"
            viewBox="0 0 256 256"
            fill="none"
          >
            <circle cx="0" cy="0" r="180" stroke="#0C7770" strokeWidth="1" />
            <circle cx="0" cy="0" r="220" stroke="#0C7770" strokeWidth="0.6" />
            <circle cx="0" cy="0" r="260" stroke="#0C7770" strokeWidth="0.4" />
          </svg>
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 opacity-[0.045]"
            viewBox="0 0 256 256"
            fill="none"
          >
            <circle
              cx="256"
              cy="256"
              r="180"
              stroke="#0C7770"
              strokeWidth="1"
            />
            <circle
              cx="256"
              cy="256"
              r="220"
              stroke="#0C7770"
              strokeWidth="0.6"
            />
            <circle
              cx="256"
              cy="256"
              r="260"
              stroke="#0C7770"
              strokeWidth="0.4"
            />
          </svg>

          {/* Soft top glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-px w-2/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-teal-400/60 to-transparent"
          />
          {/* Soft bottom glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
          />

          {/* Content */}
          <div className="relative mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-white px-4 py-2 text-sm font-medium text-(--brand) shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-(--brand)" />
              Join Right Haven For Care
            </div>

            <h2 className="mt-8 font-serif text-4xl font-normal leading-[1.15] tracking-tight text-slate-900 sm:text-5xl">
              Ready to begin care that feels{" "}
              <em className="italic text-(--brand)">personal</em>, dependable,
              and genuinely supportive?
            </h2>

            {/* Decorative rule */}
            <div className="mx-auto mt-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-linear-to-r from-transparent to-slate-200" />
              <div className="h-1 w-1 rounded-full bg-teal-400" />
              <div className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              <div className="h-1 w-1 rounded-full bg-teal-400" />
              <div className="h-px flex-1 bg-linear-to-l from-transparent to-slate-200" />
            </div>

            <p className="mx-auto mt-7 max-w-xl text-[17px] leading-8 text-slate-500">
              With old age, everything is more vivid. Every moment is rich with
              history. Every smile is a reflection, of a memory, of a life
              well-lived.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-(--brand) px-8 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(12,119,111,0.65)] transition hover:bg-(--brand-dark) hover:shadow-[0_18px_40px_-14px_rgba(12,119,111,0.45)]"
              >
                Book Now
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 16 16"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8h10M9 4l4 4-4 4"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
