import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import latestNewsImage from "../../public/latest-news.webp";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-(--background) text-(--foreground)">
        <section className="px-5 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-18 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-white px-4 py-2 text-sm font-semibold text-(--brand) shadow-[0_12px_30px_-22px_rgba(12,119,111,0.22)]">
                <span className="h-1.5 w-1.5 rounded-full bg-(--brand)" />
                Latest News
              </div>
              <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
                Insights, guidance, and thoughtful updates from our care team.
              </h1>
            </div>

            <article className="mt-14 grid gap-8 rounded-4xl border border-white/80 bg-white p-5 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.18)] sm:p-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10">
              <div className="overflow-hidden rounded-[1.6rem]">
                <Image
                  src={latestNewsImage}
                  alt="Abstract colourful artwork for latest news article"
                  className="h-70 w-full rounded-[1.6rem] object-cover sm:h-90 lg:h-97"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              </div>

              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--brand)">
                  Blog 01
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  What You Need to Know About Choosing the Right Care Home
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Choosing the right care home can be a significant decision for
                  both you and your loved ones. It&apos;s essential to
                  understand what to look for to ensure the best possible care.
                  Below, we outline key considerations to help you make an
                  informed choice.
                </p>

                <div className="mt-8">
                  <Link
                    href="/blogs/blog-1"
                    className="inline-flex items-center justify-center rounded-full bg-(--brand) px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(12,119,111,0.62)] transition hover:bg-(--brand-dark)"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
