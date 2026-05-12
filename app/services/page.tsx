import Image from "next/image";
import {
  BedDouble,
  Brain,
  HeartHandshake,
  Home,
  Pill,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  UtensilsCrossed,
} from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import staffImage from "../../public/staff.png";

const services = [
  {
    title: "Personal Care",
    description:
      "Assisting with personal hygiene, grooming, and daily routines to maintain independence.",
    icon: Sparkles,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    iconShadow: "shadow-[0_14px_30px_-22px_rgba(217,119,6,0.28)]",
  },
  {
    title: "Live-in Care",
    description:
      "Providing 24-hour live-in care for clients who need constant assistance and companionship.",
    icon: Home,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    iconShadow: "shadow-[0_14px_30px_-22px_rgba(5,150,105,0.26)]",
  },
  {
    title: "Hospital Discharge Care",
    description:
      "Helping clients transition from hospital to home with tailored recovery support.",
    icon: Stethoscope,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    iconShadow: "shadow-[0_14px_30px_-22px_rgba(2,132,199,0.24)]",
  },
  {
    title: "End of Life Care",
    description:
      "Offering compassionate care and emotional support during the end-of-life stage.",
    icon: HeartHandshake,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    iconShadow: "shadow-[0_14px_30px_-22px_rgba(244,63,94,0.24)]",
  },
  {
    title: "Companionship",
    description:
      "Engaging in meaningful activities and providing friendly company to combat loneliness.",
    icon: BedDouble,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    iconShadow: "shadow-[0_14px_30px_-22px_rgba(124,58,237,0.22)]",
  },
  {
    title: "Mental Health and Learning Disabilities",
    description:
      "Tailored support for individuals with mental health needs or learning disabilities.",
    icon: Brain,
    iconBg: "bg-fuchsia-100",
    iconColor: "text-fuchsia-600",
    iconShadow: "shadow-[0_14px_30px_-22px_rgba(192,38,211,0.22)]",
  },
  {
    title: "Shopping and Meal Preparation",
    description:
      "Assisting with grocery shopping and preparing nutritious meals for clients.",
    icon: ShoppingCart,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    iconShadow: "shadow-[0_14px_30px_-22px_rgba(234,88,12,0.24)]",
  },
  {
    title: "Medication Support",
    description:
      "Ensuring medications are taken on time and in the correct dosage.",
    icon: Pill,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
    iconShadow: "shadow-[0_14px_30px_-22px_rgba(236,72,153,0.24)]",
  },
  {
    title: "Domestic Services",
    description:
      "Providing help with household tasks like cleaning, laundry, and organizing.",
    icon: UtensilsCrossed,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-700",
    iconShadow: "shadow-[0_14px_30px_-22px_rgba(14,116,144,0.22)]",
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
                "radial-gradient(circle at top left, rgba(215, 241, 235, 0.82), transparent 34%), linear-gradient(180deg, #fffdf8 0%, #ffffff 68%, #f6fbfa 100%)",
            }}
          />
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-white px-4 py-2 text-sm font-semibold text-(--brand) shadow-[0_12px_30px_-22px_rgba(12,119,111,0.22)]">
                <span className="h-1.5 w-1.5 rounded-full bg-(--brand)" />
                Our Services
              </div>
              <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[4.15rem]">
                Care services designed to feel{" "}
                <em className="italic text-(--brand)">personal</em>, practical,
                and dependable.
              </h1>
              <p className="mx-auto mt-6 max-w-5xl text-lg leading-9 text-slate-600">
                Right Haven Care is a trusted homecare expert, providing live-in
                and visiting care across Kent and beyond. From companionship to
                complex medical support, our customized services promote
                independence and empowerment. Whether you need short visits or
                full-time live-in care, our packages are tailored to fit your
                needs. Regulated by the Care Quality Commission (CQC), we ensure
                care that is safe, effective, and compassionate.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-[0_18px_46px_-34px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_56px_-34px_rgba(15,23,42,0.22)]"
                  >
                    <span className="pointer-events-none absolute right-6 top-5 select-none font-mono text-5xl font-bold leading-none tracking-tighter text-slate-100 transition-colors duration-300 group-hover:text-slate-200">
                      0{index + 1}
                    </span>
                    <div
                      className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${service.iconBg} ${service.iconShadow}`}
                    >
                      <Icon
                        className={`h-6 w-6 ${service.iconColor}`}
                        strokeWidth={2.1}
                      />
                    </div>
                    <h2 className="relative text-2xl font-semibold tracking-tight text-slate-900">
                      {service.title}
                    </h2>
                    <div className="mt-4 h-px w-10 rounded-full bg-(--brand)/25" />
                    <p className="relative mt-5 text-[17px] leading-7 text-slate-500">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-5 py-6 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 rounded-[2.2rem] border border-white/80 bg-white px-8 py-10 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.18)] sm:px-10 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <div className="max-w-2xl">
              <div className="inline-flex rounded-full border border-(--border) bg-white px-8 py-3 text-xl font-semibold text-(--brand) shadow-[0_12px_30px_-22px_rgba(12,119,111,0.22)]">
                Staffing
              </div>
              <h2 className="mt-6 font-serif text-3xl font-normal leading-[1.12] tracking-tight text-slate-900 sm:text-4xl">
                Qualified care professionals you can trust, every hour of the
                day.
              </h2>
              <p className="mt-6 text-lg leading-9 text-slate-600">
                Right Haven provides top-tier care staffing services with a
                focus on delivering the highest standards of care. Each member
                of our team is fully DBS-checked, qualified, and experienced,
                ensuring that your loved ones are in safe and capable hands.
              </p>
              <p className="mt-5 text-lg leading-9 text-slate-600">
                We pride ourselves on offering reliable and compassionate care,
                tailored to individual needs. Our services are available 24
                hours a day, ensuring round-the-clock support for those who need
                it. At Right Haven, we are committed to maintaining the highest
                level of professionalism and care for your peace of mind.
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-3 shadow-[0_22px_54px_-34px_rgba(15,23,42,0.2)]">
                <Image
                  src={staffImage}
                  alt="Qualified care professionals from Right Haven For Care"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[430px]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
