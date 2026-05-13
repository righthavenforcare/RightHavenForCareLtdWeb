import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-(--background) text-(--foreground)">
        <section className="px-5 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-18 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-white px-4 py-2 text-sm font-semibold text-(--brand) shadow-[0_12px_30px_-22px_rgba(12,119,111,0.22)]">
                Privacy Notice
              </div>
              <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
                Privacy Notice
              </h1>
            </div>

            <div className="mt-12 rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.16)] sm:p-10">
              <div className="space-y-4">
                <p className="leading-8 text-gray-700">
                  Right Haven For Care is committed to handling personal
                  information responsibly, lawfully, and with respect for
                  privacy.
                </p>
                <p className="leading-8 text-gray-700">
                  This notice explains the types of information we may collect,
                  why we use it, and how we protect it when delivering homecare
                  services.
                </p>
              </div>

              <section className="mt-8">
                <h2 className="mb-3 text-2xl font-bold text-teal-600">
                  National data opt-out
                </h2>
                <p className="leading-8 text-gray-700">
                  Where applicable, we respect national data opt-out
                  preferences and aim to process information in line with legal,
                  regulatory, and care delivery requirements.
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-3 text-2xl font-bold text-teal-600">
                  Service users
                </h2>
                <p className="leading-8 text-gray-700">
                  We may collect contact details, care needs, health-related
                  information, and service preferences to plan and deliver safe,
                  effective care for service users.
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-3 text-2xl font-bold text-teal-600">Staff</h2>
                <p className="leading-8 text-gray-700">
                  Staff information is used for recruitment, compliance,
                  scheduling, payroll, and quality assurance, with access
                  limited to authorised people who need it for their role.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
