import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import latestNewsImage from "../../../public/latest-news.webp";

const considerations = [
  {
    title: "Care Quality and Standards",
    description:
      "Ensure that the care home you choose maintains high standards of care. Look for facilities that have positive reviews, accredited care practices, and a track record of delivering exceptional care.",
  },
  {
    title: "Personalized Care Plans",
    description:
      "Every individual has unique needs. Choose a care home that offers personalized care plans tailored to the specific requirements of your loved one, whether it’s for general assistance or specialized care such as dementia support.",
  },
  {
    title: "Comfort and Environment",
    description:
      "A welcoming and comfortable environment is essential. Visit the care home to assess the cleanliness, the comfort of living spaces, and the overall ambiance. Ensure that the home provides a supportive and homely atmosphere.",
  },
  {
    title: "Staff Qualifications and Training",
    description:
      "Check the qualifications and training of the care home staff. Well-trained caregivers with the right certifications will provide the highest quality care and support.",
  },
  {
    title: "Cost and Financial Planning",
    description:
      "Understand the pricing structure of the care home and ensure it fits within your budget. Transparency in pricing and no hidden fees are crucial for effective financial planning.",
  },
];

const highlights = [
  "Personalized Care: Tailored to meet individual needs.",
  "Experienced Staff: Qualified professionals providing compassionate care.",
  "Comfortable Environment: A homely setting for your loved one.",
];

const faqs = [
  {
    question: "What types of care services do you offer?",
    answer:
      "We provide a range of services, from daily living assistance to specialized care for conditions like dementia.",
  },
  {
    question: "How do I choose the right care plan?",
    answer:
      "Contact us for personalized advice based on your loved one’s needs.",
  },
  {
    question: "Are there any additional fees?",
    answer:
      "Our pricing is transparent, and any extra costs will be discussed upfront.",
  },
  {
    question: "What if I need to change the care plan?",
    answer: "We’re flexible and can adjust your care plan as needed.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-(--background) text-(--foreground)">
        <article className="px-5 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-white px-4 py-2 text-sm font-semibold text-(--brand) shadow-[0_12px_30px_-22px_rgba(12,119,111,0.22)]">
                <span className="h-1.5 w-1.5 rounded-full bg-(--brand)" />
                Latest News
              </div>
              <h1 className="mx-auto mt-6 max-w-4xl font-serif text-4xl font-normal leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
                What You Need to Know About Choosing the Right Care Home
              </h1>
            </div>

            <div className="mt-10 overflow-hidden rounded-4xl border border-white/80 bg-white p-4 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.18)]">
              <Image
                src={latestNewsImage}
                alt="Abstract colourful artwork for care home guidance article"
                className="h-75 w-full rounded-[1.55rem] object-cover sm:h-105"
                sizes="(max-width: 1024px) 100vw, 72vw"
              />
            </div>

            <div className="mx-auto mt-12 max-w-4xl">
              <p className="text-lg leading-9 text-slate-600">
                Choosing the right care home can be a significant decision for
                both you and your loved ones. It&apos;s essential to understand
                what to look for to ensure the best possible care. Below, we
                outline key considerations to help you make an informed choice.
              </p>

              <h2 className="mt-12 text-3xl font-semibold tracking-tight text-slate-900">
                Key Considerations for Selecting a Care Home
              </h2>
              <p className="mt-4 text-lg leading-9 text-slate-600">
                When selecting a care home, there are several crucial factors to
                consider:
              </p>

              <div className="mt-8 grid gap-5 px-1 sm:px-3">
                {considerations.map((item, index) => (
                  <section
                    key={item.title}
                    className="rounded-[1.8rem] border border-slate-200/80 bg-white p-7 shadow-[0_18px_46px_-36px_rgba(15,23,42,0.14)]"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--brand)">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[17px] leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </section>
                ))}
              </div>

              <section className="mt-12 rounded-4xl border border-white/80 bg-[#eef8f5] p-8 shadow-[0_22px_60px_-40px_rgba(15,23,42,0.14)]">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                  Emphasize Care Quality
                </h2>
                <div className="mt-6 grid gap-4">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/70 px-5 py-4 text-[15px] font-medium leading-7 text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.84),0_14px_30px_-24px_rgba(12,119,111,0.14)] sm:text-[16px]"
                    >
                      <div className="relative z-10 flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-(--brand)" />
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                  How to Choose the Best Plan
                </h2>
                <p className="mt-5 text-lg leading-9 text-slate-600">
                  Selecting the right care plan involves understanding the
                  specific needs of your loved one and matching them with the
                  services offered by the care home. For assistance, our team is
                  here to guide you through the process and help you find the
                  perfect care plan.
                </p>
                <div className="mt-7">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-(--brand) transition hover:text-(--brand-dark)"
                  >
                    Learn More About Our Care Plans
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </section>

              <section className="mt-14">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                  Frequently Asked Questions
                </h2>
                <div className="mt-8 grid gap-4 px-1 sm:px-3">
                  {faqs.map((item) => (
                    <div
                      key={item.question}
                      className="rounded-[1.6rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_44px_-36px_rgba(15,23,42,0.12)]"
                    >
                      <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                        {item.question}
                      </h3>
                      <p className="mt-3 text-[16px] leading-8 text-slate-600">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-14 rounded-4xl border border-slate-200/80 bg-white px-8 py-10 text-center shadow-[0_22px_60px_-40px_rgba(15,23,42,0.14)]">
                <h2 className="font-serif text-4xl font-normal tracking-tight text-slate-900">
                  Contact Us
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  If you need help choosing the right plan, our team is ready to
                  guide you with clarity and compassion.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-(--brand) px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(12,119,111,0.62)] transition hover:bg-(--brand-dark)"
                  >
                    Contact Us
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
