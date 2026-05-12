import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import aboutImageOne from "../../public/about1.jpg";
import aboutImageTwo from "../../public/about2.png";
import aboutImageThree from "../../public/about3.png";

const carePoints = [
  "Specialist home care that supports comfort, independence, and peace of mind",
  "Compassionate carers trained for both daily assistance and more complex needs",
];

const commitments = [
  {
    title: "Caring",
    description:
      "Care and empathy are at the heart of the service we provide and guide our interactions with everyone. We make it a priority to listen, understand, and address each person’s needs with kindness. We ensure there is time for patients, their families, and carers, as well as for our colleagues.",
  },
  {
    title: "Reliability",
    description:
      "We will follow through on our commitments and maintain transparency and honesty in every situation, regardless of the challenges. We hold ourselves accountable for our words and actions, ensuring they are genuine and accurate. We are dedicated to upholding high standards for our behavior and expect the same from everyone we work with. We advocate for what we believe is right, acknowledge our mistakes when we are wrong, and use these experiences as opportunities for learning and growth.",
  },
  {
    title: "Dignity and Respect",
    description:
      "We recognize and accept that everyone is different. We value every person as an individual, respect their choice, aspirations and commitments in life, and seek to understand their priorities, needs, abilities and limitations. We will guarantee that every individual receives equal treatment and the same high standard of care, ensuring that no one in the community is excluded or subject to discrimination.",
  },
  {
    title: "Collaboration",
    description:
      "Our primary focus is always on the clients. We engage clients, staff, volunteers, families, primary carers, communities, and healthcare professionals in every aspect of the care we offer. We value collaboration and recognize that working together allows us to achieve greater outcomes than working individually.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-(--background) text-(--foreground)">
        <section className="relative overflow-hidden px-5 pb-18 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at top left, rgba(215, 241, 235, 0.85), transparent 34%), linear-gradient(180deg, #fffdf8 0%, #ffffff 65%, #f6fbfa 100%)",
            }}
          />
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-white px-4 py-2 text-sm font-semibold text-(--brand) shadow-[0_12px_30px_-22px_rgba(12,119,111,0.22)]">
                <span className="h-1.5 w-1.5 rounded-full bg-(--brand)" />
                About Us
              </div>
              <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[4.35rem]">
                Home care shaped by{" "}
                <em className="italic text-(--brand)">compassion</em>, dignity,
                and dependable support.
              </h1>
              <p className="mt-6 text-lg leading-9 text-slate-600">
                Facing a health condition can be daunting, especially as it
                advances. That is why our specialist home care services are
                designed to help individuals enjoy happy, fulfilling lives in
                the comfort of their own homes.
              </p>
              <div className="mt-8 grid gap-4">
                {carePoints.map((point) => (
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
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-4 hidden h-32 w-32 rounded-full bg-(--accent) blur-3xl sm:block" />
              <div className="grid gap-4 sm:grid-cols-[1fr_0.72fr]">
                <div className="overflow-hidden rounded-4xl border border-white/80 bg-white/75 p-3 shadow-[0_24px_70px_-38px_rgba(15,23,42,0.22)]">
                  <Image
                    src={aboutImageOne}
                    alt="Care worker supporting an older adult at home"
                    className="h-105 w-full rounded-3xl object-cover"
                    sizes="(max-width: 1024px) 100vw, 36vw"
                  />
                </div>
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/75 p-3 shadow-[0_20px_50px_-36px_rgba(15,23,42,0.18)]">
                    <Image
                      src={aboutImageTwo}
                      alt="Carer preparing support for a service user"
                      className="h-50 w-full rounded-[1.25rem] object-cover"
                      sizes="(max-width: 1024px) 100vw, 20vw"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/75 p-3 shadow-[0_20px_50px_-36px_rgba(15,23,42,0.18)]">
                    <Image
                      src={aboutImageThree}
                      alt="Professional home care in a comfortable environment"
                      className="h-50 w-full rounded-[1.25rem] object-cover"
                      sizes="(max-width: 1024px) 100vw, 20vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-18 sm:px-6 sm:py-22 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-[2.1rem] border border-white/80 bg-white/78 p-4 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.22)]">
                <Image
                  src={aboutImageThree}
                  alt="Home care professional delivering specialist support"
                  className="h-80 w-full rounded-[1.6rem] object-cover sm:h-107"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                />
              </div>
            </div>

            <div className="order-1 max-w-2xl lg:order-2">
              <div className="inline-flex rounded-full border border-(--border) bg-white px-4 py-2 text-sm font-semibold text-(--brand) shadow-[0_12px_30px_-22px_rgba(12,119,111,0.22)]">
                Our Care
              </div>
              <h2 className="mt-6 font-serif text-3xl font-normal leading-[1.12] tracking-tight text-slate-900 sm:text-4xl">
                Specialist care at home, delivered with skill and{" "}
                <em className="italic text-(--brand)">kindness</em>.
              </h2>
              <p className="mt-6 text-lg leading-9 text-slate-600">
                At Right Haven For Care, our Home Care team delivers
                specialized, compassionate care right in the comfort of your
                home, ensuring you remain comfortable and your personal wishes
                are honored. Our Care Professionals undergo exceptional,
                tailored training, equipping them to provide top-level care for
                a wide range of needs, including dementia, Alzheimer’s, and
                Parkinson’s care, as well as clinical tasks like catheter and
                stoma care. This training is provided by expert medical
                professionals, and our team is regularly evaluated to maintain
                their expertise.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#eef8f5] px-5 pb-26 pt-20 sm:px-6 sm:pb-30 sm:pt-24 lg:px-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-150 w-200 -translate-x-1/2 rounded-full bg-linear-to-b from-teal-100/35 to-transparent blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-white px-4 py-1.5 text-sm font-semibold text-(--brand) shadow-[0_12px_30px_-22px_rgba(12,119,111,0.24)]">
                <span className="h-1.5 w-1.5 rounded-full bg-(--brand)" />
                Our Commitment
              </div>
              <h2 className="mt-6 font-serif text-4xl font-normal leading-[1.15] tracking-tight text-slate-900 sm:text-5xl">
                The values that guide every conversation, every visit, and every
                act of care.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {commitments.map((item, index) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="pointer-events-none absolute right-6 top-5 select-none font-mono text-5xl font-bold leading-none tracking-tighter text-slate-200 transition-colors duration-300 group-hover:text-slate-300">
                    0{index + 1}
                  </span>
                  <h3 className="relative text-2xl font-semibold tracking-tight text-slate-900">
                    {item.title}
                  </h3>
                  <div className="mt-4 h-px w-10 rounded-full bg-(--brand)/25" />
                  <p className="relative mt-5 text-[15px] leading-8 text-slate-500">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-(--brand) px-8 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(12,119,111,0.65)] transition hover:bg-(--brand-dark) hover:shadow-[0_18px_40px_-14px_rgba(12,119,111,0.45)]"
              >
                Book Now
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
