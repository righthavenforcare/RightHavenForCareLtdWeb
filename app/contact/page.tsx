import { Mail, MapPin, Phone } from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const contactDetails = [
  {
    label: "Mobile",
    value: "07368461829",
    href: "tel:07368461829",
    icon: Phone,
  },
  {
    label: "Mail",
    value: "info@righthavenforcare.co.uk",
    href: "mailto:info@righthavenforcare.co.uk",
    icon: Mail,
  },
  {
    label: "Address",
    value: "37-45 Balmoral Road, Gillingham, Kent, ME7 4NT",
    href: "https://maps.google.com/?q=37-45+Balmoral+Road,+Gillingham,+Kent,+ME7+4NT",
    icon: MapPin,
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-(--background) text-(--foreground)">
        <section className="relative overflow-hidden px-5 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-18 lg:px-8">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at top left, rgba(215, 241, 235, 0.8), transparent 32%), linear-gradient(180deg, #fffdf8 0%, #ffffff 68%, #f6fbfa 100%)",
            }}
          />
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-white px-4 py-2 text-md font-semibold text-(--brand) shadow-[0_12px_30px_-22px_rgba(12,119,111,0.22)]">
                <span className="h-1.5 w-1.5 rounded-full bg-(--brand)" />
                Contact Us
              </div>
              <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
                Let&apos;s talk about the support you need.
              </h1>
            </div>

            <div className="mt-14 grid gap-8 rounded-4xl border border-white/80 bg-white p-5 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.18)] sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
              <div className="rounded-[1.7rem] border border-slate-200/80 bg-[#fcfdfc] p-6 sm:p-7">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-(--brand)"
                  />
                  <input
                    type="tel"
                    placeholder="Your contact number"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-(--brand)"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-(--brand)"
                  />
                  <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-700 outline-none transition focus:border-(--brand)">
                    <option>Appointment Booking</option>
                    <option>General Enquiry</option>
                    <option>Care Assessment</option>
                    <option>Staffing Enquiry</option>
                  </select>
                  <textarea
                    placeholder="Your message"
                    rows={7}
                    className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-(--brand)"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-(--brand) px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(12,119,111,0.62)] transition hover:bg-(--brand-dark)"
                  >
                    Send Now
                  </button>
                </form>
              </div>

              <div className="flex flex-col justify-center">
                <div className="inline-flex rounded-full border border-(--border) bg-white px-4 py-2 text-sm font-semibold text-(--brand) shadow-[0_12px_30px_-22px_rgba(12,119,111,0.18)]">
                  Why you should contact us
                </div>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900">
                  We&apos;d love to hear from you.
                </h2>
                <p className="mt-5 text-lg leading-9 text-slate-600">
                  Whether you have questions about our care services or just
                  want to chat about how we can help, we&apos;re here for you.
                  Let&apos;s find the best way to bring comfort and support to
                  your home.
                </p>

                <div className="mt-8 grid gap-4">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.label === "Address" ? "_blank" : undefined}
                        rel={
                          item.label === "Address" ? "noreferrer" : undefined
                        }
                        className="group relative overflow-hidden rounded-[1.6rem] border border-white/80 bg-[rgba(214,241,236,0.52)] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.82),0_16px_34px_-26px_rgba(12,119,111,0.14)] transition hover:-translate-y-0.5"
                      >
                        <div className="relative z-10 flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/80 shadow-[0_10px_24px_-18px_rgba(12,119,111,0.25)]">
                            <Icon
                              className="h-5 w-5 text-(--brand)"
                              strokeWidth={2.1}
                            />
                          </div>
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-(--brand)">
                              {item.label}
                            </p>
                            <p className="mt-2 text-[17px] leading-7 text-slate-700">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
