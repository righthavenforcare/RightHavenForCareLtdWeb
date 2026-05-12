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
  },
  {
    title: "Respect",
    description:
      "Respect is the foundation of our care. We honor the dignity and choices of every individual.",
    icon: HandHeart,
  },
  {
    title: "Compassion",
    description:
      "Compassion drives us to provide thoughtful and empathetic care, meeting both physical and emotional needs.",
    icon: HeartHandshake,
  },
  {
    title: "Integrity",
    description:
      "We operate with the highest level of integrity, ensuring transparency and trust in everything we do.",
    icon: ShieldCheck,
  },
  {
    title: "Humility",
    description:
      "Humility guides our approach, reminding us to listen, learn, and serve with a genuine heart.",
    icon: Sparkles,
  },
  {
    title: "Dignity",
    description:
      "We are committed to upholding the dignity of every client, treating them with the utmost respect and care.",
    icon: Gem,
  },
];

export default function OurValuesSection() {
  return (
    <section className="bg-[#eef8f5] px-5 py-18 sm:px-6 sm:py-22 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-semibold text-(--brand) shadow-[0_12px_30px_-22px_rgba(12,119,111,0.24)]">
            Our Values
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            The principles that shape how we care, listen, and show up for
            people every day.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="rounded-[1.75rem] border border-white/85 bg-white/92 p-7 shadow-[0_20px_48px_-34px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_26px_56px_-34px_rgba(15,23,42,0.22)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(214,241,236,0.72)] shadow-[0_14px_30px_-22px_rgba(12,119,111,0.24)]">
                    <Icon
                      className="h-6 w-6 text-(--brand)"
                      strokeWidth={2.2}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {value.title}
                  </h3>
                </div>

                <p className="relative mt-6 text-lg leading-8 text-slate-600">
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
