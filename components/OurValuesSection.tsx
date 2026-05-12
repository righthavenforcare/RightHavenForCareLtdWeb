import {
  Gem,
  HandHeart,
  Heart,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const values = [
  {
    title: "Love",
    description:
      "We prioritize love in every interaction, ensuring that all our clients feel valued and cherished.",
    icon: Heart,
    accent: "from-rose-100 to-rose-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    border: "hover:border-rose-200",
    number: "01",
  },
  {
    title: "Respect",
    description:
      "Respect is the foundation of our care. We honor the dignity and choices of every individual.",
    icon: HandHeart,
    accent: "from-teal-100 to-teal-50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    border: "hover:border-teal-200",
    number: "02",
  },
  {
    title: "Compassion",
    description:
      "Compassion drives us to provide thoughtful and empathetic care, meeting both physical and emotional needs.",
    icon: HeartHandshake,
    accent: "from-amber-100 to-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    border: "hover:border-amber-200",
    number: "03",
  },
  {
    title: "Integrity",
    description:
      "We operate with the highest level of integrity, ensuring transparency and trust in everything we do.",
    icon: ShieldCheck,
    accent: "from-blue-100 to-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    border: "hover:border-blue-200",
    number: "04",
  },
  {
    title: "Humility",
    description:
      "Humility guides our approach, reminding us to listen, learn, and serve with a genuine heart.",
    icon: Sparkles,
    accent: "from-purple-100 to-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
    border: "hover:border-purple-200",
    number: "05",
  },
  {
    title: "Dignity",
    description:
      "We are committed to upholding the dignity of every client, treating them with the utmost respect and care.",
    icon: Gem,
    accent: "from-emerald-100 to-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    border: "hover:border-emerald-200",
    number: "06",
  },
];

export default function OurValuesSection() {
  return (
    <section className="relative overflow-hidden bg-[#eef8f5] px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-150 w-200 -translate-x-1/2 rounded-full bg-linear-to-b from-teal-100/35 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-100 w-125 rounded-full bg-linear-to-tr from-emerald-100/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-100 w-125 rounded-full bg-linear-to-tl from-teal-100/18 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-(--border) bg-white px-4 py-1.5 text-sm font-semibold text-(--brand) shadow-[0_12px_30px_-22px_rgba(12,119,111,0.24)]">
            <span className="h-1.5 w-1.5 rounded-full bg-(--brand)" />
            Our Values
          </div>
          <h2 className="font-serif text-4xl font-normal leading-[1.15] tracking-tight text-slate-900 sm:text-5xl">
            The principles that shape how we{" "}
            <em className="italic text-(--brand)">care</em>, listen, and show up
            for people every day.
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-linear-to-r from-transparent via-(--brand) to-transparent" />
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${value.border}`}
              >
                {/* Gradient wash top-right */}
                <div
                  className={`pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-linear-to-br ${value.accent} opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-90`}
                />

                {/* Faint index number */}
                <span className="pointer-events-none absolute right-6 top-5 select-none font-mono text-5xl font-bold leading-none tracking-tighter text-slate-100 transition-colors duration-300 group-hover:text-slate-200">
                  {value.number}
                </span>

                {/* Icon */}
                <div
                  className={`relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${value.iconBg}`}
                >
                  <Icon
                    className={`h-5 w-5 ${value.iconColor}`}
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="relative mb-3 text-xl font-semibold tracking-tight text-slate-900">
                  {value.title}
                </h3>

                {/* Thin rule */}
                <div
                  className={`mb-4 h-px w-8 bg-linear-to-r ${value.accent.replace("from-", "from-").replace("to-", "to-")} rounded-full`}
                />

                {/* Description */}
                <p className="relative text-[15px] leading-7 text-slate-500">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
