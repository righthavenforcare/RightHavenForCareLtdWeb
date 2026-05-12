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
    <footer className="bg-[#eef8f5] px-5 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-1 py-10 sm:px-2 lg:px-4">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[0.9fr_0.9fr_1.2fr] xl:items-start">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
              Product
            </h3>
            <div className="mt-5 flex flex-col gap-3 text-lg text-slate-500">
              {productLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-(--brand)"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
              Support
            </h3>
            <div className="mt-5 flex flex-col gap-3 text-lg text-slate-500">
              {supportLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-(--brand)"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="xl:justify-self-end">
            <div className="max-w-[270px] overflow-hidden rounded-[1.35rem] border border-white/70 bg-white/55 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.16)]">
              <Image
                src={cqcImage}
                alt="Care Quality Commission"
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mt-4 text-lg text-slate-500">
              We are registered with CQC
            </p>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-slate-200/80" />

        <p className="mt-8 text-center font-serif text-xl font-normal tracking-tight text-slate-900 sm:text-[1.7rem]">
          Designed and Developed by{" "}
          <Link
            href="https://noveltylab.io"
            target="_blank"
            rel="noreferrer"
            className="text-(--brand) transition hover:text-(--brand-dark)"
          >
            Novelty Lab
          </Link>
        </p>
      </div>
    </footer>
  );
}
