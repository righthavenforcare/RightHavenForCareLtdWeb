import Image from "next/image";
import Link from "next/link";
import cqcImage from "../public/carequalitycommission.jpg";

const productLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
];

const supportLinks = [
  { href: "/privacy-notice", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#eef8f5] px-5 pb-10 pt-6 sm:px-6 lg:px-8">
      {/* Ambient glow blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl" />
        <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-teal-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl py-12">
        {/* Top rule with center dot */}
        <div className="mb-12 flex items-center gap-3">
          <div className="h-px flex-1 bg-linear-to-r from-teal-300/0 via-teal-300/60 to-slate-200/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-teal-400" />
          <div className="h-px flex-1 bg-linear-to-l from-teal-300/0 via-teal-300/60 to-slate-200/40" />
        </div>

        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1.3fr] xl:items-start">
          {/* Product */}
          <div>
            <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.15em] text-teal-600/70">
              Navigate
            </p>
            <h3 className="text-lg font-semibold tracking-tight text-slate-800">
              Product
            </h3>
            <div className="mt-5 flex flex-col gap-2.5">
              {productLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-[15px] text-slate-500 transition-colors duration-200 hover:text-teal-700"
                >
                  <span className="h-px w-0 bg-teal-500 transition-all duration-200 group-hover:w-4" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.15em] text-teal-600/70">
              Legal
            </p>
            <h3 className="text-lg font-semibold tracking-tight text-slate-800">
              Support
            </h3>
            <div className="mt-5 flex flex-col gap-2.5">
              {supportLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-[15px] text-slate-500 transition-colors duration-200 hover:text-teal-700"
                >
                  <span className="h-px w-0 bg-teal-500 transition-all duration-200 group-hover:w-4" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CQC badge */}
          <div className="xl:justify-self-end">
            <div className="mt-1 max-w-60">
              <div className="overflow-hidden rounded-2xl border border-white/80 bg-white/70 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.12)] backdrop-blur-sm transition duration-300 hover:shadow-[0_12px_32px_-12px_rgba(15,23,42,0.18)]">
                <Image
                  src={cqcImage}
                  alt="Care Quality Commission"
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-[14px] text-slate-500">
                <svg
                  className="h-3.5 w-3.5 shrink-0 text-teal-500"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm11.78-2.72a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L4.22 8.34a.75.75 0 011.06-1.06L7 8.99l3.72-3.71a.75.75 0 011.06 0z"
                    clipRule="evenodd"
                  />
                </svg>
                We are registered with CQC
              </p>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-14 h-px w-full bg-linear-to-r from-transparent via-slate-300/60 to-transparent" />

        {/* Credit line */}
        <div className="mt-7 flex flex-col items-center gap-1">
          <p className="font-serif text-[1.35rem] font-normal tracking-tight text-slate-700 sm:text-[1.55rem]">
            Designed and Developed by{" "}
            <Link
              href="https://noveltylab.io"
              target="_blank"
              rel="noreferrer"
              className="text-(--brand) underline-offset-4 transition hover:text-(--brand-dark) hover:decoration-teal-500"
            >
              Novelty Lab
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
